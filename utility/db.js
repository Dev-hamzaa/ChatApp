const mongoose = require("mongoose");

const db = mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("CONNECTED to Database"))
  .catch((error) => console.log(error));

module.exports = db;
