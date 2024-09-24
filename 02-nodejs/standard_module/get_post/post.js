const http = require('http');
const https = require('https');

http.createServer((req,res)=>{
    const myURL = new URL(req.url,'http://localhost:3000');
    res.setHeader('content-type','application/json');
    res.setHeader('Access-Control-Allow-Origin','*');

    switch(myURL.pathname){
        case '/api/user':
            httpPost(res);
            break;
        default:
            res.end('404');
    }
}).listen(3000);    

function httpPost(response){
    const url = 'https://m.xiaomiyoupin.com/mtop/market/search/placeHolder'
    var data = '';
    const options = {
        hostname:'m.xiaomiyoupin.com',
        port:'443',
        path:'mtop/market/search/placeHolder',
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        }
    }

    const req = https.request(options, () => {

        res.on('data',(chunk)=>{
            data += chunk;
          })   
   
        res.on('end',()=>{
           response.end(data);
        })
    })

    req.write(JSON.stringify([{},{"baseParam":{"ypClient":1}}]))
    req.end()
}
