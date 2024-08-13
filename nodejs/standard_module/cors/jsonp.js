const http = require('http');

http.createServer((req,res)=>{
    const myURL = new URL(req.url,'http://localhost:3001');
    switch(myURL.pathname){
        case '/api/user':
            const callback = myURL.searchParams.get('callback');
            res.end(`${callback}(${JSON.stringify({name:'zhangsan',age:18})})`);
            break;
        default:
            res.end('404');
    }
}).listen(3001);    
