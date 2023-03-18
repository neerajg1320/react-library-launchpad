'use strict';

const schema = require('..');
const assert = require('assert').strict;

assert.strictEqual(schema(), 'Hello from schema');
console.info("schema tests passed");
