const axios = require("axios");
const { globalState } = require("./store");

async function fetchAirports(airport_data) {
  try {
    const airports = await airport_data.find();
    console.log(airports);
  } catch (error) {
    console.error(error);
  }
}

exports.fetchAirports = fetchAirports;
