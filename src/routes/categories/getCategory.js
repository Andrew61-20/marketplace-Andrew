const db = require('../../db/categories');

const INNER_SERVER_ERROR = 'inner server error';

const getCategory = async (req, res) => {
  const id = req.params.id;
  try {
    const category = await db.getCategory(id);
    const result = category
      ? {
        status: "success",
        category
      } : {
        status: "not found"
      };

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(INNER_SERVER_ERROR);
  }
};

module.exports = getCategory;