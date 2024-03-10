'use strict';

const mongoose = require('mongoose');

module.exports = function () {
  const connectDatabase = ({ connectionString, databaseName }) => {
    return mongoose.connect(connectionString, {
      dbName: databaseName
    });
  };

  return {
    connectDatabase
  };
};
