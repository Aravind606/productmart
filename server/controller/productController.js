const { product } = require("../models/product.model");

//add product in db
async function addProduct(addData) {
  return await new product(addData).save();
}

//update product in db
async function updateProducts(data, id) {
  console.log("update before", data);
  console.log("update id", id);
  const updatedProducts = await product.findOne(
    {
      _id: id
    },
    (err, result) => {
      if (err) return err;
      product.findByIdAndUpdate(
        {
          _id: result.id
        },
        {
          $set: data
        },
        (err, updatedData) => {
          if (err) return err;
          return updatedData;
        }
      );
    }
  );
  return updatedProducts;
}

//delete product in db
async function deleteProducts(id) {
  const removedData = await product.findByIdAndDelete(
    {
      _id: id
    },
    (err, removedResult) => {
      if (err) return err;
      return removedResult;
    }
  );

  return removedData;
}

module.exports = {
  addProduct,
  updateProducts,
  deleteProducts
};
