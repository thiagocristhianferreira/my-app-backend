const { joinServices } = require('../services');
const {
  verifyJwt,
} = joinServices;


const OK = 200;
const NOT_ALLOWED = 405;

const favoritesCharactersCreate = async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(UNAUTHORIZED).json({ message: 'Login não realizado' });
    }
    const result = await verifyJwt(authorization);
    
    // const userSearch = await findUser(email);
    // if (userSearch) return res.status(NOT_ALLOWED).json({ message: 'Usuário já cadastrado' })

    // await registerUser(email, pass);

    return res.status(OK).json({ message: 'Usuário cadastrado com sucesso'});
  } catch (error) {
    console.error(error);
    return res.status(NOT_ALLOWED).json({ message: error.message });
  }
};

module.exports = {
  favoritesCharactersCreate,
};