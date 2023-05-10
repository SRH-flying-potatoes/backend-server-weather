const axios = require("axios");
const keys = require("../keys");
const { __weatherBaseURL__ } = require("../constants");
const { globalState } = require("../store");

async function fetchCurrWeather({ lat, long }) {
  await axios
    .get(
      `${__weatherBaseURL__}current.json?key=` +
        keys.__weatherAPIKey__ +
        `&q=${lat},${long}`
    )
    .then((res) => {
      globalState.currentWeather = res.data;
      // console.log(globalState.currentWeather)
    })
    .catch((err) => {
      console.log(err.message);
    });
}
exports.fetchCurrWeather = fetchCurrWeather;
