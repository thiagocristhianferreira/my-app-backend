const bcrypt = require('bcrypt');

const { joinModel } = require('../models');
const {
  searchUser,
  addUser,
} = joinModel;

const findUser = async (email) => {
  const user = await searchUser(email);
  return user;
};

const registerUser = async (email, pass) => {
  const salt = bcrypt.genSaltSync(10);
  
  const encryptedPass = bcrypt.hashSync(pass, salt)
  
  await addUser(email, encryptedPass);
  return email;
};

module.exports = {
  findUser,
  registerUser,
};