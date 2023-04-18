// 模板引擎 {{name}} abc

// es6中的模板字符串
// 模板引擎 ejs handlerbar underscore jade nunjucks
// {{}} <%%> {%%}
let ejs = require('ejs');
let fs = require('fs');
let path = require('path');
let str = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');

function render(str, obj) {
  let head = 'let str=""\r\nwith(obj){\r\n';
  head += 'str+=`'
  str = str.replace(/<%=(.+?)%>/g, function () {
    return '${' + arguments[1] + '}'
  })
  let content = str.replace(/<%(.+?)%>/g, function () {
    return '`\r\n' + arguments[1] + '\r\nstr+=`'
  });
  let tail = '`\r\n return str}'

  // console.log(head + content + tail);
  let fn = new Function('obj', head + content + tail);
  // console.log(fn.toString());
  return fn(obj);
}

// with new Function Reg
let newStr = render(str, {
  arr: [1, 2, 3]
});
console.log(newStr);


// let name = 'Jenny';
// let age = 10;
// let str = "${name}今年${age}岁了";

// // replace 正则匹配 分组
// str = str.replace(/\$\{(.+?)\}/g, function () {
//   return eval(arguments[1]);
// })


// console.log(str);