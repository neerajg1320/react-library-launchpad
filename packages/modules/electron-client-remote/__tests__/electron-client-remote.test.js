'use strict';

const electronClientRemote = require('..');
const assert = require('assert').strict;

assert.strictEqual(electronClientRemote(), 'Hello from electronClientRemote');
console.info("electronClientRemote tests passed");
