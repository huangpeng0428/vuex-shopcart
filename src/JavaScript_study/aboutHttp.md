#### http缓存
```
强缓存： Pragma/Cache-Control/Expires
协商缓存： ETag/If-Not-Match 、Last-Modified/If-Modified-Since （304）
https://www.jianshu.com/p/227cee9c8d15
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

```
#### http get和post 
```
https://www.zhihu.com/question/28586791
```