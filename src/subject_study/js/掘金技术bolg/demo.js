/*
 * @Date: 2020-07-14 15:25:13
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-07-30 18:05:22
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



var nums1 = [1,2,3,0,0,0], m = 3
    nums2 = [2,5,6],       n = 3

// Array.prototype.push.apply(nums1, nums2);


// console.log(nums1.splice(0, m));
// console.log(nums2.splice(0, n));

var merge = function(nums1, m, nums2, n) {
  (nums1.length = m), (nums2.length = n);

  Array.prototype.push.apply(nums1, nums2);
  nums1.sort(function(a, b) {
    return a - b;
  });
};
console.log(merge(nums1, m, nums2, n))
