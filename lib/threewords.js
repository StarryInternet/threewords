const crypto     = require('crypto');
const adjectives = require('../data/adjectives');
const nouns      = require('../data/nouns');

function hash( string ) {
  return crypto.createHash('md5').update( string ).digest().slice( 0, 12 );
}

function toNumbers( buffer ) {
  return [ 0, 0, 0 ].map( ( e, i ) => buffer.readUInt32BE( i * 4 ) );
}

module.exports = ( str, a = adjectives, n = nouns ) => {
  const [ x, y, z ] = toNumbers( hash( String( str ) ) );
  return `${ a[ x % a.length ] }-${ a[ y % a.length ] }-${ n[ z % n.length ] }`;
};

module.exports.random = ( ...args ) => {
  return module.exports( crypto.randomBytes( 12 ), ...args );
};
