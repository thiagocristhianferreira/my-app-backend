const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256'
};

// const jwtValidate = async (email, password) => {
  
  
    
    //   return ({ status: 200, message: token });
    // };
    
const jwtValidate = async (req, res, next) => {
  if (!email || !password) return (
    { status: 401, message: 'É necessário usuário e senha para efetuar o login' }
  );

  const userSearch = await findUser(email);
  
  if (!userSearch || !userSearch.password !== password) return (
    { status: 401, message: 'O usuário não existe ou senha inválida' }
  );
  
    const { password: passBD, otherInfo } = userSearch;
  
    const token = jwt.sign({ data: otherInfo }, secret, jwtConfig);

  try {
    const decode = jwt.verify()
  } catch (error) {
    return res.status(401).json({ error: 'Erro ao procurar usuário' });
  }
};

module.exports = jwtValidate;