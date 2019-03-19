var express = require("express");
var app = express();

//Creation of a new block
app.get("/blockchain", function(req, res) {});

//Container transaction
app.post("/transaction", function(req, res) {});

//Terminal consensus
app.post("/consensus", function(req, res) {});

app.listen(3000, function() {
  console.log("Listening on port 3000...");
});
