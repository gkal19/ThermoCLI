#!/usr/bin/env node
'use strict';
const program = require('commander')
      //pkg = require('./package.json')

program
	//Version Number
  .version('0.0.6')
  //.usage
  .usage('[options] <number>')
  	//Celsius
  .option('--c2f', 'Celsius para Fahrenheit')
  .option('--c2k', 'Celsius para Kelvin')
  	//Fahrenheit
  .option('--f2c', 'Fahrenheit para Celsius')
  .option('--f2k', 'Fahrenheit para Kelvin')
  	//Kelvin
  .option('--k2c', 'Kelvin para Celsius')
  .option('--k2f', 'Kelvin para Fahrenheit')

program.on('--help', () => {
  console.log('  Exemplo:');
  console.log('');
  console.log('    $ thermo --c2f <number>');
  console.log('');
});

program.parse(process.argv);

const num = parseFloat(program.args[0])

if (program.c2f) {
  console.log(`Convertendo ${num} Graus Celsius em Fahrenheit é igual á ${num * 1.8  + 32}`);
} else if (program.c2k) {
  console.log(`Convertendo ${num} Graus Celsius em Kelvin é igual á ${(num ) + 273.15}`);
}

if (program.f2c) {
  console.log(`Convertendo ${num} Fahrenheit em Celsius é igual á ${(num - 32 ) / 1.8}`);
} else if (program.f2k) {
  console.log(`Convertendo ${num} Fahrenheit em Kelvin é igual á ${(num - 32) * 5 / 9 + 273.15}`);
}

if (program.k2c) {
  console.log(`Convertendo ${num} Kelvin em Celsius é igual á ${num - 273.15}`);
} else if (program.k2f) {
  console.log(`Convertendo ${num} Kelvin em Fahrenheit igual á ${num * 1.8 - 459.67}`);
}