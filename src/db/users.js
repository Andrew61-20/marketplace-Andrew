const User = require('./schemas/user');
const bcrypt = require('bcrypt');

const getUsers = async () => {
  return await User.find();
}

const getUser = async id => {
  return await User.findById(id);
}

const createUser = async userData => {
  const password = await bcrypt.hash(userData.password, 10);

  userData = { ...userData, ...{ password } };
  const user = new User(userData);

  await user.save();
  return user;
}

const updateUser = async (user) => {
  if (user.password) {
    const password = await bcrypt.hash(user.password, 10);
    user.set({ password });
  }

  await user.save();
  return user;
}

const deleteUser = async id => {
  return await User.findByIdAndDelete(id);
}

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser
};