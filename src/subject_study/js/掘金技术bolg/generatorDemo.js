/*
 * @Date: 2020-08-07 19:06:52
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-07 19:09:36
 */

function* generateCodeFrame(x) {
    var y = yield x + 2
    return y
}
var g = generateCodeFrame(1)
console.log(g.next())
console.log(g.next())