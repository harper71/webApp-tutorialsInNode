const fs = require('fs');
// defalut 64kb
// last buffer - reminder
// highWaterMark - control size

const stream = fs.createReadStream('./value.txt', {highWaterMark: 9000 }, {encoding: 'utf8'});

stream.on('data', (result) => {
  console.log(result);
})