<!--
 * @Date: 2020-03-24 17:59:41
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-10-14 15:00:30
-->
**Node的path.resolve(__dirname，'./src')**
```
使用方法：
1.path.resolve()方法可以将路径或者路径片段解析成绝对路径
2.传入路径从右至左解析，遇到第一个绝对路径是完成解析，例如path.resolve('/foo', '/bar', 'baz') 将返回 /bar/baz
3.如果传入的绝对路径不存在，那么当前目录将被使用
4.当传入的参数没有/时，将被传入解析到当前根目录
5.零长度的路径将被忽略
6.如果没有传入参数，将返回当前根目录
事例代码:
<pre>
path.resolve('/foo/bar', './baz')
// Returns: '/foo/bar/baz'
path.resolve('/foo/bar', '/tmp/file/')
// Returns: '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')
// if the current working directory is /home/myself/node,
// this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'
</pre>
为什么会出现这样的结果：
1.传入路径从右至左解析，遇到第一个绝对路径是完成解析
2."../"方法向前跳了一个目录
个人总结：
　　path.resolve()是一个修改和整合文件路径的方法
```
**path.resolve()和path.join()的区别**
```
path.join(path1，path2，path3.......)
作用：将路径片段使用特定的分隔符（window：\）连接起来形成路径，并规范化生成的路径。若任意一个路径片段类型错误，会报错。

const path = require('path');
let myPath = path.join(__dirname,'/img/so');      
let myPath2 = path.join(__dirname,'./img/so');
let myPath3=path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');

path.resolve([from...],to)
作用：把一个路径或路径片段的序列解析为一个绝对路径。相当于执行cd操作。
/被解析为根目录
```
**process.cwd()**
```
process.cwd()是指当前node命令执行的文件夹目录
__dirname是指被执行js文件所在的文件夹目录
```

**为什么选择webpack不选择其他的构建工具**
1. 社区生态丰富
2. 配置灵活和插件的扩展性
3. 官方迭代速度快

**webpack主要的组成部分**
1. entry 打包的主入口
2. output 打包的输出
3. mode 'production'  环境
4. module loader配置
5. pligins 插件配置
**webpack打包原理**
1. 递归地构建一个依赖关系图(dependency graph)
2. 使用loader去处理应用程序需要的每个模块
3. 然后将所有这些模块打包成一个或多个 bundle，
4. 通过manifest管理bundle文件的运行与加载
**减少 Webpack 打包时间**
1. 优化loader(优化 Loader 的文件搜索范围 babel编译过的文件缓存起来)
2. HappyPack(将同步执行转换为并行的)
3. DllPlugin()(可以将特定的类库提前打包然后引入)