const express = require('express');

const { joinController } = require('../src/controllers');
const {
  userCreate,
} = joinController;

const join = express.Router();

join.get('/', userCreate);

module.exports = join;