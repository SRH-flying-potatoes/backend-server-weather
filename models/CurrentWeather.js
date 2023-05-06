const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const currWeatherSchema = new Schema({
  location: {
    name: {
      type: "String",
    },
    region: {
      type: "String",
    },
    country: {
      type: "String",
    },
    lat: {
      type: "Number",
    },
    lon: {
      type: "Number",
    },
    tz_id: {
      type: "String",
    },
    localtime_epoch: {
      type: "Number",
    },
    localtime: {
      type: "Date",
    },
  },
  current: {
    last_updated_epoch: {
      type: "Number",
    },
    last_updated: {
      type: "Date",
    },
    temp_c: {
      type: "Number",
    },
    temp_f: {
      type: "Number",
    },
    is_day: {
      type: "Number",
    },
    condition: {
      text: {
        type: "String",
      },
      icon: {
        type: "String",
      },
      code: {
        type: "Number",
      },
    },
    wind_mph: {
      type: "Number",
    },
    wind_kph: {
      type: "Number",
    },
    wind_degree: {
      type: "Number",
    },
    wind_dir: {
      type: "String",
    },
    pressure_mb: {
      type: "Number",
    },
    pressure_in: {
      type: "Number",
    },
    precip_mm: {
      type: "Number",
    },
    precip_in: {
      type: "Number",
    },
    humidity: {
      type: "Number",
    },
    cloud: {
      type: "Number",
    },
    feelslike_c: {
      type: "Number",
    },
    feelslike_f: {
      type: "Number",
    },
    vis_km: {
      type: "Number",
    },
    vis_miles: {
      type: "Number",
    },
    uv: {
      type: "Number",
    },
    gust_mph: {
      type: "Number",
    },
    gust_kph: {
      type: "Number",
    },
  },
});

module.exports = mongoose.model("CurrentWeather", currWeatherSchema);