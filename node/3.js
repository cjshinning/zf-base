// process 进程
// Buffer 缓存区 存储二进制，16进制
// clearInterval
// clearTimeout
// setImmediate
// setTimeout
// setInterval

// console.log(Object.keys(process), '进程对象');

// （1）node库 区分平台
// console.log(process.platform);  /win32

// （2）argv参数
// console.log(process.argv.slice(2)); //从第二个开始是我们希望用的

// const { program } = require('commander');

// program.on('--help', function () {
//   console.log('node xxx');
// })

// program
//   .option('-p, --port <value>', 'set my port');

// program
//   .command('create')
//   .action(function () {
//     console.log('vue create project');
//   })

// program.version('1.0.0');
// let obj = program.parse(process.argv);

// console.log(process.argv.slice(2), '参数');

// [--port,3000]
// let obj = process.argv.slice(2).reduce((memo, current, index, arr) => {
//   if (current.startsWith('--')) {
//     memo[current.slice(2)] = arr[index + 1];
//   }
//   return memo;
// }, {})

// console.log(obj);

// （3）evn环境变量
// npm run serve
// npm run build
// npm run unit
// console.log(process.env);

// （4）cwd 当前工作目录
// console.log(process.cwd()); //在哪儿运行  就是当前的工作目录

// console.dir(global, { showHidden: true })

// exports require __dirname __filename process