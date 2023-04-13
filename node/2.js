// node 全局对象 global 默认可以直接使用的不用声明的对象
// console.log(this);

// 浏览器中的this 是window

// console.log(Object.keys(globalThis));
// process 进程
// Buffer 缓存区 存储二进制，16进制
// clearInterval
// clearTimeout
// setImmediate
// setTimeout
// setInterval

// node中的事件环，node 10以前和浏览器不一样 11以后和浏览器一样
// setImmediate(() => {
//   console.log('setImmediate');
// })

// setTimeout(() => {
//   console.log('setTimeout');
// })

// const fs = require('fs');

// fs.readFile('./name.txt', 'utf8', function () {
//   setImmediate(() => {
//     console.log('setImmediate');
//   })

//   setTimeout(() => {
//     console.log('setTimeout');
//   })
// })

Promise.resolve().then(data => {
  console.log(data);
})
process.nextTick(() => {
  console.log('nextTick')
})

// node>10 现在的版本就是 清空一个宏任务，就情况微任务
// node<=10以前的版本是等待整个队列执行后再清空微任务