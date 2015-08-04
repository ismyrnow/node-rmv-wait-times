[![Build Status](https://travis-ci.org/ismyrnow/node-rmv-wait-times.svg)](https://travis-ci.org/ismyrnow/node-rmv-wait-times)

# RMV Wait Times

A simple node module to get Massachusetts RMV wait times.

## Install

```
npm install rmv-wait-times
```

## Usage

```javascript
var waitTimes = require('rmv-wait-times');

waitTimes(function (err, result) {
  console.dir(result);
  /*
   [
     {
       town: 'Attleboro',
       licensing: '00:54:30',
       registration: '00:36:58'
     },
     {
       town: 'Boston',
       licensing: '01:20:00',
       registration: '02:29:48'
     },
     ...
   ]
  */
});
```

## Testing

```
npm test
```
