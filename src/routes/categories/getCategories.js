const db = require('../../db/categories');

const INNER_SERVER_ERROR = 'inner server error';

const getCategories = async (req, res) => {
  try {
    const categories = await db.getCategories();
    res.json({
      "status": "success",
      categories
    });
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(INNER_SERVER_ERROR);
  }
};

module.exports = getCategories;