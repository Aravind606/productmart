require("dotenv").config();
const envVars = process.env;

module.exports = {
  port: envVars.port,
  env: envVars.NODE_ENV,
  mongo: {
    uri: envVars.MONGO_URI,
    port: envVars.MONGO_PORT
  }
};
