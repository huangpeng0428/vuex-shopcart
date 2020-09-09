<!--
 * @Date: 2020-08-06 16:55:32
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-09-09 10:48:50
--> 
1. Number.isNaN与isNaN最的区别是，Number.isNaN不存在类型转换的行为。
```js
console.log(isNaN('测试')) //true
console.log(Number.isNaN('测试')) //false
```
```
isNaN会通过Number方法，试图将字符串"测试"转换成Number类型，但转换失败了，因为 Number('测试') 的结果为NaN ，所以最后返回true。

而Number.isNaN方法，只是严格的判断传入的参数是否全等于NaN( '测试' === NaN) ，字符串当然不全等于NaN啦，所以输出false。
```
2. number基础
```js
let a = 1

// 1.
a = a++
console.log(a) //1

// 2.
a++
console.log(a) //2
```