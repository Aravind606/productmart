const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyparser = require("body-parser");
const helmet = require("helmet");

//const config = require("./config");
const routes = require("../routes");

//get app
const app = express();

//get dist folder
const distDir = path.join(__dirname, "../../dist");

//use dist folder
app.use(express.static(distDir));

//parsing from api
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true
  })
);

//secure apps http
app.use(helmet());

//allow cors
app.use(cors());

//to redirect api request to routes
app.use("/api/", routes);

//serve index.html angular file
app.get("*", (req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

module.exports = app;
