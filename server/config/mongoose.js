const mongoose = require("mongoose");
const util = require("util");
const config = require("./config");

const mongoUri = config.mongo.uri;

mongoose.connect(mongoUri, {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("connected to db");
});

db.on("error", () => {
  console.log("unable to connect");
});

module.exports = db;
