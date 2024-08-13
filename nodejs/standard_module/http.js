const http = require('http');
const moduleRenderStatus = require('./httpmodule/renderStatus');
const moduleRenderHTML = require('./httpmodule/renderHTML');

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    return;
  }
  // req接受客户端请求, res响应客户端请求  
  console.log(req.url);
  // 设置响应头
  res.writeHead(moduleRenderStatus.renderStatus(req.url), {'Content-Type':'text/html;charset=utf-8'});
  res.write(moduleRenderHTML.renderHTML(req.url));
  res.end();
});

server.listen(3000, () => {
  console.log('Server started');
});

