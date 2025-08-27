const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === '/'){
    res.end("<h1>Welcome to my home page</h1>");
  }
  if (req.url === '/about') {
    let result = ''
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        result += `${i}  ${j}`;
      }
    }
    res.write(`<h1>${result}</h1>`)
  } else {
    res.end('<h1>404 not found</h1>')
  }
});


server.listen(3000, () => {
  console.log("server listening on port : 3000");
});
