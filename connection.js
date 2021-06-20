const MongoClient = require('mongodb');

const MONGO_DB_URL = process.env.MONGODB_URL;
const DB_NAME = process.env.MONGODB_NAME;

let connection = async () => {
  try {
    return MongoClient.connect(MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
      .then((conn) => conn.db(DB_NAME));
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

module.exports = connection;
