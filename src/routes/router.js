const express = require('express');
const main = require('./main/main');
//const setProductImages = require('./products/setProductImages');
const getProducts = require('./products/getProducts');
const getProduct = require('./products/getProduct');
const createProduct = require('./products/createProduct');
const updateProduct = require('./products/updateProduct');
const deleteProduct = require('./products/deleteProduct');
const getUser = require('./users/getUser');
const getUsers = require('./users/getUsers');
const createUser = require('./users/createUser');
const updateUser = require('./users/updateUser');
const deleteUser = require('./users/deleteUser');
const getCategory = require('./categories/getCategory');
const getCategories = require('./categories/getCategories');
const createCategory = require('./categories/createCategory');
const updateCategory = require('./categories/updateCategory');
const deleteCategory = require('./categories/deleteCategory');

const apiRoutes = express.Router();

apiRoutes
  .get('/', main)
  .get('/products', getProducts)
  .get('/products/:id', getProduct)
  .get('/users', getUsers)
  .get('/users/:id', getUser)
  .get('/categories', getCategories)
  .get('/categories/:id', getCategory)
  .post('/categories', createCategory)
 // .post('/products/:id/images', setProductImages)
  .post('/products', createProduct)
  .post('/categories', createCategory)
  .post('/users', createUser)
  .put('/products/:id', updateProduct)
  .put('/users/:id', updateUser)
  .put('/categories/:id', updateCategory)
  .delete('/products/:id', deleteProduct)
  .delete('/users/:id', deleteUser)
  .delete('/categories/:id', deleteCategory);



module.exports = apiRoutes;