const mongoose = require('mongoose');
const { Schema } = mongoose;
// const timestamp = require('../middleware/timestamp');

const categorySchema = new Schema({
  name: String,
  description: String
});

// userSchema.plugin(timestamp);

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;