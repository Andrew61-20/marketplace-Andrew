const db = require('../../db/users');
const Validator = require('../../utils/validators/userValidator');

const INNER_SERVER_ERROR = 'inner server error';

const createUser = async (req, res) => {
  let user = req.body;

  const validator = new Validator();
  const validationResults = validator.validate(user);
  if (!validationResults.isValid) {
    res.status(400);
    res.send(validationResults.error);
    return;
  }

  try {
    user = await db.createUser(user);

    res.status(201);
    res.json({
      status: "success",
      user
    });
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json({
      status: "error",
      error: INNER_SERVER_ERROR
    });
  }
};

module.exports = createUser;