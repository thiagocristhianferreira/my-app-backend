const express = require('express');

const { favoritesCharactersControllers } = require('../src/controllers');
const {
  favoritesCharactersCreate,
  favoritesCharactersReader,
} = favoritesCharactersControllers;

const favoritesCharacters = express.Router();

favoritesCharacters.post('/favoritescharacters', favoritesCharactersCreate);

favoritesCharacters.get('/favoritescharacters', favoritesCharactersReader);

module.exports = favoritesCharacters;