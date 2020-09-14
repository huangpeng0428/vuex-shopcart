## day_01

**自己实现一个new**
```
function Person (name, age) {
    this.name = name ;
    this.age = age
}
1.
function myNew (fun, ...arg) {
    // 创建一个新对象且将其隐式原型指向构造函数原型
    let obj = {
        __proto__: fun.prototype 
    }
    // 执行构造函数
    fun.apply(obj, arg)
    
    // 返回该对象
    return obj
}

2.
function myNew (fn, ...arg) {
    const obj = Object.create(fn.prototype) //创建一个新对象且将其隐式原型指向构造函数原型
	const ret = fn.apply(obj, arg)
	return ret instanceof Object ? ret : obj
}


let _person = myNew(Person, 'huang', '21')
console.log(_person)
```
**判断数据类型的经典方法**
```
const isType = (target, type) => {
    if(typeof target !== 'object') return false
    
    const typeString = Object.prototype.toString.call(target)
    
    return `[object ${type}]` === typeString
}
    console.log(isType([],'Array'))    //ture
```
**原型链之间的关系**
```
Person.prototype.constructor == Person;
person1.__proto__ == Person.prototype;
person1.constructor == Person;

https://www.jianshu.com/p/dee9f8b14771
```
**理解js继承的6种方式**
```
原文：https://www.cnblogs.com/Grace-zyy/p/8206002.html
也可以参考： https://github.com/mqyqingfeng/Blog/issues/16
//父类
function Person(name) {         
	this.name = name;           //父类构造函数属性
	this.sum = function() {
		alert(this.name)
	}
}
Person.prototype.age = 10       //父类原型属性
var _person = new Person('小明')
_person.height = '170'              //父类实例属性
```
```
//1.原型链继承
function Per() {
	this.name = "ker"
}
Per.prototype = new Person();
var _per = new Per()
console.log(_per.age)       //10
console.log(_per.name)      //ker
console.log(_per instanceof Person)     //ture

重点：让新实例的原型等于父类的实例。

特点：1、实例可继承的属性有：实例的构造函数的属性，父类构造函数属性，父类原型的属性。（新实例不会继承父类实例的属性！）

缺点：1、新实例无法向父类构造函数传参。
      
      2、继承单一。
     
      3、所有新实例都会共享父类构造函数属性。（原型上的属性是共享的，一个实例修改了原型属性，另一个实例的原型属性也会被修改！）
```
```
//2.借用构造函数继承
function Con () {
	Person.call(this,"polo");	//重点
	this.age = 12
}
var _con = new Con()
console.log(_con.name)  //polo
console.log(_con.age)   //12

重点：用.call()和.apply()将父类构造函数引入子类函数（在子类函数中做了父类函数的自执行（复制））

特点：1、只继承了父类构造函数的属性，没有继承父类原型的属性。

　　　2、解决了原型链继承缺点1、2、3。

　　　3、可以继承多个构造函数属性（call多个）。

　　　4、在子实例中可向父实例传参。

缺点：1、只能继承父类构造函数的属性。

　　　2、无法实现构造函数的复用。（每次用每次都要重新调用）

　　　3、每个新实例都有父类构造函数的副本，臃肿。
```
```
//3.组合继承（组合原型链继承和借用构造函数继承）（常用）
function SubType (name) {
	Person.call(this,name)  //借用构造函数继承
}

SubType.prototype = new Person()    //原型链继承
var _sub = new SubType('polo')
console.log(_sub.name)      //继承父类构造函数属性
console.log(_sub.age)       //继承父类原型的属性

重点：结合了两种模式的优点，传参和复用

特点：1、可以继承父类原型上的属性，可以传参，可复用。

　　　2、每个新实例引入的构造函数属性是私有的。

缺点：调用了两次父类构造函数（耗内存），子类的构造函数会代替原型上的那个父类构造函数
```
## ES6 继承extends
```
https://segmentfault.com/a/1190000010407445
```
## day_02
**实现一个基本的Event Bus**
```
class EventEmitter {
    constructor () {
        this.events = this.events || new Map()
    }
    //监听事件
    addListener (type,fn) {
        if( !this.events.get(type) )
            this.events.set(type,fn)
    }
    //触发事件
    emit (type) {
        let handle = this.events.get(type)
        handle.apply(this, [...arguments].slice(1))
    }
}
// 测试
let emitter = new EventEmitter()
// 监听事件
emitter.addListener('ages', age => {
  console.log(age)
})
// 触发事件
emitter.emit('ages', 18)  // 18
```
**宏任务与微任务**
```js
console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})
//打印顺序 1 7 6 8 2 4 9 11 3 10 5 12


async function async1() {
    console.log('async1 start');
    await async2();
    //更改如下：
    setTimeout(function() {
        console.log('setTimeout1')
    },0)
}
async function async2() {
    //更改如下：
	setTimeout(function() {
		console.log('setTimeout2')
	},0)
}
console.log('script start');

setTimeout(function() {
    console.log('setTimeout3');
}, 0)
async1();

new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');


答案：
script start
async1 start
promise1
script end
promise2
setTimeout3
setTimeout2
setTimeout1

```
**递归实现一个深拷贝**
```js
const deepClone = obj => {
    let copy = obj instanceof Array ? [] : {}
	for (let i in obj) {
		 if(obj.hasOwnProperty(i)){
			 copy[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
		 }   
	}
	return copy        //{a:1,b:2}
}

// vuex源码深拷贝
const deepClone = (obj, cache = []) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // 如果传入的对象与缓存的相等, 则递归结束, 这样防止循环
  /**
   * 类似下面这种
   * var a = {b:1}
   * a.c = a
   * 资料: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value
   */
  const hit = cache.filter(c => c.original === obj)[0];
  if (hit) {
    return hit.copy;
  }

  const copy = Array.isArray(obj) ? [] : {};

  // 将copy首先放入cache, 因为我们需要在递归deepClone的时候引用它
  cache.push({
    original: obj,
    copy
  });

  Object.keys(obj).forEach(key => {
    copy[key] = deepClone(obj[key], cache);
  });

  return copy;
};
var a = {b:1}
a.c = a
console.log(deepClone(a));


deepClone({a:1,b:2})
```
## day_03
**函数朝花夕拾**
```
//函数的几种写法
//1.函数表达式
function greet(name) {
    retrun name
}
//2.Lambda表达式
const greet = name => {
    retrun name
}
//函数只return了一个字符串，所以可以
const greet = name => name 
//对象里的方法
const a = {
    //1.普通写法
    greet: function(name) {
        return name
    }
    //2.es6写法
    greet: name => name
    greet(name) {
        retrun name
    }
    
}

```
**非递归实现tree**
```js
let dataArr = [
    { id: 1, name: "办公管理", pid: 0 },
    { id: 2, name: "请假申请", pid: 1 },
    { id: 3, name: "出差申请", pid: 1 },
    { id: 4, name: "请假记录", pid: 2 },
    { id: 5, name: "系统设置", pid: 0 },
    { id: 6, name: "权限管理", pid: 5 },
    { id: 7, name: "用户角色", pid: 6 },
    { id: 8, name: "菜单设置", pid: 6 },
]
const toTree = data => {
    let objData = {}    //存储顶级数据
    data.forEach(e => {
        objData[e.id] = e
    })
    let valArr = []
    data.forEach(item => {
        let parent = objData[item.pid]
        if(parent) {
            if(!Array.isArray(parent.child)) parent.child = []
            parent.child.push(item)
        } else {
            valArr.push(item)
        }
    })
    return valArr
}
toTree(dataArr)
```
**递归将树形结构转换成平级数组**
```js
var dataArr = [
    {id: 1, name: "办公管理", pid: 0 ,
        children:[
            { id: 2, name: "请假申请", pid: 1,
                children:[
                    { id: 4, name: "请假记录", pid: 2 },
                ],
            },
            { id: 3, name: "出差申请", pid: 1},
        ]
    },
    {id: 5, name: "系统设置", pid: 0 ,
        children:[
            { id: 6, name: "权限管理", pid: 5,
                children:[
                    { id: 7, name: "用户角色", pid: 6 },
                    { id: 8, name: "菜单设置", pid: 6 },
                ]
            },
        ]
    },
];

const arr = []
const changeData = data => {
    data.forEach(e => {
        arr.push({
            id: e.id,
            name: e.name,
            pid: e.pid
        }) 
        if(e.children) {
            changeData(e.children)
        }
    })
}
changeData(dataArr)
console.log(arr)

```

**递归链条中所有的父级 id**
```js
const value = 3
const res = []
function fn(data, temp = []) {
    for(node of data) {
        if(node.id === value) {
            res = temp
            break
        }
        if(node.children) {
            fn(node.children, [...temp, ...[node.id]])
        } 
    }
    return [...res, ...[value]]
}
fn(data) // 输出 [1， 3]
```


**冒泡排序**
```js
let nums = [ 2, 3, 4, 44, 9, 4, 3, 2, 5, 1, 65, 2, 3, 6 ]
const bubbleFunc = arr => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i; j++) {
            if(arr[j] < arr[j + 1]) {
                let item = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = item
            }
        }
    }
}
console.log(nums)
```
**快速排序**
```js
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
```
**前端性能优化不完全手册**
```
https://segmentfault.com/a/1190000018827395
```

**前端性能优化**
1. 代码层面
2. webpack方面
```
https://segmentfault.com/a/1190000019499007
```
**ajax和axios、fetch的区别**
```js
// https://www.jianshu.com/p/8bc48f8fde75
ajax 使用XMLHttpRequest对象 多个请求之间如果有先后关系的话，就会出现回调地狱
axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，本质上也是对原生XHR的封装，只不过它是Promise的实现版本，符合最新的ES规范，它本身具有以下特征
fetch 号称是AJAX的替代品，是在ES6出现的，使用了ES6中的promise对象。Fetch是基于promise设计的。Fetch的代码结构比起ajax简单多了，参数有点像jQuery ajax。但是，一定记住fetch不是ajax的进一步封装，而是原生js，没有使用XMLHttpRequest对象
```