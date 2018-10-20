const db = require('../../db/categories');
const Validator = require('../../utils/validators/categoryValidator');

const INNER_SERVER_ERROR = 'inner server error';

const updateCategory = async (req, res) => {
  const current = req.body;
  const id = req.params.id;

  let original = await db.getCategory(id);
  if (!original) {
    res.status(404);
    res.json({
      status: "error",
      error: "not found"
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
    const category = await original.save();

    res.status(200);
    res.json({
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

module.exports = updateCategory;