const express = require("express");
const mongoose = require("mongoose");
const keys = require('./keys')

const app = express();

var cors = require("cors");
app.use(cors());

mongoose.connect(keys.__MongoTOKEN__) // create Constants.js file having token value
  .then(() => console.log("connected to DB"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));