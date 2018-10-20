const db = require('../../db/users');

const INNER_SERVER_ERROR = 'inner server error';
const NOT_FOUND_ERROR = 'not found';

const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await db.getUser(id);

    if (user) {
      res.json({
        status: "success",
        user
      });
    } else {
      res.status(404);
      res.json({
        status: "error",
        error: NOT_FOUND_ERROR
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500);
    res.json({
      status: "error",
      error: INNER_SERVER_ERROR
    });
  }
};

module.exports = getUser;