const path = require('path');
const fs = require('fs');

// console.log(process.cwd());
// const rootPath = fs.realpathSync(process.cwd());
// console.log(rootPath);
// const resolvePath = relativePath => path.resolve(rootPath, relativePath);
// console.log(resolvePath('view/index.ts'));

const realPath = fs.realpathSync('d:\\Projects\\til\\..\\WebPlayer');
console.log(fs.realpathSync('d:\\Projects\\til\\..\\WebPlayer'));