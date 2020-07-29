/*
 * @Date: 2020-07-27 19:05:43
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-07-28 17:26:50
 */ 

// 初始化状态
const PENDING = 'pending'
const RESLOVE = 'resolved'
const REJECT = 'rejected'

function DemoPromise(callBackFunc) {
    const that = this		// 存放promise实例
    that.status = PENDING	// 初始化状态
    that.value = null		// 初始化值
    that.resloveFuncArr = []    // 初始化reslove 需要返回的方法
    that.rejectFuncArr = []		// 初始化reject 需要返回的方法

    function reslove(val) {			// promise reslove方法
        if (that.status === PENDING) {
            console.log('reslove', that.status)
            that.status = RESLOVE
            that.value = val
            that.resloveFuncArr.map(fn => fn(that.value))
        }
    }

    function reject(val) {			// promise reject方法
        if (that.status === PENDING) {
            console.log('reject', that.status)
            that.status = REJECT
            that.value = val
            that.rejectFuncArr.map(fn => fn(that.value))
        }
    }

    // 调用
    try {
        callBackFunc(reslove, reject)
    } catch (err) {
        reject(err)
    }
}

DemoPromise.prototype.then = function(onFulfilled, onRejected) {
    const that = this

    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : f => f 	// 若是方法则返回方法,若不是方法创建方法返回
    onRejected = typeof onRejected === 'function' ? onRejected : f => f

    if (that.status === PENDING) {
        console.log('then', that.status)
        that.resloveFuncArr.push(onFulfilled)
        that.rejectFuncArr.push(onRejected)
    }

    // 成功
    if (that.status === RESLOVE) {
        console.log(that.status)
        onFulfilled(that.value)
    }

    // 失败
    if (that.status === REJECT) {
        console.log(that.status)
        onRejected(that.value)
    }
}

// 测试结果
new DemoPromise((res, rej) => {
    res(2)
    // setTimeout(() => { res(2) }, 2000)
}).then((value, err) => {
    console.log(value + 2)
})
