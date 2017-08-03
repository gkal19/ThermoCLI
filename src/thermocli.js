#!/usr/bin/env node

'use strict';

const program = require('commander');
const pkg = require('../package.json');
const chalk = require('chalk');

program
  .version(pkg.version)
  .usage('[options] <number>')
  .option('--c2f', 'convert Celsius to Fahrenheit')
  .option('--c2k', 'convert Celsius to Kelvin')
  .option('--f2c', 'convert Fahrenheit to Celsius')
  .option('--f2k', 'convert Fahrenheit to Kelvin')
  .option('--k2c', 'convert Kelvin to Celsius')
  .option('--k2f', 'convert Kelvin to Fahrenheit')

program.on('--help', function () {
  console.log(`  Example:

    $ thermo --c2f 32
    
    Converting 32 Celsius to Fahrenheit is equals to 89.6 Fahrenheit.'

  `);
});

program.parse(process.argv);

const logResponse = ( num, start, end, converted ) =>   
  console.log(chalk.red(` 

              Converting ${num} ${start} to ${end} is equals to ${converted} ${end}.

            `))

const OPTIONS = [ 
  'c2f',
  'c2k',
  'f2c',
  'f2k',
  'k2c',
  'k2f'
]

const ACTIONS = {
  c2f: ( num ) => logResponse( num, 'Celsius', 'Fahrenheit', num * 1.8 + 32 ), 
  c2k: ( num ) => logResponse( num, 'Celsius', 'Kelvin', num + 273.15 ),
  f2c: ( num ) => logResponse( num, 'Fahrenheit', 'Celsius', (num - 32) / 1.8 ),  
  f2k: ( num ) => logResponse( num, 'Fahrenheit', 'Kelvin', (num - 32) * 5 / 9 + 273.15 ),  
  k2c: ( num ) => logResponse( num, 'Kelvin', 'Celsius', num - 273.15),  
  k2f: ( num ) => logResponse( num, 'Kelvin', 'Fahrenheit', num * 1.8 - 459.67), 
}

const keys = Object.keys( program )
const option = keys[ keys.length - 2 ]

ACTIONS[ option ]( parseFloat( program.args[0] ) )
