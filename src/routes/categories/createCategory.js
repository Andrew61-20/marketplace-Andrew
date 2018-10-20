const db = require('../../db/categories');
const Validator = require('../../utils/validators/categoryValidator');

const INNER_SERVER_ERROR = 'inner server error';

const createCategory = async (req, res) => {
  let category = req.body;

  const validator = new Validator();
  const validationResults = validator.validate(category);
  if (!validationResults.isValid) {
    res.status(400);
    res.json({
      status: "error",
      error: validationResults.error
    });
    return;
  }

  try {
    category = await db.createCategory(category);
    res.status(201);
    res.send({
      status: "success",
      category
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

module.exports = createCategory;
