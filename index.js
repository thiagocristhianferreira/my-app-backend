const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const {
  loginRouter,
  joinRouter,
} = require('./routes');

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  try {
    return res.status(200).json({ message: 'server online' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.use(loginRouter);
app.use(joinRouter);



app.listen(PORT, () => {
  console.log(`Rodando na porta ${ PORT }`);
});
