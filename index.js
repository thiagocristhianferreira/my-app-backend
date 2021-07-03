const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const {
  loginRouter,
  joinRouter,
  verifyRouter,
  favoritesCharactersRouter,
  favoritesComicsRouter,
  userInfosRouter,
} = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT;

app.get('/', (_req, res) => {
  try {
    return res.status(200).json({ message: 'server online' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.use(loginRouter);

app.use(joinRouter);

app.use(verifyRouter);

app.use(favoritesCharactersRouter);

app.use(favoritesComicsRouter);

app.use(userInfosRouter);

app.listen(PORT, () => {
  console.log(`Rodando na porta ${ PORT }`);
});
