let express = require('express')
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub');
var db = mongoose.connection;

let apiRoutes = require("./api-routes")
app.use('/api', apiRoutes)

var port = process.env.PORT || 3001;

app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(port, function () {
  console.log("Running api on port " + port);
});