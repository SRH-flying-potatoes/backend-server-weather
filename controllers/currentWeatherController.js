const CurrentWeather = require("../models/CurrentWeather");

const addCurrentWeather = async (data) => {
  try {
    const currWeather = new CurrentWeather(data);
    await currWeather.save().then((savedDoc) => {
      console.log(savedDoc === currWeather);
    });
  } catch (err) {
    console.log(err);
  }
  // if (!currWeather) {
  //   return res.status(500).json({ message: "Unable to add" });
  // }
  // return res.status(201).json({ currWeather });
};

exports.addCurrentWeather = addCurrentWeather;
