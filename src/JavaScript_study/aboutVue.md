## vue2.x数据监听 Object.defineProperty、vue3.x数据监听 Proxy
**Object.defineProperty 不足**
```
https://www.cnblogs.com/xiaoyuchen/p/10547696.html
https://juejin.im/post/5e778c71518825491d3240fd
//数组
1. Object.defineProperty其实可以监听到数组中已有元素的变化，但是vue2.x并没有实现将已存在的数组元素做监听，而是去监听造成数组变化的方法，触发这个方法的同时去调用挂载好的响应页面方法，达到页面响应式的效果
2. 改变超过数组长度的下标的值时，值变化是不能监听到的。这个其实很好理解，不存在的属性当然是不能监听到，因为绑定监听操作在之前已经执行过了，后添加的元素属性在绑定当时都还没有存在，当然没有办法提前去监听它了，但是也请注意并非所有的数组方法都重新写了一遍，只有push，pop，shift，unshift，splice, sort，reverse这七个。至于为什么不用Object.defineProperty去监听数组中已存在的元素变化(尤大：性能问题)
无法监听数组的变化： 数组的这些方法是无法触发set的:push, pop, shift, unshift,splice, sort, reverse.，vue中能监听是因为对这些方法进行了重写
只能监听属性，而不是监听对象本身，需要对对象的每个属性进行遍历。对于原本不在对象中的属性难以监听。

data() {
    return {
        list: [1]
    }
},
this.list[0] = 2   //this.list的值为[2], 但是视图不会更新

//对象
对于不存在的对象属性，不会进行双向绑定操作，因为监听发生在添加之前，后添加的属性没有get, set 属性。可以使用vue.set 进行get set初始化
```

**Proxy**
```
可以监听数组变化
监听的是对象本身
有13种拦截方法
const input = document.getElementById('input');
const p = document.getElementById('p');
const obj = {};

const newObj = new Proxy(obj, {
  get: function(target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: function(target, key, value, receiver) {
    console.log(target, key, value, receiver);
    if (key === 'text') {
      input.value = value;
      p.innerHTML = value;
    }
    return Reflect.set(target, key, value, receiver);
  },
});

input.addEventListener('keyup', function(e) {
  newObj.text = e.target.value;
});
```