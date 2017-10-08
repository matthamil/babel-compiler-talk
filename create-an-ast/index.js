#!/usr/bin/env node
const util = require('util');
const babylon = require('babylon');

const code = `const greeting = (name) => "Hello " + name`;

const AST = babylon.parse(code);

console.log(util.inspect(AST, false, null));

