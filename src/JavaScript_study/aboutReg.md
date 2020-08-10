<!--
 * @Date: 2020-07-14 11:18:38
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-10 15:02:11
--> 
## regexp对象的方法
**test**
```js
let regex = /\d/g
regex.test('21d') //true
```
**exce**
```js
let regex = /test(\d+)/
regex.exce('now test001 test002') 
```

**match**
```js
let regex = /ab{2,5}c/g;

let string = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc';

console.log(string.match(regex));  //返回一个符合规则的数组['abbc', 'abbbc', 'abbbbc', 'abbbbbbc']

```

//https://www.cnblogs.com/aidixie/p/11212283.html

**正则模板简单替换**
```js
var tmp = '{{name}}在学习{{demo}}'
var data = { name: "polo", demo: "js" };
function render(tmp, data) {
  return tmp.replace(/\{\{(.*?)\}\}/g, function(match, key) {
    console.log(data[key.trim()])
    return data[key.trim()];
  });
}
render(tmp, data)
console.log(render(tmp, data));
```
