const db = require('../../db/users');

const INNER_SERVER_ERROR = 'inner server error';
const NOT_FOUND_ERROR = 'not found';

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await db.deleteUser(id);

    if (doc) {
      res.json({
        status: "success",
      });
    } else {
      res.status(404);
      res.json({
        status: "error",
        error: NOT_FOUND_ERROR
      });
      return;
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

module.exports = deleteUser;