const express = require("express");
const asyncHandler = require("express-async-handler");
const productController = require("../controller/productController");

const router = express.Router();

router.post("/addproduct", asyncHandler(addProductData));
router.put("/updateproduct/:id", asyncHandler(updateProducts));
router.delete("/deleteproduct/:id", asyncHandler(deleteProducts));

async function addProductData(req, res) {
  const addData = req.body;
  console.log(addData);
  const productDetails = await productController.addProduct(addData);
  res.json(productDetails);
}

async function updateProducts(req, res) {
  const updateData = req.body;
  const id = req.params.id;
  const updatedData = await productController.updateProducts(updateData, id);
  res.json(updatedData);
}

async function deleteProducts(req, res) {
  const removeId = req.params.id;
  const deletedData = await productController.deleteProducts(removeId);
  res.json(deletedData);
}

module.exports = router;
