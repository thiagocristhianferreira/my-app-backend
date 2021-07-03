const {
  userInfosServices: {
    userInfosSave,
    userInfosRead,
  },
} = require('../services');

const OK = 200;
const NOT_FOUND = 404;

const saveUserInfos = async (req, res) => {
  try {
    const userData = req.body;
    const auth = req.headers.authorization;
    
    await userInfosSave(userData, auth);

    return res.status(OK).json({ message: 'Dados salvos com sucesso' });
  } catch (error) {
    console.error(error);
    return res.status(NOT_FOUND).json({ message: error.message });
  }
};

const readUserInfos = async (req, res) => {
  try {
    const auth = req.headers.authorization;
    
    const result = await userInfosRead(auth);

    return res.status(OK).json(result);
  } catch (error) {
    console.error(error);
    return res.status(NOT_FOUND).json({ message: error.message });
  }
};

module.exports = {
  saveUserInfos,
  readUserInfos,
};