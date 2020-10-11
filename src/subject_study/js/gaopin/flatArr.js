/*
 * @Date: 2020-08-28 17:11:48
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-28 17:42:12
 */
const arr = [1, [[2], [3, [4]], 5]]

/**
 * @description: 递归
 * @param {type}
 * @return {type}
 * @author: PoloHuang
 */
const flatten1 = function(arr) {
    return Array.isArray(arr) ? arr.reduce((prev, item) => {
        return [...prev, ...flatten1(item)]
    }, []) : [arr]
}

const a = flatten1(arr)
console.log(a)

/**
 * @description: 迭代
 * @param {type}
 * @return {type}
 * @author: PoloHuang
 */

 const flatten2 = function(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
 }
 const b = flatten2(arr)
 console.log(b)

 /**
 * @description: api
 * @param {type}
 * @return {type}
 * @author: PoloHuang
 */
const c = arr.flat(Infinity)
console.log(c)
