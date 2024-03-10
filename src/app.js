'use strict';

const express = require('express');
const bodyParser = require('body-parser');

module.exports = function (options) {
  //
  const generateApiRouter = require('./routes/apiRouter.js');
  const apiRouter = generateApiRouter(options);

  // Express.js
  const app = express();

  app.use(bodyParser.json());

  // Routing
  app.use('/api', apiRouter);

  // 404
  app.use((req, res, next) => {
    res.status(404).send('Resource not found.');
  });

  // Error Handler
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send('Internal server error.');
  });

  // Starting server
  app.listen(options.port, () => {
    if (options.debug) console.log(`Server listening on port ${options.port}`);
  });

  return app;
};
