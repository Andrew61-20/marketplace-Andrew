const Validator = require('./validatorBase');

class UserValidator extends Validator {
  constructor() {
    super();
  }

  validate(user) {
    if (!user.firstName) {
      super.addError('first name', 'missing');
    };
    if (!user.lastName) {
      super.addError('last name', 'missing');
    };
    if (!user.password) {
      super.addError('password', 'missing or invalid');
    };
    // if (!user.phone) {
    //   super.addError('phone', 'missing');
    // };

    return super.results;
  };
}

module.exports = UserValidator;