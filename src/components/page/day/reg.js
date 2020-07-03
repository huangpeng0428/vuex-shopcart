/*
 * @Date: 2020-07-03 18:03:42
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-07-03 18:04:08
 */
let regex = /ab{2,5}c/g;

let string = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc';

console.log(string.match(regex));
