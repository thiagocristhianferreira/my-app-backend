const connection = require('../../connection');

const NAME_COLLECTION = 'users';

const writeFavoritesComics = async (email, favoritesComicsArray) => {
  try {
    const db = await connection();
    await db
      .collection(NAME_COLLECTION)
      .updateOne({ email }, { $set: { favoritesComics: favoritesComicsArray } });
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

const readFavoritesComics = async (email) => {
  try {
    const db = await connection();
    return db
      .collection(NAME_COLLECTION)
      .findOne({ email });
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

module.exports = {
  writeFavoritesComics,
  readFavoritesComics,
};