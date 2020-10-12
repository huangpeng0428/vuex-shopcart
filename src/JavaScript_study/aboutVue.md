<!--
 * @Date: 2020-03-25 15:12:04
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-10-12 16:33:52
 -->
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
**vuex实现原理**
```
https://www.jianshu.com/p/d95a7b8afa06
```
**vue两种模式**
```
vue有两种形式的代码 compiler（模板）模式和runtime模式（运行时），vue模块的package.json的main字段默认为runtime模式， 指向了"dist/vue.runtime.common.js"位置。
csdn: https://blog.csdn.net/wxl1555/article/details/83187647?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1.nonecase
```
**vue全局自动化注册组件**
```js
installComs(require['context']('./', false, /\.vue$/), 'Edit')
export const installComs = (context: any, type: string): any => {
  console.log(context.keys())
    return context.keys().reduce((acc: any, cur: any) => {
      const name: string = type + cur.match(/^.\/(.*).vue$/)[1]
      acc[name] = context(cur).default
      return acc
    }, {})
}

解释： https://www.jianshu.com/p/bf5b1747bcfe
```
**vue一些比较不常见的属性**
```
$props：当前组件接收到的 props 对象。Vue 实例代理了对其 props 对象属性的访问。
$attrs：包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。
$listeners：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。
https://www.jianshu.com/p/ce8ca875c337

$optiation
//在data外面定义的属性和方法通过$options可以获取和调用
export default {
  name: 'App',
  option: 'test',
  components: {
    product,
    cart,
    info
  },
  created() {
    console.log(this.$options.option);  // test
  }
}

provide 和 inject: 这对选项是一起使用的。以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。
https://blog.csdn.net/lfcss/article/details/88786332
```
**vue computed原理**
```
computed 是在beforeCreated 和 created 之间执行的
https://blog.csdn.net/u013970232/article/details/90317829
https://segmentfault.com/a/1190000016368913
```
**vue nextTick原理**
```
https://segmentfault.com/a/1190000012861862
```
**keep-alive原理**
```
https://www.jianshu.com/p/9523bb439950
```
**router和route的区别**
```
https://blog.csdn.net/benben513624/article/details/86657492
```
**vue模版转AST语法树（包括render）**
```
https://segmentfault.com/a/1190000017374492
```
#### virtual Dom
```
vue源码中虚拟dom构建经历了template编译成AST语法树->在转换为render函数,执行render函数,最终返回一个vnode
//https://segmentfault.com/a/1190000017544298
```
#### vue中对数组的双向绑定做了特殊处理
```js
//创建一个对象指向数组的prototype
const arrayProto = Array.prototype
export const arrayMethods = Object.create(arrayProto)
1.继续监听插入类方法（push、unshift、splice）带入的新数据
2.数组方法在调用时强行触发通知：dep.notify()
```
#### weex原理
```
https://www.codercto.com/a/90376.html
```
**runtime-compiler 和 runtime-only 两种模式的理解**
```js
区别：
1、runtime-only 比 runtime-compiler 轻 6kb

2、runtime-only 运行更快

3、runtime-only 其实只能识别render函数，不能识别template，.vue文件中的也是被 vue-template-compiler 翻译成了
render函数，所以只能在.vue里写 template
```
**为什么使用v-for时必须添加唯一的key?**
```
key是给每一个vnode的唯一id,可以依靠key,更准确, 更快的拿到oldVnode中对应的vnode节点

vue中列表循环需加:key="唯一标识" 唯一标识可以是item里面id index等，因为vue组件高度复用增加Key可以标识组件的唯一性，
为了更好地区别各个组件 key的作用主要是为了高效的更新虚拟DOM

https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/1
https://www.jianshu.com/p/4bd5e745ce95
```