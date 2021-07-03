const jwt = require('jsonwebtoken');

const {
  userInfosModel: {
    writeUserInfo,
    readerUserInfo,
  }
} = require('../models');

const secret = process.env.JWT_SECRET;

const userInfosSave = async (userData, auth) => {
  const { data: { email } } = jwt.verify(auth, secret);

  const writeUser = await writeUserInfo(userData, email);

  return writeUser;
};

const userInfosRead = async (auth) => {
  const { data: { email } } = jwt.verify(auth, secret);

  const { userInfo } = await readerUserInfo(email);

  return {email, ...userInfo};
};

module.exports = {
  userInfosSave,
  userInfosRead,
};