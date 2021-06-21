const HTTP_UNAUTHORIZED_STATUS = 401;
const HTTP_BAD_REQUEST_STATUS = 400;
const PASS_MIN = 6;

const tokenVerification = (req, res, next) => {
  const { authorization } = req.headers;
  const tokenValidation = /^[0-9a-zA-Z]{16}$/;
  if (!authorization) {
    return res.status(HTTP_UNAUTHORIZED_STATUS).json({ message: 'Token não encontrado' });
  }
  if (!tokenValidation.test(authorization)) {
    return res.status(HTTP_UNAUTHORIZED_STATUS).json({ message: 'Token inválido' });
  }
  next();
};

const nameVerification = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < 3) {
    return res.status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const emailValidation = (req, res, next) => {
  const { email } = req.body;
    const validationEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!email) {
      return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: 'O campo "email" é obrigatório' });
    }
    if (!validationEmail.test(email)) {
      return res.status(HTTP_BAD_REQUEST_STATUS)
        .json({ message: 'O "email" deve ter o formato "email@exemplo.com"' });
    }
  next();
};

const passworValidation = (req, res, next) => {
  const { password } = req.body;
    if (!password) {
      return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: 'O campo "password" é obrigatório' });
    }
    if (password > PASS_MIN) {
      return res.status(HTTP_BAD_REQUEST_STATUS)
        .json({ message: 'A senha deve ter mais que 6 caracteres' });
    }
  next();
};

module.exports = {
  tokenVerification,
  nameVerification,
  emailValidation,
  passworValidation,
};