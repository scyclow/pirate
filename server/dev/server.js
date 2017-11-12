'use strict';

require('pretty-error').start();
const http = require('http');
const { app, PORT } = require('../src');

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log('alright.....')
});

let currentApp = app;
if (module.hot) {
  module.hot.accept(['../src/index.js'], () => {
    server.removeListener('request', currentApp);
    currentApp = require('../src').app;
    server.on('request', currentApp);
  });
}

