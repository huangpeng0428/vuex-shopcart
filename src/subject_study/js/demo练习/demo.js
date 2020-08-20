/*
 * @Date: 2020-07-14 15:25:13
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-20 10:34:25
 */
// class EventEmitter {
//   constructor() {
//     this._events = Object.create(null); // 定义事件的存储对象
//   }
//   //添加事件监听
//   on(eventName, fn, isOnce = false) {
//     if (typeof fn !== "function") {
//       throw new TypeError("The listener must be a function!");
//     }
//     if (!this._events[eventName]) {
//       this._events[eventName] = [];
//       this._events[eventName].push({ fn, isOnce });
//     } else {
//       this._events[eventName].push({ fn, isOnce }); // 存入监听的事件名和事件
//     }
//   }

// const { stringify } = require("qs");

//   //一次性事件监听
//   once(eventName, fn) {
//     this.on(eventName, fn, true);
//   }

//   // 事件触发
//   emit(eventName, ...args) {
//     if (!this._events[eventName]) {
//       return false;
//     }
//     const len = this._events[eventName].length;
//     for (let i = 0; i < len; i++) {
//       let event = this._events[eventName][i];
//       console.log(event)
//       event.fn.call(this, ...args);
//     //   event.fn(...args);
//       if (event.isOnce) {
//         this.removeListener(eventName, event.fn);
//         // i--;
//       }
//     }
//   }
//   // 移除监听事件
//   removeListener(eventName, fn) {
//     if (!this._events[eventName]) return this;
//     if (!fn) {
//       delete this._events[eventName];
//       return this;
//     } else {
//       this._events[eventName].forEach((item, index) => {
//         if (item.fn === fn) {
//           this._events[eventName].splice(index, 1);
//         } else {
//           return this;
//         }
//       });
//     }
//   }
//   // off:removeListener 的别名
//   off(eventName, fn) {
//     this.removeListener(eventName, fn);
//   }
//   // 移除所有监听事件
//   removeAllListener(eventName) {
//     if (eventName) {
//       if (this._events[eventName]) {
//         this._events[eventName].length = 0;
//       }
//     } else {
//       this._events = Object.create(null);
//     }
//   }
// }

// function add(...args) {
//   let num = 0;
//   for (let i = 0; i < args.length; i++) {
//     num += args[i];
//   }
//   console.log(num);
//   return num;
// }

// let event = new EventEmitter();
// event.on("adding", add);
// event.once("adding", add);
// event.emit("adding", 1, 2, 3, 4);
// event.removeListener("adding", add);
// event.emit("adding", 1, 2, 3, 4);
// event.emit("adding", 1, 2, 3, 4);
// event.emit("adding", 1, 2, 3, 4);

// function Person (name, age) {
//     this.name = name
//     this.age = age
// }

// const myNew = function (fn, ...args) {
//     const res = Object.create(fn.prototype)
//     const ret = fn.apply(res, args)
//     return ret instanceof Object ? ret : res
// }

// let obj = myNew(Person, 'polo', 25)

// let a = [1, [2, [3]]]
// const flatten = arr => Array.isArray(arr)
//     ? arr.reduce((c, item) => [...c, ...flatten(item)], []) : [arr]
//     console.log(flatten(a))

// let b = [1, [2, [3]]].flat(Infinity);
// console.log(b)

// const flattenDeep = arr =>
//   Array.isArray(arr)
//     ? arr.reduce((a, b) => [...a, ...flattenDeep(b)], [])
//     : [arr];

// console.log(flattenDeep([1, [[2], [3, [4]], 5]]))
// const fn = () => {
//     console.log(10)
// }

// const debounce = (fn, wait = 50) => {
//     let timer = 0

//     // return function(...args) {
//         if (timer) clearTimeout(timer)

//         timer = setTimeout(() => {
//             fn.apply(this)
//         }, wait)

//     // }
// }

// console.log(debounce(fn, 100))

// promise
// const p = 'PENDING'
// const r = 'RESLOVE'
// const j = 'REJECT'

// function myPromise (cb) {
//     const that = this
//     that.statu = p
//     that.value = null
//     that.succFuncArr = []
//     this.failFuncArr = []
//     function resolve(val) {
//         if (that.statu === p) {
//           that.statu = r
//           that.value = val
//           that.succFuncArr.map(fn => fn(that.value));
//         }
//     }

//     function reject(val) {
//         if (that.statu === p) {
//           that.statu = j;
//           that.value = val;
//           that.failFuncArr.map(fn => fn(that.value));
//         }
//     }

//     try {
//         cb(resolve, reject)
//     } catch (error) {
//         reject(error);
//     }
// }

// myPromise.prototype.then = function(full, fail) {
//   const that = this;
//   full = typeof full === "function" ? full : f => f;
//   fail = typeof full === "function" ? fail : f => f;

//   if (that.statu === p) {
//     that.funcArr.push(full);
//   }

//   if (that.statu === r) {
//     full(that.value);
//   }

//   if (that.statu === j) {
//     fail(that.value);
//   }
// };

// new myPromise((res, rej) => {
//   res(2);
//   // setTimeout(() => { res(2) }, 2000)
// }).then((value, err) => {
//   console.log(value + 2);
// });

// var nums1 = [1,2,3,0,0,0], m = 3
//     nums2 = [2,5,6],       n = 3

// // Array.prototype.push.apply(nums1, nums2);

// // console.log(nums1.splice(0, m));
// // console.log(nums2.splice(0, n));

// var merge = function(nums1, m, nums2, n) {
//   (nums1.length = m), (nums2.length = n);

//   Array.prototype.push.apply(nums1, nums2);
//   nums1.sort(function(a, b) {
//     return a - b;
//   });
// };
// console.log(merge(nums1, m, nums2, n))

// function fun(num) {
//   let num1 = num / 10;
//   let num2 = num % 10;
//   if (num1 < 1) {
//     return num;
//   } else {
//     num1 = Math.floor(num1);
//     console.log(num1);
//     console.log(fun(num1));
//     return `${num2}${fun(num1)}`;
//   }
// }

// function fun(num) {
//   let num1 = num / 10;
//   let num2 = num % 10;
//   if (num1 < 1) {
//     return num;
//   } else {
//     num1 = Math.floor(num1);
//     console.log(num1);
//     console.log(fun(num1));
//     return `${num2}${fun(num1)}`;
//   }
// }
// var a = fun(12345);
// console.log(a);
// console.log(typeof a);

// let list =[
//     {id:1,name:'部门A',parentId:0},
//     {id:2,name:'部门B',parentId:0},
//     {id:3,name:'部门C',parentId:1},
//     {id:4,name:'部门D',parentId:1},
//     {id:5,name:'部门E',parentId:2},
//     {id:6,name:'部门F',parentId:3},
//     {id:7,name:'部门G',parentId:2},
//     {id:8,name:'部门H',parentId:4}
// ];

// function convert(data) {
//   let obj = {}
//   data.forEach(e => {
//     obj[e.id] = e;
//   });
//   return data.reduce((c, item) => {
//     let parents = obj[item.parentId]
//     if (parents) {
//       if (!parents.children) parents.children = [];
//       parents.children.push(item);
//     } else {
//       c.push(item);
//     }
//     return c
//   }, [])
// }

// const result = convert(list)
// console.log(result);

// 回文数
// let a = 12221
// var isPalindrome = function(x) {
//   if(x < 0) return false
//   console.log(x)
//   return x === parseInt(x.toString().split('').reverse().join(''))
// };
// console.log(isPalindrome(a));

// 最长公共前缀
// const arr = ["swer", "flow", "yflight"];
// var longestCommonPrefix = function(arr) {
//   let firstData = arr[0]
//   console.log(firstData);
//   for(let i = 1; i < arr.length; i++) {
//     for (let j = 0; j < firstData.length && j < arr[i].length; j++) {
//       console.log(firstData.indexOf(arr[i][j]));
//       if(firstData[j] !== arr[i][j]) {
//         return firstData.substring(0, j);
//       }
//     }
//   }
// };
// console.log(longestCommonPrefix(arr))

// 	/**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
//     let arr = []
//     let len = s.length
//     if (len%2) return false
//     for (let i = 0; i < len; i++) {
//         let letter = s[i]
//         switch(letter) {
//             case "(": {
//                 arr.push(letter)
//                 break;
//             }
//             case "[": {
//                 arr.push(letter)
//                 break;
//             }
//             case "{": {
//                 arr.push(letter)
//                 break;
//             }
//             case ")": {
//                 if (arr.pop() !== "(") return false
//                 break;
//             }
//             case "]": {
//                 if (arr.pop() !== "[") return false
//                 break;
//             }
//             case "}": {
//                 if (arr.pop() !== "{") return false
//                 break;
//             }
//         }
//     }
//     return !arr.length

// };

// console.log(isValid('{[]}'))

/**
 * @description: leetcode
 * @param {twoSum}
 * @return {Object}
 * @author: PoloHuang
 */

// let nums = [2, 7, 11, 15], target = 9;

// const twoSum = (arr, target) => {
//   const Map = {}
//   for(let i = 0; i < arr.length; i++) {
//     let result = target - arr[i]
//     console.log(result)
//     if(Map[result] === arr[i]) return [i, arr[result]];
//     Map[result] = arr[i]
//   }
// };

// console.log(twoSum(nums, target));

/**
 * @description: input双向绑定实现 + 模板替换
 * @param {type}
 * @return {type}
 * @author: PoloHuang
 */

// var obj = {};
// console.log(obj);
// Object.defineProperty(obj, "test", {
//   configurable: true,
//   set: function(value) {
//     document.getElementById("root").value = value;
//   },
//   get: function() {
//     return document.getElementById("root").value;
//   }
// });

// var tmp = '{{name}}在学习{{demo}}'
// var data = { name: "polo", demo: "js" };
// function render(tmp, data) {
//   return tmp.replace(/\{\{(.*?)\}\}/g, function(match, key) {
//     console.log(data[key.trim()])
//     return data[key.trim()];
//   });
// }
// render(tmp, data)
// console.log(render(tmp, data));

/**
 * @description: regexp
 * @param {type}
 * @return {type}
 * @author: PoloHuang
 */

// let str = 'Hello45647 123 world!Hello 1423 world! ssfsdf'
// let patt1 = /\d+/
// let result1 = patt1.exec(str)
// console.log(result1)

/**
 * @description: demo
 * @param {type} 
 * @return {type} 
 * @author: PoloHuang
 */

//  const value = {number: 10}
//  const func = (data = { ...value }) => {
//     console.log(data.number *= 2)
//  }
//  //或者
//  const func = (data = value ) => {
//    console.log((data.number *= 2));
//  };
// func()
// func()
// func(value)
// func(value)

let nums = [1, 5, 2 ,9, 6, 10, 6, 8]
 
const quickFunc = nums => {
    if(nums.length <= 1) return nums
    const initIndex = Math.floor((0 + nums.length) / 2)
    const initData = nums.splice(initIndex, 1)[0]
    const left = []
    const right = []
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < initData) {
            left.push(nums[i])
        }
        if(nums[i] > initData) {
            right.push(nums[i]);
        }
    }
    return quickFunc(left).concat([initData], quickFunc(right));
};

console.log(quickFunc(nums));



