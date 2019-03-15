//Import blockchain
const Blockchain = require('./blockchain')

const container = new Blockchain();

container.createNewBlock(2389, '00INANSFDFDFDF', 'FDFDFSD5F4SD45DFS');
container.createNewBlock(111, '00INANSFDFDFDfgdfgdfF', 'FDFDFSD5F4SD45DFSfdsfsdfds');
container.createNewBlock(12081998, '0gdfgdfgdfgf', 'fhgfhfghfgh');
container.createNewBlock(12081998, '000000000000', 'LastBlock');

console.log(container);


console.log("Get last block save");
console.log(container.getLastBlock());
