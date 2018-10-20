const db = require('../../db/products');

const INNER_SERVER_ERROR = 'inner server error';
const NOT_FOUND_ERROR = 'not found';

const getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await db.getProduct(id);
    if (product) {
      res.json({
        status: "success",
        product
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

module.exports = getProduct;