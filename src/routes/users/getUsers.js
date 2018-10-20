const db = require('../../db/users');

const INNER_SERVER_ERROR = 'inner server error';

const getUsers = async (req, res) => {
  try {
    const users = await db.getUsers();
    res.json({
      "status": "success",
      users
    });
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send({
      status: "error",
      error: INNER_SERVER_ERROR
    });
  }
};

module.exports = getUsers;