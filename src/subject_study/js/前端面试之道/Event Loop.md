<!--
 * @Date: 2019-11-11 20:28:02
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-10-19 16:54:13
-->
## 浏览器中的 Event Loop
```js
console.log('script start')

async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end')
}
async1()

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })

console.log('script end')
// script start => async2 end => Promise => script end => promise1 => promise2 => async1 end => setTimeout

注意：新的浏览器中不是如上打印的，因为 await 变快了，具体内容可以往下看

//新的浏览器因为await变快了，打印结果如下
// script start => async2 end => promise => script end => async1 end => promise1 => promise2 => setTimeout

首先先来解释下上述代码的 async 和 await 的执行顺序。当我们调用 async1 函数时，会马上输出 async2 end，并且函数返回一个 Promise，接下来在遇到 await的时候会就让出线程开始执行 async1 外的代码，所以我们完全可以把 await 看成是让出线程的标志。

然后当同步代码全部执行完毕以后，就会去执行所有的异步代码，那么又会回到 await 的位置执行返回的 Promise 的 resolve 函数，这又会把 resolve 丢到微任务队列中，接下来去执行 then 中的回调，当两个 then 中的回调全部执行完毕以后，又会回到 await 的位置处理返回值，这时候你可以看成是 Promise.resolve(返回值).then()，然后 await 后的代码全部被包裹进了 then 的回调中，所以 console.log('async1 end') 会优先执行于 setTimeout。
```

## 浏览器的事件循环和node的事件循环
1. 浏览器端的事件循环，宏任务的微任务执行完之后才会执行下一个宏任务
2. node端事件循环，node11之前一个宏任务执行完，会去检查有没有下一个宏任务，如果有这个宏任务会优先于微任务执行，node11之后和浏览器端事件循环一致
