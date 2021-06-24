const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const verifyJwt = async (token) => {
  jwt.verify(token, secret);

  return ({ message: 'Login válido' });
};

module.exports = {
  verifyJwt,
};