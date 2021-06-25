const express = require('express');

const {
  favoritesComicsControllers: {
    favoritesComicsCreate,
    favoritesComicsReader,
  }
} = require('../src/controllers');

const favoritesComics = express.Router();

favoritesComics.post('/favoritescomics', favoritesComicsCreate);

favoritesComics.get('/favoritescomics', favoritesComicsReader);

module.exports = favoritesComics;