const path = require('path');

console.log(path.sep);

const filePath = path.join('/node-revision1', 'built-in-module', 'database.csv')
console.log(filePath);
console.log(path.basename(filePath));
console.log(path.resolve(__dirname));
