**对象的扩展**
1. super关键字
```
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