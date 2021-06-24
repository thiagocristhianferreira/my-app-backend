const express = require('express');

const { favoritesCharactersControllers } = require('../src/controllers');
const {
  favoritesCharactersCreate,
} = favoritesCharactersControllers;

const favoritesCharacters = express.Router();

favoritesCharacters.post('/favoritescharacters', favoritesCharactersCreate);

module.exports = favoritesCharacters;