'use strict';

const sampleApp = require('..');
const assert = require('assert').strict;

assert.strictEqual(sampleApp(), 'Hello from sampleApp');
console.info("sampleApp tests passed");
