##组合继承
组合继承是最常用的继承方式
```
function Parent(value) {
    this.val = value
}

Parent.prototype.getVal = function() {
    console.log(this.val)
}

function Child(value) {
    Parent.call(this, value)
}

Child.prototype = new Parent()
const child = new Child(1)
console.log(child.val)
child.getVal()
child instanceof Parent // true
```
##寄生组合继承
这种继承方式对组合继承进行了优化，组合继承缺点在于继承父类函数时调用了构造函数，我们只需要优化掉这点就行了。
```
function Shape() {
    this.x = 0;
    this.y = 0;
}

//父类原型上的方法
Shape.prototype.move = function(value) {
    return value
}

function Child() {
    Shape.call(this)
}

Child.prototype = Object.create(Shape.prototype)		//Object.create创建新对象, 将会使用现有的对象来提供新创建对象的__proto__
Child.prototype.constructor = Child

const child = new Child()
console.log(child.x)  //0
console.log(child.move(2))  //2
```