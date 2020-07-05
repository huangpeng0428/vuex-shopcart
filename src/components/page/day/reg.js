/*
match 返回一个符合规定的数组
*/
let regex1 = /ab{2,5}c/g;

let str1 = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc';

console.log(str1.match(regex1));  // 字符串.match(正则)

/*
replace 返回一个符合规定的数组
*/
let str2 = 'aaa';
let reg2 = /a/;
str2 = str2.replace(reg2, 'b');
console.log(str2);      // 输出baa 字符串.replace(正则, '字符串')

/*
search 返回匹配成功的位置，如果匹配失败就返回-1
*/

let str3 = 'abcdef'
let reg3 = /b/
console.log(str3.search(reg3))

/*
test 正则去匹配字符串，如果匹配成功就返回true，匹配失败就返回false
*/

let str4 = 'abcdef';
let reg4 = /b/; // bc一个整体也在字符串中，弹出true，但是写bd，弹出false，因为字符串中没有bd这么一个整体
console.log(reg4.test(str4));   // 正则.test(字符串)

/*
test练习 匹配 23:59
*/

// let str3 = '23:59'
// let str3 = '02:07'
// let str3 = '2:7'
// let reg3 = /^(0?[0-9]|2[0-3]|1[0-9]):0?[0-9]|[1-5][0-9]/
// console.log(reg3.test(str3))

// let str4 = '2017-08-31'
// let reg4 = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[01])/g
// console.log(reg4.test(str4))

// let str = 'vbbbbhybbfhbbgbbb';
// let arr = str.split('');
// str = arr.sort().join('');
// let value = ''; // 存放出现最多的字符
// let index = 0; // 存放次数
// let re = /(\w)\1+/g;

// str.replace(re, function($0, $1) { // $0代表整体，$1代表第一个子项
//     console.log(str, $0, $1)
//     if (index < $0.length) { // $0:每一组重复的元素
//         index = $0.length;
//         value = $1;
//     }
// })
// console.log('出现最多的字符是' + value + ',出现次数是' + index);


