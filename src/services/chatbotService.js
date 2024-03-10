'use strict';

module.exports = function (options) {
  const handler = options.eventHandler;

  const eventHandler = async (event) => {
    const { id, from, date, platform, data } = event;

    if (options.debug) {
      console.log(`Received event with ID ${id} from ${from.name} (${from.username}).`);
      console.log(`Timestamp: ${date}`);
      console.log(`Platform: ${platform}`);
    }

    if (data.type === 'text') {
      if (options.debug) console.log(`Text Event: ${data.text}`);
      handler.emit('onTextMessage', { ctx: { event } });
    } else {
      if (options.debug) console.log(`Unsupported event type: ${data.type}`);
      handler.emit('onUnsupportedType', { ctx: { event } });
    }

    return { toChange: 'grande!' };
  };

  const sessionHandler = async (session) => {
    const { id, from, date, platform, data } = session;
  };

  return { eventHandler, sessionHandler };
};
