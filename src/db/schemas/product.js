const mongoose = require('mongoose');
const { Schema } = mongoose;
// const timestamp = require('../middleware/timestamp');

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    currency: String,
    categories: String,
});

// userSchema.plugin(timestamp);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;