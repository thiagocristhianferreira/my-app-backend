const express = require('express');

const {
  userInfosController: {
    saveUserInfos,
    readUserInfos,
  },
} = require('../src/controllers');

const userInfos = express.Router();

userInfos.post('/userinfos', saveUserInfos);

userInfos.get('/userinfos', readUserInfos);

module.exports = userInfos;
