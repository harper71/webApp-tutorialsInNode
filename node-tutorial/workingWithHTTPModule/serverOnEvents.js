const http = require('http');

const server = http.createServer()


server.on('request', (req, res) => {
  user = {
    names: ['prince', 'azuka'],
  };

  let responseContent = '';

  user.names.forEach((element, index) => {
      responseContent += `<h1>Hello: ${element} id: ${index}</h1>`
      console.log(element);
  });

  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(responseContent)

});

server.listen(5000, () => {
  process.stdout.write('Starting the server ...\n')
})