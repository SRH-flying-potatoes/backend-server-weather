const axios = require("axios");
const keys = require("./keys");
const { __weatherBaseURL__ } = require("./constants");
const { state } = require("./store");

function fetchCurrWeather() {
  axios
    .get(
      `${__weatherBaseURL__}current.json?key=` +
        keys.__weatherAPIKey__ +
        "&q=48.8567,2.3508"
    )
    .then((res) => {
      state.currentWeather = res.data;
      console.log(state.currentWeather)
    })
    .catch((err) => {
      console.log(err.message);
    });
}
exports.fetchCurrWeather = fetchCurrWeather;
