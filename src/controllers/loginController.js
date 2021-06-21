const { loginServices } = require('../services');
const {
  jwtGenerate,
} = loginServices;

const OK = 200;
const CREATED = 201;
const NOT_FOUND = 404;
const UNPROCESSABLE = 422;

const makeLogin = async (req, res) => {
  try {
    const { email, pass } = req.body;
    const result = await jwtGenerate(email, pass);
    if (result.status === 401) return result;
    
    const { token } = result;

    return res.status(OK).json({
      message: 'Login efetuado com sucesso',
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(NOT_FOUND).json({ message: error.message });
  }
};

module.exports = {
  makeLogin,
};