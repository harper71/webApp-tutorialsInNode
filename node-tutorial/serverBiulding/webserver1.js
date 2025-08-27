const { readFileSync } = require('fs');
const http = require('http');
//get all files
const HomePage =  readFileSync('./templates/index.html')

const server = http.createServer((req, res) => {
  //console.log(req.url);
  //console.log(req.method);

  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(HomePage);
    res.end();
  } else if (req.url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html'})
    res.write('<h1>about page</h1>');
    res.end();
  } else {
    res.writeHead(404, { 'content-type': 'text/html'});
    res.write('<h1> 404 page not found</h1>');
    res.end();
  }
})

server.listen(5000, 'localhost', () => {
  console.log('starting up a server at potr 5000 .....');  
})
