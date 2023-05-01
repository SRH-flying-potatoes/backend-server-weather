const axios = require('axios')

axios.get('http://api.weatherapi.com/v1/current.json?key=<API_KEY>5&q=Paris').then((res) => {
    console.log(res.data)
}).catch((err) => {
    console.log(err.message)
})