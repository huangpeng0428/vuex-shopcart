**数组内置方法**
1. 新增
   * push(略)
   * unshift
```
let arr = [3, 4, 5];

// 通过 unshift 方法
arr.unshift(2); // [2, 3, 4, 5]
```
2. 删除修改
    * splice
    * slice
    * filter
```
<!-- splice -->

splice() 的语法是：array.splice(start, deleteCount, item1, item2...)
1.start 为数组的开始坐标
2.deleteCount 为需要从开始坐标起，删除的个数，可以为 0，代表不删除
3.item 为需要新增进去的元素。

var nameArr = ['jack', 'luna', 'Amy', 'simis']
//新增
nameArr.splice(1, 0, 'xiaoming')   //['jack', 'xiaoming','luna', 'Amy', 'simis']
//删除
nameArr.splice(3, 1)    //['jack', 'luna', 'Amy']
//修改
nameArr.splice(2, 1, 'xiaoming')    //["jack", "luna", "xiaoming", "simis"]

<!-- slice -->

splice()：所进行的操作会影响到原数组
slice()：所进行的操作不会影响到原数组

const str = ['p','o','l','o','h','u','a', 'n', 'g'];
str.slice(0, 2); // 'po'
str.slice(2); // 'lohuang'

<!-- filter -->
const arr = [12, 5, 8, 130, 44, 12, 5, 8, 130, 44]
const filterArr_1 = arr.filter(e => e >= 10) //[12, 130, 44]
const filterArr_2 = arr.filter((e, i ,arr) => arr.indexOf(e) === i) //[12, 5, 8, 130, 44]
```
3. 查找数组元素
    * find
```
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
]
const inventoryObj = inventory.find(e => e.name === 'apples')  //{name: 'apples', quantity: 2}
```
4. 数组是否包含某元素
```
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
```
5. 数组去重
```
let a = ['1', '2', '3', '4', '3', '2', '1']
const s = new Set(a)
console.log([...s])
```
