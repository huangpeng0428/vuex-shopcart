/*
 * @Date: 2020-07-21 17:04:10
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-10-28 14:55:02
 */

function instance(left, right) {
    let prototype = right.prototype  // 获取类型的原型
    // eslint-disable-next-line no-proto
    let proto = left.__proto__       // 获取对象的原型
    while (true) {    // 循环判断对象的原型是否等于类型的原型，直到对象原型为null，因为原型链最终为null
       if (proto === null || proto === undefined) {
           return false
       }
       if (proto === prototype) {
           return true
       }
       // eslint-disable-next-line no-proto
       proto = proto.__proto__
     }
}
console.log(instance({}, Object)) // true
console.log(instance([], Number)) // false

// instanceof来检测某个对象是不是另一个对象的实例。
// instanceof运算符用来测试一个对象在其原型链中是否存在一个构造函数prototype属性

// function instance (L, R) {
//     let r = R.prototype

//     let l = L.__proto__

//     while(true) {
//         if(l === null || l === undefined) {
//             return false
//         }
//         if(l === r) {
//             return true
//         }
//         l = l.__proto__
//     }
// }

//   function A(a) {
//     A = function(b) {
//       console.log(a + b++);
//     };
//     console.log(a++);
//   }
//   A(1);
//   A(2);

