# @falieson/js-second

Tired of repeating common ms and second calculations throughout your repositories? Let's centralize and harden these ideas with a repo!

## Install

```bash
$ npm i -S @falieson/js-second
```

```bash
$ yarn @falieson/js-second
```

## Aliases

`second` - s, sec, seconds
`millisecond` - ms, msec, milliseconds

## imports

### get a year a mount of seconds

```js
import time from "@falieson/js-second"
console.log(time.second.year) // 31536000
```

```js
import {second} from "@falieson/js-second"
console.log(second.year) // 31536000
```

### get a year a mount of milliseconds

```js
import time from "@falieson/js-second"
console.log(time.millisecond.year) // 31536000000
```

```js
import {millisecond} from "@falieson/js-second"
console.log(millisecond.year) // 31536000000
```

## Calculations

| Alias         | second   | milisecond  | Description |
|---------------|----------|-------------|-------------|
| unit          | 1        | 1000        |             |
| quarterMinute | 15       | 15000       | 15 sec      |
| halfMinute    | 30       | 30000       | 30 sec      |
| minute        | 60       | 60000       | 60 sec      |
| doubleMinute  | 120      | 120000      | 2 mins      |
| fiveMinute    | 300      | 300000      | 5 mins      |
| quarterHour   | 900      | 900000      | 15 mins     |
| halfHour      | 1800     | 1800000     | 30 mins     |
| hour          | 3600     | 3600000     | 60 mins     |
| quarterDay    | 21600    | 21600000    | 3 hours     |
| halfDay       | 43200    | 43200000    | 6 hours     |
| day           | 86400    | 86400000    | 24 hours    |
| week          | 604800   | 604800000   | 7 days      |
| doubleWeek    | 1209600  | 1209600000  | 14 days     |
| halfMonth     | 1296000  | 1296000000  | 15 days     |
| month         | 2592000  | 2592000000  | 30 days     |
| quarterYear   | 7862400  | 7862400000  | 91 days     |
| halfYear      | 15724800 | 15724800000 | 182 days    |
| year          | 31536000 | 31536000000 | 365 days    |
