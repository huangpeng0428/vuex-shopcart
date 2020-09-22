/*
 * @Date: 2020-09-02 14:28:06
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-09-22 17:17:37
 */
// function* test() {
//   // eslint-disable-next-line no-unused-vars
//   let a = 1 + 2
//   yield 2
//   yield 3
// }
// let b = test()
// console.log(b.next()) // >  { value: 2, done: false }
// console.log(b.next()) // >  { value: 3, done: false }
// console.log(b.next()) // >  { value: undefined, done: true }

/**
 * @description: 实现一个简单的generator
 * @param {type}
 * @return {type}
 * @author: PoloHuang
 */
function generator(cb) {

    return (function() {
        let obj = {
            next: 0,
            stop: function() {}
        }

        return {
            next: function() {
                let ret = cb(obj)
                if (ret === undefined) return { value: undefined, done: true }
                return {
                    value: ret,
                    done: false
                }
            }
        }

    })()
}

function test() {
    return generator(function(_ctx) {
        while (true) {
            switch (_ctx.next) {
              case 0:
                // eslint-disable-next-line no-unused-vars
                let a = 1 + 2
                _ctx.next = 2
                return 2
              case 2:
                _ctx.next = 4
                return 4
              case 4:
                return _ctx.stop()
              case 'end':
                return _ctx.stop()
            }
        }
    })
}
let b = test()

console.log(b.next())
console.log(b.next())
console.log(b.next())

// https://www.jianshu.com/p/53e6966de190
