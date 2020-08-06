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
**flex**
```
3个参数：
    flex: flex-grow flex-shrink flex-basis (默认值： 0 1 auto)
    flex-grow: 用于设置或检索弹性盒子的扩展比率。(flex: 1, 即每个盒子比率相同)
    flex-shrink： 指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink的值
    flex-basis： 用于设置或检索弹性盒伸缩基准值。
```
**link和important的区别**
```
一：link是XHTML标签，除了加载CSS外，还可以定义其他事务；@import只能加载CSS。

二：link引用CSS时，在页面载入时同时加载；@import需要等页面完全载入后才加载。

三：link是XHTML标签，没有兼容问题；对于@import，低版本的浏览器是不支持的
```