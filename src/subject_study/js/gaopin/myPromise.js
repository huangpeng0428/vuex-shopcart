/*
 * @Date: 2020-09-04 15:19:21
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-09-11 14:57:44
 */

 const PENDING = 'pending'
 const RESLOVE = 'reslove'
 const REJECT = 'reject'
class MyPromise {
    constructor(cb) {
        this.statu = PENDING
        this.value = null
        this.resloveArrFunc = []
        this.rejectArrFunc = []

        this.reslove = val => {
            console.log(val)
            if (this.statu === PENDING) {
                this.statu = RESLOVE
                this.value = val
                this.resloveArrFunc.map(fn => fn(this.value))
            }
        }

        this.reject = val => {
            if (this.statu === PENDING) {
              this.statu = REJECT
              this.value = val
              this.rejectArrFunc.map(fn => fn(this.value))
            }
        }

        try {
            cb(this.reslove, this.reject)
        } catch (error) {
            console.log(error)
        }
    }

}

MyPromise.prototype.then = function(onFul, onRej) {
    onFul = typeof onFul === 'function' ? onFul : f => f
    onRej = typeof onRej === 'function' ? onRej : f => f

    if (this.statu === PENDING) {
      this.resloveArrFunc.push(onFul)
      this.rejectArrFunc.push(onRej)
    }

    if (this.statu === RESLOVE) {
      onFul(this.value)
    }

    if (this.statu === REJECT) {
      onRej(this.value)
    }
}

new MyPromise((res, rej) => {

    // res(2)
    setTimeout(() => {
      res(2)
    }, 2000)
}).then((res, rej) => {
    console.log(res + 2)
})

// 实现Promise.all 以及 race

Promise.myall = function(arr) {
    return new Promise((resolve, reject) => {
        if (arr.length === 0) {
            return resolve([])
        }
            let res = [],
                count = 0
            for (let i = 0; i < arr.length; i++) {

                // 同时也能处理arr数组中非Promise对象
                if (!(arr[i] instanceof Promise)) {
                    res[i] = arr[i]
                    if (++count === arr.length) { resolve(res) }
                } else {
                    arr[i].then(data => {
                        res[i] = data
                        if (++count === arr.length) { resolve(res) }
                    }, err => {
                        reject(err)
                    })
                }

            }

    })
}

Promise.myrace = function(arr) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {

            // 同时也能处理arr数组中非Promise对象
            if (!(arr[i] instanceof Promise)) {
                Promise.resolve(arr[i]).then(resolve, reject)
            } else {
                arr[i].then(resolve, reject)
            }

        }
    })
}


