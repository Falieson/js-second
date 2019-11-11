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
  s,
  sec,
  second,
  seconds,
} = require('@falieson/js-second');

assert.strictEqual(pkg.second.unit, 1, "1 second")
assert.strictEqual(s.unit, 1, "1 second")
assert.strictEqual(sec.unit, 1, "1 second")
assert.strictEqual(second.unit, 1, "1 second")
assert.strictEqual(seconds.unit, 1, "1 second")
