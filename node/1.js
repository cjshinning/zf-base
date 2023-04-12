// js特点：单线程，只能在同一时间干一件事情

// 等待时间到达后放到对应的队列

// js渲染 ui渲染 宏任务
// 肯定是宏任务先执行 因为script 默认是宏任务
// 只会的执行过程都是先清空微任务再来执行宏任务

setTimeout(() => {
  console.log('time1');
  Promise.resolve().then((data) => {
    console.log('成功3');
  })
}, 0)

Promise.resolve().then((data) => {
  console.log('成功1');
  setTimeout(() => {
    console.log('定时器');
  }, 0)
})

Promise.resolve().then((data) => {
  console.log('成功2');
})

// setTimeout(() => {
//   console.log('time1');
// }, 0)

// setTimeout(() => {
//   console.log('time2');
// }, 0)

// setTimeout(() => {
//   console.log('time3');
// }, 0)

// 队列 先进先出 栈 后进先出
// function a() {
//   console.log('a');
//   function b() {
//     console.log('b');
//     function c() {
//       console.log('c')
//     }
//     c();
//   }
//   b();
// }
// a();

// Node是什么？可以做什么？
// Javascript的运行时，可以让js运行在服务端，特点是单线程
// js 基本组成：(BOM DOM) ESMAScript（es6模块） 模块的特性 api包 帮你实现文件操作服务器
// 单线程 好处高并发 不适合cpu密集 适合i/o密集型