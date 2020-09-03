<!--
 * @Date: 2020-09-02 09:40:59
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-09-03 15:33:33
-->
## 一、关于mongodb

### [#](https://www.runoob.com/mongodb/nosql.html) NoSQL 简介

- `NoSQL` (NoSQL = Not Only SQL )，意即"不仅仅是SQL"。
- 在现代的计算系统上每天网络上都会产生庞大的数据量。这些数据有很大一部分是由关系数据库管理系统（RDBMS）来处理。 1970年 E.F.Codd's提出的关系模型的论文 "A relational model of data for large shared data banks"，这使得数据建模和应用程序编程更加简单。通过应用实践证明，关系模型是非常适合于客户服务器编程，远远超出预期的利益，今天它是结构化数据存储在网络和商务应用的主导技术。
- NoSQL 是一项全新的数据库革命性运动，早期就有人提出，发展至2009年趋势越发高涨。NoSQL的拥护者们提倡运用非关系型的数据存储，相对于铺天盖地的关系型数据库运用，这一概念无疑是一种全新的思维的注入。

## 二、下载mongodb
### [#](https://www.mongodb.com/download-center/community) 官网下载

- `mongodb`测试是否正常连接。

```js
http://127.0.0.1:27017/
// 如果看到 It looks like you are trying to access MongoDB over HTTP on the native driver port. 就说明连接上了
```
## 三、node连接mongodb
```js
//db.js
module.exports = app => {
  const mongoose = require("mongoose")
  mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true
  })

  mongoose.connection.on(
    'error',
    console.error.bind(console, 'connection error:')
  )
  mongoose.connection.once('open', function () {
    // we're connected!
    console.log('we connected')
  })

//   require('require-all')(__dirname + '/../models')
}
```
### 
```js
// serve index.js
const express = require('express')
const app = express()

app.use(require('cors')())
app.use(express.json())
app.use('/admin', express.static(__dirname + '/admin'))

require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(3002, () => {
  console.log('http://localhost:3002')
})
```

## 四、操作数据
```js
// admin/index.js

module.exports = (app) => {
    const express = require('express')
    const router = express.Router({
        mergeParams: true,
    })

    //资源中间件
    const resourceMiddleware = options => {
        return async (req, res, next) => {
            const modelName = require('inflection').classify(req.params.resource)  //每个字符串对象添加分类支持
            req.Model = require(`../models/${modelName}`) 
            next()
        }
    }

    //增加一条列表
    router.post('/', async (req, res) => {
        console.log(req.Model.modelName)
        const model = await req.Model.create(req.body)
        res.send(model)
    })

    // 删
    router.delete('/:id', async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id)
        res.send({
            success: true,
        })
    })

    //修改
    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })

    // 查询列表
    router.get('/', async (req, res) => {
        const queryOptions = {}
        if (req.Model.modelName === 'Category') {
            queryOptions.populate = 'parent'
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(100)
        res.send(items)
    })

    app.use(
        '/admin/api/rest/:resource',
        // authMiddleware(),
        resourceMiddleware(),
        router
    )

    // 错误处理函数
    app.use(async (err, req, res, next) => {
        // console.log(err)
        res.status(err.statusCode || 500).send({
            message: err.message,
        })
    })
}

```
