##对BFC的理解
####BFC的定义
块级格式化上下文，是web页面中盒模型布局的css渲染模式
####形成条件
1. 浮动元素，float除none以外
2. 定位元素 position (fixed, absolute)
3. 、display 为以下其中之一的值 inline-block，table-cell，table-caption；
4. overflow 除了 visible 以外的值（hidden，auto，scroll）

####BFC的特性
1. 内部的Box会在垂直方向上一个接一个的放置。
2. 垂直方向上的距离由margin决定
3. bfc的区域不会与float的元素区域重叠。
4. 计算bfc的高度时，浮动元素也参与计算
5. bfc就是页面上的一个独立容器，容器里面的子元素不会影响外面元素。

####实践是检验真理的唯一标准
```
https://www.cnblogs.com/chen-cong/p/7862832.html
```