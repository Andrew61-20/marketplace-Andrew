const Product = require('./schemas/product');

const getProducts = async () => {
  return await Product.find();
}

const getProduct = async id => {
  return await Product.findById(id);
}

const createProduct = async data => {
  const product = new Product(data);

  await product.save();
  return product;
}

const updateProduct = async product => {
  await product.save();
  return product;
}

const deleteProduct = async id => {
  return await Product.findByIdAndDelete(id);
}

module.exports = {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
};