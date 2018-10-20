const db = require('../../db/categories');

const INNER_SERVER_ERROR = 'inner server error';
const NOT_FOUND_ERROR = 'not found';

const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await db.deleteCategory(id);
    if (doc === null) {
      res.status(404);
      res.json({
        status: "error",
        error: NOT_FOUND_ERROR
      });
      return;
    }
    res.json({
      "status": "success",
    });
  } catch (err) {
    console.error(err);
    res.status(500);
    res.json({
      status: "error",
      error: INNER_SERVER_ERROR
    });
  }
};

module.exports = deleteCategory;