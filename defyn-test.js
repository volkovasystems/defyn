
const assert = require( "assert" );
const defyn = require( "./defyn.js" );
const Definition = require( "./definition.js" );

let test = { };
let definition = defyn( "property", test );

assert.equal( definition instanceof Definition, true, "should be true" );

assert.ok( definition.define( {
	"value": "value",
	"writable": true
} ) );

assert.equal( test.property, "value", "should be equal to 'value'" );

console.log( "ok" );
