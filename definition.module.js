"use strict";

/*;
	@submodule-license:
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
	@end-submodule-license

	@submodule-configuration:
		{
			"package": "defyn",
			"path": "defyn/definition.module.js",
			"file": "definition.module.js",
			"module": "defyn",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/defyn.git",
			"test": "defyn-test.js",
			"class": true,
			"global": false
		}
	@end-submodule-configuration

	@submodule-documentation:
		Definition class wrapper.

		By default, descriptor is enumerable and configurable,
			and data descriptor will be writable.

		This class should not care what is the type of the descriptor.
	@end-submodule-documentation

	@include:
		{
			"allkey": "allkey",
			"anykey": "anykey",
			"asyum": "asyum",
			"dscrb": "dscrb",
			"falzy": "falzy",
			"harden": "harden",
			"kein": "kein",
			"protype": "protype",
			"truly": "truly",
			"wichevr": "wichevr"
		}
	@end-include
*/

const allkey = require( "allkey" );
const anykey = require( "anykey" );
const asyum = require( "asyum" );
const dscrb = require( "dscrb" );
const falzy = require( "falzy" );
const harden = require( "harden" );
const kein = require( "kein" );
const protype = require( "protype" );
const truly = require( "truly" );
const wichevr = require( "wichevr" );

const PROPERTY = Symbol( "property" );
const ENTITY = Symbol( "entity" );
const DESCRIPTOR = Symbol( "descriptor" );

class Definition {
	constructor( property, entity ){
		if( falzy( property ) || !protype( property, NUMBER + STRING + SYMBOL ) ){
			throw new Error( "invalid property" );
		}

		if( falzy( entity ) ){
			throw new Error( "invalid entity" );
		}

		this[ PROPERTY ] = property;
		this[ ENTITY ] = entity;
		this[ DESCRIPTOR ] = { "enumerable": true, "configurable": true };
	}

	define( descriptor ){
		if( !allkey( [ PROPERTY, ENTITY ], this ) ){
			throw new Error( "cannot define flushed definition" );
		}

		if( truly( descriptor ) ){
			this[ DESCRIPTOR ] = asyum( descriptor, "Descriptor", function resolve( ){
				if( anykey( [ "value", "writable" ], this ) ){
					return {
						"value": this.value,
						"writable": wichevr( this.writable, true ),

						"configurable": wichevr( this.configurable, true ),
						"enumerable": wichevr( this.enumerable, true )
					};
				}

				if( anykey( [ "get", "set" ], this ) ){
					return {
						"get": this.get,
						"set": this.set,

						"configurable": wichevr( this.configurable, true ),
						"enumerable": wichevr( this.enumerable, true )
					};
				}

				return { };
			} ).resolve( );
		}

		Object.defineProperty( this[ ENTITY ], this[ PROPERTY ], this[ DESCRIPTOR ] );

		return this;
	}

	get( method ){
		if( falzy( method ) || !protype( method, FUNCTION ) ){
			throw new Error( "invalid get method" );
		}

		this[ DESCRIPTOR ].get = method;

		return this;
	}

	set( method ){
		if( falzy( method ) || !protype( method, FUNCTION ) ){
			throw new Error( "invalid set method" );
		}

		this[ DESCRIPTOR ].set = method;

		return this;
	}

	value( value ){
		this[ DESCRIPTOR ].value = value;

		return this;
	}

	writable( state ){
		if( falzy( state ) ){
			return this.writable( true );
		}

		if( !protype( state, BOOLEAN ) ){
			throw new Error( "invalid writable state" );
		}

		this[ DESCRIPTOR ].writable = state;

		return this;
	}

	configurable( state ){
		if( falzy( state ) ){
			return this.configurable( true );
		}

		if( !protype( state, BOOLEAN ) ){
			throw new Error( "invalid configurable state" );
		}

		this[ DESCRIPTOR ].configurable = state;

		return this;
	}

	enumerable( state ){
		if( falzy( state ) ){
			return this.enumerable( true );
		}

		if( !protype( state, BOOLEAN ) ){
			throw new Error( "invalid enumerable state" );
		}

		this[ DESCRIPTOR ].enumerable = state;

		return this;
	}

	flush( ){
		delete this[ ENTITY ];
		delete this[ PROPERTY ];

		return this;
	}

	describe( ){
		if( !allkey( [ PROPERTY, ENTITY ], this ) ){
			return { };
		}

		if( !kein( this[ PROPERTY ], this[ ENTITY ] ) ){
			return { };
		}

		let descriptor = dscrb( this[ PROPERTY ], this[ ENTITY ] );

		try{
			return descriptor.resolve( );

		}finally{
			descriptor.flush( );
		}
	}

	toJSON( ){
		return this.describe( );
	}

	valueOf( ){
		return this.describe( );
	}

	toString( ){
		return JSON.stringify( this.toJSON( ) );
	}
}

module.exports = Definition;
