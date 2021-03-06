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

var assert=require("should");





//: @bridge:
var path=require("path");
//: @end-bridge





//: @bridge:
describe("defyn",function(){

var bridgeURL="file://"+path.resolve(__dirname,"bridge.html");

describe("`defyn( 'property', { } )`",function(){
it("should return an instance of Descriptor",function(){

var result=browser.url(bridgeURL).execute(

function(){
return defyn("property",{})instanceof defyn.Definition;
}).

value;

assert.equal(result,true);
});
});

describe("`defyn( 'property', { } ).define( { 'value': 123, 'configurable': false } )`",function(){
it("should define properly",function(){
//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let data = { };
					let definition = defyn( "property", data );
					definition.define( { "value": 123, "configurable": false } );

					return JSON.stringify( definition.descriptor );
				}

			).value;
			//: @end-ignore

var descriptor=JSON.parse(result);

assert.equal(descriptor.value,123);

assert.equal(descriptor.configurable,false);

assert.equal(descriptor.enumerable,true);

assert.equal(descriptor.writable,true);

assert.equal(descriptor.get,undefined);

assert.equal(descriptor.set,undefined);
});
});

});
//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsImRlZnluIiwiRGVmaW5pdGlvbiIsInZhbHVlIiwiZXF1YWwiLCJkZXNjcmlwdG9yIiwiSlNPTiIsInBhcnNlIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiZ2V0IiwidW5kZWZpbmVkIiwic2V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3REEsR0FBTUEsUUFBU0MsUUFBUyxRQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsR0FBTUMsTUFBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7O0FBTUE7QUFDQUUsU0FBVSxPQUFWLENBQW1CLFVBQU87O0FBRXpCLEdBQUlDLHFCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLENBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxTQUFVLDRCQUFWLENBQXdDLFVBQU87QUFDOUNJLEdBQUkseUNBQUosQ0FBK0MsVUFBTzs7QUFFckQsR0FBSUMsUUFBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWixVQUFXO0FBQ1YsTUFBT0MsT0FBTyxVQUFQLENBQW1CLEVBQW5CLFdBQW9DQSxPQUFNQyxVQUFqRDtBQUNBLENBSlc7O0FBTVhDLEtBTkY7O0FBUUFkLE9BQU9lLEtBQVAsQ0FBY1AsTUFBZCxDQUFzQixJQUF0QjtBQUNBLENBWEQ7QUFZQSxDQWJEOztBQWVBTCxTQUFVLDhFQUFWLENBQTBGLFVBQU87QUFDaEdJLEdBQUksd0JBQUosQ0FBOEIsVUFBTztBQUNwQztBQUNIOzs7Ozs7Ozs7Ozs7O0FBYUE7O0FBRUcsR0FBSVMsWUFBYUMsS0FBS0MsS0FBTCxDQUFZVixNQUFaLENBQWpCOztBQUVBUixPQUFPZSxLQUFQLENBQWNDLFdBQVdGLEtBQXpCLENBQWdDLEdBQWhDOztBQUVBZCxPQUFPZSxLQUFQLENBQWNDLFdBQVdHLFlBQXpCLENBQXVDLEtBQXZDOztBQUVBbkIsT0FBT2UsS0FBUCxDQUFjQyxXQUFXSSxVQUF6QixDQUFxQyxJQUFyQzs7QUFFQXBCLE9BQU9lLEtBQVAsQ0FBY0MsV0FBV0ssUUFBekIsQ0FBbUMsSUFBbkM7O0FBRUFyQixPQUFPZSxLQUFQLENBQWNDLFdBQVdNLEdBQXpCLENBQThCQyxTQUE5Qjs7QUFFQXZCLE9BQU9lLEtBQVAsQ0FBY0MsV0FBV1EsR0FBekIsQ0FBOEJELFNBQTlCO0FBQ0EsQ0E5QkQ7QUErQkEsQ0FoQ0Q7O0FBa0NBLENBckREO0FBc0RBIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJkZWZ5blwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZGVmeW4vdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2RlZnluLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJkZWZ5blwiOiBcImRlZnluXCIsXG5cdFx0XHRcInBhdGhcIjogXCJwYXRoXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG4vLzogQGJyaWRnZTpcbmRlc2NyaWJlKCBcImRlZnluXCIsICggKSA9PiB7XG5cblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIiApIH1gO1xuXG5cdGRlc2NyaWJlKCBcImBkZWZ5biggJ3Byb3BlcnR5JywgeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEZXNjcmlwdG9yXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gZGVmeW4oIFwicHJvcGVydHlcIiwgeyB9ICkgaW5zdGFuY2VvZiBkZWZ5bi5EZWZpbml0aW9uO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRlZnluKCAncHJvcGVydHknLCB7IH0gKS5kZWZpbmUoIHsgJ3ZhbHVlJzogMTIzLCAnY29uZmlndXJhYmxlJzogZmFsc2UgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBkZWZpbmUgcHJvcGVybHlcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgZGF0YSA9IHsgfTtcblx0XHRcdFx0XHRsZXQgZGVmaW5pdGlvbiA9IGRlZnluKCBcInByb3BlcnR5XCIsIGRhdGEgKTtcblx0XHRcdFx0XHRkZWZpbml0aW9uLmRlZmluZSggeyBcInZhbHVlXCI6IDEyMywgXCJjb25maWd1cmFibGVcIjogZmFsc2UgfSApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KCBkZWZpbml0aW9uLmRlc2NyaXB0b3IgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRsZXQgZGVzY3JpcHRvciA9IEpTT04ucGFyc2UoIHJlc3VsdCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IudmFsdWUsIDEyMyApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlLCBmYWxzZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IuZW51bWVyYWJsZSwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3Iud3JpdGFibGUsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmdldCwgdW5kZWZpbmVkICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5zZXQsIHVuZGVmaW5lZCApO1xuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
