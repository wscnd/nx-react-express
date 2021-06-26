const proxy = require('http-proxy-middleware');
const express = require('express');
const path = require('path');

module.exports = function expressMiddleware(router) {
  router.use(
    '/assets',
    express.static(path.join(__dirname, '../../../../apps/store/src/assets')),
  );
  router.use(
    '/api',
    proxy({
      target: 'http://localhost:3333',
      secure: true,
    }),
  );
};
