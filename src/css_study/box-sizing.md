**box-sizing应用场景**
```
box-sizing 是用于告诉浏览器如何计算一个元素是总宽度和总高度
盒子的四个组成区域相对应，每个盒子有四个边界：内容边界 Content edge、内边距边界 Padding Edge、边框边界 Border Edge、外边框边界 Margin Edge。

标准盒模型 box-sizing: content-box
content-box:
width = content width;
height = content height
IE盒模型 box-sizing: border-box
border-box:
width = border + padding + content width
heigth = border + padding + content heigth

//应用场景
https://blog.csdn.net/luxu1990/article/details/83743787
```