const path = require('path')

console.log(path.sep)

const filePath = path.join('/modules', 'app2.js')

console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const asbsolute = path.resolve(__dirname, 'modules', 'app2.js')

console.log(asbsolute);
