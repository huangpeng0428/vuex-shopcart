##手写call、apply、bind函数
```
var obj = {
    name: '小张',
    objAge: this.age,
    myFun: function() {
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
Function.prototype.myCall = function() {
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
obj.myFun.myCall(db)    //小明年龄99
```
* 首先 context 为可选参数，如果不传的话默认上下文为 window
* 接下来给 context 创建一个 fn 属性，并将值设置为需要调用的函数
* 因为 call 可以传入多个参数作为调用函数的参数，所以需要将参数剥离出来
* 然后调用函数并将对象上的函数删除