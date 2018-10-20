const Validator = require('../../utils/validators/productValidator');
const db = require('../../db/products');

const INNER_SERVER_ERROR = 'inner server error';

const createProduct = async (req, res) => {
  let product = req.body;

  const validator = new Validator();
  const validationResults = validator.validate(product);
  if (!validationResults.isValid) {
    res.status(400);
    res.send(validationResults.error);
    return;
  }

  try {
    product = await db.createProduct(product);

    res.status(201);
    res.json({
      status: "success",
      product
    });
  } catch (err) {
    console.error(err);
    res.status(500);
    res.json({
      status: "error",
      error: INNER_SERVER_ERROR
    });
    return;
  }
};

module.exports = createProduct;