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
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/defyn.git",
			"test": "defyn-test.js",
			"class": true,
			"global": false
		}
	@end-submodule-configuration

	@submodule-documentation:
		Definition class wrapper.

	@end-submodule-documentation

	@include:
		{
			"anykey": "anykey",
			"depher": "depher",
			"detr": "detr",
			"falzy": "falzy",
			"kein": "kein",
			"stringe": "stringe",
			"wichevr": "wichevr"
		}
	@end-include
*/

const anykey = require( "anykey" );
const depher = require( "depher" );
const detr = require( "detr" );
const falzy = require( "falzy" );
const kein = require( "kein" );
const stringe = require( "stringe" );
const wichevr = require( "wichevr" );

const PROPERTY = Symbol( "property" );
const ENTITY = Symbol( "entity" );
const DESCRIPTOR = Symbol( "descriptor" );

class Definition {
	constructor( property, entity ){
		/*;
			@meta-configuration:
				{
					"property:required": [
						"number"
						"string",
						"symbol"
					],
					"entity": "*"
				}
			@end-meta-configuration
		*/

		if(
			falzy( property )
			|| (
				typeof property != "number"
				&& typeof property != "string"
				&& typeof property != "symbol"
			)
		){
			throw new Error( "invalid property" );
		}

		if( falzy( entity ) ){
			throw new Error( "invalid entity" );
		}

		if( Object.isFrozen( entity ) ){
			throw new Error( "cannot define on frozen entity" );
		}

		if( Object.isSealed( entity ) ){
			throw new Error( "cannot define on sealed entity" );
		}

		this[ PROPERTY ] = property;
		this[ ENTITY ] = entity;

		if(
			kein( this[ PROPERTY ], this[ ENTITY ] )
			&& this.descriptor.configurable === false
		){
			throw new Error( "cannot define non-configurable existing property" );
		}

		this[ DESCRIPTOR ] = {
			"enumerable": true,
			"configurable": true,
			"PRIVATE_PROPERTY": Symbol( `-${ stringe( this[ PROPERTY ] ) }` )
		};
	}

	define( descriptor ){
		/*;
			@meta-configuration:
				{
					"descriptor": "object"
				}
			@end-meta-configuration
		*/

		try{
			Object.defineProperty( this[ ENTITY ], this[ PROPERTY ],
				detr( descriptor, ( function defer( descriptor ){
					if(
						anykey( [ "get", "set" ], descriptor )
						|| anykey( [ "get", "set" ], this[ DESCRIPTOR ] )
					){
						let self = this;

						return {
							"get": depher( [
								descriptor.get,
								this[ DESCRIPTOR ].get
							], FUNCTION, function get( ){
								return self[ ENTITY ][ self[ DESCRIPTOR ].PRIVATE_PROPERTY ];
							} ),

							"set": depher( [
								descriptor.set,
								this[ DESCRIPTOR ].set
							], FUNCTION, function set( value ){
								self[ ENTITY ][ self[ DESCRIPTOR ].PRIVATE_PROPERTY ] = value;

								return self[ ENTITY ];
							} ),

							"configurable": depher( [
								descriptor.configurable,
								this[ DESCRIPTOR ].configurable
							], BOOLEAN, true ),

							"enumerable": depher( [
								descriptor.enumerable,
								this[ DESCRIPTOR ].enumerable
							], BOOLEAN, true )
						};
					}

					return {
						"value": wichevr( descriptor.value, this[ DESCRIPTOR ].value ),

						"writable": depher( [
							descriptor.writable,
							this[ DESCRIPTOR ].writable
						], BOOLEAN, true ),

						"configurable": depher( [
							descriptor.configurable,
							this[ DESCRIPTOR ].configurable
						], BOOLEAN, true ),

						"enumerable": depher( [
							descriptor.enumerable,
							this[ DESCRIPTOR ].enumerable
						], BOOLEAN, true )
					};
				} ).bind( this ) ) );

		}catch( error ){
			throw new Error( `cannot apply definition, ${ error.stack }` );
		}

		return this;
	}

	get( method ){
		if( arguments.length == 0 ){
		 	let self = this;
			this[ DESCRIPTOR ].get = function get( ){
				return self[ ENTITY ][ self[ DESCRIPTOR ].PRIVATE_PROPERTY ];
			};

			return this;
		}

		if( typeof method != "function" ){
			throw new Error( "invalid set method" );
		}

		this[ DESCRIPTOR ].get = method;

		return this;
	}

	set( method ){
		if( arguments.length == 0 ){
			let self = this;
			this[ DESCRIPTOR ].set = function set( value ){
				self[ ENTITY ][ self[ DESCRIPTOR ].PRIVATE_PROPERTY ] = value;

				return self[ ENTITY ];
			};

			return this;
		}

		if( typeof method != "function" ){
			throw new Error( "invalid set method" );
		}

		this[ DESCRIPTOR ].set = method;

		return this;
	}

	value( value ){
		this[ DESCRIPTOR ].value = value;

		return this;
	}

	/*;
		@method-documentation:
			Accessor descriptors takes higher precedence,
				therefore the writability state will be overridden
				if any accessor descriptor properties exists.
		@end-method-documentation
	*/
	writable( state ){
		if( arguments.length == 0 ){
			this[ DESCRIPTOR ].writable = true;

			return this;
		}

		if( typeof state != "boolean" ){
			throw new Error( "invalid writable state" );
		}

		this[ DESCRIPTOR ].writable = state;

		return this;
	}

	configurable( state ){
		if( arguments.length == 0 ){
			this[ DESCRIPTOR ].configurable = true;

			return this;
		}

		if( typeof state != "boolean" ){
			throw new Error( "invalid configurable state" );
		}

		this[ DESCRIPTOR ].configurable = state;

		return this;
	}

	enumerable( state ){
		if( arguments.length == 0 ){
			this[ DESCRIPTOR ].enumerable = true;

			return this;
		}

		if( typeof state != "boolean" ){
			throw new Error( "invalid enumerable state" );
		}

		this[ DESCRIPTOR ].enumerable = state;

		return this;
	}

	get descriptor( ){
		try{
			return Object.freeze( Object.getOwnPropertyDescriptor( this[ ENTITY ], this[ PROPERTY ] ) );

		}catch( error ){
			return Object.freeze( { } );
		}
	}
}

module.exports = Definition;
