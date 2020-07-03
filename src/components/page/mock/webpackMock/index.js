const path = require('path')
const bodyParser = require('body-parser')
const chokidar = require('chokidar')

const mockDir = path.resolve(process.cwd(), 'src/mock/')

console.log(path.resolve(process.cwd()))
console.log(mockDir)

let mockLastIndex
function registerRoutes(app) {
  const mocks = require('./mocks') // 引入mock数据
  app.use('/mock*', mocks)
  mockLastIndex = app._router.stack.length // 记录路由位置
}

// nodejs清除require缓存 参考：https://blog.hellozwh.com/?post=433
function unregisterRoutes() {
  console.log(Object.keys(require.cache))
  Object.keys(require.cache).forEach(i => {

    // console.log(3, i)
    if (i.includes(mockDir)) {
      console.log(i)
      console.log(require.resolve(i))
      console.log(mockDir)
      delete require.cache[require.resolve(i)] // require.resolve 相当于把相对路径转化成绝对路径，避免了自己手写的绝对路径跟cache里的key不一致的问题
    }
  })
}

module.exports = app => {

  // 解析 application/json
  app.use(bodyParser.json())

  // 解析 application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
  })

  // 挂载路由
  registerRoutes(app)

  chokidar.watch(mockDir, { // 监控当前目录
    ignored: /index/, // 忽略index.js文件的变更
    ignoreInitial: true // 忽略对增加文件或者增加文件夹而触发事件
  }).on('all', (event, path) => { // 监听除了ready, raw, and error之外所有的事件类型
    if (event === 'change' || event === 'add') { // 文件内容改变或新增文件时触发
      try {

        // 删除已经挂载到express的mock路由
        app._router.stack.splice(mockLastIndex - 1, 1)

        // clear routes cache
        unregisterRoutes()

        // 重新注册
        registerRoutes(app)

        console.log('mock更新！')
      } catch (error) {
        console.log('mock更新出错：', error)
      }
    }
  })
}
