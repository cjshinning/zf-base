const str = 'hello';
// 1.module.exports = str;
// 2.exports.a = str;
// 3.module.exports.a = str;

exports.a = str;
module.exports = str; //不支持两种到处，如果都有只默认支持module.exports
