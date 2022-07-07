let path = require('path')
const express = require('express')
// const apiKey = require('./mockAPI.js');
const dotenv = require('dotenv');
dotenv.config();
let bodyParser = require('body-parser')
let cors = require('cors')
// You could call it aylienapi, or anything else
let textapi = {
    application_key: process.env.API_KEY
};

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

// app.get('/', function (req, res) {
//     res.sendFile('dist/index.html')
// })

app.get('/APIkey', function (req, res) {
    res.json(textapi);
})  

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
    console.log('Example app listening on port 8082!')
})
