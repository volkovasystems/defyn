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
*/var _getOwnPropertyDescriptor=require("babel-runtime/core-js/object/get-own-property-descriptor");var _getOwnPropertyDescriptor2=_interopRequireDefault(_getOwnPropertyDescriptor);var _freeze=require("babel-runtime/core-js/object/freeze");var _freeze2=_interopRequireDefault(_freeze);var _defineProperty=require("babel-runtime/core-js/object/define-property");var _defineProperty2=_interopRequireDefault(_defineProperty);var _isSealed=require("babel-runtime/core-js/object/is-sealed");var _isSealed2=_interopRequireDefault(_isSealed);var _isFrozen=require("babel-runtime/core-js/object/is-frozen");var _isFrozen2=_interopRequireDefault(_isFrozen);var _typeof2=require("babel-runtime/helpers/typeof");var _typeof3=_interopRequireDefault(_typeof2);var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _symbol=require("babel-runtime/core-js/symbol");var _symbol2=_interopRequireDefault(_symbol);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var anykey=require("anykey");
var depher=require("depher");
var detr=require("detr");
var falzy=require("falzy");
var kein=require("kein");
var stringe=require("stringe");
var wichevr=require("wichevr");

var PROPERTY=(0,_symbol2.default)("property");
var ENTITY=(0,_symbol2.default)("entity");
var DESCRIPTOR=(0,_symbol2.default)("descriptor");var

Definition=function(){
function Definition(property,entity){(0,_classCallCheck3.default)(this,Definition);
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
falzy(property)||

typeof property!="number"&&
typeof property!="string"&&
(typeof property==="undefined"?"undefined":(0,_typeof3.default)(property))!="symbol")

{
throw new Error("invalid property");
}

if(falzy(entity)){
throw new Error("invalid entity");
}

if((0,_isFrozen2.default)(entity)){
throw new Error("cannot define on frozen entity");
}

if((0,_isSealed2.default)(entity)){
throw new Error("cannot define on sealed entity");
}

this[PROPERTY]=property;
this[ENTITY]=entity;

if(
kein(this[PROPERTY],this[ENTITY])&&
this.descriptor.configurable===false)
{
throw new Error("cannot define non-configurable existing property");
}

this[DESCRIPTOR]={
"enumerable":true,
"configurable":true,
"PRIVATE_PROPERTY":(0,_symbol2.default)("-"+stringe(this[PROPERTY]))};

}(0,_createClass3.default)(Definition,[{key:"define",value:function define(

descriptor){
/*;
			@meta-configuration:
				{
					"descriptor": "object"
				}
			@end-meta-configuration
		*/

try{
(0,_defineProperty2.default)(this[ENTITY],this[PROPERTY],
detr(descriptor,function defer(descriptor){
if(
anykey(["get","set"],descriptor)||
anykey(["get","set"],this[DESCRIPTOR]))
{
var self=this;

return{
"get":depher([
descriptor.get,
this[DESCRIPTOR].get],
FUNCTION,function get(){
return self[ENTITY][self[DESCRIPTOR].PRIVATE_PROPERTY];
}),

"set":depher([
descriptor.set,
this[DESCRIPTOR].set],
FUNCTION,function set(value){
self[ENTITY][self[DESCRIPTOR].PRIVATE_PROPERTY]=value;

return self[ENTITY];
}),

"configurable":depher([
descriptor.configurable,
this[DESCRIPTOR].configurable],
BOOLEAN,true),

"enumerable":depher([
descriptor.enumerable,
this[DESCRIPTOR].enumerable],
BOOLEAN,true)};

}

return{
"value":wichevr(descriptor.value,this[DESCRIPTOR].value),

"writable":depher([
descriptor.writable,
this[DESCRIPTOR].writable],
BOOLEAN,true),

"configurable":depher([
descriptor.configurable,
this[DESCRIPTOR].configurable],
BOOLEAN,true),

"enumerable":depher([
descriptor.enumerable,
this[DESCRIPTOR].enumerable],
BOOLEAN,true)};

}.bind(this)));

}catch(error){
throw new Error("cannot apply definition, "+error.stack);
}

return this;
}},{key:"get",value:function get(

method){
if(arguments.length==0){
var self=this;
this[DESCRIPTOR].get=function get(){
return self[ENTITY][self[DESCRIPTOR].PRIVATE_PROPERTY];
};

return this;
}

if(typeof method!="function"){
throw new Error("invalid set method");
}

this[DESCRIPTOR].get=method;

return this;
}},{key:"set",value:function set(

method){
if(arguments.length==0){
var self=this;
this[DESCRIPTOR].set=function set(value){
self[ENTITY][self[DESCRIPTOR].PRIVATE_PROPERTY]=value;

return self[ENTITY];
};

return this;
}

if(typeof method!="function"){
throw new Error("invalid set method");
}

this[DESCRIPTOR].set=method;

return this;
}},{key:"value",value:function value(

_value){
this[DESCRIPTOR].value=_value;

return this;
}

/*;
		@method-documentation:
			Accessor descriptors takes higher precedence,
				therefore the writability state will be overridden
				if any accessor descriptor properties exists.
		@end-method-documentation
	*/},{key:"writable",value:function writable(
state){
if(arguments.length==0){
this[DESCRIPTOR].writable=true;

return this;
}

if(typeof state!="boolean"){
throw new Error("invalid writable state");
}

this[DESCRIPTOR].writable=state;

return this;
}},{key:"configurable",value:function configurable(

state){
if(arguments.length==0){
this[DESCRIPTOR].configurable=true;

return this;
}

if(typeof state!="boolean"){
throw new Error("invalid configurable state");
}

this[DESCRIPTOR].configurable=state;

return this;
}},{key:"enumerable",value:function enumerable(

state){
if(arguments.length==0){
this[DESCRIPTOR].enumerable=true;

return this;
}

if(typeof state!="boolean"){
throw new Error("invalid enumerable state");
}

this[DESCRIPTOR].enumerable=state;

return this;
}},{key:"descriptor",get:function get()

{
try{
return(0,_freeze2.default)((0,_getOwnPropertyDescriptor2.default)(this[ENTITY],this[PROPERTY]));

}catch(error){
return(0,_freeze2.default)({});
}
}}]);return Definition;}();


module.exports=Definition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhbnlrZXkiLCJyZXF1aXJlIiwiZGVwaGVyIiwiZGV0ciIsImZhbHp5Iiwia2VpbiIsInN0cmluZ2UiLCJ3aWNoZXZyIiwiUFJPUEVSVFkiLCJFTlRJVFkiLCJERVNDUklQVE9SIiwiRGVmaW5pdGlvbiIsInByb3BlcnR5IiwiZW50aXR5IiwiRXJyb3IiLCJkZXNjcmlwdG9yIiwiY29uZmlndXJhYmxlIiwiZGVmZXIiLCJzZWxmIiwiZ2V0IiwiRlVOQ1RJT04iLCJQUklWQVRFX1BST1BFUlRZIiwic2V0IiwidmFsdWUiLCJCT09MRUFOIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiYmluZCIsImVycm9yIiwic3RhY2siLCJtZXRob2QiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzdGF0ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0VBLEdBQU1BLFFBQVNDLFFBQVMsUUFBVCxDQUFmO0FBQ0EsR0FBTUMsUUFBU0QsUUFBUyxRQUFULENBQWY7QUFDQSxHQUFNRSxNQUFPRixRQUFTLE1BQVQsQ0FBYjtBQUNBLEdBQU1HLE9BQVFILFFBQVMsT0FBVCxDQUFkO0FBQ0EsR0FBTUksTUFBT0osUUFBUyxNQUFULENBQWI7QUFDQSxHQUFNSyxTQUFVTCxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxHQUFNTSxTQUFVTixRQUFTLFNBQVQsQ0FBaEI7O0FBRUEsR0FBTU8sVUFBVyxxQkFBUSxVQUFSLENBQWpCO0FBQ0EsR0FBTUMsUUFBUyxxQkFBUSxRQUFSLENBQWY7QUFDQSxHQUFNQyxZQUFhLHFCQUFRLFlBQVIsQ0FBbkIsQzs7QUFFTUMsVTtBQUNMLG9CQUFhQyxRQUFiLENBQXVCQyxNQUF2QixDQUErQjtBQUM5Qjs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0NULE1B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LEtBQU10QixVQUFOLEVBQW1CZSxVQUFuQixDQUFnQyxJQUFoQzs7QUFFQSxNQUFPLEtBQVA7QUFDQTs7QUFFRCxHQUFJLE1BQU9RLE1BQVAsRUFBZ0IsU0FBcEIsQ0FBK0I7QUFDOUIsS0FBTSxJQUFJbkIsTUFBSixDQUFXLDBCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFNSixVQUFOLEVBQW1CZSxVQUFuQixDQUFnQ1EsS0FBaEM7O0FBRUEsTUFBTyxLQUFQO0FBQ0EsQzs7QUFFZ0I7QUFDaEIsR0FBRztBQUNGLE1BQU8scUJBQWUsdUNBQWlDLEtBQU14QixNQUFOLENBQWpDLENBQWlELEtBQU1ELFFBQU4sQ0FBakQsQ0FBZixDQUFQOztBQUVBLE9BQU9vQixLQUFQLENBQWM7QUFDZCxNQUFPLHFCQUFlLEVBQWYsQ0FBUDtBQUNBO0FBQ0QsQzs7O0FBR0ZNLE9BQU9DLE9BQVAsQ0FBaUJ4QixVQUFqQiIsImZpbGUiOiJkZWZpbml0aW9uLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXG5cblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImRlZnluXCIsXG5cdFx0XHRcInBhdGhcIjogXCJkZWZ5bi9kZWZpbml0aW9uLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZGVmaW5pdGlvbi5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiZGVmeW5cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2RlZnluLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZGVmeW4tdGVzdC5qc1wiLFxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlLFxuXHRcdFx0XCJnbG9iYWxcIjogZmFsc2Vcblx0XHR9XG5cdEBlbmQtc3VibW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAc3VibW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RGVmaW5pdGlvbiBjbGFzcyB3cmFwcGVyLlxuXG5cdEBlbmQtc3VibW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFueWtleVwiOiBcImFueWtleVwiLFxuXHRcdFx0XCJkZXBoZXJcIjogXCJkZXBoZXJcIixcblx0XHRcdFwiZGV0clwiOiBcImRldHJcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJrZWluXCI6IFwia2VpblwiLFxuXHRcdFx0XCJzdHJpbmdlXCI6IFwic3RyaW5nZVwiLFxuXHRcdFx0XCJ3aWNoZXZyXCI6IFwid2ljaGV2clwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFueWtleSA9IHJlcXVpcmUoIFwiYW55a2V5XCIgKTtcbmNvbnN0IGRlcGhlciA9IHJlcXVpcmUoIFwiZGVwaGVyXCIgKTtcbmNvbnN0IGRldHIgPSByZXF1aXJlKCBcImRldHJcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGtlaW4gPSByZXF1aXJlKCBcImtlaW5cIiApO1xuY29uc3Qgc3RyaW5nZSA9IHJlcXVpcmUoIFwic3RyaW5nZVwiICk7XG5jb25zdCB3aWNoZXZyID0gcmVxdWlyZSggXCJ3aWNoZXZyXCIgKTtcblxuY29uc3QgUFJPUEVSVFkgPSBTeW1ib2woIFwicHJvcGVydHlcIiApO1xuY29uc3QgRU5USVRZID0gU3ltYm9sKCBcImVudGl0eVwiICk7XG5jb25zdCBERVNDUklQVE9SID0gU3ltYm9sKCBcImRlc2NyaXB0b3JcIiApO1xuXG5jbGFzcyBEZWZpbml0aW9uIHtcblx0Y29uc3RydWN0b3IoIHByb3BlcnR5LCBlbnRpdHkgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwibnVtYmVyXCJcblx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcInN5bWJvbFwiXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcImVudGl0eVwiOiBcIipcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZihcblx0XHRcdGZhbHp5KCBwcm9wZXJ0eSApXG5cdFx0XHR8fCAoXG5cdFx0XHRcdHR5cGVvZiBwcm9wZXJ0eSAhPSBcIm51bWJlclwiXG5cdFx0XHRcdCYmIHR5cGVvZiBwcm9wZXJ0eSAhPSBcInN0cmluZ1wiXG5cdFx0XHRcdCYmIHR5cGVvZiBwcm9wZXJ0eSAhPSBcInN5bWJvbFwiXG5cdFx0XHQpXG5cdFx0KXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0XHR9XG5cblx0XHRpZiggZmFsenkoIGVudGl0eSApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBlbnRpdHlcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBPYmplY3QuaXNGcm96ZW4oIGVudGl0eSApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRlZmluZSBvbiBmcm96ZW4gZW50aXR5XCIgKTtcblx0XHR9XG5cblx0XHRpZiggT2JqZWN0LmlzU2VhbGVkKCBlbnRpdHkgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZWZpbmUgb24gc2VhbGVkIGVudGl0eVwiICk7XG5cdFx0fVxuXG5cdFx0dGhpc1sgUFJPUEVSVFkgXSA9IHByb3BlcnR5O1xuXHRcdHRoaXNbIEVOVElUWSBdID0gZW50aXR5O1xuXG5cdFx0aWYoXG5cdFx0XHRrZWluKCB0aGlzWyBQUk9QRVJUWSBdLCB0aGlzWyBFTlRJVFkgXSApXG5cdFx0XHQmJiB0aGlzLmRlc2NyaXB0b3IuY29uZmlndXJhYmxlID09PSBmYWxzZVxuXHRcdCl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRlZmluZSBub24tY29uZmlndXJhYmxlIGV4aXN0aW5nIHByb3BlcnR5XCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBERVNDUklQVE9SIF0gPSB7XG5cdFx0XHRcImVudW1lcmFibGVcIjogdHJ1ZSxcblx0XHRcdFwiY29uZmlndXJhYmxlXCI6IHRydWUsXG5cdFx0XHRcIlBSSVZBVEVfUFJPUEVSVFlcIjogU3ltYm9sKCBgLSR7IHN0cmluZ2UoIHRoaXNbIFBST1BFUlRZIF0gKSB9YCApXG5cdFx0fTtcblx0fVxuXG5cdGRlZmluZSggZGVzY3JpcHRvciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZGVzY3JpcHRvclwiOiBcIm9iamVjdFwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHRyeXtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGhpc1sgRU5USVRZIF0sIHRoaXNbIFBST1BFUlRZIF0sXG5cdFx0XHRcdGRldHIoIGRlc2NyaXB0b3IsICggZnVuY3Rpb24gZGVmZXIoIGRlc2NyaXB0b3IgKXtcblx0XHRcdFx0XHRpZihcblx0XHRcdFx0XHRcdGFueWtleSggWyBcImdldFwiLCBcInNldFwiIF0sIGRlc2NyaXB0b3IgKVxuXHRcdFx0XHRcdFx0fHwgYW55a2V5KCBbIFwiZ2V0XCIsIFwic2V0XCIgXSwgdGhpc1sgREVTQ1JJUFRPUiBdIClcblx0XHRcdFx0XHQpe1xuXHRcdFx0XHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcImdldFwiOiBkZXBoZXIoIFtcblx0XHRcdFx0XHRcdFx0XHRkZXNjcmlwdG9yLmdldCxcblx0XHRcdFx0XHRcdFx0XHR0aGlzWyBERVNDUklQVE9SIF0uZ2V0XG5cdFx0XHRcdFx0XHRcdF0sIEZVTkNUSU9OLCBmdW5jdGlvbiBnZXQoICl7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHNlbGZbIEVOVElUWSBdWyBzZWxmWyBERVNDUklQVE9SIF0uUFJJVkFURV9QUk9QRVJUWSBdO1xuXHRcdFx0XHRcdFx0XHR9ICksXG5cblx0XHRcdFx0XHRcdFx0XCJzZXRcIjogZGVwaGVyKCBbXG5cdFx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRvci5zZXQsXG5cdFx0XHRcdFx0XHRcdFx0dGhpc1sgREVTQ1JJUFRPUiBdLnNldFxuXHRcdFx0XHRcdFx0XHRdLCBGVU5DVElPTiwgZnVuY3Rpb24gc2V0KCB2YWx1ZSApe1xuXHRcdFx0XHRcdFx0XHRcdHNlbGZbIEVOVElUWSBdWyBzZWxmWyBERVNDUklQVE9SIF0uUFJJVkFURV9QUk9QRVJUWSBdID0gdmFsdWU7XG5cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VsZlsgRU5USVRZIF07XG5cdFx0XHRcdFx0XHRcdH0gKSxcblxuXHRcdFx0XHRcdFx0XHRcImNvbmZpZ3VyYWJsZVwiOiBkZXBoZXIoIFtcblx0XHRcdFx0XHRcdFx0XHRkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSxcblx0XHRcdFx0XHRcdFx0XHR0aGlzWyBERVNDUklQVE9SIF0uY29uZmlndXJhYmxlXG5cdFx0XHRcdFx0XHRcdF0sIEJPT0xFQU4sIHRydWUgKSxcblxuXHRcdFx0XHRcdFx0XHRcImVudW1lcmFibGVcIjogZGVwaGVyKCBbXG5cdFx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRvci5lbnVtZXJhYmxlLFxuXHRcdFx0XHRcdFx0XHRcdHRoaXNbIERFU0NSSVBUT1IgXS5lbnVtZXJhYmxlXG5cdFx0XHRcdFx0XHRcdF0sIEJPT0xFQU4sIHRydWUgKVxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiB3aWNoZXZyKCBkZXNjcmlwdG9yLnZhbHVlLCB0aGlzWyBERVNDUklQVE9SIF0udmFsdWUgKSxcblxuXHRcdFx0XHRcdFx0XCJ3cml0YWJsZVwiOiBkZXBoZXIoIFtcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRvci53cml0YWJsZSxcblx0XHRcdFx0XHRcdFx0dGhpc1sgREVTQ1JJUFRPUiBdLndyaXRhYmxlXG5cdFx0XHRcdFx0XHRdLCBCT09MRUFOLCB0cnVlICksXG5cblx0XHRcdFx0XHRcdFwiY29uZmlndXJhYmxlXCI6IGRlcGhlciggW1xuXHRcdFx0XHRcdFx0XHRkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSxcblx0XHRcdFx0XHRcdFx0dGhpc1sgREVTQ1JJUFRPUiBdLmNvbmZpZ3VyYWJsZVxuXHRcdFx0XHRcdFx0XSwgQk9PTEVBTiwgdHJ1ZSApLFxuXG5cdFx0XHRcdFx0XHRcImVudW1lcmFibGVcIjogZGVwaGVyKCBbXG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0b3IuZW51bWVyYWJsZSxcblx0XHRcdFx0XHRcdFx0dGhpc1sgREVTQ1JJUFRPUiBdLmVudW1lcmFibGVcblx0XHRcdFx0XHRcdF0sIEJPT0xFQU4sIHRydWUgKVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0gKS5iaW5kKCB0aGlzICkgKSApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IGFwcGx5IGRlZmluaXRpb24sICR7IGVycm9yLnN0YWNrIH1gICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXQoIG1ldGhvZCApe1xuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDAgKXtcblx0XHQgXHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHR0aGlzWyBERVNDUklQVE9SIF0uZ2V0ID0gZnVuY3Rpb24gZ2V0KCApe1xuXHRcdFx0XHRyZXR1cm4gc2VsZlsgRU5USVRZIF1bIHNlbGZbIERFU0NSSVBUT1IgXS5QUklWQVRFX1BST1BFUlRZIF07XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIG1ldGhvZCAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHNldCBtZXRob2RcIiApO1xuXHRcdH1cblxuXHRcdHRoaXNbIERFU0NSSVBUT1IgXS5nZXQgPSBtZXRob2Q7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldCggbWV0aG9kICl7XG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMCApe1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0dGhpc1sgREVTQ1JJUFRPUiBdLnNldCA9IGZ1bmN0aW9uIHNldCggdmFsdWUgKXtcblx0XHRcdFx0c2VsZlsgRU5USVRZIF1bIHNlbGZbIERFU0NSSVBUT1IgXS5QUklWQVRFX1BST1BFUlRZIF0gPSB2YWx1ZTtcblxuXHRcdFx0XHRyZXR1cm4gc2VsZlsgRU5USVRZIF07XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIG1ldGhvZCAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHNldCBtZXRob2RcIiApO1xuXHRcdH1cblxuXHRcdHRoaXNbIERFU0NSSVBUT1IgXS5zZXQgPSBtZXRob2Q7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHZhbHVlKCB2YWx1ZSApe1xuXHRcdHRoaXNbIERFU0NSSVBUT1IgXS52YWx1ZSA9IHZhbHVlO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRBY2Nlc3NvciBkZXNjcmlwdG9ycyB0YWtlcyBoaWdoZXIgcHJlY2VkZW5jZSxcblx0XHRcdFx0dGhlcmVmb3JlIHRoZSB3cml0YWJpbGl0eSBzdGF0ZSB3aWxsIGJlIG92ZXJyaWRkZW5cblx0XHRcdFx0aWYgYW55IGFjY2Vzc29yIGRlc2NyaXB0b3IgcHJvcGVydGllcyBleGlzdHMuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHR3cml0YWJsZSggc3RhdGUgKXtcblx0XHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAwICl7XG5cdFx0XHR0aGlzWyBERVNDUklQVE9SIF0ud3JpdGFibGUgPSB0cnVlO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIHN0YXRlICE9IFwiYm9vbGVhblwiICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCB3cml0YWJsZSBzdGF0ZVwiICk7XG5cdFx0fVxuXG5cdFx0dGhpc1sgREVTQ1JJUFRPUiBdLndyaXRhYmxlID0gc3RhdGU7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNvbmZpZ3VyYWJsZSggc3RhdGUgKXtcblx0XHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAwICl7XG5cdFx0XHR0aGlzWyBERVNDUklQVE9SIF0uY29uZmlndXJhYmxlID0gdHJ1ZTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBzdGF0ZSAhPSBcImJvb2xlYW5cIiApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY29uZmlndXJhYmxlIHN0YXRlXCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBERVNDUklQVE9SIF0uY29uZmlndXJhYmxlID0gc3RhdGU7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGVudW1lcmFibGUoIHN0YXRlICl7XG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMCApe1xuXHRcdFx0dGhpc1sgREVTQ1JJUFRPUiBdLmVudW1lcmFibGUgPSB0cnVlO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIHN0YXRlICE9IFwiYm9vbGVhblwiICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBlbnVtZXJhYmxlIHN0YXRlXCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBERVNDUklQVE9SIF0uZW51bWVyYWJsZSA9IHN0YXRlO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXQgZGVzY3JpcHRvciggKXtcblx0XHR0cnl7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmZyZWV6ZSggT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGhpc1sgRU5USVRZIF0sIHRoaXNbIFBST1BFUlRZIF0gKSApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0cmV0dXJuIE9iamVjdC5mcmVlemUoIHsgfSApO1xuXHRcdH1cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmluaXRpb247XG4iXX0=
//# sourceMappingURL=definition.support.js.map
