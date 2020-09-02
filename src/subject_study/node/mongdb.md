<!--
 * @Date: 2020-09-02 09:40:59
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-09-02 11:36:20
-->
## 一、关于mongdb

### [#](https://www.runoob.com/mongodb/nosql.html) NoSQL 简介

- `NoSQL` (NoSQL = Not Only SQL )，意即"不仅仅是SQL"。
- 在现代的计算系统上每天网络上都会产生庞大的数据量。这些数据有很大一部分是由关系数据库管理系统（RDBMS）来处理。 1970年 E.F.Codd's提出的关系模型的论文 "A relational model of data for large shared data banks"，这使得数据建模和应用程序编程更加简单。通过应用实践证明，关系模型是非常适合于客户服务器编程，远远超出预期的利益，今天它是结构化数据存储在网络和商务应用的主导技术。
- NoSQL 是一项全新的数据库革命性运动，早期就有人提出，发展至2009年趋势越发高涨。NoSQL的拥护者们提倡运用非关系型的数据存储，相对于铺天盖地的关系型数据库运用，这一概念无疑是一种全新的思维的注入。

## 二、下载mongdb
### [#](https://www.mongodb.com/download-center/community) 官网下载

> 网上的教程都是各种配置。我下载的最新版的，下载完之后就可以直接连接（可能最新版的都配置好了吧）

- `mongdb`测试是否已连接。

```js
http://127.0.0.1:27017/
// 如果看到 It looks like you are trying to access MongoDB over HTTP on the native driver port. 就说明连接上了
```