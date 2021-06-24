const { verifyServices } = require('../services');
const {
  verifyJwt,
} = verifyServices;

const OK = 200;
const NOT_FOUND = 404;
const UNAUTHORIZED = 401;

const verifyToken = async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(UNAUTHORIZED).json({ message: 'Login não realizado' });
    }
    const result = await verifyJwt(authorization);

    if (result.message === 'jwt expired')
      return res.status(UNAUTHORIZED).json({ message: 'Login expirado' });

    return res.status(OK).json(result);
  } catch (error) {
    console.error(error);
    return res.status(NOT_FOUND).json({ message: error.message });
  }
};

module.exports = {
  verifyToken,
};