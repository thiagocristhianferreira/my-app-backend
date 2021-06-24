const express = require('express');

const { favoritesComicsControllers } = require('../src/controllers');
const {
  favoritesComicsCreate
} = favoritesComicsControllers;

const favoritesComics = express.Router();

favoritesComics.post('/favoritescomics', favoritesComicsCreate);

module.exports = favoritesComics;