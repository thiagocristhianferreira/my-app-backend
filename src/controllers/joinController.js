const { joinServices } = require('../services');
const {
  findUser,
  registerUser,
} = joinServices;


const OK = 200;
const NOT_ALLOWED = 405;

const userCreate = async (req, res) => {
  try {
    const { email, pass } = req.body;
    
    const userSearch = await findUser(email);
    if (userSearch) return res.status(NOT_ALLOWED).json({ message: 'Usuário já cadastrado' })

    await registerUser(email, pass);

    return res.status(OK).json({ message: 'Usuário cadastrado com sucesso'});
  } catch (error) {
    console.error(error);
    return res.status(NOT_ALLOWED).json({ message: error.message });
  }
};

module.exports = {
  userCreate,
};