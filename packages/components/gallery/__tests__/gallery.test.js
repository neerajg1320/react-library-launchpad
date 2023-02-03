'use strict';

const gallery = require('..');
const assert = require('assert').strict;

assert.strictEqual(gallery(), 'Hello from gallery');
console.info("gallery tests passed");
