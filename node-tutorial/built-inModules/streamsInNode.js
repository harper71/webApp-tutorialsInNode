/*
streams are used to read and write data sequenctially
types
writeable
readable
duplex
transform
*/
const fs = require('fs');
/*
for (let i = 0; i < 10000; i++) {
  fs.writeFileSync('create', `hello world id: ${i}\n`, { flag: 'a' })
}
*/

const  stream = fs.createReadStream('create');
// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = fs.creatReadStream(path, { highWaterMark:90000 })
stream.on('data', (result) => {
  console.log(result);
});
