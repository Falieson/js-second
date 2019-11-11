#!/usr/bin/env node
'use strict';

// core
const assert = require('assert');
// const path = require('path');
// const cp = require('child_process');
// const os = require('os');
// const fs = require('fs');
// const EE = require('events');


process.on('unhandledRejection', (reason, p) => {
  // unless we force process to exit with 1, process may exit with 0 upon an unhandledRejection
  console.error(reason);
  process.exit(1);
});


// local / project
const pkg = require('@falieson/js-second');
const {second, millisecond} = require('@falieson/js-second');

// unit
assert.strictEqual(pkg.second.unit, 1, "1 second")
assert.strictEqual(pkg.millisecond.unit, 1000, "1 second")

assert.strictEqual(second.unit, 1, "1 second")
assert.strictEqual(millisecond.unit, 1000, "1 second")

// year
assert.strictEqual(pkg.second.year, 31536000, "1 year")
assert.strictEqual(pkg.millisecond.year, 31536000000, "1 year")

assert.strictEqual(second.year, 31536000, "1 year")
assert.strictEqual(millisecond.year, 31536000000, "1 year")
