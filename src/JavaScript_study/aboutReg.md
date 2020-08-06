<!--
 * @Date: 2020-07-14 11:18:38
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-06 18:38:33
--> 
**match**
```
let regex = /ab{2,5}c/g;

let string = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc';

console.log(string.match(regex));  //返回一个符合规则的数组['abbc', 'abbbc', 'abbbbc', 'abbbbbbc']

```
**test**
```js
let regex = /\d/g
regex.test('21d') //true
```
//https://www.cnblogs.com/wanguofeng/p/10731206.html