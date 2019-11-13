#!/usr/bin/env node
'use strict';
process.on('unhandledRejection', (reason, p) => {
  // unless we force process to exit with 1, process may exit with 0 upon an unhandledRejection
  console.error(reason);
  process.exit(1);
});
const assert = require('assert');
// * --- end boilterplate --- * //

// project
const pkg = require('@falieson/js-second');
assert.strictEqual(pkg.second.unit, 1, "1 second")
assert.strictEqual(pkg.second.second, 1, "1 second")

// project another way
const {
  s,
  sec,
  second,
  seconds,
} = require('@falieson/js-second');
assert.strictEqual(s.unit, 1, "1 second")
assert.strictEqual(sec.unit, 1, "1 second")
assert.strictEqual(second.unit, 1, "1 second")
assert.strictEqual(seconds.unit, 1, "1 second")

assert.strictEqual(s.second, 1, "1 second")
assert.strictEqual(sec.second, 1, "1 second")
assert.strictEqual(second.second, 1, "1 second")
assert.strictEqual(seconds.second, 1, "1 second")