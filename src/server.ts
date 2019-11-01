const loaders = require('./loaders');
const config = require('./config');
const express = require('express');
const { Container } = require('typedi');

async function startServer() {
  const app = express();
  await loaders.default({ expressApp: app });
  app.listen(config.port, err => {
    if (err) {
      process.exit(1);
      return;
    }
    console.log(`Server listening on port: ${config.port}`);
  });
}

startServer();
