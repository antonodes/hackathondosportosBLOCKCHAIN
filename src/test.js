//Import blockchain
const Blockchain = require('./blockchain')
const container = new Blockchain();

const previousBlockhash = "ANTONIOFLAVIOTESTING";
const currentBlockData = [
  {
    container: 'ABCCONTEINER123',
    sender: 'JFGKFJGDFG45FGKJ4s',
    recipient: '4554FDGDFGFDGDF'
  },
  {
    container: 'CDECONTEINER456',
    sender: 'GFGDFGDF566565',
    recipient: '56454GDFGDFGDFGD'
  },
  {
    container: 'FGHCONTEINER789',
    sender: '4545FDGDFGDFGDFFDGF',
    recipient: '4554FDGFDGDFGDF'
  }
];

const nonce = 100;

console.log(container.hashBlock(previousBlockhash, currentBlockData, nonce));

//container.createNewBlock(2389, '00INANSFDFDFDF', 'FDFDFSD5F4SD45DFS');
//container.createNewBlock(111, '00INANSFDFDFDfgdfgdfF', 'FDFDFSD5F4SD45DFSfdsfsdfds');
//container.createNewBlock(12081998, '0gdfgdfgdfgf', 'fhgfhfghfgh');
//container.createNewBlock(12081998, '000000000000', 'LastBlock');

//container.createNewTransaction(111, 'HDFGKJDFHJKGDFHGJKF', 'JEGSGDFKJGDF');

//container.createNewBlock(123123, 'GHJFDGHJFG', 'UDFGDFOGIOFG');


console.log(container);

//console.log("Get last block save");
//console.log(container.getLastBlock());
