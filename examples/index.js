'use strict';

var isValid = require( './../lib' );

console.log( isValid( 5 ) );
// returns true

console.log( isValid( 0 ) );
// returns true

console.log( isValid( Math.PI ) );
// returns false

console.log( isValid( -5 ) );
// returns false
