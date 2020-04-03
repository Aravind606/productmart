const express = require("express");
const authRoute = require("./auth_route");
const productRoute = require("./product_route");

const router = express.Router();

router.use("/auth", authRoute);
router.use("/admin", productRoute);
router.use("/users", authRoute);

//router.use('/product', authRoute);

module.exports = router;
