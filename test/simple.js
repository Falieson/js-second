#!/usr/bin/env node

// npm
const chalk = require('chalk');

// local / project
const pkg = require('@falieson/js-second');

console.log(
  'Directory path which contains the @falieson/js-second index file:',
  chalk.magenta(pkg.getDirName())
);
