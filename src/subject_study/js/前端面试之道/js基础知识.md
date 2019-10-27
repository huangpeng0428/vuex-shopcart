##对象（Object）类型
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
##this
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