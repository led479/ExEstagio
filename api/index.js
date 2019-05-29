require('dotenv').config()
let express = require('express')
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cors = require('cors')

let app = express();

app.use(cors());

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
console.log(process.env.API_URL)
// Connect to Mongoose and set connection variable
let configDB = require('./config/database.js')
mongoose.connect(configDB.url);

var db = mongoose.connection;

let apiRoutes = require("./api-routes")
app.use('/api', apiRoutes)

var port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(port, function () {
  console.log("Running api on port " + port);
});