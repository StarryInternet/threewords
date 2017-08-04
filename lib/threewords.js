const crypto     = require('crypto');
const adjectives = require('../data/adjectives');
const nouns      = require('../data/nouns');

function hash( str ) {
  const buffer = Buffer.alloc( 12 );
  const hash   = crypto.createHash('md5').update( str ).digest();
  hash.copy( buffer, 0, 0, 12 );
  return buffer;
}

function toNumbers( buffer ) {
  const hi  = buffer.readUInt32BE( 0 );
  const mid = buffer.readUInt32BE( 4 );
  const lo  = buffer.readUInt32BE( 8 );
  return [ hi, mid, lo ];
}

module.exports = ( str, a = adjectives, n = nouns ) => {
  const numbers = toNumbers( hash( String( str ) ) );

  const one   = a[ numbers[ 0 ] % a.length ];
  const two   = a[ numbers[ 1 ] % a.length ];
  const three = n[ numbers[ 2 ] % n.length ];

  return `${ one }-${ two }-${ three }`;
};

module.exports.random = function( ...args ) {
  return module.exports( crypto.randomBytes( 12 ), ...args );
};
