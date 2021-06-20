const express = require('express');

const { loginController } = require('../src/controllers');
const {
  loginReader,
} = loginController;

const login = express.Router();

login.get('/', loginReader);

module.exports = login;
