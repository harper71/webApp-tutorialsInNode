const fs = require('fs')

const stream = fs.createReadStream(`${__dirname}/values2.txt`);


stream.on('data', (result) => {
  console.log(result);
});
