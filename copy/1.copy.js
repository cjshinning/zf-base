// 深拷贝 拷贝后的结果更改该是不会影响拷贝前的 拷贝前后是没有关系的
// 浅拷贝 改变拷贝前的内容，会对拷贝只会的有影响 拷贝前和拷贝后是有关系的

// 引用关系
// ...运算符只能拷贝一层（浅拷贝）
// let obj = { name: 'Jenny', address: { x: 100, y: 100 } };
// let o = { ...obj };
// obj.address.x = 200;
// console.log(obj, o);

// let a = [1, 2, 3];
// let arr = [a];
// let newArr = arr.slice();
// newArr[0][0] = 100;
// console.log(arr);

// 深拷贝（不完整，不能实现复杂的拷贝）
// let obj = { name: 'Jenny', address: { x: 100, y: 100 }, un: undefined };
// let o = JSON.parse(JSON.stringify(obj));
// obj.address.x = 200;
// console.log(obj, o);

// 实现一个拷贝 实现一个递归拷贝
function deepClone(obj, hash = new WeakMap()) {
  if (obj == null) return obj;  //如果是null或者undefined就不进行拷贝
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  // 可能是对象或者普通的值 如果是函数的话，是不需要深拷贝
  if (typeof obj !== 'object') return obj;
  // 是对象的话就要进行深拷贝
  // [] {} Object.prototype.toString.call(obj) == [Object Array] ? [] : {}
  if (hash.get(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key]);
    }
  }
  return cloneObj;
}
let obj = { name: 1, address: { x: 100 } };
obj.o = obj;
let d = deepClone(obj);
obj.address.x = 200;
console.log(d);
// 如果对象复杂一点，循环引用