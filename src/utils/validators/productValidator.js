const Validator = require('./validatorBase');

class ProductValidator extends Validator {
  constructor() {
    super();
  }

  validate(product) {
    if (!product.name) {
      super.addError('name', 'missing');
    };
    if (!product.description) {
      super.addError('description', 'missing');
    };
    if (!product.price) {
      super.addError('price', 'missing');
    };
    if (product.price < 0) {
      super.addError('price', 'price must be greater then or equal to 0');
    };
    if (!product.currency) {
      super.addError('currency', 'missing');
    };
    if (!product.categories || product.categories.length === 0) {
      super.addError('categories', 'missing');
    };

    return super.results;
  };
}

module.exports = ProductValidator;