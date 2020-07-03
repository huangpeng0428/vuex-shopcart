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