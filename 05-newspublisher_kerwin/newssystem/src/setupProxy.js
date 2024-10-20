const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    // 拦截所有以 /api 开头的请求
    '/api',
    createProxyMiddleware({
      // the domain name of the target web server
      target: 'http://localhost:5000',
      // 是否改变请求的来源
      changeOrigin: true,
    })
  );
};