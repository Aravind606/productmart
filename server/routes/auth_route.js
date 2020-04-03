const express = require("express");
const asyncHandler = require("express-async-handler");
const controller = require("../controller/userController");

//use router to get request
const router = express.Router();

//get request
router.post("/register", asyncHandler(insert));
router.post("/login", asyncHandler(getLoginData));
router.get("/getproduct", asyncHandler(getAllProducts));
router.get("/categoryproduct/:category", asyncHandler(getCategoryProducts));

//register
async function insert(req, res) {
  const user = req.body;
  //console.log('registering user', user);
  const savedUser = await controller.insert(user);
  res.json(savedUser);
}

//login
async function getLoginData(req, res) {
  const user = req.body;
  console.log("users", user);
  const savedUser = await controller.login(user.email, user.password);
  res.json(savedUser);
}

//get all products
async function getAllProducts(req, res) {
  const allProductsData = await controller.allProducts();
  //console.log(allProductsData);
  res.json(allProductsData);
}

//get all products
async function getCategoryProducts(req, res) {
  const category = req.params.category;
  const categoryProductsData = await controller.categoryProducts(category);
  res.json(categoryProductsData);
}

module.exports = router;
