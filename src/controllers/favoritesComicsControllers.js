const { favoritesComicsServices } = require('../services');
const {
  addFavoriteComics,
  getFavoritesComics,
} = favoritesComicsServices;


const OK = 200;
const NOT_ALLOWED = 405;

const favoritesComicsCreate = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const favoritesComicsArray = req.body;

    await addFavoriteComics(authorization, favoritesComicsArray);

    return res.status(OK).json({ message: 'Comics favoritos registrados'});
  } catch (error) {
    console.error(error);
    return res.status(NOT_ALLOWED).json({ message: error.message });
  }
};

const favoritesComicsReader = async (req, res) => {
  try {
    const { authorization } = req.headers;

    const result = await getFavoritesComics(authorization);

    return res.status(OK).json(result);
  } catch (error) {
    console.error(error);
    return res.status(NOT_ALLOWED).json({ message: error.message });
  }
};

module.exports = {
  favoritesComicsCreate,
  favoritesComicsReader,
};