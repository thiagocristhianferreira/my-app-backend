const connection = require('../../connection');
const NAME_COLLECTION = 'users';

const writeUserInfo = async (userData, email) => {
  try {
    const db = await connection();
    return await db
      .collection(NAME_COLLECTION)
      .updateOne({ email }, { $set: { userInfo: { ...userData } } });
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

const readerUserInfo = async (email) => {
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
  writeUserInfo,
  readerUserInfo,
};