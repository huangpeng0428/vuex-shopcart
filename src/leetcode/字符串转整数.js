/*
 * @Date: 2020-08-06 16:48:28
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-09-28 11:40:41
 */
/**
 * @param {string} str
 * @return {number}
 */
let myAtoi = function(str) {
    str = str.trim()
    if (Number(str) < 0) {
        str = str.substr(1)
    }
    console.log(str)
}
myAtoi('    -14')
