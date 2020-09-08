<!--
 * @Date: 2020-07-14 11:18:38
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-09-08 18:38:30
--> 
## regexp对象的方法
**test**
```js
let regex = /\d/g
regex.test('21d') //true 返回boolean
```
**exce**
```js
let regex = /test(\d)/
regex.exec('now test001 test002') 
//["test001", "001", index: 4, input: "now test001 test002", groups: undefined]
```

//

**match**
```js
let regex = /ab{2,5}c/g;

let string = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc';

console.log(string.match(regex));  //返回一个符合规则的数组['abbc', 'abbbc', 'abbbbc', 'abbbbbbc']

```
// match 和 exec的区别 https://www.cnblogs.com/hyaaon/p/4332678.html
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
