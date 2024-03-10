'use strict';

const TOKENS = [
  'A95MJt3Kv5WeaDDLFfKQqcdpyNf4KuyR',
  'u3jcjfPvPLGG4NayrEih6h48S8Nu2JfZ',
  'Gwhz86JG52DzfHe2ESHgVnQ5Atkk5XRu',
  'qz26QKLN87egJJm6dPUksPsUS6TYYHt2',
  'Cyu7F3mixdFJULC2KgdZ3pWfk6JV3wKg'
];

module.exports = function () {
  const isValidToken = (token) => {
    return TOKENS.includes(token);
  };

  return {
    TOKENS,
    isValidToken
  };
};
