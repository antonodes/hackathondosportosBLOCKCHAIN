var express = require("express");
var app = express();
const bodyParser = require("body-parser");
const Blockchain = require("./blockchain");
const uuid = require("uuid/v1");

const nodeAddress = uuid()
  .split("-")
  .join("");

const container = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Creation of a new block
app.get("/blockchain", function(req, res) {
  res.send(container);
});

//Container transaction
app.post("/transaction", function(req, res) {
  const blockIndex = container.createNewTransaction(
    req.body.container,
    req.body.sender,
    req.body.recipient
  );
  res.json({ note: "Transaction will be added in block:  " + blockIndex });
});

//Terminal accept block
app.get("/blockAccept", function(req, res) {
  const lastBlock = container.getLastBlock();
  const previousBlockHash = lastBlock["hash"];
  const currentBlockData = {
    transactions: container.pendingTransactions,
    index: lastBlock["index"] + 1
  };

  const nonce = container.proofOfWork(previousBlockHash, currentBlockData);
  const blockHash = container.hashBlock(
    previousBlockHash,
    currentBlockData,
    nonce
  );

  container.createNewTransaction("ABCCONTEINER", "00", nodeAddress);

  const newBlock = container.createNewBlock(
    nonce,
    previousBlockHash,
    blockHash
  );

  res.json({
    note: "New block accept sucessfully",
    block: newBlock
  });
});

app.listen(3000, function() {
  console.log("Listening on port 3000...");
});
