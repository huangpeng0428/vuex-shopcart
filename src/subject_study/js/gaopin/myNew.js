/*
 * @Date: 2020-08-17 14:39:58
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-17 15:28:17
 */
function Person(name, age) {
    this.name = name
    this.age = age
    this.obj = {
        obj: name
    }
}

function myNew(func, ...arg) {
    if (typeof func !== 'function') throw new TypeError('not an function')
    let obj = Object.create(func.prototype)
    let ret = func.apply(obj, arg)
    return ret instanceof Object ? ret : obj
}

let p = myNew(Person, 'polo', '25')

// let a = p.name
console.log(p)
