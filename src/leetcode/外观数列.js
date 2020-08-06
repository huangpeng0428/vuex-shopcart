/*
 * @Date: 2020-08-06 14:36:24
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-06 16:14:43
 */ 
var countAndSay = function(n) {
    let prev = '1'
    for(let i = 1; i < n; i++) {
        prev = prev.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`);
    }
    console.log(prev);
    return prev
};
countAndSay(3)