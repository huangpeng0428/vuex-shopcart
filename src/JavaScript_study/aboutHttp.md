<!--
 * @Date: 2020-07-24 16:23:27
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-10-14 16:26:55
-->
#### http缓存
```
强缓存： Pragma/Cache-Control/Expires
协商缓存： ETag/If-Not-Match 、Last-Modified/If-Modified-Since （304）

1. 浏览器先根据这个资源的http头信息来判断是否命中强缓存。如果命中则直接加在缓存中的资源，并不会将请求发送到服务器。
2. 如果未命中强缓存，则浏览器会将资源加载请求发送到服务器。服务器来判断浏览器本地缓存是否失效。若可以使用，则服务器并不会返回资源信息，浏览器继续从缓存加载资源。
3. 如果未命中协商缓存，则服务器会将完整的资源返回给浏览器，浏览器加载新资源，并更新缓存。

https://blog.csdn.net/u012375924/article/details/82806617?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf

https://www.cnblogs.com/ranyonsue/p/8918908.html
```
#### HTTP/1.0和HTTP/1.1有什么区别
```
1. 长连接： HTTP/1.1支持长连接和请求的流水线，在一个TCP连接上可以传送多个HTTP请求，避免了因为多次建立TCP连接的时间消耗和延时(默认开启：keep-alive)
2. 缓存处理： 新增ETag, If-Unmodified-Since, If-Match, If-None-Match等新的请求头来控制缓存
3. 带宽优化及网络连接的使用： HTTP1.1则在请求头引入了range头域，支持断点续传功能
4. Host头处理： 在HTTP/1.0中认为每台服务器都有唯一的IP地址，但随着虚拟主机技术的发展，多个主机共享一个IP地址愈发普遍，HTTP1.1的请求消息和响应消息都应支持Host头域，且请求消息中如果没有Host头域会400错误
```

#### 介绍一下HTTP/2.0新特性
```
多路复用： 即多个请求都通过一个TCP连接并发地完成
服务端推送： 服务端能够主动把资源推送给客户端
新的二进制格式： HTTP/2采用二进制格式传输数据，相比于HTTP/1.1的文本格式，二进制格式具有更好的解析性和拓展性
header压缩： HTTP/2压缩消息头，减少了传输数据的大小

https://www.cnblogs.com/heluan/p/8620312.html(包含了http1.1/http2.0的差异和http2.0新特性)

```
#### http get和post 
```
https://www.zhihu.com/question/28586791
```
#### websocket和http的区别
```
http：
1. 是一个基于TCP/IP通信协议来传递数据
2. 无状态的协议 一个 Request 只能有一个 Response 而且这个 Response 也是被动的，不能主动发起


websocket:
1 WebSocket 是一个持久化的协议， WebSocket 是基于 HTTP 协议的，或者说借用了 HTTP 协议来完成一部分握手
2 数据格式比较轻量，性能开销小，通信高效。
3 可以发送文本，也可以发送二进制数据。
4 没有同源限制，客户端可以与任意服务器通信。
5 双向通信协议。在建立连接后，WebSocket服务器端和客户端都能主动向对方发送或接收数据，就像Socket一样；

//https://blog.csdn.net/c_kite/article/details/80033686
// https://github.com/nnngu/LearningNotes/blob/master/_posts/2018-07-21-%E7%9C%8B%E5%AE%8C%E8%AE%A9%E4%BD%A0%E5%BD%BB%E5%BA%95%E7%90%86%E8%A7%A3%20WebSocket%20%E5%8E%9F%E7%90%86%EF%BC%8C%E9%99%84%E5%AE%8C%E6%95%B4%E7%9A%84%E5%AE%9E%E6%88%98%E4%BB%A3%E7%A0%81%EF%BC%88%E5%8C%85%E5%90%AB%E5%89%8D%E7%AB%AF%E5%92%8C%E5%90%8E%E7%AB%AF%EF%BC%89.md
```

#### 一个http请求各部分包含了什么
通用头： request url(请求链接) request method(请求方法 post || get) status code(状态码200 || 500) Remote Address(远程地址)
响应头： content-type(接收格式) cache-control(控制缓存  max-age=300 || no-cache) Connection(keep-alive 保持长连接) ETag
请求头： User-Agent cache-control(控制缓存  max-age=300 || no-cache) Connection(keep-alive 保持长连接) cookie

#### 前端跨域处理
https://segmentfault.com/a/1190000016199721

#### jsonp的使用与原理
https://blog.csdn.net/u012207345/article/details/81744862