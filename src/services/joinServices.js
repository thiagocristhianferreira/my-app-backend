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
  await addUser(email, pass);
  return email;
};

module.exports = {
  findUser,
  registerUser,
};