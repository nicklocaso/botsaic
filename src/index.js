'use strict';

const EventEmitter = require('events');

const generateDatabaseService = require('./services/databaseService.js');
const generateApp = require('./app.js');

module.exports = class Kernel {
  constructor() {
    this.databaseService = generateDatabaseService();
    this.eventHandler = new EventEmitter();
  }

  async start(options = {}) {
    if (options.databaseOptions) {
      // Example:
      // await connectDatabase({
      //   connectionString: process.env.MONGODB_CONNECTION_STRING,
      //   databaseName: process.env.MONGODB_DATABASE_NAME
      // });
      try {
        await this.databaseService.connectDatabase(options.databaseOptions);
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
    }
    try {
      // Example:
      // await generateApp({ port: process.env.PORT ?? 3000 });
      await generateApp(Object.assign({}, options, { eventHandler: this.eventHandler }));
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }

  onUnsupportedType(callback) {
    this.eventHandler.on('onUnsupportedType', (...args) => {
      callback(...args);
    });
  }

  onTextMessage(callback) {
    this.eventHandler.on('onTextMessage', (...args) => {
      callback(...args);
    });
  }
};
