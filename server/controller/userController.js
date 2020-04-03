const User = require("../models/user.model");
const { product } = require("../models/product.model");
const bcrypt = require("bcrypt");

//save register data in db
async function insert(user) {
  user.hashedPassword = bcrypt.hashSync(user.password, 10);
  delete user.password;
  return await new User(user).save();
}

//check login data in db
async function login(email, password) {
  var user = await User.findOne({
    email
  });
  console.log("how data return in db", user);
  if (isValid(user, password, user.hashedPassword)) {
    user = user.toObject();
    delete user.hashedPassword;
    return user;
  } else {
    return null;
  }
}

function isValid(user, password, hashedPassword) {
  return user && bcrypt.compareSync(password, hashedPassword);
}

//fetching all products in db
async function allProducts() {
  const allProduct = await product.find((err, allproduct) => {
    if (err) return err;
    return allproduct;
  });
  return allProduct;
}

//fetching category products in db
async function categoryProducts(category) {
  const allProduct = await product.find(
    {
      category: category
    },
    (err, categoryproduct) => {
      if (err) return err;
      return categoryproduct;
    }
  );
  return allProduct;
}

module.exports = {
  insert,
  login,
  allProducts,
  categoryProducts
};
