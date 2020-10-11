/*
mockserver 用于模拟后台数据
*/
const Koa = require('koa')

// const router = require('koa-router')()
// let cors = require('koa2-cors')
let mockMap = require('./mock')
const app = new Koa()
const Mock = require('mockjs')

// app.use(cors())

app.use(ctx => {

  console.log('mockMap', Mock.mock(mockMap[ctx.request.url]))

  ctx.body = mockMap[ctx.request.url] ? Mock.mock(mockMap[ctx.request.url]) : ''

})

app.listen(3000)

// 先注释了，后面再解释
// const bodyParser = require('koa-bodyparser')
// app.use(bodyParser())

// router.get('/', ctx => {
//   ctx.body = `这是主页`
// })

// router.get('/user', ctx => {
//   ctx.body = `这是user页`
// })

// router.get('/post', ctx => {
//   ctx.body = ctx.request.body
// })

// router.get('/campaign/doMission', ctx => {
//   console.log('ctx', ctx)
//   ctx.body = '恭喜 __小简__ 你成功登陆了'
// })

// router.get('/async', async ctx => {
//   const sleep = async(ms) => {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(true)
//       }, ms)
//     })
//   }
//   await sleep(1000)
//   ctx.body = `这是异步处理页`
// })

// app
//   .use(router.routes())
//   .use(router.allowedMethods())


