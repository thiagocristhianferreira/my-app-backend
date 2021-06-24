// const { joinModel } = require('../models');
// const {
//   searchUser,
//   addUser,
// } = joinModel;

const verifyJwt = async (token) => {
  const decoded = jwt.verify(token, secret);

  const user = decoded.data.email;

  return ({ message: 'Login válido' });
};

module.exports = {
  verifyJwt,
};