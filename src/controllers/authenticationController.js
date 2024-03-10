'use strict';

const generateAuthenticationService = require('../services/authenticationService.js');
const authenticationService = generateAuthenticationService();

module.exports = function () {
  const validateToken = (req, res, next) => {
    const { token } = req.params;

    if (!token || !authenticationService.isValidToken(token)) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    next();
  };

  return { validateToken };
};
