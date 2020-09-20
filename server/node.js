// const http = require('http')
// let url = require('url')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Hello World\n')
//     let requset_url = req.url
//     let strurl = url.parse(requset_url, true).query
//     console.log(req)
//     let sum = strurl.content
//     console.log(sum)
// })

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`)
// })

let express = require('express')
let app = express()
let fs = require('fs') // 引入fs模块

app.get('/', function(req, res) {

    // console.log(req.params)

    console.log(req.query.content)

    fs.appendFile('./test.txt', `cookies: ${req.query.content} \n`, function(err, data) {
        if (err) {
            throw err
        }
        console.log(data)
    })
})

// app.get('/:key', function(req, res) {
//     console.log(req.query.content)
//   res.send(req.query.content) // 发送一个请求
// })

app.listen(3000, function() { // 在3000端口启动
  console.log('Example app listening on port 3000')
})
