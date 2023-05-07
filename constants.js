const keys = require("./keys");

//weatherAPI
const __weatherBaseURL__ = "http://api.weatherapi.com/v1/";
const __currentWeather__ = "current.json";

//MongoDB
const __mongoDB__ = `mongodb+srv://bajajshubham:${keys.__MongoTOKEN__}@aviation-weather.3eqza4n.mongodb.net/?retryWrites=true&w=majority`;
const __mongoAirportDB__ = `mongodb+srv://bajajshubham:${keys.__MongoTOKEN__}@aviation-weather.3eqza4n.mongodb.net/airport?retryWrites=true&w=majority`;
const __mongoWeatherDB__ = `mongodb+srv://bajajshubham:${keys.__MongoTOKEN__}@aviation-weather.3eqza4n.mongodb.net/aviation-weather?retryWrites=true&w=majority`;

exports.__weatherBaseURL__ = __weatherBaseURL__;
exports.__mongoDB__ = __mongoDB__;
exports.__mongoAirportDB__ = __mongoAirportDB__;
exports.__mongoWeatherDB__ = __mongoWeatherDB__;
