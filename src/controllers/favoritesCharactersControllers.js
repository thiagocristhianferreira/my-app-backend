const {
  favoritesCharactersServices: { addFavoritesCharacters }
} = require('../services');


const OK = 200;
const NOT_ALLOWED = 405;

const favoritesCharactersCreate = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const favoritesCharactersArray = req.body;

    await addFavoritesCharacters(authorization, favoritesCharactersArray);

    return res.status(OK).json({ message: 'Characters favoritos registrados'});
  } catch (error) {
    console.error(error);
    return res.status(NOT_ALLOWED).json({ message: error.message });
  }
};

module.exports = {
  favoritesCharactersCreate,
};