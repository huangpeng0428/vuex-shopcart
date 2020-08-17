/*
 * @Date: 2020-08-17 15:20:22
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-17 17:58:29
 */
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


