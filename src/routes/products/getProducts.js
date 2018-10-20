const db = require('../../db/products');

const INNER_SERVER_ERROR = 'inner server error';

const getProducts = async (req, res) => {
  try {
    const products = await db.getProducts();
    res.json({
      "status": "success",
      products
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

module.exports = getProducts;