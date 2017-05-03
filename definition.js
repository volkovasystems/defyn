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
              */var _stringify = require("babel-runtime/core-js/json/stringify");var _stringify2 = _interopRequireDefault(_stringify);var _defineProperty = require("babel-runtime/core-js/object/define-property");var _defineProperty2 = _interopRequireDefault(_defineProperty);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var allkey = require("allkey");
var anykey = require("anykey");
var asyum = require("asyum");
var dscrb = require("dscrb");
var falzy = require("falzy");
var harden = require("harden");
var kein = require("kein");
var protype = require("protype");
var truly = require("truly");
var wichevr = require("wichevr");

var PROPERTY = (0, _symbol2.default)("property");
var ENTITY = (0, _symbol2.default)("entity");
var DESCRIPTOR = (0, _symbol2.default)("descriptor");var

Definition = function () {
	function Definition(property, entity) {(0, _classCallCheck3.default)(this, Definition);
		if (falzy(property) || !protype(property, NUMBER + STRING + SYMBOL)) {
			throw new Error("invalid property");
		}

		if (falzy(entity)) {
			throw new Error("invalid entity");
		}

		this[PROPERTY] = property;
		this[ENTITY] = entity;
		this[DESCRIPTOR] = { "enumerable": true, "configurable": true };
	}(0, _createClass3.default)(Definition, [{ key: "define", value: function define(

		descriptor) {
			if (!allkey([PROPERTY, ENTITY], this)) {
				throw new Error("cannot define flushed definition");
			}

			if (truly(descriptor)) {
				this[DESCRIPTOR] = asyum(descriptor, "Descriptor", function resolve() {
					if (anykey(["value", "writable"], this)) {
						return {
							"value": this.value,
							"writable": wichevr(this.writable, true),

							"configurable": wichevr(this.configurable, true),
							"enumerable": wichevr(this.enumerable, true) };

					}

					if (anykey(["get", "set"], this)) {
						return {
							"get": this.get,
							"set": this.set,

							"configurable": wichevr(this.configurable, true),
							"enumerable": wichevr(this.enumerable, true) };

					}

					return {};
				}).resolve();
			}

			(0, _defineProperty2.default)(this[ENTITY], this[PROPERTY], this[DESCRIPTOR]);

			return this;
		} }, { key: "get", value: function get(

		method) {
			if (falzy(method) || !protype(method, FUNCTION)) {
				throw new Error("invalid get method");
			}

			this[DESCRIPTOR].get = method;

			return this;
		} }, { key: "set", value: function set(

		method) {
			if (falzy(method) || !protype(method, FUNCTION)) {
				throw new Error("invalid set method");
			}

			this[DESCRIPTOR].set = method;

			return this;
		} }, { key: "value", value: function value(

		_value) {
			this[DESCRIPTOR].value = _value;

			return this;
		} }, { key: "writable", value: function writable(

		state) {
			if (falzy(state)) {
				return this.writable(true);
			}

			if (!protype(state, BOOLEAN)) {
				throw new Error("invalid writable state");
			}

			this[DESCRIPTOR].writable = state;

			return this;
		} }, { key: "configurable", value: function configurable(

		state) {
			if (falzy(state)) {
				return this.configurable(true);
			}

			if (!protype(state, BOOLEAN)) {
				throw new Error("invalid configurable state");
			}

			this[DESCRIPTOR].configurable = state;

			return this;
		} }, { key: "enumerable", value: function enumerable(

		state) {
			if (falzy(state)) {
				return this.enumerable(true);
			}

			if (!protype(state, BOOLEAN)) {
				throw new Error("invalid enumerable state");
			}

			this[DESCRIPTOR].enumerable = state;

			return this;
		} }, { key: "flush", value: function flush()

		{
			delete this[ENTITY];
			delete this[PROPERTY];

			return this;
		} }, { key: "describe", value: function describe()

		{
			if (!allkey([PROPERTY, ENTITY], this)) {
				return {};
			}

			if (!kein(this[PROPERTY], this[ENTITY])) {
				return {};
			}

			var descriptor = dscrb(this[PROPERTY], this[ENTITY]);

			try {
				return descriptor.resolve();

			} finally {
				descriptor.flush();
			}
		} }, { key: "toJSON", value: function toJSON()

		{
			return this.describe();
		} }, { key: "valueOf", value: function valueOf()

		{
			return this.describe();
		} }, { key: "toString", value: function toString()

		{
			return (0, _stringify2.default)(this.toJSON());
		} }]);return Definition;}();


module.exports = Definition;

//# sourceMappingURL=definition.js.map