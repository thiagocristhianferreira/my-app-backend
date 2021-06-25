const jwt = require('jsonwebtoken');

const {
  favoritesCharactersModel: {
    writeFavoritesCharacters,
    readFavoritesCharacters,
  }
} = require('../models');

const secret = process.env.JWT_SECRET;

const addFavoritesCharacters = async (authorization, favoritesCharactersArray) => {
  const { data: { email } } = jwt.verify(authorization, secret);

  return await writeFavoritesCharacters(email, favoritesCharactersArray);
};

const getFavoritesCharacters = async (authorization) => {
  const { data: { email } } = jwt.verify(authorization, secret);

  const result = await readFavoritesCharacters(email);

  const { favoritesCharacters } = result;

  return favoritesCharacters;
};

module.exports = {
  addFavoritesCharacters,
  getFavoritesCharacters,
};