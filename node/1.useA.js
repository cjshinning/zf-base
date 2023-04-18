// node 前端浏览器中js DOM BOM ECSMSCRIPT
// 新增了很多模块 内置模块 核心模块

// commonjs规范
// 模块系统 1)如何使用一个模块 2)如果定义一个模块 3)如何导出一个模块

// 模块的分类 node 自定义模块（开头有路径 相对 绝对的） 内置模块 第三方模块

// 模块化的作用 1）命名冲突 2）方便维护
// 1）可以通过生命对象的方式实现模块化 缺陷就是每次调用的时候 增加前缀
// 2）给当前的内容增加一个函数

// let str = function () {
//   const str = 'hello';
//   module.exports = str;
//   return module.exports;
// }()

let str = require('./a');  //默认会自动添加 .js后缀 .json .node
// console.log(str);

// （1）要先将 ./a的文件转化为绝对路径
// （2）读取这个文件，需要增加一个函数，函数内部需要返回module.exports
// （3）让函数执行
// （4）new Module创建模块 根据文件名创建 exports id
// module.load 加载模块
// module._extensions 代表的是一个对象 对象上放着很多处理的方法
// exports, requre, module, __filename, __dirname
// （5）最终返回module.exports

// （1）可以再浏览器中调试 node --inspect-brk 文件名  chrome://inspect
// （2）可以在vscode里面调试

// path 专门用来处理路径的 fs 文件系统操作文件 vm 虚拟机模块
const path = require('path');
// // 解析的是绝对路径
// console.log(__dirname, process.cwd());
console.log(path.resolve(__dirname, 'a', '/'));
console.log(path.join(__dirname, 'a', 'b', '/'));
console.log(path.dirname(__dirname)); //取父路径
console.log(path.basename('1.js', '.js'));
console.log(path.extname('1.min.js'));
// 一般会用path.resolve,遇到/用path.join

// fs
const fs = require('fs');
// 读取文件一般采用绝对路径
let r = fs.readFileSync(path.resolve(__dirname, './a.js'), 'utf8');
console.log(r);

// err first exists异步方法被取消了
let flag = fs.existsSync(path.resolve(__dirname, './a.js'));
console.log(flag);

// 读取的文件是什么格式的
// 我怎么让字符串执行 function(){}

// 1）eval 模块的特性是保证独立
// let a = 1;
// let b = 100;
// eval('console.log(a)'); //不干净的执行

// 2）new Function  模板引擎 会采用newFunction的形式
// let str = 'console.log(a)';
// let fn = new Function(str);
// console.log(fn.toString());

let vm = require('vm');
let a = 1;
vm.runInThisContext('console.log(a)');