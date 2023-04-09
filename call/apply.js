function fn1() {
  console.log(this, 2);
}
function fn2() {
  console.log(2);
}

// call的特点
// 1)可以改变当前函数的this
// 2)还会让当前的函数执行

Function.prototype.apply = function (context, args) {
  context = context ? Object(context) : window;
  context.fn = this;
  if (!args) {
    return context.fn();
  }
  // 利用数组tostring的特性
  let r = eval('context.fn(' + args + ')');
  delete context.fn;
  return r;
}


fn1.call('hello', ['1', '2']);
