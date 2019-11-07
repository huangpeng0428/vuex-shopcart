##手写简易版promise
```
/* 
    Author：poloHuang
    Date：2019-11-07
    describe：简易promise
*/

//初始化状态
const PENDING = 'pending'
const RESLOVE = 'resolved'
const REJECT = 'rejected'

function demoPromise(callBackFunc) {
    const that = this		//存放promise实例
    that.status =  PENDING	//初始化状态
    that.value = null		//初始化值
    that.resloveFuncArr = []    //初始化reslove 需要返回的方法
    that.rejectFuncArr = []		//初始化reject 需要返回的方法
    
    function reslove(val) {			//promise reslove方法
        if(that.status === PENDING) {
            that.status = RESLOVE
            that.value = val
            that.resloveFuncArr.map(fn => fn(that.value))
        }
    }
    
    function reject(val) {			//promise reject方法
        if(that.status === PENDING) {
            that.status = REJECT
            that.value = val
            that.rejectFuncArr.map(fn => fn(that.value))
        }
    }
    
    //调用
    try {
        callBackFunc(reslove, reject)
    } catch(err) {
        reject(err)
    }
}

demoPromise.prototype.then = function (onFulfilled, onRejected) {
    const that = this
    
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : f => f 	//若是方法则返回方法,若不是方法创建方法返回
    onRejected = typeof onRejected === 'function' ? onRejected : f => f 
    
    if(that.status === PENDING) {
        that.resloveFuncArr.push(onFulfilled)
        that.rejectFuncArr.push(onRejected)
    }
    
    // 成功
    if(that.status === RESLOVE) {
        onFulfilled(that.value)
    }
    
    // 失败
    if(that.status === REJECT) {
        onRejected(that.value)
    }
}


//测试结果
new demoPromise((res, rej) => {
    setTimeout(() => {res(2)}, 2000)
}).then((value, err) => {
    console.log(value + 2)
})
```