"use strict";var _freeze=require("babel-runtime/core-js/object/freeze");var _freeze2=_interopRequireDefault(_freeze);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/*;
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

var harden=require("harden");
var zelf=require("zelf");



//: @client:
var Definition=require("./definition.support.js");
//: @end-client

var defyn=function defyn(property,entity){
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

if(arguments.length==1){
entity=zelf(this);
}

return(0,_freeze2.default)(new Definition(property,entity));
};

harden("Definition",Definition,defyn);

module.exports=defyn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZnluLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiaGFyZGVuIiwicmVxdWlyZSIsInplbGYiLCJEZWZpbml0aW9uIiwiZGVmeW4iLCJwcm9wZXJ0eSIsImVudGl0eSIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJ3TUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3REEsR0FBTUEsUUFBU0MsUUFBUyxRQUFULENBQWY7QUFDQSxHQUFNQyxNQUFPRCxRQUFTLE1BQVQsQ0FBYjs7OztBQUlBO0FBQ0EsR0FBTUUsWUFBYUYsUUFBUyx5QkFBVCxDQUFuQjtBQUNBOztBQUVBLEdBQU1HLE9BQVEsUUFBU0EsTUFBVCxDQUFnQkMsUUFBaEIsQ0FBMEJDLE1BQTFCLENBQWtDO0FBQy9DOzs7Ozs7Ozs7Ozs7O0FBYUEsR0FBSUMsVUFBVUMsTUFBVixFQUFvQixDQUF4QixDQUEyQjtBQUMxQkYsT0FBU0osS0FBTSxJQUFOLENBQVQ7QUFDQTs7QUFFRCxNQUFPLHFCQUFlLEdBQUlDLFdBQUosQ0FBZ0JFLFFBQWhCLENBQTBCQyxNQUExQixDQUFmLENBQVA7QUFDQSxDQW5CRDs7QUFxQkFOLE9BQVEsWUFBUixDQUF1QkcsVUFBdkIsQ0FBbUNDLEtBQW5DOztBQUVBSyxPQUFPQyxPQUFQLENBQWlCTixLQUFqQiIsImZpbGUiOiJkZWZ5bi5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImRlZnluXCIsXG5cdFx0XHRcInBhdGhcIjogXCJkZWZ5bi9kZWZ5bi5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImRlZnluLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJkZWZ5blwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZGVmeW4uZ2l0XCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdERlZmluZSBwcm9wZXJ0eSBkZXNjcmlwdG9yLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoIFwiLi9kZWZpbml0aW9uLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cbmNvbnN0IGRlZnluID0gZnVuY3Rpb24gZGVmeW4oIHByb3BlcnR5LCBlbnRpdHkgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJudW1iZXJcIlxuXHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJzeW1ib2xcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcImVudGl0eVwiOiBcIipcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMSApe1xuXHRcdGVudGl0eSA9IHplbGYoIHRoaXMgKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QuZnJlZXplKCBuZXcgRGVmaW5pdGlvbiggcHJvcGVydHksIGVudGl0eSApICk7XG59O1xuXG5oYXJkZW4oIFwiRGVmaW5pdGlvblwiLCAgRGVmaW5pdGlvbiwgZGVmeW4gKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZ5bjtcbiJdfQ==
//# sourceMappingURL=defyn.support.js.map
