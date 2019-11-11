#!/usr/bin/env node

// core
// const cp = require('child_process');
// const path = require('path');
// const fs = require('fs');
// const http = require('http');
// const assert = require('assert');
// const EE = require('events');
// const strm = require('stream');

// npm
const chalk = require('chalk');

// local / project
const pkg = require('@falieson/js-second');

console.log(
  'Directory path which contains the @falieson/js-second index file:',
  chalk.magenta(pkg.getDirName())
);
