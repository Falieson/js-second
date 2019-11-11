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
const {
  ms,
  msec,
  millisecond,
  milliseconds,
} = require('@falieson/js-second');

assert.strictEqual(pkg.millisecond.unit, 1000, "1 second")
assert.strictEqual(ms.unit, 1000, "1 second")
assert.strictEqual(msec.unit, 1000, "1 second")
assert.strictEqual(millisecond.unit, 1000, "1 second")
assert.strictEqual(milliseconds.unit, 1000, "1 second")
