1. substr与substring的区别
    * substr(start [，length]) 第一个字符的索引是0，start必选 length可选
    * substring(start,[,end]) 第一个市字符的索引是0
```
let str = 'polohuang
str.substr(1, 6) //olohua
str.substring(1, 6) //olohu
```
