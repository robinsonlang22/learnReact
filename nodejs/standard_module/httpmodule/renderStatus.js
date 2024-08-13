function renderStatus(url) {
    router = ['/home', '/list','/api/home','/api/list'];
    return router.includes(url)? 200 : 404;
  }

exports.renderStatus = renderStatus;

