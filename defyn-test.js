
const assert = require( "assert" );
const defyn = require( "./defyn.js" );
const dscrb = require( "dscrb" );
const Definition = require( "./definition.js" );

let test = { };
let definition = defyn( "property", test );

assert.equal( definition instanceof Definition, true, "should be true" );

assert.ok( definition.define( {
	"value": "value",
	"writable": true
} ) );

assert.equal( test.property, "value", "should be equal to 'value'" );

let dataA = { "sampleA": "valueA" };
let dataB = { };

let descriptor = dscrb( "sampleA", dataA );
defyn( "sampleA", dataB ).define( descriptor );

assert.equal( dataB.sampleA, "valueA", "should be equal to 'valueA'" );

console.log( "ok" );
