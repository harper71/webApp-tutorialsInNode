const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  const fileStream = fs.createReadStream('create');

  fileStream.on('open', () => {
    fileStream.pipe(res)
  });

  fileStream.on('err', (err) => {
    res.end(err);
  });
})
  .listen(5000);
