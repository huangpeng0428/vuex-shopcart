<!--
 * @Date: 2020-07-15 17:35:04
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-07-15 17:54:32
--> 
/*
 * @Date: 2020-07-15 17:35:04
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-07-15 17:35:18
 */ 
**求left, right最终的宽度**
1. 
```
<div class="container">
    <div class="left"></div>
    <div class="right"></div>
</div>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  .container {
    width: 600px;
    height: 300px;
    display: flex;
  }
  .left {
    flex: 1 2 500px;
    background: red;
  }
  .right {
    flex: 2 1 400px;
    background: blue;
  }
</style>
```
#### 总的宽度已经比container宽度宽了，应该使用收缩来计算（flex-shrink)
```
// 溢出宽度： 500 + 400 - 600 = 300
总权重： 500 * 2 + 400 * 1 = 1400

left收缩长度：300 * 2（flex-shrink）* 500 / 1400 = 214.28
right收缩长度：300 * 1（flex-shrink) * 500 / 1400 = 85.72

left长度: 500 - 214.28 = 285.72
right长度： 400 - 85.72 = 314.28 
```

2. 
```
<div class="container">
    <div class="left"></div>
    <div class="right"></div>
</div>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  .container {
    width: 600px;
    height: 300px;
    display: flex;
  }
  .left {
    flex: 1 2 300px;
    background: red;
  }
  .right {
    flex: 2 1 200px;
    background: blue;
  }
</style>
```
#### 总的宽度没有container宽度宽，所以应该使用扩散（flex-grow）
```
多余的宽度： 600 - 300 - 200 = 100
所以left宽度： 300 + 100 / 3 * 1 = 333
right宽度： 200 + 100 / 3 * 2 = 266
```

