'use strict';

const sampleAppBasic = require('..');
const assert = require('assert').strict;

assert.strictEqual(sampleAppBasic(), 'Hello from sampleAppBasic');
console.info("sampleAppBasic tests passed");
