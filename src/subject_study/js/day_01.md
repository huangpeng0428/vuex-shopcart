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
4. ['1', '2', '3'].map(parseInt)
```
//解析
map函数的第一个参数是callback
var newArray = arr.map((item, index, arr)=> {})
callback一共可以接受三个参数，第一个代表当前被处理,第二个代表该元素的索引
所以
parseInt('1', 0) //radix为0时，且string参数不以“0x”和“0”开头时，按照10为基数处理。这个时候返回1
parseInt('2', 1) //基数为1（1进制）表示的数中，最大值小于2，所以无法解析，返回NaN
parseInt('3', 2) //基数为2（2进制）表示的数中，最大值小于3，所以无法解析，返回NaN
map函数返回的是一个数组，所以最后结果为[1, NaN, NaN]
```

5. ES5和ES6的继承除了写法以外还有什么区别
* class 声明会提升，但不会初始化赋值。Foo 进入暂时性死区，类似于 let、const 声明变量
* class 声明内部会启用严格模式
* class 所有的方法（包括静态方法和实例方法）都是不可枚举的
* class 所有的方法（包括静态方法和实例方法）都没有原型对象prototype，所以也没有[construct]，不能使用new来调用
* 必须使用new调用class
* class内部无法重写类名
```
const bar = new Bar(); // it's ok
function Bar() {
  this.bar = 42;
}

const foo = new Foo(); // ReferenceError: Foo is not defined
class Foo {
  constructor() {
    this.foo = 42;
  }
}
https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/20
```

