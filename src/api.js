var express = require("express");
var app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Creation of a new block
app.get("/blockchain", function(req, res) {});

//Container transaction
app.post("/transaction", function(req, res) {
  console.log(req.body);
  res.send("Testing Postman");
});

//Terminal consensus
app.post("/consensus", function(req, res) {});

app.listen(3000, function() {
  console.log("Listening on port 3000...");
});
