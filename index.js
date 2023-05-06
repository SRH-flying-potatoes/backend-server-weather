const express = require("express");
const mongoose = require("mongoose");
const keys = require("./keys");
const { globalState } = require("./store");

const app = express();

var cors = require("cors");
const { fetchCurrWeather } = require("./fetchWeather");
const { addCurrentWeather } = require("./controllers/currentWeatherController");

app.use(cors());

mongoose
  .connect(keys.__MongoTOKEN__) // create Constants.js file having token value
  .then(() => {
    console.log("connected to DB");
    fetchCurrWeather().then(() => {
      app.listen(5000);
      addCurrentWeather(globalState.currentWeather);
    });
  })
  .catch((err) => console.log(err));
