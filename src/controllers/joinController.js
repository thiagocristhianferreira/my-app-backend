const OK = 200;
const CREATED = 201;
const NOT_FOUND = 404;
const UNPROCESSABLE = 422;

const userCreate = async (_req, res) => {
  try {
    return res.status(OK).json({ message: 'result'});
  } catch (error) {
    console.error(error);
    return res.status(NOT_FOUND).json({ message: error.message });
  }
};

module.exports = {
  userCreate,
};