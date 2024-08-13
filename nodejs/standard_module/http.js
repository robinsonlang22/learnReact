const http = require('http');
const url = require('url');
const moduleRenderStatus = require('./httpmodule/renderStatus');
const moduleRenderHTML = require('./httpmodule/renderHTML');
const { log } = require('console');

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    return;
  }
  // req接受客户端请求, res响应客户端请求  
  const myURL = new URL(req.url,'http://localhost:3000');
  console.log(myURL);
  const pathname = myURL.pathname;
  res.writeHead(moduleRenderStatus.renderStatus(pathname), {'Content-Type':'text/html;charset=utf-8'});
  res.write(moduleRenderHTML.renderHTML(pathname));
  res.end();
});

server.listen(3000, () => {
  console.log('Server started');
});

