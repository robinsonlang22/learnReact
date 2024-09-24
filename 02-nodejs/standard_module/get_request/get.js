const http = require('http');
const https = require('https');

http.createServer((req, res) => {
    const myURL = new URL(req.url, 'http://localhost:3000');
    res.setHeader('content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    switch (myURL.pathname) {
        case '/api/user':
            httpGet(res);
            break;
        default:
            res.end('404');
    }
}).listen(3000);

function httpGet(response) {
    const url = 'https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4'
    var data = '';
    https.get(url, (res) => {

        res.on('data', (chunk) => {
            data += chunk;
        })

        res.on('end', () => {
            response.end(data);

        })

    })
}
