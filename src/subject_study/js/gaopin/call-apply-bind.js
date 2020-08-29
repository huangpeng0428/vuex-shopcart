/*
 * @Date: 2020-08-17 15:20:22
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-21 16:12:09
 */
// * 首先 context 为可选参数，如果不传的话默认上下文为 window
// * 接下来给 context 创建一个 fn 属性，并将值设置为需要调用的函数
// * 因为 call 可以传入多个参数作为调用函数的参数，所以需要将参数剥离出来
// * 然后调用函数并将对象上的函数删除
function Person(val, val2, val3) {
  console.log(val, val2, val3)
  console.log(this.name)
}
let obj = {
    name: 'huang'
}

/**
 * @description: call的实现
 * @param {type}
 * @return {type}
 * @author: PoloHuang
 */
// eslint-disable-next-line no-extend-native
Function.prototype.myCall = function(ctx, ...args) {
  if (typeof this !== 'function') throw new TypeError('not an function')
  ctx = ctx || window
  ctx.fn = this
  let result = ctx.fn(...args)
  delete ctx.fn
  return result
}
// eslint-disable-next-line no-unused-vars
let p = Person.myCall(obj, 'test', 'demo')

/**
 * @description: apply的实现（需要注意参数的问题）
 * @param {type}
 * @return {type}
 * @author: PoloHuang
 */
// eslint-disable-next-line no-extend-native
Function.prototype.myApply = function(ctx, args) {
    if (typeof this !== 'function') throw new TypeError('not an function')
    ctx = ctx || window
    ctx.fn = this
    let result = args ? ctx.fn(...args) : ctx.fn()
    delete ctx.fn
    return result
}
// eslint-disable-next-line no-unused-vars
let p1 = Person.myApply(obj, ['test1', 'demo1'])

/**
 * @description: myBind的实现（需要注意可以使用new操作符）
 * @param {type}
 * @return {type}
 * @author: PoloHuang
 */
// eslint-disable-next-line no-extend-native
Function.prototype.myBind = function(ctx, ...args) {
    if (typeof this !== 'function') throw new TypeError('not an function')
    const _this = this
    ctx = ctx || window
    return function F() {
        if (this instanceof F) {     // 说明是使用new操作符进行了操作
            return new _this(...args, ...arguments)
        }
        return _this.apply(ctx, [...args, ...arguments])
    }
}
let P2 = Person.myBind(obj, 'test2', 'demo2')
// eslint-disable-next-line no-new
new P2('bind')


