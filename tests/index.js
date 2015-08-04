var test = require('tape');
var waitTimes = require('../src/index');

test('module exists', function (t) {
  t.equals(typeof waitTimes, 'function', 'Module should export a function');
  t.end();
});
