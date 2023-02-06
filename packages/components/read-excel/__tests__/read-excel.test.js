'use strict';

const readExcel = require('..');
const assert = require('assert').strict;

assert.strictEqual(readExcel(), 'Hello from readExcel');
console.info("readExcel tests passed");
