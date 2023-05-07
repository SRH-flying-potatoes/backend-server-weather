const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
//=======================================//
// const keys = require("./keys");
const constants = require("./constants");
const { globalState } = require("./store");
const db = require("./db");
const airport = require("./fetchAirportData");

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

const { fetchCurrWeather } = require("./fetchWeather");
const { addCurrentWeather } = require("./controllers/currentWeatherController");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/airports", (req, res) => {
  fetchAirports(req.body).then(() =>
    res.status(200).json(globalState.airportList)
  );
});
app.post("/", (req, res) => {
  fetchCurrWeather(req.body).then(() =>
    res.status(200).json(globalState.currentWeather)
  );
});

app.listen(5000);

db.connectToDatabase(constants.__mongoAirportDB__);
const airportCollection = mongoose.connection.collection("airport-data");
// console.log(airportCollection);
airport.fetchAirports(airportCollection);

// mongoose
//   .connect(constants.__mongoDB__) // create constants.js file having token value
//   .then(() => {
//     console.log("connected to DB");
//     fetchCurrWeather().then(() => {
//       addCurrentWeather(globalState.currentWeather);
//     });
//   })
//   .catch((err) => console.log(err));
