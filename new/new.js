function Animal(type) {
  this.type = type;
  // 如果当前构造函数返回的是一个引用类型，需要把这个对象返回
  // 函数
  // return { name: 'Jenny' }
}
Animal.prototype.say = function () {
  console.log('say');
}
function mockAnimal() {
  // Constructor => animal 剩余的arguments就是其他的参数
  let Constructor = [].shift.call(arguments);
  console.log(Constructor, arguments);
  let obj = {};
  obj.__proto__ = Constructor.prototype;  //继承原型上的方法
  let r = Constructor.apply(obj, arguments);
  return r instanceof Object ? r : obj;
}
let animal = mockAnimal(Animal, '哺乳类');
// console.log(animal.type);
// animal.say();
// console.log(animal);