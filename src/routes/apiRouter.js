'use strict';

const express = require('express');
const router = express.Router();

module.exports = function (options) {
  const generateChatBotRouter = require('./chatbotRouter.js');
  const chatBotRouter = generateChatBotRouter(options);

  const generateApiController = require('../controllers/authenticationController.js');
  const { validateToken } = generateApiController(options);

  router.use('/:token/chatbot', validateToken, chatBotRouter);

  return router;
};
