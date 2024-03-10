'use strict';

module.exports = function (options) {
  const generateChatBotService = require('../services/chatbotService.js');
  const chatBotService = generateChatBotService(options);

  const eventHandler = async (req, res) => {
    try {
      const { event } = req.body;

      const response = await chatBotService.eventHandler(event);

      return res.json({ error: '', data: response });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };

  return { eventHandler };
};
