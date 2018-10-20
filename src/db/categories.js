const Category = require('./schemas/category');

const getCategories = async () => {
  return await Category.find();
}

const getCategory = async id => {
  return await Category.findById(id);
}

const createCategory = async data => {
  const category = new Category(data);

  await category.save();
  return category;
}

const updateCategory = async category => {
  await category.save();
  return category;
}

const deleteCategory = async id => {
  return await Category.findByIdAndDelete(id);
}

module.exports = {
  getCategory,
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory
};