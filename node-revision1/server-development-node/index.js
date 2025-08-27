const http = require('http');
const fs = require('fs')

const HomePage = fs.readFileSync('./template/index.html');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'content-type': 'text/html'})
    res.write(HomePage)
    res.end();
  } else if (req.url === '/about') {
     res.writeHead(200, {'content-type': 'text/html'});
     res.write('About Page')
     res.end();
  }

});

server.listen(5000);