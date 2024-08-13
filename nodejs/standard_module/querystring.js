const str = 'name=zhangsan&age=18&location=beijing';

const querystring = require('querystring');
const query = querystring.parse(str);
console.log(query);

const link = querystring.stringify(query);
console.log(link);  

const escape = querystring.escape(str);
console.log(escape);

const unescape = querystring.unescape(escape);
console.log(unescape);  



