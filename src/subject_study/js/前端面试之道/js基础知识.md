<!--
 * @Date: 2019-10-25 19:12:58
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-06 10:53:43
--> 
## 对象（Object）类型
```
例子：
const changeObject = (obj) => {
    obj.age = 26
    obj = {
        age: 24,
        name: 'huangpeng'
    }
    return obj
}
const obj = {
    name: 'polohuang',
    age: 25
}
let obj1 = changeObject(obj)
console.log(obj)    //{name: 'polohuang',age: 26}
console.log(obj1)   //{name: 'huangpeng',age: 24}
```
## this
```
let a = {}
let fn = function () { console.log(this) }
fn.bind().bind(a)() // => ?
```
如果你认为输出结果是 a，那么你就错了，其实我们可以把上述代码转换成另一种形式
```
//fn.bind().bind(a)()可以写成
let fn2 = function fn1() {
    return function() {
        return fn.apply()
    }.apply(a)
}
fn2()
```
可以从上述代码中发现，不管我们给函数 bind 几次，fn 中的 this 永远由第一次 bind 决定，所以结果永远是 window。
## 关于==
```
null == undefined  //true
[] == ![]  //true
```
## 为什么 0.1 + 0.2 != 0.3？如何解决这个问题？
```
因为 JS 采用 IEEE 754 双精度版本（64位），并且只要采用 IEEE 754 的语言都有该问题。
我们都知道计算机是通过二进制来存储东西的，那么 0.1 在二进制中会表示为
// (0011) 表示循环
0.1 = 2^-4 * 1.10011(0011)
解决方法：parseFloat((0.1 + 0.2).toFixed(10)) === 0.3 // true
```
## 通过var, const, let 关键字声明的变量无法用delete操作符删除
```
const name = 'lydia'
age = 21
console.log(delete name) //false
console.log(delete age)	//true
```
## 字符串类型能调用方法, 是因为有基础包装类型
```js
var name = 'test'
name.split(',')
// 基础包装类型做了哪些事：
// 1.创建String类型的一个实例；
// 2.在实例上调用指定的方法；
// 3.销毁这个实例
```