const { createProxyMiddleware } = require('http-proxy-middleware');  //注意写法，这是1.0以后的版本，最好按抄
module.exports = function (app) {
    app.use(createProxyMiddleware('/login',
        {
            target: 'http://127.0.0.1:7001',
            pathRewrite: {
                '^/login': 'login',
            },
            changeOrigin: true,
        }
    ));
};