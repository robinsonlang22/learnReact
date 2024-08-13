const http = require('http');

const server = http.createServer((req, res) => {
  // req接受客户端请求, res响应客户端请求  
  console.log(req.url);
  // 设置响应头
  res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
  res.write(renderHTML(req.url));
  res.end('request success!\n');
});

server.listen(3000, () => {
  console.log('Server started');
});

function renderHTML(url) {
  return `
  <html>
    <body>
      <b>hello world</b>
      <div>hello everyone</div>
    </body>
  </html>
  `
}