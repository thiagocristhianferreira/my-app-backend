const connection = require('../../connection');

const NAME_COLLECTION = 'users';

const addUser = async (email, password) => {
  try {
    const db = await connection();
    return await db
      .collection(NAME_COLLECTION)
      .insertOne({ email, password });
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

const searchUser = async (email) => {
  try {
    const db = await connection();
    return await db
      .collection(NAME_COLLECTION)
      .findOne({ email });
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

module.exports = {
  addUser,
  searchUser,
};