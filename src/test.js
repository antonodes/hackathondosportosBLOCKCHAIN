//Import blockchain
const Blockchain = require('./blockchain')

const conteiner = new Blockchain();

conteiner.createNewBlock(2389, '00INANSFDFDFDF', 'FDFDFSD5F4SD45DFS');
conteiner.createNewBlock(111, '00INANSFDFDFDfgdfgdfF', 'FDFDFSD5F4SD45DFSfdsfsdfds');
conteiner.createNewBlock(12081998, '0gdfgdfgdfgf', 'fhgfhfghfgh');
conteiner.createNewBlock(12081998, '000000000000', 'LastBlock');

console.log(conteiner);


console.log("Get last block save");
console.log(conteiner.getLastBlock());
