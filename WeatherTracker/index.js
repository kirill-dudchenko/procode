const axios = require('axios')
const fs = require('fs')
const moment = require('moment')

const url = 'http://api.openweathermap.org/data/2.5/weather?q=Kiev&&units=metric&appid=4451b0c1d5470f197a9615a3565c6bdf'

setInterval(() => {
    axios.get(url)
    .then( data => fs.appendFile('./weatherlog.txt', `${data.data.main.temp.toString()} ${moment().format("MMM Do YYYY")}\n`, err => {
        if (err) {
            throw err
        }
    }))
}, 300000);