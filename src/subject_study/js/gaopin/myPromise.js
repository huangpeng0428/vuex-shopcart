/*
 * @Date: 2020-09-04 15:19:21
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-09-07 16:54:37
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
