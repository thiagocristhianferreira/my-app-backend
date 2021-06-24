const connection = require('../../connection');

const NAME_COLLECTION = 'users';

const writeFavoritesCharacters = async (email, favoritesCharactersArray) => {
  try {
    const db = await connection();
    await db
      .collection(NAME_COLLECTION)
      .updateOne({ email }, { $set: { favoritesCharacters: favoritesCharactersArray } });
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

module.exports = {
  writeFavoritesCharacters,
};