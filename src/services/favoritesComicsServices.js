const jwt = require('jsonwebtoken');

const {
  favoritesComicsModel: {
    writeFavoritesComics,
    readFavoritesComics,
  }
} = require('../models');

const secret = process.env.JWT_SECRET;

const addFavoriteComics = async (authorization, favoritesComicsArray) => {
  const { data: { email } } = jwt.verify(authorization, secret);

  return await writeFavoritesComics(email, favoritesComicsArray);
};

const getFavoritesComics = async (authorization) => {
  const { data: { email } } = jwt.verify(authorization, secret);

  const result = await readFavoritesComics(email);

  const { favoritesComics } = result;

  return favoritesComics;
};

module.exports = {
  addFavoriteComics,
  getFavoritesComics,
};