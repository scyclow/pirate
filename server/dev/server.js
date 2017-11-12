'use strict';

require('pretty-error').start();

const http = require('http');
const { connectedServer, onConnect } = require('../src');
const config = require('../src/config/env').default

function startServer(app) {
  const server = http.createServer(app);
  server.listen(config.PORT, onConnect);

  let currentApp = app;
  if (module.hot) {
    module.hot.accept(['../src/index.js'], () => {
      server.removeListener('request', currentApp);
      currentApp = require('../src').app;
      server.on('request', currentApp);
    });
  }
}

connectedServer
  .then(startServer)
  .catch(err => {
    console.error(err);
    process.exit();
  });

