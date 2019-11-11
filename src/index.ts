'use strict';

//core
import * as second from './seconds'
import * as millisecond from './milliseconds'

// ALIASES
export const s = second
export const sec = second
export const seconds = second
export const ms = millisecond
export const msec = millisecond
export const milliseconds = millisecond

export {
  second,
  millisecond,
}

export const getDirName = ()=> {
  return __dirname;
};

export const r2gSmokeTest = async () => {
  const seconds = exports.seconds;
  const v = await seconds.unit;
  return v === 1;
}
export default {
  second,
  millisecond,
}
