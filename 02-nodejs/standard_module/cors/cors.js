const http = require('http');

http.createServer((req,res)=>{
    const myURL = new URL(req.url,'http://localhost:3000');
    res.setHeader('content-type','application/json');
    res.setHeader('Access-Control-Allow-Origin','*');
    switch(myURL.pathname){
        case '/api/user':
            res.end(JSON.stringify({name:'zhangsan',age:18}));
            break;
        default:
            res.end('404');
    }
}).listen(3000);    
