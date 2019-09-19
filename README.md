# babel-transform
babel转换将commonjs规范转换为浏览器可识别代码。


## 区别
浏览器支持 import export 方法 <br>
服务器支持 commonjs module.export require <br>
require 也可以因使用 export default 的模块 <br>

es6 部分语法在 nodejs环境也不支持 比如 import <br >
import会被**babel-loader**转换为 obj , '__esModule', require的方式 <br >

这在浏览器端还是不支持，require没定义。。 <br >

需要再转换一次。 <br >

使用browserify 全局安装，在将转换之后的代码转换成闭包传滴数组的方式，<br>
数组内使用数字编号分块请求实现 require 的效果。<br >

## 处理方法

1) 使用 **babel-cli** 将es6转换为 **commonjs**
2) 将 **commonjs** 文件如有需要转换为 浏览器可识别 **browserify （npm i -g browserify**


