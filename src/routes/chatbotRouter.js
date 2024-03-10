'use strict';

const express = require('express');
const router = express.Router();

module.exports = function (options) {
  const generateChatBotController = require('../controllers/chatbotController.js');
  const { eventHandler } = generateChatBotController(options);

  router.post('/', eventHandler);

  return router;
};
