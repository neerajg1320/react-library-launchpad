'use strict';

const builderRollup = require('..');
const assert = require('assert').strict;

assert.strictEqual(builderRollup(), 'Hello from builderRollup');
console.info("builderRollup tests passed");
