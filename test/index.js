const assert = require('assert');
const lib    = require('../lib/threewords');

describe( '3words', () => {

  describe( 'from string', () => {

    it( 'should be predictable', () => {
      const input  = 'hey hi hello';
      const expect = 'egoistic-reactive-mediator';
      const output = lib( input );

      assert.equal( expect, output );
    });

    it( 'should support custom word lists', () => {
      const input  = 'hey hi hello';
      const adjs   = [ 'stupid' ];
      const nouns  = [ 'test' ];
      const expect = 'stupid-stupid-test';
      const output = lib( input, adjs, nouns );

      assert.equal( expect, output );
    });

  });

  describe( 'random', () => {

    it( 'should be predictable', () => {
      const output = lib.random();

      assert.ok( /[a-z]+-[a-z]+-[a-z]/.test( output ) );
    });

    it( 'should support custom word lists', () => {
      const adjs   = [ 'stupid' ];
      const nouns  = [ 'test' ];
      const expect = 'stupid-stupid-test';
      const output = lib.random( adjs, nouns );

      assert.equal( expect, output );
    });

  });

});
