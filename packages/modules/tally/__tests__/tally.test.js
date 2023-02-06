'use strict';

const tally = require('..');
const assert = require('assert').strict;

assert.strictEqual(tally(), 'Hello from tally');
console.info("tally tests passed");
