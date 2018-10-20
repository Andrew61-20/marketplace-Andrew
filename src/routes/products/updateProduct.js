const db = require('../../db/products');
const Validator = require('../../utils/validators/productValidator');

const INNER_SERVER_ERROR = 'inner server error';
const NOT_FOUND_ERROR = 'not found';

const updateProduct = async (req, res) => {
  const current = req.body;
  const id = req.params.id;

  let original = await db.getProduct(id);
  if (!original) {
    res.status(404);
    res.json({
      status: "error",
      error: NOT_FOUND_ERROR
    });
    return;
  }

  original.set(current);

  const validator = new Validator();
  const validationResults = validator.validate(original);
  if (!validationResults.isValid) {
    res.status(400);
    res.json({
      status: "error",
      error: validationResults.errors
    });
    return;
  }

  try {
    const product = await original.save();

    res.status(200);
    res.json({
      status: "success",
      product
    });
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json({
      status: "error",
      error: INNER_SERVER_ERROR
    });
    return;
  }
};

module.exports = updateProduct;