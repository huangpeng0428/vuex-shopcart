##对象（Object）类型
```
例子：
const changeObject = (obj) => {
    obj.age = 26
    obj = {
        age: 24,
        name: 'huangpeng'
    }
    return obj
}
const obj = {
    name: 'polohuang',
    age: 25
}
let obj1 = changeObject(obj)
console.log(obj)    //{name: 'polohuang',age: 26}
console.log(obj1)   //{name: 'huangpeng',age: 24}
```