const proxy=require("http-proxy-middleware")


module.exports = function (app) {
  app.use(proxy('/rap2', {
    target: 'http://rap2api.taobao.org',
    changeOrigin:true,
    pathRewrite: {
      '^/rap2': '/app',
    },
  })),
  app.use(proxy('/test', {
    target: 'http://api.douban.com',
    changeOrigin: true,
    pathRewrite: {
      '^/test': '/v2',
    },
  }));
  app.use(proxy('/api', {
    target: 'https://movie.douban.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/j',
    },
  }))
};