const express = require('express');

const { verifyController } = require('../src/controllers');
const {
  verifyToken,
} = verifyController;

const verify = express.Router();

verify.post('/verify', verifyToken);

module.exports = verify;
