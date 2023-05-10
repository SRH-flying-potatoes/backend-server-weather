const express = require("express");
var cors = require("cors");
//=======================================//
const { globalState } = require("./store");
const db = require("./database/db");
const { fetchCurrWeather } = require("./api/fetchWeather");

//Express
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

//express routes
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/airports", (req, res) => {
  db.getDataFromCollection("airport", "airport-data").then((data) => {
    res.status(200).json({ airportData: data });
  });
});

app.get("/currentWeather", (req, res) => {
  // console.log(req.query);
  fetchCurrWeather(req.query).then(() =>
    res.status(200).json(globalState.currentWeather)
  );
});

app.listen(5000);
