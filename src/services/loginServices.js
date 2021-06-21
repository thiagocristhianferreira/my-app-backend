const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256'
};

const loginModel = require('../models/loginModel');
const {
  searchUser,
} = loginModel;


const jwtGenerate = async (email, password) => {
  if (!email || !password) return (
    { status: 401, message: 'É necessário usuário e senha para efetuar o login' }
  );

  const userSearch = await searchUser(email);
  const stringPass = password.toString();
  const isMatch = bcrypt.compareSync(stringPass, userSearch.password);

  if (!userSearch || !isMatch ) return (
    { status: 401, message: 'O usuário não existe ou senha inválida' }
  );

  const { password: passBD, otherInfo } = userSearch;

  const token = jwt.sign({ data: otherInfo }, secret, jwtConfig);

  return ({ token });
};

module.exports = {
  jwtGenerate,
};