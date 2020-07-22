/*
 * @Date: 2020-07-21 17:04:10
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-07-22 14:05:25
 */ 

function instance(left,right){
    let prototype = right.prototype;  //获取类型的原型
    let proto = left.__proto__;       //获取对象的原型
    while(true){    //循环判断对象的原型是否等于类型的原型，直到对象原型为null，因为原型链最终为null
       if (proto === null || proto === undefined){
           return false;
       }
       if (proto === prototype){
           return true;
       }
       proto = proto.__proto__;
     }
}
console.log(instance({},Object)); //true
console.log(instance([],Number)); //false







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

