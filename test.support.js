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



//: @client:
var defyn=require("./defyn.support.js");
//: @end-client





//: @client:
describe("defyn",function(){

describe("`defyn( 'property', { } )`",function(){
it("should return an instance of Definition",function(){
var definition=defyn("property",{});

assert.equal(definition instanceof defyn.Definition,true);
});
});

describe("`defyn( 'property', { } ).define( { 'value': 123, 'configurable': false } )`",function(){
it("should define properly",function(){
var data={};
var definition=defyn("property",data);
definition.define({"value":123,"configurable":false});

var descriptor=definition.descriptor;

assert.equal(descriptor.value,123);

assert.equal(descriptor.configurable,false);

assert.equal(descriptor.enumerable,true);

assert.equal(descriptor.writable,true);

assert.equal(descriptor.get,undefined);

assert.equal(descriptor.set,undefined);
});
});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZGVmeW4iLCJkZXNjcmliZSIsIml0IiwiZGVmaW5pdGlvbiIsImVxdWFsIiwiRGVmaW5pdGlvbiIsImRhdGEiLCJkZWZpbmUiLCJkZXNjcmlwdG9yIiwidmFsdWUiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJnZXQiLCJ1bmRlZmluZWQiLCJzZXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdEQSxHQUFNQSxRQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsR0FBTUMsT0FBUUQsUUFBUyxvQkFBVCxDQUFkO0FBQ0E7Ozs7OztBQU1BO0FBQ0FFLFNBQVUsT0FBVixDQUFtQixVQUFPOztBQUV6QkEsU0FBVSw0QkFBVixDQUF3QyxVQUFPO0FBQzlDQyxHQUFJLHlDQUFKLENBQStDLFVBQU87QUFDckQsR0FBSUMsWUFBYUgsTUFBTyxVQUFQLENBQW1CLEVBQW5CLENBQWpCOztBQUVBRixPQUFPTSxLQUFQLENBQWNELHFCQUFzQkgsT0FBTUssVUFBMUMsQ0FBc0QsSUFBdEQ7QUFDQSxDQUpEO0FBS0EsQ0FORDs7QUFRQUosU0FBVSw4RUFBVixDQUEwRixVQUFPO0FBQ2hHQyxHQUFJLHdCQUFKLENBQThCLFVBQU87QUFDcEMsR0FBSUksTUFBTyxFQUFYO0FBQ0EsR0FBSUgsWUFBYUgsTUFBTyxVQUFQLENBQW1CTSxJQUFuQixDQUFqQjtBQUNBSCxXQUFXSSxNQUFYLENBQW1CLENBQUUsUUFBUyxHQUFYLENBQWdCLGVBQWdCLEtBQWhDLENBQW5COztBQUVBLEdBQUlDLFlBQWFMLFdBQVdLLFVBQTVCOztBQUVBVixPQUFPTSxLQUFQLENBQWNJLFdBQVdDLEtBQXpCLENBQWdDLEdBQWhDOztBQUVBWCxPQUFPTSxLQUFQLENBQWNJLFdBQVdFLFlBQXpCLENBQXVDLEtBQXZDOztBQUVBWixPQUFPTSxLQUFQLENBQWNJLFdBQVdHLFVBQXpCLENBQXFDLElBQXJDOztBQUVBYixPQUFPTSxLQUFQLENBQWNJLFdBQVdJLFFBQXpCLENBQW1DLElBQW5DOztBQUVBZCxPQUFPTSxLQUFQLENBQWNJLFdBQVdLLEdBQXpCLENBQThCQyxTQUE5Qjs7QUFFQWhCLE9BQU9NLEtBQVAsQ0FBY0ksV0FBV08sR0FBekIsQ0FBOEJELFNBQTlCO0FBQ0EsQ0FsQkQ7QUFtQkEsQ0FwQkQ7O0FBc0JBLENBaENEO0FBaUNBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZGVmeW5cIixcblx0XHRcdFwicGF0aFwiOiBcImRlZnluL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9kZWZ5bi5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwiZGVmeW5cIjogXCJkZWZ5blwiLFxuXHRcdFx0XCJwYXRoXCI6IFwicGF0aFwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgZGVmeW4gPSByZXF1aXJlKCBcIi4vZGVmeW4uc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG4vLzogQGNsaWVudDpcbmRlc2NyaWJlKCBcImRlZnluXCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYGRlZnluKCAncHJvcGVydHknLCB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERlZmluaXRpb25cIiwgKCApID0+IHtcblx0XHRcdGxldCBkZWZpbml0aW9uID0gZGVmeW4oIFwicHJvcGVydHlcIiwgeyB9ICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVmaW5pdGlvbiBpbnN0YW5jZW9mIGRlZnluLkRlZmluaXRpb24sIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZGVmeW4oICdwcm9wZXJ0eScsIHsgfSApLmRlZmluZSggeyAndmFsdWUnOiAxMjMsICdjb25maWd1cmFibGUnOiBmYWxzZSB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGRlZmluZSBwcm9wZXJseVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IGRhdGEgPSB7IH07XG5cdFx0XHRsZXQgZGVmaW5pdGlvbiA9IGRlZnluKCBcInByb3BlcnR5XCIsIGRhdGEgKTtcblx0XHRcdGRlZmluaXRpb24uZGVmaW5lKCB7IFwidmFsdWVcIjogMTIzLCBcImNvbmZpZ3VyYWJsZVwiOiBmYWxzZSB9ICk7XG5cblx0XHRcdGxldCBkZXNjcmlwdG9yID0gZGVmaW5pdGlvbi5kZXNjcmlwdG9yO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IudmFsdWUsIDEyMyApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlLCBmYWxzZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IuZW51bWVyYWJsZSwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3Iud3JpdGFibGUsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmdldCwgdW5kZWZpbmVkICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5zZXQsIHVuZGVmaW5lZCApO1xuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
