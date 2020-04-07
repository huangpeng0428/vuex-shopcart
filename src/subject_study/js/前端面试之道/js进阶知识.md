##手写call、apply、bind函数
```
var obj = {
    name: '小张',
    objAge: this.age,
    myFun: function(val,val2) {
        console.log(val,val2)
        console.log(this.name + '年龄' + this.age)
    }
}
var db = {
    name: '小明',
    age: 99
}
```
```
call的实现
Function.prototype.myCall = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    context.fn = this
    const args = [...arguments].slice(1)
    const result = context.fn(...args)
    delete context.fn
    return result
}

obj.myFun()         //小张年龄undefined
obj.myFun.myCall(db, 'val')    //小明年龄99
```
* 首先 context 为可选参数，如果不传的话默认上下文为 window
* 接下来给 context 创建一个 fn 属性，并将值设置为需要调用的函数
* 因为 call 可以传入多个参数作为调用函数的参数，所以需要将参数剥离出来
* 然后调用函数并将对象上的函数删除

```
apply的实现
Function.prototype.myApply = function(context) {
    if(typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    context.fn = this
    console.log(arguments)
    if(arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}
obj.myFun.myApply(db, ['111', '222'])
```
```
bind的实现
Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
    throw new TypeError('Error')
    }
    const _this = this
    const args = [...arguments].slice(1)
    console.log(args)
    // 返回一个函数
    return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
        return new _this(...args, ...arguments)
    }
    console.log(args.concat(...arguments))
    return _this.apply(context, args.concat(...arguments))
    }
}
let objBind = obj.myFun.myBind(db, '111')
objBind(123456)
```
手写防抖,节流函数
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
new的原理
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
为什么 0.1 + 0.2 != 0.3？如何解决这个问题？
```
因为 JS 采用 IEEE 754 双精度版本（64位），并且只要采用 IEEE 754 的语言都有该问题。
我们都知道计算机是通过二进制来存储东西的，那么 0.1 在二进制中会表示为
// (0011) 表示循环
0.1 = 2^-4 * 1.10011(0011)
解决方法：parseFloat((0.1 + 0.2).toFixed(10)) === 0.3 // true
```
