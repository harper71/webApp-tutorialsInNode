const HTTP = require('http')

const server = HTTP.createServer((request, response) => {
  if (request.url === '/') {
    response.end('welcome to our home page')
    return;
  }
  if (request.url === '/about') {
    response.end('my name is prince azuka')
    return;
  }
  response.end(`
  <h1>Oops</h1>
  <p> we can't find the page you requested</p>
  <a href="/">back home</a>
  `);
})

server.listen(5000, 'localhost');
