function fn1() {
  console.log(this, 2);
}
function fn2() {
  console.log(2);
}

// call的特点
// 1)可以改变当前函数的this
// 2)还会让当前的函数执行

Function.prototype.call = function (context) {
  context = context ? Object(context) : window;
  context.fn = this;
  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']');  //['', '']
  }
  // 利用数组tostring的特性
  let r = eval('context.fn(' + args + ')');
  delete context.fn;
  return r;
}


// fn1.call('hello', '1', '2');
// { }.fn = fn1;

// 常见面试题
// fn1.call(fn2);  //1
fn1.call.call.call(fn2);  //2

// 如果多个call执行，会将this改成fn2