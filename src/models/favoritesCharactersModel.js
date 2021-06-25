const connection = require('../../connection');

const NAME_COLLECTION = 'users';

const writeFavoritesCharacters = async (email, favoritesCharactersArray) => {
  try {
    const db = await connection();
    return await db
      .collection(NAME_COLLECTION)
      .updateOne({ email }, { $set: { favoritesCharacters: favoritesCharactersArray } });
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

const readFavoritesCharacters = async (email) => {
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
  writeFavoritesCharacters,
  readFavoritesCharacters,
};