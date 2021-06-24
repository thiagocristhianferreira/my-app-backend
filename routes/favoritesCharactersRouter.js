const express = require('express');

const { favoritesCharactersController } = require('../src/controllers');
const {
  favoritesCharactersCreate,
} = favoritesCharactersController;

const favoritesCharacters = express.Router();

favoritesCharacters.post('/favoritescharacters', favoritesCharactersCreate);

module.exports = favoritesCharacters;