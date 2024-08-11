const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  console.log(req.url);
  res.write('Hello, World111!\n');
  res.end('Hello, World!\n');
});

server.listen(3001, () => {
  console.log('Server running at http://localhost:3001/');
});

