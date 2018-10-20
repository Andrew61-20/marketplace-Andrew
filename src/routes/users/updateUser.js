const db = require('../../db/users');
const Validator = require('../../utils/validators/userValidator');

const INNER_SERVER_ERROR = 'inner server error';
const NOT_FOUND_ERROR = 'not found';

const updateUser = async (req, res) => {
  const current = req.body;
  const id = req.params.id;

  let original = await db.getUser(id);
  if (!original) {
    res.status(400);
    res.json({
      status: "error",
      status: NOT_FOUND_ERROR
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
    const user = await original.save();
    res.json({
      status: "success",
      user
    });
  } catch (err) {
    console.log(err);
    res.status(500);
    res.send({
      status: "error",
      error: INNER_SERVER_ERROR
    });
  }
};

module.exports = updateUser;