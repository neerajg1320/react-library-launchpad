'use strict';

const electronMenuBase = require('..');
const assert = require('assert').strict;

assert.strictEqual(electronMenuBase(), 'Hello from electronMenuBase');
console.info("electronMenuBase tests passed");
