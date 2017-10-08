const util = require('util');
const tokenizer = require('./tokenizer');

const code = 'const greeting = (name) => "Hello " + name';

console.log(tokenizer(code));
