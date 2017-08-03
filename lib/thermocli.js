#!/usr/bin/env node


'use strict';

var program = require('commander');
var pkg = require('../package.json');

program.version(pkg.version).usage('[options] <number>').option('--c2f', 'convert Celsius to Fahrenheit').option('--c2k', 'convert Celsius to Kelvin').option('--f2c', 'convert Fahrenheit to Celsius').option('--f2k', 'convert Fahrenheit to Kelvin').option('--k2c', 'convert Kelvin to Celsius').option('--k2f', 'convert Kelvin to Fahrenheit');

program.on('--help', function () {
  console.log('  Example:\n\n    $ thermo --c2f 32\n    \n    Converting 32 Celsius to Fahrenheit is equals to 89.6 Fahrenheit\'\n\n  ');
});

program.parse(process.argv);

var logResponse = function logResponse(num, start, end, converted) {
  return console.log('   \n\n              Converting ' + num + ' ' + start + ' to ' + end + ' is equals to ' + converted + ' ' + end + '\n            ');
};

var OPTIONS = ['c2f', 'c2k', 'f2c', 'f2k', 'k2c', 'k2f'];

var ACTIONS = {
  c2f: function c2f(num) {
    return logResponse(num, 'Celsius', 'Fahrenheit', num * 1.8 + 32);
  },
  c2k: function c2k(num) {
    return logResponse(num, 'Celsius', 'Kelvin', num + 273.15);
  },
  f2c: function f2c(num) {
    return logResponse(num, 'Fahrenheit', 'Celsius', (num - 32) / 1.8);
  },
  f2k: function f2k(num) {
    return logResponse(num, 'Fahrenheit', 'Kelvin', (num - 32) * 5 / 9 + 273.15);
  },
  k2c: function k2c(num) {
    return logResponse(num, 'Kelvin', 'Celsius', num - 273.15);
  },
  k2f: function k2f(num) {
    return logResponse(num, 'Kelvin', 'Fahrenheit', num * 1.8 - 459.67);
  }
};

var keys = Object.keys(program);
var option = keys[keys.length - 2];

ACTIONS[option](parseFloat(program.args[0]));
//# sourceMappingURL=thermocli.js.map