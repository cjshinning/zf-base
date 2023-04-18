// 模块加载顺序问题

// 默认不写后缀 会先尝试查找文件，如果无法查找到，继续查找文件夹，文件夹下的index.js
// 把文件夹变成一个包，需要创建一个json来描述这个包的入口值
// let str = require('./a'); //如果有package.json会以package.json为准
let str = require('a');
console.log(str);

// 以前的版本，会先去找包

console.log(module.paths);  //第三方查找顺序