<!--
 * @Date: 2020-01-15 11:09:52
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-09-29 16:54:27
--> 
**对象的扩展**
1. super关键字
```js
// 报错
const obj = {
  foo: super.foo
}

// 报错
const obj = {
  foo: () => super.foo
}

// 报错
const obj = {
  foo: function () {
    return super.foo
  }
}
```
上面三种super的用法都会报错，因为对于 JavaScript 引擎来说，这里的super都没有用在对象的方法之中。第一种写法是super用在属性里面，第二种和第三种写法是super用在一个函数里面，然后赋值给foo属性。目前，只有对象方法的简写法可以让 JavaScript 引擎确认，定义的是对象的方法。

JavaScript 引擎内部，super.foo等同于Object.getPrototypeOf(this).foo（属性）或Object.getPrototypeOf(this).foo.call(this)（方法）。

```
const proto = {
  x: 'hello',
  foo() {
    console.log(this.x);
  },
};

const obj = {
  x: 'world',
  foo() {
    super.foo();
  }
}

Object.setPrototypeOf(obj, proto);

obj.foo() // "world"
```
##Object.setPrototypeOf
```
Object.setPrototypeOf()可以在创建对象以后去改变对象的prototype
Object.setPrototypeOf(obj, proto); //obj.prototype = proto

```
**proxy**
```
https://es6.ruanyifeng.com/#docs/proxy
```

**rest参数**
```
ES5中的arguments
function func() {
  console.log(arguments)
  //返回类数组 arguments对象
  通过Array.prototype.slice.call(arguments)转成真正数组
}
ES6中的rest参数剩余运算符
let func = (...rest) => {
  console.log(rest)
  //[1,2,3]
}

func(1,2,3)
```
**箭头函数**
```js
//this指向问题
https://blog.csdn.net/w390058785/article/details/82884032
```
**class类的实现**
```js
function _classCallCheck(instance, Constructor) {　// instanceof 检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
		  if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		  }
		}
		var Parent = function Parent(a) {
			console.log(this, Parent)
		  _classCallCheck(this, Parent);

		  this.filed2 = 2;

		  this.func1 = function () { };

		  this.filed1 = a;
		};
		
		let p = new Parent()
		console.log(p)
```
// https://www.cnblogs.com/memphis-f/p/12029574.html
1. 调用_classCallCheck方法判断当前函数调用前是否有new关键字
　构造函数执行前有new关键字，会在构造函数内部创建一个空对象，将构造函数的prototype指向这个空对象的__prpto__，并将this指向这个空对象。如上，_classCallCheck中：this   instanceof Parent，返回true。若构造函数前面没有new则构造函数的prototype不会出现在this的原型链上，返回false

2. 将class内部的变量函数赋值给this

3. 执行constructor内部的逻辑

4. return this（构造函数默认在最后帮我们做了这一步）
   
**Symbol的应用**
1. 使用Symbol定义类的私有属性/方法
2. 用于对象的属性，可以保证不会有同名的属性
//https://www.cnblogs.com/linziwei/p/10818101.html

**extends中的super**
1. 第一种情况，`super`作为函数调用时，代表父类的构造函数。ES6 要求，子类的`constructor`构造函数必须执行一次`super`函数。
   作为函数时，`super()`只能用在子类的构造函数之中，用在其他地方就会报错。
2. `super`作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
3. es6规定，在子类普通方法中通过`super`调用父类的方法时，方法内部的`this`指向当前的子类实例
4. 在子类的静态方法中通过`super`调用父类的方法时，方法内部的`this`只想当前的子类，而不是子类的实例
```js
class A {
  constructor() {
    this.x = 1;
  }
  print() {
    console.log(this.x);
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  m() {
    super.print();
  }
}

let b = new B();
b.m() // 2
```