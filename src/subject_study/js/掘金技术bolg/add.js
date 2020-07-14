/*
 * @Date: 2020-07-14 11:03:11
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-07-14 11:15:04
 */ 
// 请实现一个 add 函数  函数柯理化
// add(1); 	// 1
// add(1)(2);  	// 3
// add(1)(2)(3)；  // 6
// add(1)(2, 3);   // 6
// add(1, 2)(3);   // 6
// add(1, 2, 3);   // 6

function add(...nums) {
  let res = 0;
  nums.forEach(item => (res += item));
  let ret = function(...nums) {
    nums.forEach(item => (res += item));
    return ret;
  };
  ret.toString = function() {
    return res;
  };
  ret.valueOf = function() {
    return res;
  };
  return ret;
}
console.log(add(1)(2, 3));