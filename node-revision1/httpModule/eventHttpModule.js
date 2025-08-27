const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/') {
    res.end('wellcome');
  }
  if (req.url === '/about') {
    res.end('all new data');
  }
  
});

server.listen(5000);
