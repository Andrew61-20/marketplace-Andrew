const mongoose = require('mongoose');
const { Schema } = mongoose;
// const timestamp = require('../middleware/timestamp');

const userSchema = new Schema({
  name: String,
  phone: String,
  password: String,
});

// userSchema.plugin(timestamp);

const User = mongoose.model('User', userSchema);

module.exports = User;