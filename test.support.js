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
*/var _typeof2=require("babel-runtime/helpers/typeof");var _typeof3=_interopRequireDefault(_typeof2);var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _for=require("babel-runtime/core-js/symbol/for");var _for2=_interopRequireDefault(_for);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

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

describe("`defyn( 0, [ ] ).define( { 'value': 1, 'configurable': false } )`",function(){
it("should define properly",function(){
var data=[];
var definition=defyn(0,data);
definition.define({"value":1,"configurable":false});

var descriptor=definition.descriptor;

assert.equal(descriptor.value,1);

assert.equal(descriptor.configurable,false);

assert.equal(descriptor.enumerable,true);

assert.equal(descriptor.writable,true);

assert.equal(descriptor.get,undefined);

assert.equal(descriptor.set,undefined);
});
});

describe("`defyn( Symbol.for( 'hello' ), { } ).define( { 'value': Symbol.for( 'hello' ), 'configurable': false } )`",function(){
it("should define properly",function(){
var data={};
var definition=defyn((0,_for2.default)("hello"),data);
definition.define({"value":(0,_for2.default)("hello"),"configurable":false});

var descriptor=definition.descriptor;

assert.equal(descriptor.value,(0,_for2.default)("hello"));

assert.equal(descriptor.configurable,false);

assert.equal(descriptor.enumerable,true);

assert.equal(descriptor.writable,true);

assert.equal(descriptor.get,undefined);

assert.equal(descriptor.set,undefined);
});
});

describe("`defyn with string property and instance of class as entity`",function(){
it("should define properly",function(){var
Orange=function(){
function Orange(){(0,_classCallCheck3.default)(this,Orange);}(0,_createClass3.default)(Orange,null,[{key:"orange",value:function orange()

{
return"orange";
}}]);return Orange;}();


var orange=new Orange();

var definition=defyn("getApple",orange);
definition.define({"value":function value(){return"apple";}});

var descriptor=definition.descriptor;

assert.equal((0,_typeof3.default)(descriptor.value),"function");

assert.equal(descriptor.configurable,true);

assert.equal(descriptor.enumerable,true);

assert.equal(descriptor.writable,true);

assert.equal(descriptor.get,undefined);

assert.equal(descriptor.set,undefined);
});
});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZGVmeW4iLCJkZXNjcmliZSIsIml0IiwiZGVmaW5pdGlvbiIsImVxdWFsIiwiRGVmaW5pdGlvbiIsImRhdGEiLCJkZWZpbmUiLCJkZXNjcmlwdG9yIiwidmFsdWUiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJnZXQiLCJ1bmRlZmluZWQiLCJzZXQiLCJPcmFuZ2UiLCJvcmFuZ2UiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdEQSxHQUFNQSxRQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsR0FBTUMsT0FBUUQsUUFBUyxvQkFBVCxDQUFkO0FBQ0E7Ozs7OztBQU1BO0FBQ0FFLFNBQVUsT0FBVixDQUFtQixVQUFPOztBQUV6QkEsU0FBVSw0QkFBVixDQUF3QyxVQUFPO0FBQzlDQyxHQUFJLHlDQUFKLENBQStDLFVBQU87QUFDckQsR0FBSUMsWUFBYUgsTUFBTyxVQUFQLENBQW1CLEVBQW5CLENBQWpCOztBQUVBRixPQUFPTSxLQUFQLENBQWNELHFCQUFzQkgsT0FBTUssVUFBMUMsQ0FBc0QsSUFBdEQ7QUFDQSxDQUpEO0FBS0EsQ0FORDs7QUFRQUosU0FBVSw4RUFBVixDQUEwRixVQUFPO0FBQ2hHQyxHQUFJLHdCQUFKLENBQThCLFVBQU87QUFDcEMsR0FBSUksTUFBTyxFQUFYO0FBQ0EsR0FBSUgsWUFBYUgsTUFBTyxVQUFQLENBQW1CTSxJQUFuQixDQUFqQjtBQUNBSCxXQUFXSSxNQUFYLENBQW1CLENBQUUsUUFBUyxHQUFYLENBQWdCLGVBQWdCLEtBQWhDLENBQW5COztBQUVBLEdBQUlDLFlBQWFMLFdBQVdLLFVBQTVCOztBQUVBVixPQUFPTSxLQUFQLENBQWNJLFdBQVdDLEtBQXpCLENBQWdDLEdBQWhDOztBQUVBWCxPQUFP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QUFxQyxJQUFyQzs7QUFFQWIsT0FBT00sS0FBUCxDQUFjSSxXQUFXSSxRQUF6QixDQUFtQyxJQUFuQzs7QUFFQWQsT0FBT00sS0FBUCxDQUFjSSxXQUFXSyxHQUF6QixDQUE4QkMsU0FBOUI7O0FBRUFoQixPQUFPTSxLQUFQLENBQWNJLFdBQVdPLEdBQXpCLENBQThCRCxTQUE5QjtBQUNBLENBM0JEO0FBNEJBLENBN0JEOztBQStCQSxDQTNHRDtBQTRHQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImRlZnluXCIsXG5cdFx0XHRcInBhdGhcIjogXCJkZWZ5bi90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZGVmeW4uZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImRlZnluXCI6IFwiZGVmeW5cIixcblx0XHRcdFwicGF0aFwiOiBcInBhdGhcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGRlZnluID0gcmVxdWlyZSggXCIuL2RlZnluLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5kZXNjcmliZSggXCJkZWZ5blwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBkZWZ5biggJ3Byb3BlcnR5JywgeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEZWZpbml0aW9uXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgZGVmaW5pdGlvbiA9IGRlZnluKCBcInByb3BlcnR5XCIsIHsgfSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlZmluaXRpb24gaW5zdGFuY2VvZiBkZWZ5bi5EZWZpbml0aW9uLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRlZnluKCAncHJvcGVydHknLCB7IH0gKS5kZWZpbmUoIHsgJ3ZhbHVlJzogMTIzLCAnY29uZmlndXJhYmxlJzogZmFsc2UgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBkZWZpbmUgcHJvcGVybHlcIiwgKCApID0+IHtcblx0XHRcdGxldCBkYXRhID0geyB9O1xuXHRcdFx0bGV0IGRlZmluaXRpb24gPSBkZWZ5biggXCJwcm9wZXJ0eVwiLCBkYXRhICk7XG5cdFx0XHRkZWZpbml0aW9uLmRlZmluZSggeyBcInZhbHVlXCI6IDEyMywgXCJjb25maWd1cmFibGVcIjogZmFsc2UgfSApO1xuXG5cdFx0XHRsZXQgZGVzY3JpcHRvciA9IGRlZmluaXRpb24uZGVzY3JpcHRvcjtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLnZhbHVlLCAxMjMgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSwgZmFsc2UgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmVudW1lcmFibGUsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLndyaXRhYmxlLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5nZXQsIHVuZGVmaW5lZCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3Iuc2V0LCB1bmRlZmluZWQgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZGVmeW4oIDAsIFsgXSApLmRlZmluZSggeyAndmFsdWUnOiAxLCAnY29uZmlndXJhYmxlJzogZmFsc2UgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBkZWZpbmUgcHJvcGVybHlcIiwgKCApID0+IHtcblx0XHRcdGxldCBkYXRhID0gWyBdO1xuXHRcdFx0bGV0IGRlZmluaXRpb24gPSBkZWZ5biggMCwgZGF0YSApO1xuXHRcdFx0ZGVmaW5pdGlvbi5kZWZpbmUoIHsgXCJ2YWx1ZVwiOiAxLCBcImNvbmZpZ3VyYWJsZVwiOiBmYWxzZSB9ICk7XG5cblx0XHRcdGxldCBkZXNjcmlwdG9yID0gZGVmaW5pdGlvbi5kZXNjcmlwdG9yO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IudmFsdWUsIDEgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSwgZmFsc2UgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmVudW1lcmFibGUsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLndyaXRhYmxlLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5nZXQsIHVuZGVmaW5lZCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3Iuc2V0LCB1bmRlZmluZWQgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZGVmeW4oIFN5bWJvbC5mb3IoICdoZWxsbycgKSwgeyB9ICkuZGVmaW5lKCB7ICd2YWx1ZSc6IFN5bWJvbC5mb3IoICdoZWxsbycgKSwgJ2NvbmZpZ3VyYWJsZSc6IGZhbHNlIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgZGVmaW5lIHByb3Blcmx5XCIsICggKSA9PiB7XG5cdFx0XHRsZXQgZGF0YSA9IHsgfTtcblx0XHRcdGxldCBkZWZpbml0aW9uID0gZGVmeW4oIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApLCBkYXRhICk7XG5cdFx0XHRkZWZpbml0aW9uLmRlZmluZSggeyBcInZhbHVlXCI6IFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApLCBcImNvbmZpZ3VyYWJsZVwiOiBmYWxzZSB9ICk7XG5cblx0XHRcdGxldCBkZXNjcmlwdG9yID0gZGVmaW5pdGlvbi5kZXNjcmlwdG9yO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IudmFsdWUsIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5jb25maWd1cmFibGUsIGZhbHNlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5lbnVtZXJhYmxlLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci53cml0YWJsZSwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IuZ2V0LCB1bmRlZmluZWQgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLnNldCwgdW5kZWZpbmVkICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRlZnluIHdpdGggc3RyaW5nIHByb3BlcnR5IGFuZCBpbnN0YW5jZSBvZiBjbGFzcyBhcyBlbnRpdHlgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGRlZmluZSBwcm9wZXJseVwiLCAoICkgPT4ge1xuXHRcdFx0Y2xhc3MgT3JhbmdlIHtcblx0XHRcdFx0Y29uc3RydWN0b3IoICl7IH1cblxuXHRcdFx0XHRzdGF0aWMgb3JhbmdlKCApe1xuXHRcdFx0XHRcdHJldHVybiBcIm9yYW5nZVwiO1xuXHRcdFx0ICAgIH1cblx0XHRcdH1cblxuXHRcdFx0bGV0IG9yYW5nZSA9IG5ldyBPcmFuZ2UoIClcblxuXHRcdFx0bGV0IGRlZmluaXRpb24gPSBkZWZ5biggXCJnZXRBcHBsZVwiLCBvcmFuZ2UgKTtcblx0XHRcdGRlZmluaXRpb24uZGVmaW5lKCB7IFwidmFsdWVcIjogZnVuY3Rpb24oICl7IHJldHVybiBcImFwcGxlXCI7IH0gfSApO1xuXG5cdFx0XHRsZXQgZGVzY3JpcHRvciA9IGRlZmluaXRpb24uZGVzY3JpcHRvcjtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvci52YWx1ZSwgXCJmdW5jdGlvblwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5jb25maWd1cmFibGUsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmVudW1lcmFibGUsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLndyaXRhYmxlLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5nZXQsIHVuZGVmaW5lZCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3Iuc2V0LCB1bmRlZmluZWQgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuIl19
//# sourceMappingURL=test.support.js.map
