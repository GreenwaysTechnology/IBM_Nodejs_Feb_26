const fs = require('node:fs');
const path = require('node:path');

const inputfileName = path.join(__dirname, 'assets/big.file');
const outputfileName = path.join(__dirname, 'assets/bigcopy.file');

const config = {
    encoding: 'UTF-8'
}
const readerStream = fs.createReadStream(inputfileName, config);
const writeStr = fs.createWriteStream(outputfileName, config);

//backPressure streams
//pipe method is simplest method which wraps resume,pasuse,drain 
readerStream.pipe(writeStr);