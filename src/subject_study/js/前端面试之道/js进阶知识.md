<!--
 * @Date: 2019-11-11 20:00:28
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-21 16:12:28
-->
## 手写防抖,节流函数
```
function debounce(func, wait) {
    let timeout = null
    return function() {
        if(timeout) clearTimeout(timeout)
        timeout = setTimeout(func, wait)
    }
}

function handle(){
    console.log(Math.random());
}

window.addEventListener("resize",debounce(handle,1000));

function throttle(func, wait) {
    let timeout = null
    return function() {
        if(!timeout) {
            timeout = setTimeout(() => {
                func()
                timeout = null;
            }, wait)
        }
    }
}
```
## new的原理
```
function myNews(fun) {
    return function F() {
        // 创建一个新对象且将其隐式原型指向构造函数原型
        let obj = {
            __proto__: fun.prototype
        }
        // 执行构造函数
        fun.call(obj, ...arguments)
        // 返回该对象
        return obj
    }
}
//函数
function Person(name, age) {
    this.name = name
    this.age = age
    console.log(1)
}
Person.prototype.getName = function() {
    console.log('i am ' + this.name)
}
let demoObj = myNews(Person)('huang', '25')
console.log(demoObj)
demoObj.getName()
```
## 闭包
```
function outer() {
    var a = '1'
    var inner = function() {
        console.log(a)
    }
    return inner
}
var inner = outer()
inner()
当程序执行完var inner = outer()，其实outer的执行环境并没有被销毁，因为他里面的变量a仍然被被inner的函数作用域链所引用，当程序执行完inner(), 这时候，inner和outer的执行环境才会被销毁调；《JavaScript高级编程》书中建议：由于闭包会携带包含它的函数的作用域，因为会比其他函数占用更多内容，过度使用闭包，会导致内存占用过多。
```
## Object.create的实现
```js
Object.prototype.myCreate = function(obj) {
    function F(){}
    F.prototype = obj
    return new F()
}
```

