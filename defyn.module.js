/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "defyn",
			"path": "defyn/defyn.module.js",
			"file": "defyn.module.js",
			"module": "defyn",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/defyn.git",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Define property descriptor.
	@end-module-documentation

	@include:
		{
			"harden": "harden",
			"zelf": "zelf"
		}
	@end-include
*/

const harden = require( "harden" );
const zelf = require( "zelf" );

//: @server:
const Definition = require( "./definition.js" );
//: @end-server

//: @client:
const Definition = require( "./definition.support.js" );
//: @end-client

const defyn = function defyn( property, entity ){
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

	if( arguments.length == 1 ){
		entity = zelf( this );
	}

	return Object.freeze( new Definition( property, entity ) );
};

harden( "Definition",  Definition, defyn );

module.exports = defyn;
