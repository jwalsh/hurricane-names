const escomplex = require('escomplex');
const fs = require('fs');

const file = fs.readFileSync('index.js');
const source = file.toString();

const result = escomplex.analyse(source, {});

console.log(JSON.stringify(result, null, '  '));
