const app = require("./config/express");
// const config = require('./config/config');

require("./config/mongoose");

app.listen(process.env.PORT || 4050, () => {
  console.log(`server is ruuning properly`);
});
