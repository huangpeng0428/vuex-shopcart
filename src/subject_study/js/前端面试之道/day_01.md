<!--
 * @Date: 2019-10-17 15:53:18
 * @LastEditors: PoloHuang
 * @LastEditTime: 2019-10-17 19:07:03
 -->
 1. 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值(不能使用for，while)
```
var arr = new Array(5)
var num = Math.floor(Math.random()*31 + 2)
var i = 0 

const randomArr = (num, arr) => {
    if(arr.indexOf(num) === -1) {
        arr[i] = num
        i++
    }else{
        num = Math.floor(Math.random()*31 + 2)
    }

    if(i >= arr.length) {
        return
    }else{
        randomArr(num, arr)
    }
    return arr
}

console.log(randomArr(num, arr))
```

2. 判断数据类型经典方法
```
const isType = (targe, type) => {
    if(typeof targe !== 'object')  return
    const typeString = Object.prototype.toString.call(targe)

    return `[object ${type}]` === typeString
}
isType([], 'Array') //true
```
3. 简要描述下js有哪些内置的对象
```
时间对象Date
字符串对象String
数学对象Math
数值对象Number
数组对象Array
函数对象Function
函数参数集合arguments
布尔对象Boolean
错误对象Error
基础对象Object
```


