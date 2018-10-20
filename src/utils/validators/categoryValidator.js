const Validator = require('./validatorBase');

class CategoryValidator extends Validator {
  constructor() {
    super();
  }

  validate(category) {
    if (!category.name) {
      super.addError('name', 'missing');
    };
    if (!category.description) {
      super.addError('description', 'missing');
    };

    return super.results;
  };
}

module.exports = CategoryValidator;