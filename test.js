// 解析env文件，解析为{}
// 讲键值对，写入到env中

const { readFileSync } = require('fs');
const path = require('path');
const { cwd, env  } = require('process');
// process.cwd() 方法返回 Node.js 进程的当前工作目录。


const parse = (data) => {
  const obj = {};
  // S3_BUCKET="YOURS3BUCKET"
  // SECRET_KEY="YOURSECRETKEYGOESHERE"
  // TEST_KEY="TEST"
  data.toString().split(/\n/).forEach((item) => {

    const [key, value] = item.split('=');
    obj[key] = value.replace(/'|"/g,'') || '';
  })

  console.log(obj)
  return obj
}


const start = () => {
  // console.log(cwd())
  // readFileSync();
  let dotenvPath = path.resolve(cwd(), '.env')
  // console.log(dotenvPath)
  console.log(readFileSync(dotenvPath,'utf8'))
  let parsed = parse(readFileSync(dotenvPath,'utf8'))
  // console.log(parsed)

  Object.keys(parsed).forEach(key => {
    if (!Object.prototype.hasOwnProperty.call(env,key)) {
      env[key] = parsed[key]
    }
  });

  console.log(env)
}

start();