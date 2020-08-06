/*
 * @Date: 2020-08-06 16:48:28
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-06 18:05:44
 */ 
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim()
    if(Number(str) < 0) {
        var icon = str.substr(0, 1)
        str = str.substr(1)
    }
    console.log(icon)
    console.log(str);
};
myAtoi('    -14')