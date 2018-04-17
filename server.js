// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.json());
// Require Mongoose
app.use(express.static( __dirname + '/dist' ));


//Catch all routing
app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/index.html"))
});

// Setting our Server to Listen on Port: 8022
app.listen(8022, function() {
    console.log("listening on port 8022");
});
