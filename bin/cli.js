#!/usr/bin/env node

const threewords = require('../index');
const string     = process.argv.slice( 2 ).join(' ').trim();

console.log( string ? threewords( string ) : threewords.random() );
