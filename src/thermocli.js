#!/usr/bin/env node
'use strict';
const program = require('commander')

program
  .version('0.1.3')
  .usage('[options] <number>')
  .option('--c2f', 'convert Celsius to Fahrenheit')
  .option('--c2k', 'convert Celsius to Kelvin')
  .option('--f2c', 'convert Fahrenheit to Celsius')
  .option('--f2k', 'convert Fahrenheit to Kelvin')
  .option('--k2c', 'convert Kelvin to Celsius')
  .option('--k2f', 'convert Kelvin to Fahrenheit')

program.on('--help', () => {
  console.log('  Example:');
  console.log('');
  console.log('    $ thermo --c2f 32');
  console.log('    Converting 32 Degrees Celsius to Degrees Fahrenheit equals to 89.6 Degrees Fahrenheit')
  console.log('');
});

program.parse(process.argv);

const num = parseFloat(program.args[0])

if (program.c2f) {
  console.log(`Converting ${num} Degrees Celsius to Degrees Fahrenheit equals to ${num * 1.8  + 32} Degrees Fahrenheit`);
} else if (program.c2k) {
  console.log(`Converting ${num} Degrees Celsius to Kelvin equals to ${(num ) + 273.15}`);
}

if (program.f2c) {
  console.log(`Converting ${num} Degrees Fahrenheit to Degrees Celsius equals to ${(num - 32 ) / 1.8} Degrees Celsius`);
} else if (program.f2k) {
  console.log(`Converting ${num} Degrees Fahrenheit to Kelvin equals to ${(num - 32) * 5 / 9 + 273.15}`);
}

if (program.k2c) {
  console.log(`Converting ${num} Kelvin to Degrees Celsius equals to ${num - 273.15} Degrees Celsius`);
} else if (program.k2f) {
  console.log(`Converting ${num} Kelvin to Degrees Fahrenheit igual á ${num * 1.8 - 459.67} Degrees Fahrenheit`);
}