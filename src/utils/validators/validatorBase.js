class Validator {
  constructor() {
    this.errors = [];
  }

  addError(property, message) {
    this.errors.push({
      property,
      message
    });
  };

  get isValid() {
    return this.errors.length === 0;
  }

  get errorObject() {
    if (!this.isValid) {
      return { errors: this.errors.map(entry => `'${entry.property}' ${entry.message}`).join(',') };
    }
    return null;
  }

  get results() {
    return {
      isValid: this.isValid,
      error: this.isValid ? '' : this.errorObject.errors
    }
  }
}

module.exports = Validator;