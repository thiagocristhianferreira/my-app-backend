const jwt = require('jsonwebtoken');

const {
  favoritesComicsModel: { writeFavoritesComics }
} = require('../models');

const secret = process.env.JWT_SECRET;

const addFavoriteComics = async (authorization, favoritesComicsArray) => {
  const { data: { email } } = jwt.verify(authorization, secret);

  return await writeFavoritesComics(email, favoritesComicsArray);
};

module.exports = {
  addFavoriteComics,
};