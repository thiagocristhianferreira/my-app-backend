const jwt = require('jsonwebtoken');

const {
  favoritesCharactersModel: { writeFavoritesCharacters }
} = require('../models');

const secret = process.env.JWT_SECRET;

const addFavoritesCharacters = async (authorization, favoritesCharactersArray) => {
  const { data: { email } } = jwt.verify(authorization, secret);

  return await writeFavoritesCharacters(email, favoritesCharactersArray);
};

module.exports = {
  addFavoritesCharacters,
};