const axios = require("axios");
const { globalState } = require("../store");

async function fetchAirports(airportCollection) {
  try {
    const airports = await airportCollection.find({},{ Name: 1 });
    console.log(airports);
    // return airports
  } catch (error) {
    console.error(error);
  }
}

exports.fetchAirports = fetchAirports;
