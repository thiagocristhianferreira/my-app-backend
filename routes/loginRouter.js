const express = require('express');

const { loginController } = require('../src/controllers');
const {
  makeLogin,
} = loginController;

const login = express.Router();

login.post('/', makeLogin);

module.exports = login;
