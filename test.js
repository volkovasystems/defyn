"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "defyn",
			"path": "defyn/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/defyn.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"defyn": "defyn",
			"path": "path"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const defyn = require( "./defyn.js" );
//: @end-server





//: @server:
describe( "defyn", ( ) => {

	describe( "`defyn( 'property', { } )`", ( ) => {
		it( "should return an instance of Definition", ( ) => {
			let definition = defyn( "property", { } );

			assert.equal( definition instanceof defyn.Definition, true );
		} );
	} );

	describe( "`defyn( 'property', { } ).define( { 'value': 123, 'configurable': false } )`", ( ) => {
		it( "should define properly", ( ) => {
			let data = { };
			let definition = defyn( "property", data );
			definition.define( { "value": 123, "configurable": false } );

			let descriptor = definition.descriptor;

			assert.equal( descriptor.value, 123 );

			assert.equal( descriptor.configurable, false );

			assert.equal( descriptor.enumerable, true );

			assert.equal( descriptor.writable, true );

			assert.equal( descriptor.get, undefined );

			assert.equal( descriptor.set, undefined );
		} );
	} );

	describe( "`defyn( 0, [ ] ).define( { 'value': 1, 'configurable': false } )`", ( ) => {
		it( "should define properly", ( ) => {
			let data = [ ];
			let definition = defyn( 0, data );
			definition.define( { "value": 1, "configurable": false } );

			let descriptor = definition.descriptor;

			assert.equal( descriptor.value, 1 );

			assert.equal( descriptor.configurable, false );

			assert.equal( descriptor.enumerable, true );

			assert.equal( descriptor.writable, true );

			assert.equal( descriptor.get, undefined );

			assert.equal( descriptor.set, undefined );
		} );
	} );

	describe( "`defyn with string property and instance of class as entity`", ( ) => {
		it( "should define properly", ( ) => {
			class Orange {
				constructor( ){ }

				static orange( ){
					return "orange";
			    }
			}

			let orange = new Orange( )

			let definition = defyn( "getApple", orange );
			definition.define( { "value": function( ){ return "apple"; } } );

			let descriptor = definition.descriptor;

			assert.equal( typeof descriptor.value, "function" );

			assert.equal( descriptor.configurable, true );

			assert.equal( descriptor.enumerable, true );

			assert.equal( descriptor.writable, true );

			assert.equal( descriptor.get, undefined );

			assert.equal( descriptor.set, undefined );
		} );
	} );

} );
//: @end-server




