'use strict';

const excel = require('..');
const assert = require('assert').strict;

assert.strictEqual(excel(), 'Hello from excel');
console.info("excel tests passed");
