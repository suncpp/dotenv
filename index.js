// console.log(process)
// process是什么   进程对象
// process.env 属性返回包含用户环境的对象。
// console.log(process.env)
// const { env } = require('process');

// env.foo = 'bar';
// console.log(env.foo);


require('dotenv').config()
console.log(process.env) 