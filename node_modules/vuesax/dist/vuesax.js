/*!
  * Vuesax v4.0.1-alpha.24 🖖 (https://lusaxweb.github.io/vuesax/)
  * Forged by Luis Daniel Rovira
  * Released under the MIT License.
  * Donate: https://www.patreon.com/bePatron?c=1567892
  * © 2019, Lusaxweb. (https://lusaxweb.net)
  */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("Vuesax", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["Vuesax"] = factory(require("vue"));
	else
		root["Vuesax"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

module.exports = _applyDecoratedDescriptor;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _initializerDefineProperty(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

module.exports = _initializerDefineProperty;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.');
}

module.exports = _initializerWarningHelper;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.19';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g,
      reTrimStart = /^\s+/,
      reTrimEnd = /\s+$/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports =  true && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key) {
          result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
      }

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack);
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key),
          srcValue = safeGet(source, key),
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined;

      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      if (iteratees.length) {
        iteratees = arrayMap(iteratees, function(iteratee) {
          if (isArray(iteratee)) {
            return function(value) {
              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            }
          }
          return iteratee;
        });
      } else {
        iteratees = [identity];
      }

      var index = -1;
      iteratees = arrayMap(iteratees, baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
          return object;
        }

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      var low = 0,
          high = array == null ? 0 : array.length;
      if (high === 0) {
        return 0;
      }

      value = iteratee(value);
      var valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision && nativeIsFinite(number)) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Check that cyclic values are equal.
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Check that cyclic values are equal.
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = new array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return new Ctor;

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return new Ctor;

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;

      return !!length &&
        (type == 'number' ||
          (type != 'symbol' && reIsUint.test(value))) &&
            (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function safeGet(object, key) {
      if (key === 'constructor' && typeof object[key] === 'function') {
        return;
      }

      if (key == '__proto__') {
        return;
      }

      return object[key];
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46 /* . */) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     *
     * // Combining several predicates using `_.overEvery` or `_.overSome`.
     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
     * // => objects for ['fred', 'barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 30 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            timeWaiting = wait - timeSinceLastCall;

        return maxing
          ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
          : timeWaiting;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(object, sources) {
      object = Object(object);

      var index = -1;
      var length = sources.length;
      var guard = length > 2 ? sources[2] : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        length = 1;
      }

      while (++index < length) {
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;

        while (++propsIndex < propsLength) {
          var key = props[propsIndex];
          var value = object[key];

          if (value === undefined ||
              (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
            object[key] = source[key];
          }
        }
      }

      return object;
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined, customDefaultsMerge);
      return apply(mergeWith, undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined;
      }
      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined) {
        upper = lower;
        lower = undefined;
      }
      if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }
      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      // The sourceURL gets injected into the source that's eval-ed, so be careful
      // to normalize all kinds of whitespace, so e.g. newlines (and unicode versions of it) can't sneak in
      // and escape the comment, thus injecting code that gets evaled.
      var sourceURL = '//# sourceURL=' +
        (hasOwnProperty.call(options, 'sourceURL')
          ? (options.sourceURL + '').replace(/\s/g, ' ')
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = hasOwnProperty.call(options, 'variable') && options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrim, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimEnd, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     *
     * // Checking for several possible values
     * _.filter(users, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     *
     * // Checking for several possible values
     * _.filter(users, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     *
     * var matchesFunc = _.overSome([{ 'a': 1 }, { 'a': 2 }])
     * var matchesPropertyFunc = _.overSome([['a', 1], ['a', 2]])
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = lodashFunc.name + '';
        if (!hasOwnProperty.call(realNames, key)) {
          realNames[key] = [];
        }
        realNames[key].push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (true) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return _;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else {}
}.call(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(27), __webpack_require__(28)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "vsButton", function() { return Base; });
__webpack_require__.d(components_namespaceObject, "vsButtonGroup", function() { return group; });
__webpack_require__.d(components_namespaceObject, "vsAlert", function() { return vsAlert_Base; });
__webpack_require__.d(components_namespaceObject, "vsInput", function() { return vsInput_Base; });
__webpack_require__.d(components_namespaceObject, "vsCheckbox", function() { return vsCheckbox_Base; });
__webpack_require__.d(components_namespaceObject, "vsSwitch", function() { return vsSwitch_Base; });
__webpack_require__.d(components_namespaceObject, "vsSelect", function() { return vsSelect_Base; });
__webpack_require__.d(components_namespaceObject, "vsOption", function() { return Option; });
__webpack_require__.d(components_namespaceObject, "vsOptionGroup", function() { return OptionGroup; });
__webpack_require__.d(components_namespaceObject, "vsAvatar", function() { return vsAvatar_Base; });
__webpack_require__.d(components_namespaceObject, "vsAvatarGroup", function() { return Group; });
__webpack_require__.d(components_namespaceObject, "vsRadio", function() { return vsRadio_Base; });
__webpack_require__.d(components_namespaceObject, "vsTooltip", function() { return vsTooltip_Base; });
__webpack_require__.d(components_namespaceObject, "vsDialog", function() { return vsDialog_Base; });
__webpack_require__.d(components_namespaceObject, "vsPagination", function() { return vsPagination_Base; });
__webpack_require__.d(components_namespaceObject, "vsTable", function() { return vsTable_Base; });
__webpack_require__.d(components_namespaceObject, "vsTableTr", function() { return Tr; });
__webpack_require__.d(components_namespaceObject, "vsTableTh", function() { return Th; });
__webpack_require__.d(components_namespaceObject, "vsTableTd", function() { return Td; });
__webpack_require__.d(components_namespaceObject, "vsNavbar", function() { return vsNavbar_Base; });
__webpack_require__.d(components_namespaceObject, "vsNavbarItem", function() { return Item; });
__webpack_require__.d(components_namespaceObject, "vsNavbarGroup", function() { return vsNavbar_Group; });
__webpack_require__.d(components_namespaceObject, "vsSidebar", function() { return vsSidebar_Base; });
__webpack_require__.d(components_namespaceObject, "vsSidebarItem", function() { return vsSidebar_Item; });
__webpack_require__.d(components_namespaceObject, "vsSidebarGroup", function() { return vsSidebar_Group; });
__webpack_require__.d(components_namespaceObject, "vsCard", function() { return vsCard_Base; });
__webpack_require__.d(components_namespaceObject, "vsCardGroup", function() { return vsCard_Group; });
var layout_namespaceObject = {};
__webpack_require__.r(layout_namespaceObject);
__webpack_require__.d(layout_namespaceObject, "vsRow", function() { return VsRow_VsRow; });
__webpack_require__.d(layout_namespaceObject, "vsCol", function() { return VsCol_VsCol; });

// EXTERNAL MODULE: ./src/components/vsButton/Base/style.sass
var style = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/initializerDefineProperty.js
var initializerDefineProperty = __webpack_require__(1);
var initializerDefineProperty_default = /*#__PURE__*/__webpack_require__.n(initializerDefineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(2);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(3);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js
var applyDecoratedDescriptor = __webpack_require__(0);
var applyDecoratedDescriptor_default = /*#__PURE__*/__webpack_require__.n(applyDecoratedDescriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/initializerWarningHelper.js
var initializerWarningHelper = __webpack_require__(4);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_ = __webpack_require__(6);
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/vue-class-component/dist/vue-class-component.esm.js
/**
  * vue-class-component v7.1.0
  * (c) 2015-present Evan You
  * @license MIT
  */


// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
var reflectionIsSupported = typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
function copyReflectionMetadata(to, from) {
    forwardMetadata(to, from);
    Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
        forwardMetadata(to.prototype, from.prototype, key);
    });
    Object.getOwnPropertyNames(from).forEach(function (key) {
        forwardMetadata(to, from, key);
    });
}
function forwardMetadata(to, from, propertyKey) {
    var metaKeys = propertyKey
        ? Reflect.getOwnMetadataKeys(from, propertyKey)
        : Reflect.getOwnMetadataKeys(from);
    metaKeys.forEach(function (metaKey) {
        var metadata = propertyKey
            ? Reflect.getOwnMetadata(metaKey, from, propertyKey)
            : Reflect.getOwnMetadata(metaKey, from);
        if (propertyKey) {
            Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
        }
        else {
            Reflect.defineMetadata(metaKey, metadata, to);
        }
    });
}

var fakeArray = { __proto__: [] };
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
    return function (target, key, index) {
        var Ctor = typeof target === 'function'
            ? target
            : target.constructor;
        if (!Ctor.__decorators__) {
            Ctor.__decorators__ = [];
        }
        if (typeof index !== 'number') {
            index = undefined;
        }
        Ctor.__decorators__.push(function (options) { return factory(options, key, index); });
    };
}
function mixins() {
    var Ctors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Ctors[_i] = arguments[_i];
    }
    return external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend({ mixins: Ctors });
}
function isPrimitive(value) {
    var type = typeof value;
    return value == null || (type !== 'object' && type !== 'function');
}
function warn(message) {
    if (typeof console !== 'undefined') {
        console.warn('[vue-class-component] ' + message);
    }
}

function collectDataFromConstructor(vm, Component) {
    // override _init to prevent to init as Vue instance
    var originalInit = Component.prototype._init;
    Component.prototype._init = function () {
        var _this = this;
        // proxy to actual vm
        var keys = Object.getOwnPropertyNames(vm);
        // 2.2.0 compat (props are no longer exposed as self properties)
        if (vm.$options.props) {
            for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        }
        keys.forEach(function (key) {
            if (key.charAt(0) !== '_') {
                Object.defineProperty(_this, key, {
                    get: function () { return vm[key]; },
                    set: function (value) { vm[key] = value; },
                    configurable: true
                });
            }
        });
    };
    // should be acquired class property values
    var data = new Component();
    // restore original _init to avoid memory leak (#209)
    Component.prototype._init = originalInit;
    // create plain data object
    var plainData = {};
    Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    });
    if (false) {}
    return plainData;
}

var $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured',
    'serverPrefetch' // 2.6
];
function componentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag || Component.name;
    // prototype props.
    var proto = Component.prototype;
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        // hooks
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (descriptor.value !== void 0) {
            // methods
            if (typeof descriptor.value === 'function') {
                (options.methods || (options.methods = {}))[key] = descriptor.value;
            }
            else {
                // typescript decorated data
                (options.mixins || (options.mixins = [])).push({
                    data: function () {
                        var _a;
                        return _a = {}, _a[key] = descriptor.value, _a;
                    }
                });
            }
        }
        else if (descriptor.get || descriptor.set) {
            // computed properties
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    // decorate options
    var decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(function (fn) { return fn(options); });
        delete Component.__decorators__;
    }
    // find super
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a
        ? superProto.constructor
        : external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a;
    var Extended = Super.extend(options);
    forwardStaticMembers(Extended, Component, Super);
    if (reflectionIsSupported) {
        copyReflectionMetadata(Extended, Component);
    }
    return Extended;
}
var reservedPropertyNames = [
    // Unique id
    'cid',
    // Super Vue constructor
    'super',
    // Component options that will be used by the component
    'options',
    'superOptions',
    'extendOptions',
    'sealedOptions',
    // Private assets
    'component',
    'directive',
    'filter'
];
var shouldIgnore = {
    prototype: true,
    arguments: true,
    callee: true,
    caller: true
};
function forwardStaticMembers(Extended, Original, Super) {
    // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
    Object.getOwnPropertyNames(Original).forEach(function (key) {
        // Skip the properties that should not be overwritten
        if (shouldIgnore[key]) {
            return;
        }
        // Some browsers does not allow reconfigure built-in properties
        var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);
        if (extendedDescriptor && !extendedDescriptor.configurable) {
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(Original, key);
        // If the user agent does not support `__proto__` or its family (IE <= 10),
        // the sub class properties may be inherited properties from the super class in TypeScript.
        // We need to exclude such properties to prevent to overwrite
        // the component options object which stored on the extended constructor (See #192).
        // If the value is a referenced value (object or function),
        // we can check equality of them and exclude it if they have the same reference.
        // If it is a primitive value, it will be forwarded for safety.
        if (!hasProto) {
            // Only `cid` is explicitly exluded from property forwarding
            // because we cannot detect whether it is a inherited property or not
            // on the no `__proto__` environment even though the property is reserved.
            if (key === 'cid') {
                return;
            }
            var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);
            if (!isPrimitive(descriptor.value) &&
                superDescriptor &&
                superDescriptor.value === descriptor.value) {
                return;
            }
        }
        // Warn if the users manually declare reserved properties
        if (false) {}
        Object.defineProperty(Extended, key, descriptor);
    });
}

function vue_class_component_esm_Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
vue_class_component_esm_Component.registerHooks = function registerHooks(keys) {
    $internalHooks.push.apply($internalHooks, keys);
};

/* harmony default export */ var vue_class_component_esm = (vue_class_component_esm_Component);


// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
/** vue-property-decorator verson 8.2.2 MIT LICENSE copyright 2019 kaorun343 */
/// <reference types='reflect-metadata'/>




/** Used for keying reactive provide/inject properties */
var reactiveInjectKey = '__reactiveInject__';
/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a reactive inject
 * @param from key
 * @return PropertyDecorator
 */
function InjectReactive(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            var fromKey_1 = !!options ? options.from || options : key;
            var defaultVal_1 = (!!options && options.default) || undefined;
            if (!componentOptions.computed)
                componentOptions.computed = {};
            componentOptions.computed[key] = function () {
                var obj = this[reactiveInjectKey];
                return obj ? obj[fromKey_1] : defaultVal_1;
            };
            componentOptions.inject[reactiveInjectKey] = reactiveInjectKey;
        }
    });
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (typeof provide !== 'function' || !provide.managed) {
            var original_1 = componentOptions.provide;
            provide = componentOptions.provide = function () {
                var rv = Object.create((typeof original_1 === 'function' ? original_1.call(this) : original_1) ||
                    null);
                for (var i in provide.managed)
                    rv[provide.managed[i]] = this[i];
                return rv;
            };
            provide.managed = {};
        }
        provide.managed[k] = key || k;
    });
}
/**
 * decorator of a reactive provide
 * @param key key
 * @return PropertyDecorator | void
 */
function ProvideReactive(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (typeof provide !== 'function' || !provide.managed) {
            var original_2 = componentOptions.provide;
            provide = componentOptions.provide = function () {
                var _this = this;
                var rv = Object.create((typeof original_2 === 'function' ? original_2.call(this) : original_2) ||
                    null);
                rv[reactiveInjectKey] = {};
                var _loop_1 = function (i) {
                    rv[provide.managed[i]] = this_1[i]; // Duplicates the behavior of `@Provide`
                    Object.defineProperty(rv[reactiveInjectKey], provide.managed[i], {
                        enumerable: true,
                        get: function () { return _this[i]; },
                    });
                };
                var this_1 = this;
                for (var i in provide.managed) {
                    _loop_1(i);
                }
                return rv;
            };
            provide.managed = {};
        }
        provide.managed[k] = key || k;
    });
}
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            typeof options.type === 'undefined') {
            options.type = Reflect.getMetadata('design:type', target, key);
        }
    }
}
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}
/**
 * decorator of a synced prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param options the options for the synced prop
 * @return PropertyDecorator | void
 */
function PropSync(propName, options) {
    if (options === void 0) { options = {}; }
    // @ts-ignore
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    // @ts-ignore
                    this.$emit("update:" + propName, value);
                },
            };
        })(target, key);
    };
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return createDecorator(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, key, descriptor) {
        key = hyphenate(key);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                if (returnValue !== undefined)
                    args.unshift(returnValue);
                _this.$emit.apply(_this, [event || key].concat(args));
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(function (returnValue) {
                    emit(returnValue);
                });
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
/**
 * decorator of a ref prop
 * @param refKey the ref key defined in template
 */
function Ref(refKey) {
    return createDecorator(function (options, key) {
        options.computed = options.computed || {};
        options.computed[key] = {
            cache: false,
            get: function () {
                return this.$refs[refKey || key];
            },
        };
    });
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(5);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/util/index.ts
var isColor = function isColor(color) {
  var vsColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'dark', 'light', 'warn', // social colors
  'facebook', 'twitter', 'youtube', 'pinterest', 'linkedin', 'snapchat', 'whatsapp', 'tumblr', 'reddit', 'spotify', 'amazon', 'medium', 'vimeo', 'skype', 'dribbble', 'slack', 'yahoo', 'twitch', 'discord', 'telegram', 'google-plus', 'messenger'];
  return vsColors.includes(color);
};

var setVar = function setVar(propertyName, value, el) {
  if (!el) {
    document.documentElement.style.setProperty("--vs-" + propertyName, value);
  } else {
    if (el.nodeName !== '#comment') {
      el.style.setProperty("--vs-" + propertyName, value);
    }
  }
};

var util_setColor = function setColor(colorName, color, el, addClass) {
  function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      // tslint:disable-next-line:object-literal-sort-keys
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  var isRGB = /^(rgb|rgba)/.test(color);
  var isRGBNumbers = /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(color);
  var isHEX = /^(#)/.test(color);
  var newColor;

  if (color == 'dark' && el) {
    el.classList.add('vs-component-dark');
  }

  if (isRGB) {
    var arrayColor = color.replace(/[rgba()]/g, '').split(',');
    newColor = arrayColor[0] + "," + arrayColor[1] + "," + arrayColor[2];
    setVar(colorName, newColor, el);

    if (addClass) {
      el.classList.add('vs-change-color');
    }
  } else if (isHEX) {
    var rgb = hexToRgb(color);
    newColor = rgb.r + "," + rgb.g + "," + rgb.b;
    setVar(colorName, newColor, el);

    if (addClass) {
      el.classList.add('vs-change-color');
    }
  } else if (isColor(color)) {
    var style = window.getComputedStyle(document.body);
    newColor = style.getPropertyValue('--vs-' + color);
    setVar(colorName, newColor, el);

    if (addClass) {
      el.classList.add('vs-change-color');
    }
  } else if (isRGBNumbers) {
    setVar(colorName, color, el);

    if (addClass) {
      el.classList.add('vs-change-color');
    }
  } else {//     consolee.warn({
    //       el,
    //       link: 'https://lusaxweb.github.io/vuesax/',
    //       text: `• Component: ${el.__vue__.$vnode.componentOptions.tag}
    // • Warn info: El formato de la propiedad color es incorrecto
    // • Prop: color
    // • value: ${color}
    // • Valores Permitidos: (RGB, HEX, RGB Numbers, Vuesax Colors)
    // • Example: color="#000" or color="rgb(255,255,255)"`,
    //       title: 'VUESAX'
    //     })
  }
};

var getColor = function getColor(color) {
  function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      // tslint:disable-next-line:object-literal-sort-keys
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  var isRGB = /^(rgb|rgba)/.test(color);
  var isRGBNumbers = /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(color);
  var isHEX = /^(#)/.test(color);
  var newColor;

  if (isRGB) {
    var arrayColor = color.replace(/[rgba()]/g, '').split(',');
    newColor = arrayColor[0] + "," + arrayColor[1] + "," + arrayColor[2];
  } else if (isHEX) {
    var rgb = hexToRgb(color);
    newColor = rgb.r + "," + rgb.g + "," + rgb.b;
  } else if (isColor(color)) {
    var style = window.getComputedStyle(document.body);
    newColor = style.getPropertyValue('--vs-' + color);
  } else if (isRGBNumbers) {
    newColor = color;
  }

  return newColor;
};

var insertBody = function insertBody(element, parent) {
  var target = parent ? parent : document.body;
  target.insertBefore(element, target.lastChild);
};

var removeBody = function removeBody(element, parent) {
  var target = parent ? parent : document.body;
  target.removeChild(element);
};

var setCords = function setCords(element, parent) {
  var cords = parent.getBoundingClientRect();
  var x = cords.x;
  var y = cords.y;
  var w = cords.width;
  var h = cords.height;
  var style = element.style;
  var scrollTop = window.pageYOffset;
  var elTop = element.clientHeight + cords.y + scrollTop;
  var rootTop = scrollTop + window.innerHeight;

  if (rootTop - elTop < 30) {
    // console.log('hola mundo')
    style.top = y + scrollTop - element.clientHeight - 4 + "px";
    style.left = x + "px";
    style.width = w + "px";
    element.classList.add('top');
    parent.classList.add('top');
  } else {
    style.top = y + scrollTop + h - 4 + "px";
    style.left = x + "px";
    style.width = w + "px";
    element.classList.remove('top');
    parent.classList.remove('top');
  }
};

var setCordsPosition = function setCordsPosition(element, parent, position) {
  var cords = parent.getBoundingClientRect();
  var x = cords.x;
  var y = cords.y;
  var w = cords.width;
  var h = cords.height;
  var style = element.style;
  var scrollTop = window.pageYOffset;
  var elTop = element.clientHeight + cords.y + scrollTop;
  var rootTop = scrollTop + window.innerHeight;

  if (x + w + 10 + element.getBoundingClientRect().width > window.innerWidth && position == 'right') {
    position = 'left';
    element.classList.remove('right');
    element.classList.add('left');
  }

  if (x - 10 < element.getBoundingClientRect().width && position == 'left') {
    position = 'top';
    element.classList.remove('left');
    element.classList.add('top');
  }

  if (rootTop - elTop < 30 || position == 'top') {
    // console.log('hola mundo')
    style.top = y + scrollTop - element.clientHeight - 8 + "px";
    var left = x + (w - element.getBoundingClientRect().width) / 2;

    if (left + element.getBoundingClientRect().width < window.innerWidth) {
      if (left > 0) {
        style.left = left + "px";
      } else {
        style.left = '10px';
        element.classList.add('notArrow');
      }
    } else {
      style.left = 'auto';
      style.right = '10px';
      element.classList.add('notArrow');
    }
  } else if (position == 'bottom') {
    style.top = y + scrollTop + h + 8 + "px";

    var _left = x + (w - element.getBoundingClientRect().width) / 2;

    if (_left + element.getBoundingClientRect().width < window.innerWidth) {
      if (_left > 0) {
        style.left = _left + "px";
      } else {
        style.left = '10px';
        element.classList.add('notArrow');
      }
    } else {
      style.left = 'auto';
      style.right = '10px';
      element.classList.add('notArrow');
    }
  } else if (position == 'left') {
    style.top = y + scrollTop + (h - element.getBoundingClientRect().height) / 2 + "px";
    style.left = x - element.getBoundingClientRect().width - 8 + "px";
  } else if (position == 'right') {
    style.top = y + scrollTop + (h - element.getBoundingClientRect().height) / 2 + "px";
    style.left = x + w + 8 + "px";
  }
};


// CONCATENATED MODULE: ./src/mixins/component.ts







var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _class3, _temp;




var component_VsComponent = (_dec = Prop({
  type: String,
  default: null
}), _dec2 = Prop({
  type: Boolean,
  default: false
}), _dec3 = Prop({
  type: Boolean,
  default: false
}), _dec4 = Prop({
  type: Boolean,
  default: false
}), _dec5 = Prop({
  type: Boolean,
  default: false
}), _dec6 = Prop({
  type: Boolean,
  default: false
}), _dec7 = Prop({
  type: Boolean,
  default: false
}), vue_class_component_esm(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_Vue) {
  inheritsLoose_default()(VsComponent, _Vue);

  function VsComponent() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Vue.call.apply(_Vue, [this].concat(args)) || this;
    _this.componentColor = null;
    _this.getColor = null;

    initializerDefineProperty_default()(_this, "color", _descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "danger", _descriptor2, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "success", _descriptor3, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "warn", _descriptor4, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "dark", _descriptor5, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "primary", _descriptor6, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "active", _descriptor7, assertThisInitialized_default()(_this));

    return _this;
  }

  var _proto = VsComponent.prototype;

  _proto.mounted = function mounted() {
    this.getColor = getColor(this.color);
  };

  createClass_default()(VsComponent, [{
    key: "isColorDark",
    // get getColor() {
    //   return getColor(this.color)
    // }
    get: function get() {
      return this.color === 'dark' || this.dark || this.componentColor === 'dark';
    }
  }, {
    key: "isColor",
    get: function get() {
      return !!this.color || !!this.primary || !!this.success || !!this.warn || !!this.danger || !!this.dark;
    }
  }]);

  return VsComponent;
}(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a), _class3.install = void 0, _class3.use = void 0, _temp), (_descriptor = applyDecoratedDescriptor_default()(_class2.prototype, "color", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = applyDecoratedDescriptor_default()(_class2.prototype, "danger", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = applyDecoratedDescriptor_default()(_class2.prototype, "success", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = applyDecoratedDescriptor_default()(_class2.prototype, "warn", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = applyDecoratedDescriptor_default()(_class2.prototype, "dark", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = applyDecoratedDescriptor_default()(_class2.prototype, "primary", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = applyDecoratedDescriptor_default()(_class2.prototype, "active", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);

// EXTERNAL MODULE: ./src/util/ripple/style.sass
var ripple_style = __webpack_require__(12);

// CONCATENATED MODULE: ./src/util/ripple/index.ts



var ripple_ripple = function ripple(evt, color, solid) {
  if (color === void 0) {
    color = '';
  }

  if (solid === void 0) {
    solid = false;
  }

  var el = evt.currentTarget;
  var offset = el.getBoundingClientRect();
  var x = evt.clientX - offset.left;
  var y = evt.clientY - offset.top;
  var time = 0.6;

  if (el.clientWidth > 150) {
    time = 1.2;
  }

  var effectContent = document.createElement('div');
  effectContent.className = 'vs-ripple-content';
  var effect = document.createElement('div');

  if (!color) {
    util_setColor('color', '#fff', effectContent);
  }

  effect.className = 'vs-ripple';

  if (solid) {
    effect.classList.add('vs-ripple--solid'); // setColor('color', color || 'primary', effectContent)
  }

  effect.style.transition = "all " + time + "s ease";
  effect.style.left = x + "px";
  effect.style.top = y + "px";
  effectContent.appendChild(effect);
  el.appendChild(effectContent);
  effect.style.width = el.clientWidth * 2.5 + "px";
  effect.style.height = el.clientWidth * 2.5 + "px";
  effect.style.opacity = "1";
  var noTime = false;
  setTimeout(function () {
    noTime = true;
  }, 300);

  function removeEffect(evt) {
    effect.style.transition = "all 0." + time * 600 + "s ease";
    setTimeout(function () {
      effect.style.opacity = "0";
      setTimeout(function () {
        el.removeChild(effectContent);
      }, time * 300);
    }, noTime ? 0 : time * 400);
    evt.target.removeEventListener('mouseup', removeEffect);
    evt.target.removeEventListener('mouseleave', removeEffect);
  }

  evt.target.addEventListener('mouseup', removeEffect);
  evt.target.addEventListener('mouseleave', removeEffect);
};

var rippleReverse = function rippleReverse(evt) {
  var el = evt.currentTarget;
  var offset = el.getBoundingClientRect();
  var x = evt.clientX - offset.left;
  var y = evt.clientY - offset.top;
  var time = 0.6;

  if (el.clientWidth > 150) {
    time = 1.2;
  }

  var effectContent = document.createElement('div');
  effectContent.className = 'vs-ripple-content';
  var effect = document.createElement('div');
  effect.className = 'vs-ripple-invert'; // effect.style.transition = `all ${time}s ease`

  effect.style.left = x + "px";
  effect.style.top = y + "px";
  effect.style.width = el.clientWidth * 2.5 + "px";
  effect.style.height = el.clientWidth * 2.5 + "px";
  effect.style.opacity = "0";
  effectContent.appendChild(effect);
  el.appendChild(effectContent);
  setTimeout(function () {
    effect.style.width = "0px";
    effect.style.height = "0px";
    effect.style.opacity = "0.5";
  }, 1);
  var noTime = false;
  setTimeout(function () {
    noTime = true;
  }, 300);

  function removeEffect(evt) {
    effect.style.transition = "all 0." + time * 600 + "s ease";
    setTimeout(function () {
      effect.style.opacity = "0";
      setTimeout(function () {
        el.removeChild(effectContent);
      }, time * 300);
    }, noTime ? 0 : time * 400);
    evt.target.removeEventListener('mouseup', removeEffect);
    evt.target.removeEventListener('mouseleave', removeEffect);
  }

  evt.target.addEventListener('mouseup', removeEffect);
  evt.target.addEventListener('mouseleave', removeEffect);
}; //


var rippleCut = function rippleCut(evt) {
  var el = evt.currentTarget;
  var offset = el.getBoundingClientRect();
  var x = evt.clientX - offset.left;
  var y = evt.clientY - offset.top;
  var time = 0.6;

  if (el.clientWidth > 150) {
    time = 1.2;
  }

  var effectContent = document.createElement('div');
  effectContent.className = 'vs-ripple-content';
  var effect = document.createElement('div');
  var effect2 = document.createElement('div');
  effect.className = 'vs-ripple-cut-1';
  effect2.className = 'vs-ripple-cut-2'; // effect.style.transition = `all ${time}s ease`

  effect.style.left = effect2.style.left = x + "px";
  effect.style.top = effect2.style.top = y + "px";
  effect.style.width = effect2.style.width = el.clientWidth * 2.5 + "px";
  effect.style.height = effect2.style.height = el.clientWidth * 2.5 + "px";
  effect.style.opacity = effect2.style.opacity = "1";
  effectContent.appendChild(effect);
  effectContent.appendChild(effect2);
  el.appendChild(effectContent);
  setTimeout(function () {
    effect.style.left = "-" + el.clientWidth * 1.3 + "px";
    effect.style.opacity = "1";
    effect2.style.left = el.clientWidth * 1.3 + "px";
    effect2.style.opacity = "1";
  }, 1);
  var noTime = false;
  setTimeout(function () {
    noTime = true;
  }, 300);

  function removeEffect(evt) {
    effect.style.transition = "all 0." + time * 600 + "s ease";
    setTimeout(function () {
      effect.style.opacity = "0";
      setTimeout(function () {
        el.removeChild(effectContent);
      }, time * 300);
    }, noTime ? 0 : time * 400);
    evt.target.removeEventListener('mouseup', removeEffect);
    evt.target.removeEventListener('mouseleave', removeEffect);
  }

  evt.target.addEventListener('mouseup', removeEffect);
  evt.target.addEventListener('mouseleave', removeEffect);
};

/* harmony default export */ var util_ripple = (ripple_ripple);

// CONCATENATED MODULE: ./src/components/vsButton/Base/VsButton.ts







var VsButton_dec, VsButton_dec2, VsButton_dec3, VsButton_dec4, VsButton_dec5, VsButton_dec6, VsButton_dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, VsButton_class, VsButton_class2, VsButton_descriptor, VsButton_descriptor2, VsButton_descriptor3, VsButton_descriptor4, VsButton_descriptor5, VsButton_descriptor6, VsButton_descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, VsButton_temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var VsButton_VsButton = (VsButton_dec = Prop({
  type: String,
  default: ''
}), VsButton_dec2 = Prop({
  type: Boolean,
  default: false
}), VsButton_dec3 = Prop({
  type: Boolean,
  default: false
}), VsButton_dec4 = Prop({
  type: Boolean,
  default: false
}), VsButton_dec5 = Prop({
  type: Boolean,
  default: false
}), VsButton_dec6 = Prop({
  type: Boolean,
  default: false
}), VsButton_dec7 = Prop({
  type: Boolean,
  default: false
}), _dec8 = Prop({
  type: Boolean,
  default: false
}), _dec9 = Prop({
  type: Boolean,
  default: false
}), _dec10 = Prop({
  type: Boolean,
  default: false
}), _dec11 = Prop({
  type: Boolean,
  default: false
}), _dec12 = Prop({
  type: Boolean,
  default: false
}), _dec13 = Prop({
  type: String,
  default: null
}), _dec14 = Prop({
  type: Boolean,
  default: false
}), _dec15 = Prop({
  type: Boolean,
  default: false
}), _dec16 = Prop({
  type: Boolean,
  default: false
}), _dec17 = Prop({
  type: String,
  default: ''
}), _dec18 = Prop({
  type: Boolean,
  default: false
}), _dec19 = Prop({
  type: String,
  default: null
}), _dec20 = Prop({
  type: String,
  default: null
}), _dec21 = Prop({
  type: Boolean,
  default: false
}), vue_class_component_esm(VsButton_class = (VsButton_class2 = (VsButton_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsButton, _VsComponent);

  function VsButton() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;
    _this.Class = '';
    _this.prototype = void 0;

    initializerDefineProperty_default()(_this, "ripple", VsButton_descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "activeDisabled", VsButton_descriptor2, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "flat", VsButton_descriptor3, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "border", VsButton_descriptor4, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "gradient", VsButton_descriptor5, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "relief", VsButton_descriptor6, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "transparent", VsButton_descriptor7, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "shadow", _descriptor8, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "floating", _descriptor9, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "icon", _descriptor10, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "circle", _descriptor11, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "square", _descriptor12, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "size", _descriptor13, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "loading", _descriptor14, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "upload", _descriptor15, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "block", _descriptor16, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "animationType", _descriptor17, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "animateInactive", _descriptor18, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "to", _descriptor19, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "href", _descriptor20, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "blank", _descriptor21, assertThisInitialized_default()(_this));

    return _this;
  }

  var _proto = VsButton.prototype;

  _proto.render = function render(h) {
    var _style,
        _ref,
        _ref2,
        _ref3,
        _ref4,
        _ref5,
        _ref6,
        _ref7,
        _ref8,
        _ref9,
        _ref10,
        _ref11,
        _ref12,
        _ref13,
        _ref14,
        _ref15,
        _ref16,
        _ref17,
        _ref18,
        _ref19,
        _ref20,
        _ref21,
        _ref22,
        _ref23,
        _ref24,
        _ref25,
        _this2 = this;

    var defaultSlot = h('div', {
      staticClass: 'vs-button__content'
    }, this.$slots.default);
    var animateSlot = h('div', {
      staticClass: 'vs-button__animate',
      class: ["vs-button__animate--" + this.animationType]
    }, this.$slots.animate);
    var loadingElement = h('div', {
      staticClass: 'vs-button__loading'
    });
    var btn = h('button', {
      staticClass: 'vs-button',
      style: (_style = {}, _style['--vs-color'] = this.color ? this.getColor : '', _style),
      class: [// `vs-button--${this.color.replace('#', '')}`,
      "vs-button--" + this.componentColor, "vs-button--size-" + this.size, (_ref = {}, _ref["vs-button--fff"] = this.color === '#fff', _ref), (_ref2 = {}, _ref2["vs-button--active"] = !!this.active, _ref2), (_ref3 = {}, _ref3["vs-button--active-disabled"] = !!this.activeDisabled, _ref3), (_ref4 = {}, _ref4["vs-button--icon"] = !!this.icon, _ref4), (_ref5 = {}, _ref5["vs-button--circle"] = !!this.circle, _ref5), (_ref6 = {}, _ref6["vs-button--square"] = !!this.square, _ref6), (_ref7 = {}, _ref7["vs-button--loading"] = !!this.loading, _ref7), (_ref8 = {}, _ref8["vs-button--upload"] = !!this.upload, _ref8), (_ref9 = {}, _ref9["vs-button--block"] = !!this.block, _ref9), (_ref10 = {}, _ref10["vs-button--animate"] = !!this.$slots.animate, _ref10), (_ref11 = {}, _ref11["vs-button--animate-" + this.animationType] = !!this.animationType, _ref11), (_ref12 = {}, _ref12["vs-button--animate-inactive"] = !!this.animateInactive, _ref12), (_ref13 = {}, _ref13["vs-button--primary"] = !this.danger && !this.success && !this.warn && !this.dark && !this.color, _ref13), (_ref14 = {}, _ref14["vs-button--danger"] = !!this.danger, _ref14), (_ref15 = {}, _ref15["vs-button--warn"] = !!this.warn, _ref15), (_ref16 = {}, _ref16["vs-button--success"] = !!this.success, _ref16), (_ref17 = {}, _ref17["vs-button--dark"] = !!this.dark, _ref17), (_ref18 = {}, _ref18["vs-button--default"] = !this.flat && !this.border && !this.gradient && !this.relief && !this.transparent && !this.shadow && !this.floating, _ref18), (_ref19 = {}, _ref19["vs-button--flat"] = !!this.flat, _ref19), (_ref20 = {}, _ref20["vs-button--border"] = !!this.border, _ref20), (_ref21 = {}, _ref21["vs-button--gradient"] = !!this.gradient, _ref21), (_ref22 = {}, _ref22["vs-button--relief"] = !!this.relief, _ref22), (_ref23 = {}, _ref23["vs-button--transparent"] = !!this.transparent, _ref23), (_ref24 = {}, _ref24["vs-button--shadow"] = !!this.shadow, _ref24), (_ref25 = {}, _ref25["vs-button--floating"] = !!this.floating, _ref25)],
      attrs: _objectSpread({}, this.$attrs),
      on: _objectSpread({}, this.$listeners, {
        mousedown: function mousedown(evt) {
          // ripple effect
          if (_this2.ripple === 'reverse') {
            rippleReverse(evt);
          } else if (_this2.ripple === 'cut') {
            rippleCut(evt);
          } else {
            if (_this2.flat) {
              util_ripple(evt, (_this2.componentColor || _this2.color || 'primary') && !_this2.active && document.activeElement !== _this2.$el ? 'inherit' : null, _this2.flat && !_this2.active && document.activeElement !== _this2.$el);
            } else {
              util_ripple(evt, null, false);
            }
          }
        },
        click: function click(evt) {
          if (_this2.to) {
            _this2.$router.push(_this2.to);
          } else if (_this2.href) {
            window.open(_this2.href, _this2.blank && '_blank' || '_self'); // console.log(this.blank && '_self')
          }

          _this2.$emit('click', evt);
        }
      })
    }, [defaultSlot, this.$slots.animate ? animateSlot : null, this.loading ? loadingElement : null]);
    return btn;
  };

  return VsButton;
}(component_VsComponent), VsButton_temp), (VsButton_descriptor = applyDecoratedDescriptor_default()(VsButton_class2.prototype, "ripple", [VsButton_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsButton_descriptor2 = applyDecoratedDescriptor_default()(VsButton_class2.prototype, "activeDisabled", [VsButton_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsButton_descriptor3 = applyDecoratedDescriptor_default()(VsButton_class2.prototype, "flat", [VsButton_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsButton_descriptor4 = applyDecoratedDescriptor_default()(VsButton_class2.prototype, "border", [VsButton_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsButton_descriptor5 = applyDecoratedDescriptor_default()(VsButton_class2.prototype, "gradient", [VsButton_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsButton_descriptor6 = applyDecoratedDescriptor_default()(VsButton_class2.prototype, "relief", [VsButton_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsButton_descriptor7 = applyDecoratedDescriptor_default()(VsButton_class2.prototype, "transparent", [VsButton_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = applyDecoratedDescriptor_default()(VsButton_class2.prototype, "shadow", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = applyDecoratedDescriptor_default()(VsButton_class2.prototype, "floating", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = applyDecoratedDescriptor_default()(VsButton_class2.prototype, "icon", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = applyDecoratedDescriptor_default()(VsButton_class2.prototype, "circle", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = applyDecoratedDescriptor_default()(VsButton_class2.prototype, "square", [_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = applyDecoratedDescriptor_default()(VsButton_class2.prototype, "size", [_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = applyDecoratedDescriptor_default()(VsButton_class2.prototype, "loading", [_dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = applyDecoratedDescriptor_default()(VsButton_class2.prototype, "upload", [_dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor16 = applyDecoratedDescriptor_default()(VsButton_class2.prototype, "block", [_dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor17 = applyDecoratedDescriptor_default()(VsButton_class2.prototype, "animationType", [_dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor18 = applyDecoratedDescriptor_default()(VsButton_class2.prototype, "animateInactive", [_dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor19 = applyDecoratedDescriptor_default()(VsButton_class2.prototype, "to", [_dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor20 = applyDecoratedDescriptor_default()(VsButton_class2.prototype, "href", [_dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor21 = applyDecoratedDescriptor_default()(VsButton_class2.prototype, "blank", [_dec21], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), VsButton_class2)) || VsButton_class);

// CONCATENATED MODULE: ./src/components/vsButton/Base/index.ts



VsButton_VsButton.install = function (vue) {
  vue.component('vs-button', VsButton_VsButton);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsButton_VsButton.install(window.Vue);
}

/* harmony default export */ var Base = (VsButton_VsButton);
// EXTERNAL MODULE: ./src/components/vsButton/group/style.sass
var group_style = __webpack_require__(13);

// CONCATENATED MODULE: ./src/components/vsButton/group/VsButtonGroup.ts


var VsButtonGroup_class, VsButtonGroup_temp;




var VsButtonGroup_VsButton = vue_class_component_esm(VsButtonGroup_class = (VsButtonGroup_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsButton, _VsComponent);

  function VsButton() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;
    _this.Class = '';
    _this.prototype = void 0;
    return _this;
  }

  var _proto = VsButton.prototype;

  _proto.render = function render(h) {
    var btnGroup = h('div', {
      staticClass: 'vs-button-group'
    }, this.$slots.default);
    return btnGroup;
  };

  return VsButton;
}(component_VsComponent), VsButtonGroup_temp)) || VsButtonGroup_class;


// CONCATENATED MODULE: ./src/components/vsButton/group/index.ts



VsButtonGroup_VsButton.install = function (vue) {
  vue.component('vs-button-group', VsButtonGroup_VsButton);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsButtonGroup_VsButton.install(window.Vue);
}

/* harmony default export */ var group = (VsButtonGroup_VsButton);
// EXTERNAL MODULE: ./src/components/vsAlert/Base/style.sass
var Base_style = __webpack_require__(14);

// EXTERNAL MODULE: ./src/icons/icons.sass
var icons_icons = __webpack_require__(8);

// CONCATENATED MODULE: ./src/icons/close.ts






var close_dec, close_class, close_class2, close_descriptor, close_temp;




var close_VsIconClose = (close_dec = Prop({
  type: String,
  default: null
}), vue_class_component_esm(close_class = (close_class2 = (close_temp =
/*#__PURE__*/
function (_Vue) {
  inheritsLoose_default()(VsIconClose, _Vue);

  function VsIconClose() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Vue.call.apply(_Vue, [this].concat(args)) || this;

    initializerDefineProperty_default()(_this, "hover", close_descriptor, assertThisInitialized_default()(_this));

    return _this;
  }

  var _proto = VsIconClose.prototype;

  _proto.render = function render(h) {
    var icon = h('i', {
      staticClass: 'vs-icon-close',
      class: ["vs-icon-hover-" + this.hover],
      ref: 'icon'
    });
    return icon;
  };

  return VsIconClose;
}(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a), close_temp), (close_descriptor = applyDecoratedDescriptor_default()(close_class2.prototype, "hover", [close_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), close_class2)) || close_class);

// CONCATENATED MODULE: ./src/icons/plus.ts







var plus_dec, plus_class, plus_class2, plus_descriptor, plus_temp;

function plus_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function plus_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { plus_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { plus_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var plus_VsIconClose = (plus_dec = Prop({
  type: Boolean,
  default: false
}), vue_class_component_esm(plus_class = (plus_class2 = (plus_temp =
/*#__PURE__*/
function (_Vue) {
  inheritsLoose_default()(VsIconClose, _Vue);

  function VsIconClose() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Vue.call.apply(_Vue, [this].concat(args)) || this;

    initializerDefineProperty_default()(_this, "less", plus_descriptor, assertThisInitialized_default()(_this));

    return _this;
  }

  var _proto = VsIconClose.prototype;

  _proto.render = function render(h) {
    var icon = h('i', {
      staticClass: 'vs-icon-plus',
      class: {
        less: this.less
      },
      ref: 'icon',
      on: plus_objectSpread({}, this.$listeners)
    });
    return icon;
  };

  return VsIconClose;
}(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a), plus_temp), (plus_descriptor = applyDecoratedDescriptor_default()(plus_class2.prototype, "less", [plus_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), plus_class2)) || plus_class);

// CONCATENATED MODULE: ./src/components/vsAlert/Base/VsAlert.ts







var VsAlert_dec, VsAlert_dec2, VsAlert_dec3, VsAlert_dec4, VsAlert_dec5, VsAlert_dec6, VsAlert_dec7, VsAlert_dec8, VsAlert_dec9, VsAlert_dec10, VsAlert_dec11, VsAlert_dec12, VsAlert_dec13, VsAlert_class, VsAlert_class2, VsAlert_descriptor, VsAlert_descriptor2, VsAlert_descriptor3, VsAlert_descriptor4, VsAlert_descriptor5, VsAlert_descriptor6, VsAlert_descriptor7, VsAlert_descriptor8, VsAlert_descriptor9, VsAlert_descriptor10, VsAlert_descriptor11, VsAlert_temp;





var VsAlert_VsAlert = (VsAlert_dec = Prop({
  type: Boolean,
  default: false
}), VsAlert_dec2 = Prop({
  type: Boolean,
  default: false
}), VsAlert_dec3 = Prop({
  type: Boolean,
  default: false
}), VsAlert_dec4 = Prop({
  type: Boolean,
  default: false
}), VsAlert_dec5 = Prop({
  type: Boolean,
  default: false
}), VsAlert_dec6 = Prop({
  type: Boolean,
  default: false
}), VsAlert_dec7 = Prop({
  default: true
}), VsAlert_dec8 = Prop({
  type: Boolean,
  default: null
}), VsAlert_dec9 = Prop({
  type: Boolean,
  default: false
}), VsAlert_dec10 = Prop({
  type: [Number, String],
  default: 0
}), VsAlert_dec11 = Prop({
  type: [Number, String],
  default: 0
}), VsAlert_dec12 = Watch('page'), VsAlert_dec13 = Watch('hiddenContent'), vue_class_component_esm(VsAlert_class = (VsAlert_class2 = (VsAlert_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsAlert, _VsComponent);

  function VsAlert() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;

    initializerDefineProperty_default()(_this, "solid", VsAlert_descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "border", VsAlert_descriptor2, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "shadow", VsAlert_descriptor3, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "gradient", VsAlert_descriptor4, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "flat", VsAlert_descriptor5, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "relief", VsAlert_descriptor6, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "value", VsAlert_descriptor7, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "hiddenContent", VsAlert_descriptor8, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "closable", VsAlert_descriptor9, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "progress", VsAlert_descriptor10, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "page", VsAlert_descriptor11, assertThisInitialized_default()(_this));

    return _this;
  }

  var _proto = VsAlert.prototype;

  _proto.handleWatchPage = function handleWatchPage() {
    var _this2 = this;

    var content = this.$refs.content;
    content.style.minHeight = content.scrollHeight + 'px';
    this.$nextTick(function () {
      var el = _this2.$el;
      el.style.height = _this2.$el.scrollHeight - 1 + 'px';
    });
  };

  _proto.mounted = function mounted() {
    if (this.$el && this.$refs.content) {
      var el = this.$el;
      el.style.height = this.$el.scrollHeight - 1 + 'px';
      var content = this.$refs.content;
      content.style.minHeight = content.scrollHeight + 'px';
    }
  };

  _proto.handleHiddenContent = function handleHiddenContent(val) {
    var _this3 = this;

    if (!this.value) {
      return;
    }

    var el = this.$el;
    var content = this.$refs.content;

    if (!val) {
      el.style.height = 'auto';
      setTimeout(function () {
        el.style.height = _this3.$el.scrollHeight - 1 + 'px';
      }, 250);
    } else {
      el.style.height = this.$el.scrollHeight - content.scrollHeight + 'px';
    }
  };

  _proto.beforeEnter = function beforeEnter(el) {
    el.style.height = 0;
  };

  _proto.enter = function enter(el, done) {
    var h = el.scrollHeight;
    el.style.height = h - 1 + 'px';
    done();
  };

  _proto.leave = function leave(el, done) {
    el.style.minHeight = '0px';
    el.style.height = '0px';
  };

  _proto.handleClickClose = function handleClickClose() {
    this.$emit('input', !this.value);
  };

  _proto.handleClickHidden = function handleClickHidden() {
    this.$emit('update:hiddenContent', !this.hiddenContent);
  };

  _proto.handleClickPrevPage = function handleClickPrevPage() {
    if (this.page > 1) {
      this.$emit('update:page', Number(this.page) - 1);
    }
  };

  _proto.handleClickNextPage = function handleClickNextPage() {
    if (this.page < this.getTotalPages) {
      this.$emit('update:page', Number(this.page) + 1);
    }
  };

  _proto.render = function render(h) {
    var _style, _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12;

    var icon = h('div', {
      staticClass: 'vs-alert__icon',
      ref: 'icon'
    }, [this.$slots.icon]);
    var contentText = h('div', {
      staticClass: 'vs-alert__content__text',
      ref: 'text'
    }, [this.$slots.default].concat(this.getPages));
    var content = h('transition', {
      on: {
        beforeEnter: this.beforeEnter,
        enter: this.enter,
        leave: this.leave
      }
    }, [!this.hiddenContent && h('div', {
      staticClass: 'vs-alert__content',
      ref: 'content'
    }, [contentText])]);
    var title = h('div', {
      staticClass: 'vs-alert__title',
      class: {
        'vs-alert__title--clickHidden': typeof this.hiddenContent === 'boolean'
      },
      on: {
        click: this.handleClickHidden
      }
    }, [this.$slots.title, !this.closable && typeof this.hiddenContent === 'boolean' && h(plus_VsIconClose, {
      props: {
        less: !this.hiddenContent
      },
      on: {
        click: this.handleClickHidden
      }
    })]);
    var closeBtn = h('button', {
      staticClass: 'vs-alert__close',
      on: {
        click: this.handleClickClose
      }
    }, [h(close_VsIconClose, {
      props: {
        hover: 'less'
      }
    })]);
    var pagination = h('div', {
      staticClass: 'vs-alert__pagination'
    }, [h('button', {
      on: {
        click: this.handleClickPrevPage
      }
    }, '<'), h('span', this.page + " / " + this.getTotalPages), h('button', {
      on: {
        click: this.handleClickNextPage
      }
    }, '>')]);
    var footer = h('div', {
      staticClass: 'vs-alert__footer'
    }, [this.$slots.footer]);
    var progress = h('div', {
      staticClass: 'vs-alert__progress'
    }, [h('div', {
      staticClass: 'vs-alert__progress__bar',
      style: {
        width: this.progress + "%"
      }
    })]);
    var render = h('div', {
      staticClass: 'vs-alert',
      style: (_style = {}, _style['--vs-color'] = this.color ? this.getColor : '', _style),
      class: [(_ref = {}, _ref["vs-alert--solid"] = !!this.solid, _ref), (_ref2 = {}, _ref2["vs-alert--border"] = !!this.border, _ref2), (_ref3 = {}, _ref3["vs-alert--shadow"] = !!this.shadow, _ref3), (_ref4 = {}, _ref4["vs-alert--gradient"] = !!this.gradient, _ref4), (_ref5 = {}, _ref5["vs-alert--flat"] = !!this.flat, _ref5), (_ref6 = {}, _ref6["vs-alert--relief"] = !!this.relief, _ref6), (_ref7 = {}, _ref7["vs-alert--pages"] = this.getPages.length > 0, _ref7), (_ref8 = {}, _ref8["vs-component--primary"] = !this.danger && !this.success && !this.warn && !this.dark && !this.color, _ref8), (_ref9 = {}, _ref9["vs-component--danger"] = !!this.danger, _ref9), (_ref10 = {}, _ref10["vs-component--warn"] = !!this.warn, _ref10), (_ref11 = {}, _ref11["vs-component--success"] = !!this.success, _ref11), (_ref12 = {}, _ref12["vs-component--dark"] = !!this.dark, _ref12)]
    }, [this.$slots.icon && icon, this.$slots.title && title, content, this.closable && closeBtn, this.$slots.footer && footer, !!this.progress && progress, this.getTotalPages > 0 && pagination]);
    return h('transition', {
      on: {
        beforeEnter: this.beforeEnter,
        enter: this.enter,
        leave: this.leave
      }
    }, [this.value && render]);
  };

  createClass_default()(VsAlert, [{
    key: "getTotalPages",
    get: function get() {
      var keys = Object.keys(this.$slots).filter(function (item) {
        return item.indexOf('page') !== -1;
      });
      return keys.length;
    }
  }, {
    key: "getPages",
    get: function get() {
      var _this4 = this;

      var keys = Object.keys(this.$slots).filter(function (item) {
        return item.indexOf('page') !== -1;
      });
      var values = [];
      keys.forEach(function (item) {
        values.push(_this4.page == item.split('-')[1] && _this4.$slots[item]);
      });
      return values;
    }
  }]);

  return VsAlert;
}(component_VsComponent), VsAlert_temp), (VsAlert_descriptor = applyDecoratedDescriptor_default()(VsAlert_class2.prototype, "solid", [VsAlert_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsAlert_descriptor2 = applyDecoratedDescriptor_default()(VsAlert_class2.prototype, "border", [VsAlert_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsAlert_descriptor3 = applyDecoratedDescriptor_default()(VsAlert_class2.prototype, "shadow", [VsAlert_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsAlert_descriptor4 = applyDecoratedDescriptor_default()(VsAlert_class2.prototype, "gradient", [VsAlert_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsAlert_descriptor5 = applyDecoratedDescriptor_default()(VsAlert_class2.prototype, "flat", [VsAlert_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsAlert_descriptor6 = applyDecoratedDescriptor_default()(VsAlert_class2.prototype, "relief", [VsAlert_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsAlert_descriptor7 = applyDecoratedDescriptor_default()(VsAlert_class2.prototype, "value", [VsAlert_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsAlert_descriptor8 = applyDecoratedDescriptor_default()(VsAlert_class2.prototype, "hiddenContent", [VsAlert_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsAlert_descriptor9 = applyDecoratedDescriptor_default()(VsAlert_class2.prototype, "closable", [VsAlert_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsAlert_descriptor10 = applyDecoratedDescriptor_default()(VsAlert_class2.prototype, "progress", [VsAlert_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsAlert_descriptor11 = applyDecoratedDescriptor_default()(VsAlert_class2.prototype, "page", [VsAlert_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), applyDecoratedDescriptor_default()(VsAlert_class2.prototype, "handleWatchPage", [VsAlert_dec12], Object.getOwnPropertyDescriptor(VsAlert_class2.prototype, "handleWatchPage"), VsAlert_class2.prototype), applyDecoratedDescriptor_default()(VsAlert_class2.prototype, "handleHiddenContent", [VsAlert_dec13], Object.getOwnPropertyDescriptor(VsAlert_class2.prototype, "handleHiddenContent"), VsAlert_class2.prototype)), VsAlert_class2)) || VsAlert_class);

// CONCATENATED MODULE: ./src/components/vsAlert/Base/index.ts



VsAlert_VsAlert.install = function (vue) {
  vue.component('vs-alert', VsAlert_VsAlert);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsAlert_VsAlert.install(window.Vue);
}

/* harmony default export */ var vsAlert_Base = (VsAlert_VsAlert);
// EXTERNAL MODULE: ./src/components/vsInput/Base/style.sass
var vsInput_Base_style = __webpack_require__(15);

// CONCATENATED MODULE: ./src/components/vsInput/Base/VsInput.ts








var VsInput_dec, VsInput_dec2, VsInput_dec3, VsInput_dec4, VsInput_dec5, VsInput_dec6, VsInput_dec7, VsInput_dec8, VsInput_dec9, VsInput_dec10, VsInput_dec11, VsInput_dec12, VsInput_dec13, VsInput_dec14, VsInput_dec15, VsInput_class, VsInput_class2, VsInput_descriptor, VsInput_descriptor2, VsInput_descriptor3, VsInput_descriptor4, VsInput_descriptor5, VsInput_descriptor6, VsInput_descriptor7, VsInput_descriptor8, VsInput_descriptor9, VsInput_descriptor10, VsInput_descriptor11, VsInput_descriptor12, VsInput_descriptor13, VsInput_descriptor14, VsInput_descriptor15, VsInput_temp;

function VsInput_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function VsInput_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { VsInput_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { VsInput_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var VsInput_VsInput = (VsInput_dec = Prop({
  default: ''
}), VsInput_dec2 = Prop({
  default: ''
}), VsInput_dec3 = Prop({
  default: ''
}), VsInput_dec4 = Prop({
  type: Boolean,
  default: false
}), VsInput_dec5 = Prop({
  type: Boolean,
  default: false
}), VsInput_dec6 = Prop({
  type: Boolean,
  default: false
}), VsInput_dec7 = Prop({
  type: Boolean,
  default: false
}), VsInput_dec8 = Prop({
  type: String,
  default: null
}), VsInput_dec9 = Prop({
  type: String,
  default: null
}), VsInput_dec10 = Prop({
  type: Number,
  default: 0
}), VsInput_dec11 = Prop({
  type: Boolean,
  default: false
}), VsInput_dec12 = Prop({
  type: Boolean,
  default: false
}), VsInput_dec13 = Prop({
  type: Boolean,
  default: false
}), VsInput_dec14 = Prop({
  type: Boolean,
  default: false
}), VsInput_dec15 = Prop({
  type: Boolean,
  default: false
}), vue_class_component_esm(VsInput_class = (VsInput_class2 = (VsInput_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsInput, _VsComponent);

  function VsInput() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;
    _this.isVisiblePassword = false;

    initializerDefineProperty_default()(_this, "value", VsInput_descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "labelPlaceholder", VsInput_descriptor2, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "label", VsInput_descriptor3, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "block", VsInput_descriptor4, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "iconAfter", VsInput_descriptor5, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "visiblePassword", VsInput_descriptor6, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "loading", VsInput_descriptor7, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "color", VsInput_descriptor8, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "state", VsInput_descriptor9, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "progress", VsInput_descriptor10, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "border", VsInput_descriptor11, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "shadow", VsInput_descriptor12, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "transparent", VsInput_descriptor13, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "textWhite", VsInput_descriptor14, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "square", VsInput_descriptor15, assertThisInitialized_default()(_this));

    _this._uid = void 0;
    return _this;
  }

  var _proto = VsInput.prototype;

  _proto.beforeEnter = function beforeEnter(el) {
    el.style.height = 0;
  };

  _proto.enter = function enter(el, done) {
    var h = el.scrollHeight;
    el.style.height = h - 1 + 'px';
    done();
  };

  _proto.leave = function leave(el, done) {
    el.style.minHeight = '0px';
    el.style.height = '0px';
  };

  _proto.getMessage = function getMessage(type) {
    return this.$createElement('transition', {
      on: {
        beforeEnter: this.beforeEnter,
        enter: this.enter,
        leave: this.leave
      }
    }, [!!this.$slots["message-" + type] && this.$createElement('div', {
      staticClass: 'vs-input__message',
      class: ["vs-input__message--" + type]
    }, [this.$slots["message-" + type]])]);
  };

  _proto.render = function render(h) {
    var _ref,
        _ref2,
        _this2 = this,
        _ref3,
        _ref4,
        _style,
        _ref5,
        _ref6,
        _ref7,
        _ref8,
        _ref9,
        _ref10,
        _ref11;

    var input = h('input', {
      staticClass: 'vs-input',
      domProps: {
        value: this.value
      },
      class: [(_ref = {}, _ref['vs-input--has-icon'] = !!this.$slots.icon, _ref), (_ref2 = {}, _ref2['vs-input--has-icon--after'] = !!this.iconAfter, _ref2)],
      on: VsInput_objectSpread({}, this.$listeners, {
        input: function input(evt) {
          _this2.$emit('input', evt.target.value);
        }
      }),
      attrs: VsInput_objectSpread({}, this.$attrs, {
        placeholder: '',
        id: this.getId,
        type: this.visiblePassword ? 'text' : this.$attrs.type
      })
    });
    var label = h('label', {
      attrs: {
        for: this.getId
      },
      class: ['vs-input__label', {
        'vs-input__label--placeholder': this.labelPlaceholder
      }, {
        'vs-input__label--hidden': this.value !== '' || this.$attrs.type == 'date' || this.$attrs.type == 'time'
      }, {
        'vs-input__label--label': this.label
      }]
    }, [this.label || this.$attrs.placeholder || this.labelPlaceholder]);
    var placeholder = h('label', {
      attrs: {
        for: this.getId
      },
      class: ['vs-input__label', {
        'vs-input__label--hidden': this.value !== ''
      }]
    }, [this.$attrs.placeholder]);
    var icon = h('span', {
      staticClass: 'vs-input__icon',
      class: [{
        'vs-input__icon--after': this.iconAfter
      }, {
        'vs-input__icon--click': !!this.$listeners['click-icon']
      }],
      on: {
        click: function click(evt) {
          _this2.$emit('click-icon', evt.target.value);
        }
      }
    }, [this.$slots.icon]);
    var messageSuccess = this.getMessage('success');
    var messageDanger = this.getMessage('danger');
    var messageWarn = this.getMessage('warn');
    var messagePrimary = this.getMessage('primary');
    var progressBar = h('div', {
      staticClass: 'vs-input__progress',
      class: [{
        'vs-input__progress--danger': this.progress < 33
      }, {
        'vs-input__progress--warn': this.progress < 66 && this.progress > 33
      }, {
        'vs-input__progress--success': this.progress > 66
      }]
    }, [h('div', {
      staticClass: 'vs-input__progress__bar',
      style: {
        width: this.progress + "%"
      }
    })]);
    var loading = h('div', {
      staticClass: 'vs-input__loading'
    });
    var effects = h('div', {
      staticClass: 'vs-input__affects'
    }, [h('div', {
      staticClass: 'vs-input__affects__1'
    }), h('div', {
      staticClass: 'vs-input__affects__2'
    }), h('div', {
      staticClass: 'vs-input__affects__3'
    }), h('div', {
      staticClass: 'vs-input__affects__4'
    })]);
    var inputContent = h('div', {
      staticClass: 'vs-input-content',
      class: [(_ref3 = {}, _ref3["vs-input-content--has-color"] = this.hasColor, _ref3), (_ref4 = {}, _ref4["vs-input-content--has-label"] = this.label || this.labelPlaceholder, _ref4)]
    }, [input, this.label && placeholder, label, this.$slots.icon && icon, this.loading && loading, effects]);
    return h('div', {
      staticClass: 'vs-input-parent',
      style: (_style = {}, _style['--vs-color'] = this.color ? this.getColor : '', _style),
      class: ["vs-input-parent--state-" + this.state, {
        'vs-input-parent--border': !!this.border
      }, {
        'vs-input-parent--shadow': !!this.shadow
      }, (_ref5 = {}, _ref5["vs-input-content--has-label"] = this.label || this.labelPlaceholder, _ref5), {
        block: this.block
      }, {
        transparent: this.transparent
      }, {
        textWhite: this.textWhite
      }, {
        square: this.square
      }, (_ref6 = {}, _ref6["vs-component--primary"] = !this.danger && !this.success && !this.warn && !this.dark && !this.color, _ref6), (_ref7 = {}, _ref7["vs-component--danger"] = !!this.danger, _ref7), (_ref8 = {}, _ref8["vs-component--warn"] = !!this.warn, _ref8), (_ref9 = {}, _ref9["vs-component--success"] = !!this.success, _ref9), (_ref10 = {}, _ref10["vs-component--dark"] = !!this.dark, _ref10), (_ref11 = {}, _ref11["vs-component--is-color"] = !!this.isColor, _ref11)]
    }, [inputContent, this.progress > 0 && progressBar, messageSuccess, messageDanger, messageWarn, messagePrimary]);
  };

  createClass_default()(VsInput, [{
    key: "getId",
    get: function get() {
      return "vs-input--" + (this.$attrs.id || this._uid);
    }
  }, {
    key: "hasColor",
    get: function get() {
      return this.color || this.primary || this.danger || this.success || this.dark || this.warn;
    }
  }]);

  return VsInput;
}(component_VsComponent), VsInput_temp), (VsInput_descriptor = applyDecoratedDescriptor_default()(VsInput_class2.prototype, "value", [VsInput_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsInput_descriptor2 = applyDecoratedDescriptor_default()(VsInput_class2.prototype, "labelPlaceholder", [VsInput_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsInput_descriptor3 = applyDecoratedDescriptor_default()(VsInput_class2.prototype, "label", [VsInput_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsInput_descriptor4 = applyDecoratedDescriptor_default()(VsInput_class2.prototype, "block", [VsInput_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsInput_descriptor5 = applyDecoratedDescriptor_default()(VsInput_class2.prototype, "iconAfter", [VsInput_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsInput_descriptor6 = applyDecoratedDescriptor_default()(VsInput_class2.prototype, "visiblePassword", [VsInput_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsInput_descriptor7 = applyDecoratedDescriptor_default()(VsInput_class2.prototype, "loading", [VsInput_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsInput_descriptor8 = applyDecoratedDescriptor_default()(VsInput_class2.prototype, "color", [VsInput_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsInput_descriptor9 = applyDecoratedDescriptor_default()(VsInput_class2.prototype, "state", [VsInput_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsInput_descriptor10 = applyDecoratedDescriptor_default()(VsInput_class2.prototype, "progress", [VsInput_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsInput_descriptor11 = applyDecoratedDescriptor_default()(VsInput_class2.prototype, "border", [VsInput_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsInput_descriptor12 = applyDecoratedDescriptor_default()(VsInput_class2.prototype, "shadow", [VsInput_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsInput_descriptor13 = applyDecoratedDescriptor_default()(VsInput_class2.prototype, "transparent", [VsInput_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsInput_descriptor14 = applyDecoratedDescriptor_default()(VsInput_class2.prototype, "textWhite", [VsInput_dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsInput_descriptor15 = applyDecoratedDescriptor_default()(VsInput_class2.prototype, "square", [VsInput_dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), VsInput_class2)) || VsInput_class);

// CONCATENATED MODULE: ./src/components/vsInput/Base/index.ts



VsInput_VsInput.install = function (vue) {
  vue.component('vs-input', VsInput_VsInput);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsInput_VsInput.install(window.Vue);
}

/* harmony default export */ var vsInput_Base = (VsInput_VsInput);
// EXTERNAL MODULE: ./src/components/vsCheckbox/Base/style.sass
var vsCheckbox_Base_style = __webpack_require__(9);

// CONCATENATED MODULE: ./src/icons/check.ts







var check_dec, check_class, check_class2, check_descriptor, check_temp;

function check_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function check_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { check_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { check_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var check_VsIconClose = (check_dec = Prop({
  type: Boolean,
  default: false
}), vue_class_component_esm(check_class = (check_class2 = (check_temp =
/*#__PURE__*/
function (_Vue) {
  inheritsLoose_default()(VsIconClose, _Vue);

  function VsIconClose() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Vue.call.apply(_Vue, [this].concat(args)) || this;

    initializerDefineProperty_default()(_this, "indeterminate", check_descriptor, assertThisInitialized_default()(_this));

    return _this;
  }

  var _proto = VsIconClose.prototype;

  _proto.render = function render(h) {
    var icon = h('i', {
      staticClass: 'vs-icon-check',
      on: check_objectSpread({}, this.$listeners),
      class: [{
        indeterminate: this.indeterminate
      }]
    }, [h('span', {}, [h('div', {
      staticClass: 'line1'
    }), h('div', {
      staticClass: 'line2'
    })])]);
    return icon;
  };

  return VsIconClose;
}(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a), check_temp), (check_descriptor = applyDecoratedDescriptor_default()(check_class2.prototype, "indeterminate", [check_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), check_class2)) || check_class);

// CONCATENATED MODULE: ./src/components/vsCheckbox/Base/VsCheckbox.ts








var VsCheckbox_dec, VsCheckbox_dec2, VsCheckbox_dec3, VsCheckbox_dec4, VsCheckbox_dec5, VsCheckbox_dec6, VsCheckbox_dec7, VsCheckbox_dec8, VsCheckbox_dec9, VsCheckbox_dec10, VsCheckbox_class, VsCheckbox_class2, VsCheckbox_descriptor, VsCheckbox_descriptor2, VsCheckbox_descriptor3, VsCheckbox_descriptor4, VsCheckbox_descriptor5, VsCheckbox_descriptor6, VsCheckbox_descriptor7, VsCheckbox_descriptor8, VsCheckbox_descriptor9, VsCheckbox_temp;

function VsCheckbox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function VsCheckbox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { VsCheckbox_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { VsCheckbox_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var VsCheckbox_VsCheckbox = (VsCheckbox_dec = Prop({
  default: ''
}), VsCheckbox_dec2 = Prop({
  default: ''
}), VsCheckbox_dec3 = Prop({
  default: ''
}), VsCheckbox_dec4 = Prop({
  type: Boolean,
  default: false
}), VsCheckbox_dec5 = Prop({
  type: Boolean,
  default: false
}), VsCheckbox_dec6 = Prop({
  type: Boolean,
  default: false
}), VsCheckbox_dec7 = Prop({
  type: Boolean,
  default: false
}), VsCheckbox_dec8 = Prop({
  type: Boolean,
  default: false
}), VsCheckbox_dec9 = Prop({
  type: Boolean,
  default: false
}), VsCheckbox_dec10 = Watch('indeterminate'), vue_class_component_esm(VsCheckbox_class = (VsCheckbox_class2 = (VsCheckbox_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsCheckbox, _VsComponent);

  function VsCheckbox() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;
    _this._uid = void 0;

    initializerDefineProperty_default()(_this, "value", VsCheckbox_descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "val", VsCheckbox_descriptor2, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "notValue", VsCheckbox_descriptor3, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "indeterminate", VsCheckbox_descriptor4, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "lineThrough", VsCheckbox_descriptor5, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "checked", VsCheckbox_descriptor6, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "checkedForce", VsCheckbox_descriptor7, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "loading", VsCheckbox_descriptor8, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "labelBefore", VsCheckbox_descriptor9, assertThisInitialized_default()(_this));

    return _this;
  }

  var _proto = VsCheckbox.prototype;

  _proto.handleIndeterminate = function handleIndeterminate(val) {
    if (val) {
      this.$emit('input', true);
    } else {
      this.$emit('input', false);
    }
  };

  _proto.mounted = function mounted() {
    if (this.checked && typeof this.value == 'boolean') {
      this.$emit('input', true);
    }
  };

  _proto.render = function render(h) {
    var _this2 = this,
        _style,
        _ref,
        _ref2,
        _ref3,
        _ref4,
        _ref5;

    var InputCheckbox = h('input', {
      staticClass: 'vs-checkbox',
      attrs: VsCheckbox_objectSpread({}, this.$attrs, {
        type: 'checkbox',
        id: this._uid
      }),
      domProps: {
        checked: this.checkedForce || this.isChecked
      },
      on: VsCheckbox_objectSpread({}, this.$listeners, {
        input: function input(evt) {
          if (typeof _this2.value == 'boolean') {
            _this2.$emit('input', !_this2.value);
          } else if (typeof _this2.value == 'object' && _this2.value !== null) {
            var array = _this2.value;
            var containValue = array.indexOf(_this2.val) === -1 && JSON.stringify(array).indexOf(JSON.stringify(_this2.val)) === -1;
            var indexVal = 0;
            array.forEach(function (item, index) {
              if (JSON.stringify(item) == JSON.stringify(_this2.val)) {
                indexVal = index;
              }
            });

            if (containValue) {
              array.push(_this2.val);
            } else {
              array.splice(indexVal, 1);
            }

            _this2.$emit('input', array);
          } else {
            if (_this2.val !== _this2.value) {
              _this2.$emit('input', _this2.val);
            } else {
              _this2.$emit('input', _this2.notValue || null);
            }
          }

          _this2.$emit('mousedown', evt);
        },
        blur: function blur(evt) {
          _this2.$emit('blur', evt);
        }
      })
    });
    var checkbox = h('div', {
      staticClass: 'vs-checkbox-mask'
    }, [!this.$slots.icon && h(check_VsIconClose, {
      props: {
        indeterminate: this.indeterminate
      }
    }), this.$slots.icon]);
    var label = h('label', {
      staticClass: 'vs-checkbox-label',
      class: [{
        lineThrough: this.lineThrough
      }],
      attrs: {
        for: this._uid
      }
    }, [this.$slots.default]);
    var conCheckbox = h('div', {
      staticClass: 'vs-checkbox-con'
    }, [InputCheckbox, checkbox]);
    return h('div', {
      staticClass: 'vs-checkbox-content',
      style: (_style = {}, _style['--vs-color'] = this.color ? this.getColor : '', _style),
      class: [{
        'vs-checkbox--checked': this.isChecked
      }, {
        'vs-checkbox--disabled': this.$attrs.hasOwnProperty('disabled')
      }, {
        'vs-checkbox--loading': this.loading
      }, {
        'vs-checkbox--label-before': this.labelBefore
      }, (_ref = {}, _ref["vs-component--primary"] = !this.danger && !this.success && !this.warn && !this.dark && !this.color, _ref), (_ref2 = {}, _ref2["vs-component--danger"] = !!this.danger, _ref2), (_ref3 = {}, _ref3["vs-component--warn"] = !!this.warn, _ref3), (_ref4 = {}, _ref4["vs-component--success"] = !!this.success, _ref4), (_ref5 = {}, _ref5["vs-component--dark"] = !!this.dark, _ref5)]
    }, [conCheckbox, this.$slots.default && label]);
  };

  createClass_default()(VsCheckbox, [{
    key: "isChecked",
    get: function get() {
      var _this3 = this;

      var isChecked = false;

      if (this.value) {
        if (typeof this.value == 'boolean') {
          isChecked = this.value;
        } else if (typeof this.value == 'object' && this.value !== null) {
          var array = this.value;
          var containValue = array.indexOf(this.val) === -1 && JSON.stringify(array).indexOf(JSON.stringify(this.val)) === -1;
          var indexVal = 0;
          array.forEach(function (item, index) {
            if (JSON.stringify(item) == JSON.stringify(_this3.val)) {
              indexVal = index;
            }
          });

          if (containValue) {
            return false;
          } else {
            return true;
          }
        }
      } else {
        isChecked = false;
      }

      return isChecked;
    }
  }]);

  return VsCheckbox;
}(component_VsComponent), VsCheckbox_temp), (VsCheckbox_descriptor = applyDecoratedDescriptor_default()(VsCheckbox_class2.prototype, "value", [VsCheckbox_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsCheckbox_descriptor2 = applyDecoratedDescriptor_default()(VsCheckbox_class2.prototype, "val", [VsCheckbox_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsCheckbox_descriptor3 = applyDecoratedDescriptor_default()(VsCheckbox_class2.prototype, "notValue", [VsCheckbox_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsCheckbox_descriptor4 = applyDecoratedDescriptor_default()(VsCheckbox_class2.prototype, "indeterminate", [VsCheckbox_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsCheckbox_descriptor5 = applyDecoratedDescriptor_default()(VsCheckbox_class2.prototype, "lineThrough", [VsCheckbox_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsCheckbox_descriptor6 = applyDecoratedDescriptor_default()(VsCheckbox_class2.prototype, "checked", [VsCheckbox_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsCheckbox_descriptor7 = applyDecoratedDescriptor_default()(VsCheckbox_class2.prototype, "checkedForce", [VsCheckbox_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsCheckbox_descriptor8 = applyDecoratedDescriptor_default()(VsCheckbox_class2.prototype, "loading", [VsCheckbox_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsCheckbox_descriptor9 = applyDecoratedDescriptor_default()(VsCheckbox_class2.prototype, "labelBefore", [VsCheckbox_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), applyDecoratedDescriptor_default()(VsCheckbox_class2.prototype, "handleIndeterminate", [VsCheckbox_dec10], Object.getOwnPropertyDescriptor(VsCheckbox_class2.prototype, "handleIndeterminate"), VsCheckbox_class2.prototype)), VsCheckbox_class2)) || VsCheckbox_class);

// CONCATENATED MODULE: ./src/components/vsCheckbox/Base/index.ts



VsCheckbox_VsCheckbox.install = function (vue) {
  vue.component('vs-checkbox', VsCheckbox_VsCheckbox);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsCheckbox_VsCheckbox.install(window.Vue);
}

/* harmony default export */ var vsCheckbox_Base = (VsCheckbox_VsCheckbox);
// EXTERNAL MODULE: ./src/components/vsSwitch/Base/style.sass
var vsSwitch_Base_style = __webpack_require__(16);

// CONCATENATED MODULE: ./src/components/vsSwitch/Base/VsSwitch.ts








var VsSwitch_dec, VsSwitch_dec2, VsSwitch_dec3, VsSwitch_dec4, VsSwitch_dec5, VsSwitch_dec6, VsSwitch_dec7, VsSwitch_class, VsSwitch_class2, VsSwitch_descriptor, VsSwitch_descriptor2, VsSwitch_descriptor3, VsSwitch_descriptor4, VsSwitch_descriptor5, VsSwitch_descriptor6, VsSwitch_descriptor7, VsSwitch_temp;

function VsSwitch_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function VsSwitch_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { VsSwitch_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { VsSwitch_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var VsSwitch_VsSwitch = (VsSwitch_dec = Prop({
  default: ''
}), VsSwitch_dec2 = Prop({
  default: ''
}), VsSwitch_dec3 = Prop({
  default: ''
}), VsSwitch_dec4 = Prop({
  type: Boolean,
  default: false
}), VsSwitch_dec5 = Prop({
  type: Boolean,
  default: false
}), VsSwitch_dec6 = Prop({
  type: Boolean,
  default: false
}), VsSwitch_dec7 = Prop({
  type: Boolean,
  default: false
}), vue_class_component_esm(VsSwitch_class = (VsSwitch_class2 = (VsSwitch_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsSwitch, _VsComponent);

  function VsSwitch() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;

    initializerDefineProperty_default()(_this, "value", VsSwitch_descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "val", VsSwitch_descriptor2, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "notValue", VsSwitch_descriptor3, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "loading", VsSwitch_descriptor4, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "square", VsSwitch_descriptor5, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "indeterminate", VsSwitch_descriptor6, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "icon", VsSwitch_descriptor7, assertThisInitialized_default()(_this));

    return _this;
  }

  var _proto = VsSwitch.prototype;

  _proto.render = function render(h) {
    var _this2 = this,
        _style,
        _ref,
        _ref2,
        _ref3,
        _ref4,
        _ref5;

    var circle = h('div', {
      class: ['vs-switch__circle']
    }, [this.$slots.circle]);
    var textOn = h('div', {
      ref: 'on',
      class: ['vs-switch__text', 'on']
    }, [this.$slots.on || this.$slots.default]);
    var textOff = h('div', {
      ref: 'off',
      class: ['vs-switch__text', 'off']
    }, [this.$slots.off || this.$slots.default]);
    var background = h('div', {
      class: ['vs-switch__background']
    });
    var input = h('input', {
      attrs: VsSwitch_objectSpread({}, this.$attrs, {
        type: 'checkbox'
      }),
      domProps: {
        checked: this.isChecked
      },
      on: VsSwitch_objectSpread({}, this.$listeners, {
        input: function input(evt) {
          if (typeof _this2.value == 'boolean') {
            _this2.$emit('input', !_this2.value);
          } else if (typeof _this2.value == 'object' && _this2.value !== null) {
            var array = _this2.value;
            var containValue = array.indexOf(_this2.val) === -1 && JSON.stringify(array).indexOf(JSON.stringify(_this2.val)) === -1;
            var indexVal = 0;
            array.forEach(function (item, index) {
              if (JSON.stringify(item) == JSON.stringify(_this2.val)) {
                indexVal = index;
              }
            });

            if (containValue) {
              array.push(_this2.val);
            } else {
              array.splice(indexVal, 1);
            }

            _this2.$emit('input', array);
          } else {
            if (_this2.val !== _this2.value) {
              _this2.$emit('input', _this2.val);
            } else {
              _this2.$emit('input', _this2.notValue || null);
            }
          }

          _this2.$emit('change', evt);
        }
      }),
      class: ['vs-switch__input']
    });
    return h('div', {
      staticClass: 'vs-switch',
      attrs: {
        type: 'checkbox'
      },
      style: (_style = {}, _style['--vs-color'] = this.color ? this.getColor : '', _style),
      class: [{
        'vs-switch--loading': this.loading,
        'vs-switch--square': this.square,
        'vs-switch--indeterminate': this.indeterminate,
        'vs-switch--icon': this.icon
      }, (_ref = {}, _ref["vs-component--primary"] = !this.danger && !this.success && !this.warn && !this.dark && !this.color, _ref), (_ref2 = {}, _ref2["vs-component--danger"] = !!this.danger, _ref2), (_ref3 = {}, _ref3["vs-component--warn"] = !!this.warn, _ref3), (_ref4 = {}, _ref4["vs-component--success"] = !!this.success, _ref4), (_ref5 = {}, _ref5["vs-component--dark"] = !!this.dark, _ref5)]
    }, [input, circle, textOn, textOff, // !this.active && textOff,
    background]);
  };

  createClass_default()(VsSwitch, [{
    key: "isChecked",
    get: function get() {
      var _this3 = this;

      var isChecked = false;

      if (this.value) {
        if (typeof this.value == 'boolean') {
          isChecked = this.value;
        } else if (typeof this.value == 'object' && this.value !== null) {
          var array = this.value;
          var containValue = array.indexOf(this.val) === -1 && JSON.stringify(array).indexOf(JSON.stringify(this.val)) === -1;
          var indexVal = 0;
          array.forEach(function (item, index) {
            if (JSON.stringify(item) == JSON.stringify(_this3.val)) {
              indexVal = index;
            }
          });

          if (containValue) {
            return false;
          } else {
            return true;
          }
        }
      } else {
        isChecked = false;
      }

      return isChecked;
    }
  }]);

  return VsSwitch;
}(component_VsComponent), VsSwitch_temp), (VsSwitch_descriptor = applyDecoratedDescriptor_default()(VsSwitch_class2.prototype, "value", [VsSwitch_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSwitch_descriptor2 = applyDecoratedDescriptor_default()(VsSwitch_class2.prototype, "val", [VsSwitch_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSwitch_descriptor3 = applyDecoratedDescriptor_default()(VsSwitch_class2.prototype, "notValue", [VsSwitch_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSwitch_descriptor4 = applyDecoratedDescriptor_default()(VsSwitch_class2.prototype, "loading", [VsSwitch_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSwitch_descriptor5 = applyDecoratedDescriptor_default()(VsSwitch_class2.prototype, "square", [VsSwitch_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSwitch_descriptor6 = applyDecoratedDescriptor_default()(VsSwitch_class2.prototype, "indeterminate", [VsSwitch_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSwitch_descriptor7 = applyDecoratedDescriptor_default()(VsSwitch_class2.prototype, "icon", [VsSwitch_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), VsSwitch_class2)) || VsSwitch_class);

// CONCATENATED MODULE: ./src/components/vsSwitch/Base/index.ts



VsSwitch_VsSwitch.install = function (vue) {
  vue.component('vs-switch', VsSwitch_VsSwitch);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsSwitch_VsSwitch.install(window.Vue);
}

/* harmony default export */ var vsSwitch_Base = (VsSwitch_VsSwitch);
// EXTERNAL MODULE: ./src/components/vsSelect/Base/style.sass
var vsSelect_Base_style = __webpack_require__(17);

// CONCATENATED MODULE: ./src/icons/arrow.ts







var arrow_dec, arrow_class, arrow_class2, arrow_descriptor, arrow_temp;

function arrow_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function arrow_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { arrow_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { arrow_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var arrow_VsIconClose = (arrow_dec = Prop({
  type: Boolean,
  default: false
}), vue_class_component_esm(arrow_class = (arrow_class2 = (arrow_temp =
/*#__PURE__*/
function (_Vue) {
  inheritsLoose_default()(VsIconClose, _Vue);

  function VsIconClose() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Vue.call.apply(_Vue, [this].concat(args)) || this;

    initializerDefineProperty_default()(_this, "less", arrow_descriptor, assertThisInitialized_default()(_this));

    return _this;
  }

  var _proto = VsIconClose.prototype;

  _proto.render = function render(h) {
    var icon = h('i', {
      staticClass: 'vs-icon-arrow',
      class: {
        less: this.less
      },
      ref: 'icon',
      on: arrow_objectSpread({}, this.$listeners)
    });
    return icon;
  };

  return VsIconClose;
}(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a), arrow_temp), (arrow_descriptor = applyDecoratedDescriptor_default()(arrow_class2.prototype, "less", [arrow_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), arrow_class2)) || arrow_class);

// CONCATENATED MODULE: ./src/components/vsSelect/Base/VsSelect.ts








var VsSelect_dec, VsSelect_dec2, VsSelect_dec3, VsSelect_dec4, VsSelect_dec5, VsSelect_dec6, VsSelect_dec7, VsSelect_dec8, VsSelect_dec9, VsSelect_dec10, VsSelect_dec11, VsSelect_dec12, VsSelect_dec13, VsSelect_dec14, VsSelect_class, VsSelect_class2, VsSelect_descriptor, VsSelect_descriptor2, VsSelect_descriptor3, VsSelect_descriptor4, VsSelect_descriptor5, VsSelect_descriptor6, VsSelect_descriptor7, VsSelect_descriptor8, VsSelect_descriptor9, VsSelect_descriptor10, VsSelect_descriptor11, VsSelect_temp;

function VsSelect_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function VsSelect_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { VsSelect_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { VsSelect_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var VsSelect_VsSelect = (VsSelect_dec = Prop({}), VsSelect_dec2 = Prop({
  type: Boolean,
  default: false
}), VsSelect_dec3 = Prop({
  type: Boolean,
  default: false
}), VsSelect_dec4 = Prop({
  type: String,
  default: ''
}), VsSelect_dec5 = Prop({
  type: String,
  default: ''
}), VsSelect_dec6 = Prop({
  type: String,
  default: ''
}), VsSelect_dec7 = Prop({
  type: Boolean,
  default: false
}), VsSelect_dec8 = Prop({
  type: Boolean,
  default: false
}), VsSelect_dec9 = Prop({
  type: Boolean,
  default: false
}), VsSelect_dec10 = Prop({
  type: String,
  default: null
}), VsSelect_dec11 = Prop({
  type: Boolean,
  default: false
}), VsSelect_dec12 = Watch('textFilter'), VsSelect_dec13 = Watch('value'), VsSelect_dec14 = Watch('activeOptions'), vue_class_component_esm(VsSelect_class = (VsSelect_class2 = (VsSelect_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsSelect, _VsComponent);

  function VsSelect() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;

    initializerDefineProperty_default()(_this, "value", VsSelect_descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "multiple", VsSelect_descriptor2, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "filter", VsSelect_descriptor3, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "placeholder", VsSelect_descriptor4, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "labelPlaceholder", VsSelect_descriptor5, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "label", VsSelect_descriptor6, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "disabled", VsSelect_descriptor7, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "collapseChips", VsSelect_descriptor8, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "loading", VsSelect_descriptor9, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "state", VsSelect_descriptor10, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "block", VsSelect_descriptor11, assertThisInitialized_default()(_this));

    _this.renderSelect = false;
    _this.activeOptions = false;
    _this.valueLabel = null;
    _this.hoverOption = -1;
    _this.uids = [];
    _this.childOptions = [];
    _this.targetSelect = false;
    _this.targetSelectInput = false;
    _this.targetClose = false;
    _this.activeFilter = false;
    _this.textFilter = null;
    _this.childVisibles = 0;
    _this._uid = void 0;
    _this.isSelect = true;
    return _this;
  }

  var _proto = VsSelect.prototype;

  _proto.insertOptions = function insertOptions() {
    var options = this.$refs.options;
    insertBody(options, document.body);
    setCords(options, this.$refs.select);
  };

  _proto.clickOption = function clickOption(value, label) {
    var _this2 = this;

    if (this.multiple) {
      var oldVal = [].concat(this.value);

      if (oldVal.indexOf(value) == -1) {
        oldVal.push(value);
      } else {
        oldVal.splice(oldVal.indexOf(value), 1);
      }

      this.$emit('input', oldVal);
    } else {
      this.$emit('input', value);
      this.valueLabel = label;
    }

    setTimeout(function () {
      if (_this2.multiple && _this2.activeOptions) {
        _this2.$refs.chips.focus();
      }
    }, 10);

    if (!this.multiple) {
      this.handleBlur();
    }
  };

  _proto.setHover = function setHover() {
    var _this3 = this;

    var index = -1;
    this.childOptions.forEach(function (item, i) {
      if (item.value == _this3.value) {
        index = i;
      }
    });
    this.hoverOption = index;
  };

  _proto.getValue = function getValue() {
    var _this4 = this;

    var options = this.childOptions;
    var filterOptions = options.filter(function (option) {
      return typeof _this4.value == 'number' ? _this4.value == option.value : _this4.value.indexOf(option.value) !== -1;
    });
    var label = [];
    filterOptions.forEach(function (item) {
      label.push({
        label: item.label,
        value: item.value
      });
    });
    label.sort(function (a, b) {
      return _this4.value.indexOf(a.value) - _this4.value.indexOf(b.value);
    });
    this.valueLabel = label;
  };

  _proto.handleBlur = function handleBlur() {
    var _this5 = this;

    this.$nextTick(function () {
      _this5.activeOptions = false;
    });
    this.$emit('blur');
    this.setHover();
    window.removeEventListener('click', this.handleWindowClick);

    if (this.activeOptions) {
      this.textFilter = '';

      if (!this.multiple) {
        this.activeFilter = false;
      }
    }
  };

  _proto.blur = function blur(evt) {
    if (!this.multiple) {
      this.handleBlur();
    } else {
      if (!evt.relatedTarget) {
        this.handleBlur();
      } else if (!this.targetSelectInput || !this.targetSelect && !this.activeOptions) {
        this.handleBlur();
      }
    }

    if (this.filter) {
      this.activeFilter = false;
    }
  };

  _proto.handleKeydown = function handleKeydown(evt) {
    var _this6 = this;

    var options = this.$refs.options;

    for (var index = 0; index < 300; index++) {
      setTimeout(function () {
        setCords(options, _this6.$refs.select);
      }, index);
    }

    if (evt.code == 'ArrowDown') {
      evt.preventDefault();

      if (this.hoverOption < this.childOptions.length - 1) {
        this.hoverOption++;
      } else {
        this.hoverOption = 0;
      }
    } else if (evt.code == 'ArrowUp') {
      evt.preventDefault();

      if (this.hoverOption > 0) {
        this.hoverOption--;
      } else {
        this.hoverOption = this.childOptions.length - 1;
      }
    } else if (evt.code == 'Enter') {
      evt.preventDefault();

      if (this.hoverOption !== -1) {
        if (!this.childOptions[this.hoverOption].disabled) {
          this.clickOption(this.childOptions[this.hoverOption].value, this.childOptions[this.hoverOption].label);

          if (!this.multiple) {
            this.handleBlur();
            this.$refs.input.blur();
          }
        }
      }
    }

    if (this.hoverOption !== -1) {
      this.$refs.content.scrollTop = this.childOptions[this.hoverOption].$el.offsetTop - 66;
    }
  };

  _proto.handleWindowClick = function handleWindowClick(evt) {
    var _this7 = this;

    if (!this.targetSelectInput) {
      this.handleBlur();
    }

    if (this.filter && !this.activeOptions) {
      this.activeFilter = false;
    }

    if (evt.target == this.$refs.input && this.activeOptions && !this.filter) {
      this.handleBlur();
      setTimeout(function () {
        _this7.$refs.input.blur();
      }, 100);
    }
  };

  _proto.handleResize = function handleResize() {
    var _this8 = this;

    var options = this.$refs.options;

    if (!options) {
      return;
    }

    this.$nextTick(function () {
      setCords(options, _this8.$refs.select);
    });

    for (var index = 0; index < 300; index++) {
      setTimeout(function () {
        setCords(options, _this8.$refs.select);
      }, index);
    }
  };

  _proto.handleScroll = function handleScroll() {
    var options = this.$refs.options;

    if (options) {
      setCords(options, this.$refs.select);
    }
  };

  _proto.beforeEnter = function beforeEnter(el) {
    el.style.height = 0;
  };

  _proto.enter = function enter(el, done) {
    var h = el.scrollHeight;
    el.style.height = h - 1 + 'px';
    done();
  };

  _proto.leave = function leave(el, done) {
    el.style.minHeight = '0px';
    el.style.height = '0px';
  };

  _proto.getMessage = function getMessage(type) {
    return this.$createElement('transition', {
      on: {
        beforeEnter: this.beforeEnter,
        enter: this.enter,
        leave: this.leave
      }
    }, [!!this.$slots["message-" + type] && this.$createElement('div', {
      staticClass: 'vs-select__message',
      class: ["vs-select__message--" + type]
    }, [this.$slots["message-" + type]])]);
  };

  _proto.handleTextFilter = function handleTextFilter(val) {
    if (val) {
      if (this.$refs.placeholder) {
        this.$refs.placeholder.style.transition = '0s';
      }
    } else {
      if (this.$refs.placeholder) {
        this.$refs.placeholder.style.transition = '';
      }
    }
  };

  _proto.handleValue = function handleValue(val) {
    var _this9 = this;

    this.getValue();
    setTimeout(function () {
      _this9.$emit('change', val);
    }, 10);

    if (this.multiple) {
      this.$nextTick(function () {
        var h = _this9.$refs.chips.scrollHeight;
        _this9.$refs.input.style.height = h + "px";
        var options = _this9.$refs.options;

        if (_this9.activeOptions) {
          _this9.$nextTick(function () {
            setCords(options, _this9.$refs.select);
          });
        }
      });
    }

    if (val) {
      if (this.$refs.placeholder) {
        this.$refs.placeholder.style.transition = '0s';
      }
    } else {
      if (this.$refs.placeholder) {
        this.$refs.placeholder.style.transition = '';
      }
    }
  };

  _proto.handleActive = function handleActive(val) {
    var _this10 = this;

    this.$nextTick(function () {
      if (val) {
        _this10.insertOptions();
      }
    });
    this.uids = [];
  };

  _proto.mounted = function mounted() {
    this.getValue();
    this.renderSelect = true;
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
  };

  _proto.beforeDestroy = function beforeDestroy() {
    this.handleBlur();
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  };

  _proto.render = function render(h) {
    var _style,
        _ref,
        _ref2,
        _ref3,
        _ref4,
        _ref5,
        _this11 = this,
        _style2,
        _ref6,
        _ref7,
        _ref8,
        _ref9,
        _ref10;

    var options = h('transition', {
      props: {
        name: 'vs-select'
      }
    }, [this.activeOptions && h('div', {
      staticClass: 'vs-select__options',
      ref: 'options',
      style: (_style = {}, _style['--vs-color'] = this.color ? this.getColor : '', _style),
      class: [{
        isColorDark: this.isColorDark
      }, (_ref = {}, _ref["vs-component--primary"] = !this.danger && !this.success && !this.warn && !this.dark && !this.color, _ref), (_ref2 = {}, _ref2["vs-component--danger"] = !!this.danger, _ref2), (_ref3 = {}, _ref3["vs-component--warn"] = !!this.warn, _ref3), (_ref4 = {}, _ref4["vs-component--success"] = !!this.success, _ref4), (_ref5 = {}, _ref5["vs-component--dark"] = !!this.dark, _ref5)],
      on: {
        mouseleave: function mouseleave() {
          _this11.targetSelect = false;
          _this11.targetSelectInput = false;
        },
        mouseenter: function mouseenter() {
          _this11.targetSelect = true;
          _this11.targetSelectInput = true;
        }
      }
    }, [h('div', {
      staticClass: 'vs-select__options__content',
      ref: 'content'
    }, [this.notData && h('div', {
      staticClass: 'vs-select__options__content__not-data'
    }, [this.$slots.notData || 'No data available']), this.$slots.default])])]);
    var input = h('input', {
      attrs: {
        readonly: !this.filter && true,
        id: !this.multiple && this._uid
      },
      staticClass: 'vs-select__input',
      ref: 'input',
      domProps: {
        value: this.activeFilter ? this.textFilter : this.getValueLabel
      },
      class: [{
        multiple: this.multiple,
        simple: !this.multiple && !this.filter
      }],
      on: VsSelect_objectSpread({}, this.$listeners, {
        keydown: this.handleKeydown,
        focus: function focus(evt) {
          _this11.activeOptions = true;

          _this11.$emit('focus', evt);

          if (_this11.filter) {
            _this11.activeFilter = true;
          }

          window.addEventListener('mousedown', _this11.handleWindowClick);
        },
        // blur: this.blur,
        input: function input(evt) {
          _this11.textFilter = evt.target.value;
        }
      })
    }, this.$slots.default);
    var chips = h('button', {
      staticClass: 'vs-select__chips',
      ref: 'chips',
      on: {
        keydown: this.handleKeydown,
        focus: function focus(evt) {
          if (!_this11.targetClose) {
            _this11.activeOptions = true;

            _this11.$emit('focus', evt);
          }

          if (_this11.filter && _this11.multiple) {
            _this11.$refs.chips_input.focus();
          }
        },
        blur: this.blur
      }
    }, [].concat(this.getChips, [this.filter && h('input', {
      staticClass: 'vs-select__chips__input',
      ref: 'chips_input',
      attrs: {
        placeholder: this.placeholder,
        id: this._uid
      },
      domProps: {
        value: this.textFilter
      },
      on: {
        // keydown: this.handleKeydown,
        focus: function focus(evt) {
          if (!_this11.targetClose) {
            _this11.activeOptions = true;

            _this11.$emit('focus', evt);
          }
        },
        blur: this.blur,
        input: function input(evt) {
          _this11.textFilter = evt.target.value;
        }
      }
    })]));
    var icon = h(arrow_VsIconClose, {
      on: {
        click: function click() {
          if (_this11.activeOptions) {
            _this11.activeOptions = false;
          } else {
            _this11.$refs.input.focus();
          }
        }
      }
    });
    var label = h('label', {
      staticClass: 'vs-select__label',
      attrs: {
        for: this._uid
      },
      class: {
        'vs-select__label--placeholder': this.labelPlaceholder,
        'vs-select__label--label': this.label,
        'vs-select__label--hidden': this.value
      }
    }, [this.labelPlaceholder || this.label]);
    var placeholder = h('label', {
      staticClass: 'vs-select__label',
      ref: 'placeholder',
      attrs: {
        for: this._uid
      },
      class: {
        'vs-select__label--hidden': this.value || this.textFilter
      }
    }, [this.placeholder]);
    var loading = h('div', {
      staticClass: 'vs-select__loading'
    });
    var messageSuccess = this.getMessage('success');
    var messageDanger = this.getMessage('danger');
    var messageWarn = this.getMessage('warn');
    var messagePrimary = this.getMessage('primary');
    var selectContent = h('div', {
      staticClass: 'vs-select',
      ref: 'select',
      class: ["vs-select--state-" + this.state, {
        'vs-select--disabled': this.disabled,
        'activeOptions': this.activeOptions,
        'loading': this.loading
      }],
      on: {
        mouseleave: function mouseleave(evt) {
          if (evt.relatedTarget !== _this11.$refs.options) {
            _this11.targetSelectInput = false;
            _this11.targetSelect = false;
          }
        },
        mouseenter: function mouseenter() {
          _this11.targetSelectInput = true;
        }
      }
    }, [input, (!this.multiple || this.label) && label, !this.multiple && !this.labelPlaceholder && placeholder, this.multiple && chips, options, this.loading && loading, icon]);
    return h('div', {
      staticClass: 'vs-select-content',
      style: (_style2 = {}, _style2['--vs-color'] = this.color ? this.getColor : '', _style2),
      class: [{
        block: this.block
      }, (_ref6 = {}, _ref6["vs-component--primary"] = !this.danger && !this.success && !this.warn && !this.dark && !this.color, _ref6), (_ref7 = {}, _ref7["vs-component--danger"] = !!this.danger, _ref7), (_ref8 = {}, _ref8["vs-component--warn"] = !!this.warn, _ref8), (_ref9 = {}, _ref9["vs-component--success"] = !!this.success, _ref9), (_ref10 = {}, _ref10["vs-component--dark"] = !!this.dark, _ref10)]
    }, [selectContent, messageSuccess, messageDanger, messageWarn, messagePrimary]);
  };

  createClass_default()(VsSelect, [{
    key: "getValueLabel",
    get: function get() {
      var valueLabel = this.valueLabel;
      var labels = [];

      if (Array.isArray(valueLabel)) {
        valueLabel.forEach(function (item) {
          labels.push(item.label);
        });
      } else {
        labels = valueLabel;
      }

      return labels;
    }
  }, {
    key: "getChips",
    get: function get() {
      var _this12 = this;

      var chip = function chip(item, isCollapse) {
        return _this12.$createElement('span', {
          staticClass: 'vs-select__chips__chip',
          attrs: {
            'data-value': item.value
          },
          class: [{
            isCollapse: isCollapse
          }]
        }, [item.label, !isCollapse && _this12.$createElement('span', {
          staticClass: 'vs-select__chips__chip__close',
          on: {
            click: function click() {
              setTimeout(function () {
                _this12.targetClose = false;
              }, 100);

              if (!_this12.activeOptions) {
                _this12.$refs.chips.blur();

                if (_this12.filter) {
                  _this12.$refs.chips_input.blur();
                }
              }

              _this12.clickOption(item.value, item.label);
            },
            mouseleave: function mouseleave() {
              _this12.targetClose = false;
            },
            mouseenter: function mouseenter() {
              _this12.targetClose = true;
            }
          }
        }, [_this12.$createElement(close_VsIconClose, {
          props: {
            hover: 'less'
          }
        })])]);
      };

      var chips = [];

      if (Array.isArray(this.valueLabel)) {
        this.valueLabel.forEach(function (item) {
          chips.push(chip(item, false));
        });
      }

      if (this.collapseChips) {
        chips = [chips[0], chips.length > 1 && chip({
          label: "+" + (chips.length - 1),
          value: null
        }, true)];
      }

      return chips;
    }
  }, {
    key: "notData",
    get: function get() {
      var childOptions = [];
      this.$slots.default.forEach(function (option) {
        if (option.tag) {
          if (!option.componentInstance.hiddenOption) {
            childOptions.push(option);
          }
        }
      });
      childOptions = childOptions.filter(function (item) {
        if (item.optionGroup) {
          return !item.componentInstance.hiddenOptionGroup;
        }

        return true;
      });
      return childOptions.length == 0;
    }
  }]);

  return VsSelect;
}(component_VsComponent), VsSelect_temp), (VsSelect_descriptor = applyDecoratedDescriptor_default()(VsSelect_class2.prototype, "value", [VsSelect_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSelect_descriptor2 = applyDecoratedDescriptor_default()(VsSelect_class2.prototype, "multiple", [VsSelect_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSelect_descriptor3 = applyDecoratedDescriptor_default()(VsSelect_class2.prototype, "filter", [VsSelect_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSelect_descriptor4 = applyDecoratedDescriptor_default()(VsSelect_class2.prototype, "placeholder", [VsSelect_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSelect_descriptor5 = applyDecoratedDescriptor_default()(VsSelect_class2.prototype, "labelPlaceholder", [VsSelect_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSelect_descriptor6 = applyDecoratedDescriptor_default()(VsSelect_class2.prototype, "label", [VsSelect_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSelect_descriptor7 = applyDecoratedDescriptor_default()(VsSelect_class2.prototype, "disabled", [VsSelect_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSelect_descriptor8 = applyDecoratedDescriptor_default()(VsSelect_class2.prototype, "collapseChips", [VsSelect_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSelect_descriptor9 = applyDecoratedDescriptor_default()(VsSelect_class2.prototype, "loading", [VsSelect_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSelect_descriptor10 = applyDecoratedDescriptor_default()(VsSelect_class2.prototype, "state", [VsSelect_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSelect_descriptor11 = applyDecoratedDescriptor_default()(VsSelect_class2.prototype, "block", [VsSelect_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), applyDecoratedDescriptor_default()(VsSelect_class2.prototype, "handleTextFilter", [VsSelect_dec12], Object.getOwnPropertyDescriptor(VsSelect_class2.prototype, "handleTextFilter"), VsSelect_class2.prototype), applyDecoratedDescriptor_default()(VsSelect_class2.prototype, "handleValue", [VsSelect_dec13], Object.getOwnPropertyDescriptor(VsSelect_class2.prototype, "handleValue"), VsSelect_class2.prototype), applyDecoratedDescriptor_default()(VsSelect_class2.prototype, "handleActive", [VsSelect_dec14], Object.getOwnPropertyDescriptor(VsSelect_class2.prototype, "handleActive"), VsSelect_class2.prototype)), VsSelect_class2)) || VsSelect_class);

// CONCATENATED MODULE: ./src/components/vsSelect/Base/index.ts



VsSelect_VsSelect.install = function (vue) {
  vue.component('vs-select', VsSelect_VsSelect);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsSelect_VsSelect.install(window.Vue);
}

/* harmony default export */ var vsSelect_Base = (VsSelect_VsSelect);
// EXTERNAL MODULE: ./src/components/vsSelect/Option/style.sass
var Option_style = __webpack_require__(18);

// CONCATENATED MODULE: ./src/components/vsCheckbox/Base/vsCheckbox.ts








var vsCheckbox_dec, vsCheckbox_dec2, vsCheckbox_dec3, vsCheckbox_dec4, vsCheckbox_dec5, vsCheckbox_dec6, vsCheckbox_dec7, vsCheckbox_dec8, vsCheckbox_dec9, vsCheckbox_dec10, vsCheckbox_class, vsCheckbox_class2, vsCheckbox_descriptor, vsCheckbox_descriptor2, vsCheckbox_descriptor3, vsCheckbox_descriptor4, vsCheckbox_descriptor5, vsCheckbox_descriptor6, vsCheckbox_descriptor7, vsCheckbox_descriptor8, vsCheckbox_descriptor9, vsCheckbox_temp;

function vsCheckbox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function vsCheckbox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { vsCheckbox_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { vsCheckbox_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var vsCheckbox_VsCheckbox = (vsCheckbox_dec = Prop({
  default: ''
}), vsCheckbox_dec2 = Prop({
  default: ''
}), vsCheckbox_dec3 = Prop({
  default: ''
}), vsCheckbox_dec4 = Prop({
  type: Boolean,
  default: false
}), vsCheckbox_dec5 = Prop({
  type: Boolean,
  default: false
}), vsCheckbox_dec6 = Prop({
  type: Boolean,
  default: false
}), vsCheckbox_dec7 = Prop({
  type: Boolean,
  default: false
}), vsCheckbox_dec8 = Prop({
  type: Boolean,
  default: false
}), vsCheckbox_dec9 = Prop({
  type: Boolean,
  default: false
}), vsCheckbox_dec10 = Watch('indeterminate'), vue_class_component_esm(vsCheckbox_class = (vsCheckbox_class2 = (vsCheckbox_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsCheckbox, _VsComponent);

  function VsCheckbox() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;
    _this._uid = void 0;

    initializerDefineProperty_default()(_this, "value", vsCheckbox_descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "val", vsCheckbox_descriptor2, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "notValue", vsCheckbox_descriptor3, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "indeterminate", vsCheckbox_descriptor4, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "lineThrough", vsCheckbox_descriptor5, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "checked", vsCheckbox_descriptor6, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "checkedForce", vsCheckbox_descriptor7, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "loading", vsCheckbox_descriptor8, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "labelBefore", vsCheckbox_descriptor9, assertThisInitialized_default()(_this));

    return _this;
  }

  var _proto = VsCheckbox.prototype;

  _proto.handleIndeterminate = function handleIndeterminate(val) {
    if (val) {
      this.$emit('input', true);
    } else {
      this.$emit('input', false);
    }
  };

  _proto.mounted = function mounted() {
    if (this.checked && typeof this.value == 'boolean') {
      this.$emit('input', true);
    }
  };

  _proto.render = function render(h) {
    var _this2 = this,
        _style,
        _ref,
        _ref2,
        _ref3,
        _ref4,
        _ref5;

    var InputCheckbox = h('input', {
      staticClass: 'vs-checkbox',
      attrs: vsCheckbox_objectSpread({}, this.$attrs, {
        type: 'checkbox',
        id: this._uid
      }),
      domProps: {
        checked: this.checkedForce || this.isChecked
      },
      on: vsCheckbox_objectSpread({}, this.$listeners, {
        input: function input(evt) {
          if (typeof _this2.value == 'boolean') {
            _this2.$emit('input', !_this2.value);
          } else if (typeof _this2.value == 'object' && _this2.value !== null) {
            var array = _this2.value;
            var containValue = array.indexOf(_this2.val) === -1 && JSON.stringify(array).indexOf(JSON.stringify(_this2.val)) === -1;
            var indexVal = 0;
            array.forEach(function (item, index) {
              if (JSON.stringify(item) == JSON.stringify(_this2.val)) {
                indexVal = index;
              }
            });

            if (containValue) {
              array.push(_this2.val);
            } else {
              array.splice(indexVal, 1);
            }

            _this2.$emit('input', array);
          } else {
            if (_this2.val !== _this2.value) {
              _this2.$emit('input', _this2.val);
            } else {
              _this2.$emit('input', _this2.notValue || null);
            }
          }

          _this2.$emit('mousedown', evt);
        },
        blur: function blur(evt) {
          _this2.$emit('blur', evt);
        }
      })
    });
    var checkbox = h('div', {
      staticClass: 'vs-checkbox-mask'
    }, [!this.$slots.icon && h(check_VsIconClose, {
      props: {
        indeterminate: this.indeterminate
      }
    }), this.$slots.icon]);
    var label = h('label', {
      staticClass: 'vs-checkbox-label',
      class: [{
        lineThrough: this.lineThrough
      }],
      attrs: {
        for: this._uid
      }
    }, [this.$slots.default]);
    var conCheckbox = h('div', {
      staticClass: 'vs-checkbox-con'
    }, [InputCheckbox, checkbox]);
    return h('div', {
      staticClass: 'vs-checkbox-content',
      style: (_style = {}, _style['--vs-color'] = this.color ? this.getColor : '', _style),
      class: [{
        'vs-checkbox--checked': this.isChecked
      }, {
        'vs-checkbox--disabled': this.$attrs.hasOwnProperty('disabled')
      }, {
        'vs-checkbox--loading': this.loading
      }, {
        'vs-checkbox--label-before': this.labelBefore
      }, (_ref = {}, _ref["vs-component--primary"] = !this.danger && !this.success && !this.warn && !this.dark && !this.color, _ref), (_ref2 = {}, _ref2["vs-component--danger"] = !!this.danger, _ref2), (_ref3 = {}, _ref3["vs-component--warn"] = !!this.warn, _ref3), (_ref4 = {}, _ref4["vs-component--success"] = !!this.success, _ref4), (_ref5 = {}, _ref5["vs-component--dark"] = !!this.dark, _ref5)]
    }, [conCheckbox, this.$slots.default && label]);
  };

  createClass_default()(VsCheckbox, [{
    key: "isChecked",
    get: function get() {
      var _this3 = this;

      var isChecked = false;

      if (this.value) {
        if (typeof this.value == 'boolean') {
          isChecked = this.value;
        } else if (typeof this.value == 'object' && this.value !== null) {
          var array = this.value;
          var containValue = array.indexOf(this.val) === -1 && JSON.stringify(array).indexOf(JSON.stringify(this.val)) === -1;
          var indexVal = 0;
          array.forEach(function (item, index) {
            if (JSON.stringify(item) == JSON.stringify(_this3.val)) {
              indexVal = index;
            }
          });

          if (containValue) {
            return false;
          } else {
            return true;
          }
        }
      } else {
        isChecked = false;
      }

      return isChecked;
    }
  }]);

  return VsCheckbox;
}(component_VsComponent), vsCheckbox_temp), (vsCheckbox_descriptor = applyDecoratedDescriptor_default()(vsCheckbox_class2.prototype, "value", [vsCheckbox_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), vsCheckbox_descriptor2 = applyDecoratedDescriptor_default()(vsCheckbox_class2.prototype, "val", [vsCheckbox_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), vsCheckbox_descriptor3 = applyDecoratedDescriptor_default()(vsCheckbox_class2.prototype, "notValue", [vsCheckbox_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), vsCheckbox_descriptor4 = applyDecoratedDescriptor_default()(vsCheckbox_class2.prototype, "indeterminate", [vsCheckbox_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), vsCheckbox_descriptor5 = applyDecoratedDescriptor_default()(vsCheckbox_class2.prototype, "lineThrough", [vsCheckbox_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), vsCheckbox_descriptor6 = applyDecoratedDescriptor_default()(vsCheckbox_class2.prototype, "checked", [vsCheckbox_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), vsCheckbox_descriptor7 = applyDecoratedDescriptor_default()(vsCheckbox_class2.prototype, "checkedForce", [vsCheckbox_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), vsCheckbox_descriptor8 = applyDecoratedDescriptor_default()(vsCheckbox_class2.prototype, "loading", [vsCheckbox_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), vsCheckbox_descriptor9 = applyDecoratedDescriptor_default()(vsCheckbox_class2.prototype, "labelBefore", [vsCheckbox_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), applyDecoratedDescriptor_default()(vsCheckbox_class2.prototype, "handleIndeterminate", [vsCheckbox_dec10], Object.getOwnPropertyDescriptor(vsCheckbox_class2.prototype, "handleIndeterminate"), vsCheckbox_class2.prototype)), vsCheckbox_class2)) || vsCheckbox_class);

// CONCATENATED MODULE: ./src/components/vsSelect/Option/VsSelectOption.ts








var VsSelectOption_dec, VsSelectOption_dec2, VsSelectOption_dec3, VsSelectOption_dec4, VsSelectOption_class, VsSelectOption_class2, VsSelectOption_descriptor, VsSelectOption_descriptor2, VsSelectOption_descriptor3, VsSelectOption_temp;

function VsSelectOption_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function VsSelectOption_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { VsSelectOption_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { VsSelectOption_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var VsSelectOption_VsSelectOption = (VsSelectOption_dec = Prop({}), VsSelectOption_dec2 = Prop({
  type: Boolean,
  default: false
}), VsSelectOption_dec3 = Prop({}), VsSelectOption_dec4 = Watch('$parent.textFilter'), vue_class_component_esm(VsSelectOption_class = (VsSelectOption_class2 = (VsSelectOption_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsSelectOption, _VsComponent);

  function VsSelectOption() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;

    initializerDefineProperty_default()(_this, "value", VsSelectOption_descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "disabled", VsSelectOption_descriptor2, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "label", VsSelectOption_descriptor3, assertThisInitialized_default()(_this));

    _this.activeOption = false;
    _this.hiddenOption = false;
    _this._uid = void 0;
    _this.myIndex = void 0;
    return _this;
  }

  var _proto = VsSelectOption.prototype;

  _proto.handleTextFilter = function handleTextFilter(val) {
    if (val) {
      if (this.label.toLowerCase().indexOf(val.toLowerCase()) === -1) {
        this.hiddenOption = true;
      } else {
        this.hiddenOption = false;
      }
    } else {
      this.hiddenOption = false;
    }
  };

  _proto.getParent = function getParent() {
    return this.$parent.isSelect && this.$parent || this.$parent.$parent.isSelect && this.$parent.$parent;
  };

  _proto.mounted = function mounted() {
    if (!this.getParent().renderSelect) {
      this.getParent().childOptions.push(this);
    }

    this.getParent().uids.push(this._uid);
    this.activeOption = this.isActive;
    this.getParent().setHover();
  };

  _proto.render = function render(h) {
    var _this2 = this;

    var checkbox = h(vsCheckbox_VsCheckbox, {
      props: {
        checkedForce: this.isActive
      }
    }, [this.$slots.default]);
    return h('button', {
      attrs: {
        disabled: this.disabled
      },
      staticClass: 'vs-select__option',
      class: [{
        activeOption: this.isActive,
        isHover: this.isHover,
        isMultiple: this.isMultiple,
        hiddenOption: this.hiddenOption
      }],
      on: VsSelectOption_objectSpread({}, this.$listeners, {
        mousedown: function mousedown() {
          console.log(_this2.value);

          _this2.$parent.clickOption(_this2.value, _this2.label);
        },
        blur: function blur() {
          if (!_this2.$parent.targetSelect && !_this2.$parent.targetClose) {
            _this2.$parent.activeOptions = false;
          }
        }
      })
    }, [this.isMultiple && checkbox, !this.isMultiple && this.$slots.default]);
  };

  createClass_default()(VsSelectOption, [{
    key: "isActive",
    get: function get() {
      return typeof this.getParent().value == 'number' ? this.getParent().value == this.value : this.getParent().value.indexOf(this.value) !== -1;
    }
  }, {
    key: "isHover",
    get: function get() {
      return this.getParent().uids.indexOf(this._uid) == this.getParent().hoverOption;
    }
  }, {
    key: "isMultiple",
    get: function get() {
      return this.getParent().multiple;
    }
  }]);

  return VsSelectOption;
}(component_VsComponent), VsSelectOption_temp), (VsSelectOption_descriptor = applyDecoratedDescriptor_default()(VsSelectOption_class2.prototype, "value", [VsSelectOption_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSelectOption_descriptor2 = applyDecoratedDescriptor_default()(VsSelectOption_class2.prototype, "disabled", [VsSelectOption_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSelectOption_descriptor3 = applyDecoratedDescriptor_default()(VsSelectOption_class2.prototype, "label", [VsSelectOption_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), applyDecoratedDescriptor_default()(VsSelectOption_class2.prototype, "handleTextFilter", [VsSelectOption_dec4], Object.getOwnPropertyDescriptor(VsSelectOption_class2.prototype, "handleTextFilter"), VsSelectOption_class2.prototype)), VsSelectOption_class2)) || VsSelectOption_class);

// CONCATENATED MODULE: ./src/components/vsSelect/Option/index.ts



VsSelectOption_VsSelectOption.install = function (vue) {
  vue.component('vs-option', VsSelectOption_VsSelectOption);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsSelectOption_VsSelectOption.install(window.Vue);
}

/* harmony default export */ var Option = (VsSelectOption_VsSelectOption);
// EXTERNAL MODULE: ./src/components/vsSelect/OptionGroup/style.sass
var OptionGroup_style = __webpack_require__(19);

// CONCATENATED MODULE: ./src/components/vsSelect/OptionGroup/vsOptionGroup.ts




var vsOptionGroup_dec, vsOptionGroup_class, vsOptionGroup_class2, vsOptionGroup_temp;



var vsOptionGroup_VsOptionGroup = (vsOptionGroup_dec = Watch('$parent.textFilter'), vue_class_component_esm(vsOptionGroup_class = (vsOptionGroup_class2 = (vsOptionGroup_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsOptionGroup, _VsComponent);

  function VsOptionGroup() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;
    _this.optionGroup = true;
    _this.textFilter = null;
    _this.hiddenOptionGroup = false;
    return _this;
  }

  var _proto = VsOptionGroup.prototype;

  _proto.clickOption = function clickOption(value, label) {
    this.$parent.clickOption(value, label);
  };

  _proto.handleTextFilter = function handleTextFilter(val) {
    if (val) {
      if (this.labels.toLowerCase().indexOf(val.toLowerCase()) === -1) {
        this.hiddenOptionGroup = true;
      } else {
        this.hiddenOptionGroup = false;
      }
    } else {
      this.hiddenOptionGroup = false;
    }

    this.textFilter = val;
  };

  _proto.render = function render(h) {
    return h('div', {
      staticClass: 'vs-select__option-group',
      class: [{
        hiddenOptionGroup: this.hiddenOptionGroup
      }]
    }, [h('h5', {}, this.$slots.title), this.$slots.default]);
  };

  createClass_default()(VsOptionGroup, [{
    key: "labels",
    get: function get() {
      var labels = '';
      this.$slots.default.forEach(function (item) {
        if (item.tag) {
          labels += item.componentInstance.label;
        }
      });
      return labels;
    }
  }]);

  return VsOptionGroup;
}(component_VsComponent), vsOptionGroup_temp), (applyDecoratedDescriptor_default()(vsOptionGroup_class2.prototype, "handleTextFilter", [vsOptionGroup_dec], Object.getOwnPropertyDescriptor(vsOptionGroup_class2.prototype, "handleTextFilter"), vsOptionGroup_class2.prototype)), vsOptionGroup_class2)) || vsOptionGroup_class);

// CONCATENATED MODULE: ./src/components/vsSelect/OptionGroup/index.ts



vsOptionGroup_VsOptionGroup.install = function (vue) {
  vue.component('vs-option-group', vsOptionGroup_VsOptionGroup);
};

if (typeof window !== 'undefined' && window.Vue) {
  vsOptionGroup_VsOptionGroup.install(window.Vue);
}

/* harmony default export */ var OptionGroup = (vsOptionGroup_VsOptionGroup);
// EXTERNAL MODULE: ./src/components/vsAvatar/Base/style.sass
var vsAvatar_Base_style = __webpack_require__(20);

// CONCATENATED MODULE: ./src/components/vsAvatar/Base/VsAvatar.ts








var VsAvatar_dec, VsAvatar_dec2, VsAvatar_dec3, VsAvatar_dec4, VsAvatar_dec5, VsAvatar_dec6, VsAvatar_dec7, VsAvatar_dec8, VsAvatar_dec9, VsAvatar_dec10, VsAvatar_dec11, VsAvatar_dec12, VsAvatar_dec13, VsAvatar_class, VsAvatar_class2, VsAvatar_descriptor, VsAvatar_descriptor2, VsAvatar_descriptor3, VsAvatar_descriptor4, VsAvatar_descriptor5, VsAvatar_descriptor6, VsAvatar_descriptor7, VsAvatar_descriptor8, VsAvatar_descriptor9, VsAvatar_descriptor10, VsAvatar_descriptor11, VsAvatar_temp;

function VsAvatar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function VsAvatar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { VsAvatar_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { VsAvatar_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var VsAvatar_VsAvatar = (VsAvatar_dec = Prop({
  default: null
}), VsAvatar_dec2 = Prop({
  default: false,
  type: Boolean
}), VsAvatar_dec3 = Prop({
  default: false,
  type: Boolean
}), VsAvatar_dec4 = Prop({
  default: false,
  type: Boolean
}), VsAvatar_dec5 = Prop({
  default: false,
  type: Boolean
}), VsAvatar_dec6 = Prop({
  default: false,
  type: Boolean
}), VsAvatar_dec7 = Prop({
  default: false,
  type: Boolean
}), VsAvatar_dec8 = Prop({
  default: false,
  type: Boolean
}), VsAvatar_dec9 = Prop({
  default: false,
  type: Boolean
}), VsAvatar_dec10 = Prop({
  default: '',
  type: String
}), VsAvatar_dec11 = Prop({
  default: '',
  type: String
}), VsAvatar_dec12 = Watch('$slots.text'), VsAvatar_dec13 = Watch('badgeColor'), vue_class_component_esm(VsAvatar_class = (VsAvatar_class2 = (VsAvatar_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsAvatar, _VsComponent);

  function VsAvatar() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;

    initializerDefineProperty_default()(_this, "badgePosition", VsAvatar_descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "pointer", VsAvatar_descriptor2, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "circle", VsAvatar_descriptor3, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "square", VsAvatar_descriptor4, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "history", VsAvatar_descriptor5, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "loading", VsAvatar_descriptor6, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "historyGradient", VsAvatar_descriptor7, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "writing", VsAvatar_descriptor8, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "badge", VsAvatar_descriptor9, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "badgeColor", VsAvatar_descriptor10, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "size", VsAvatar_descriptor11, assertThisInitialized_default()(_this));

    _this.textLength = 0;
    _this.countPlus = 0;
    _this.index = null;
    return _this;
  }

  var _proto = VsAvatar.prototype;

  _proto.getParent = function getParent() {
    return this.$parent.vsAvatarGroup && this.$parent;
  };

  _proto.handleSlotText = function handleSlotText() {
    console.log('cambio el slot');
  };

  _proto.handleBadgeColor = function handleBadgeColor() {
    util_setColor('badge', this.badgeColor, this.$el);
    this.$el.classList.add('vs-change-color-badge');
  };

  _proto.mounted = function mounted() {
    util_setColor('badge', this.badgeColor, this.$el);
    this.$el.classList.add('vs-change-color-badge');

    if (this.getParent()) {
      this.index = this.getParent().avatars.length;
      this.getParent().avatars.push(this);
    }
  };

  _proto.render = function render(h) {
    var _class4, _style, _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7;

    var writing = h('div', {
      staticClass: 'vs-avatar__points'
    }, [h('div', {
      staticClass: 'vs-avatar__points__point'
    }), h('div', {
      staticClass: 'vs-avatar__points__point'
    }), h('div', {
      staticClass: 'vs-avatar__points__point'
    })]);
    var badge = h('div', {
      staticClass: 'vs-avatar__badge',
      class: [{
        isSlot: this.$slots.badge,
        writing: this.writing
      }, this.badgePosition]
    }, [this.writing ? writing : this.$slots.badge]);
    var avatar = h('div', {
      staticClass: 'vs-avatar',
      class: (_class4 = {}, _class4["vs-avatar--letter--" + this.textLength] = this.textLength > 2, _class4)
    }, [this.$slots.text && this.getText, this.$slots.default]);
    var loading = h('div', {
      staticClass: 'vs-avatar__loading'
    }, [h('div', {
      staticClass: 'vs-avatar__loading__animate'
    })]);
    var latest = h('div', {
      staticClass: 'vs-avatar__latest',
      directives: [{
        name: 'show',
        value: this.getParent() && this.getParent().avatars.length - this.index - 1 != 0
      }]
    }, ["+" + (this.getParent() && this.getParent().avatars.length - this.index - 1)]);
    var icons = h('div', {
      staticClass: 'vs-avatar__icons'
    }, [this.$slots.icons]);
    return h('div', {
      staticClass: 'vs-avatar-content',
      attrs: VsAvatar_objectSpread({}, this.$attrs),
      on: VsAvatar_objectSpread({}, this.$listeners),
      style: (_style = {
        width: this.size + "px",
        height: this.size + "px",
        cursor: this.pointer && 'pointer'
      }, _style['--vs-color'] = this.color ? this.getColor : '', _style),
      class: [(_ref = {
        'history': this.history,
        'history--gradient': this.historyGradient,
        'vs-avatar-content--circle': this.circle,
        'vs-avatar-content--square': this.square,
        'vs-avatar-content--hidden': this.isHidden,
        'vs-avatar-content--latest': this.isLatest,
        'vs-avatar-content--hasIcons': this.$slots.icons
      }, _ref["vs-avatar-content--size"] = this.size, _ref), (_ref2 = {}, _ref2["vs-component--primary"] = !!this.primary, _ref2), (_ref3 = {}, _ref3["vs-component--danger"] = !!this.danger, _ref3), (_ref4 = {}, _ref4["vs-component--warn"] = !!this.warn, _ref4), (_ref5 = {}, _ref5["vs-component--success"] = !!this.success, _ref5), (_ref6 = {}, _ref6["vs-component--dark"] = !!this.dark, _ref6), (_ref7 = {}, _ref7["vs-component--is-color"] = !!this.isColor, _ref7)]
    }, [this.loading && loading, avatar, this.$slots.badge ? badge : this.badge && badge, this.isLatest && latest, this.$slots.icons && icons]);
  };

  createClass_default()(VsAvatar, [{
    key: "getText",
    get: function get() {
      var _this$$slots$text = this.$slots.text,
          nodeText = _this$$slots$text[0];
      var text = nodeText.text.trim();
      var getLetters = [text];

      if (text.length > 5) {
        getLetters = text.split(/\s/g).map(function (item) {
          return item[0];
        });
        this.textLength = getLetters.length;
      } else {
        this.textLength = getLetters[0].length;
      }

      return getLetters;
    }
  }, {
    key: "isHidden",
    get: function get() {
      return this.getParent() && this.getParent().max && this.index > Number(this.getParent().max) - 1;
    }
  }, {
    key: "isLatest",
    get: function get() {
      return this.getParent() && this.index == Number(this.getParent().max) - 1;
    }
  }]);

  return VsAvatar;
}(component_VsComponent), VsAvatar_temp), (VsAvatar_descriptor = applyDecoratedDescriptor_default()(VsAvatar_class2.prototype, "badgePosition", [VsAvatar_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsAvatar_descriptor2 = applyDecoratedDescriptor_default()(VsAvatar_class2.prototype, "pointer", [VsAvatar_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsAvatar_descriptor3 = applyDecoratedDescriptor_default()(VsAvatar_class2.prototype, "circle", [VsAvatar_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsAvatar_descriptor4 = applyDecoratedDescriptor_default()(VsAvatar_class2.prototype, "square", [VsAvatar_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsAvatar_descriptor5 = applyDecoratedDescriptor_default()(VsAvatar_class2.prototype, "history", [VsAvatar_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsAvatar_descriptor6 = applyDecoratedDescriptor_default()(VsAvatar_class2.prototype, "loading", [VsAvatar_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsAvatar_descriptor7 = applyDecoratedDescriptor_default()(VsAvatar_class2.prototype, "historyGradient", [VsAvatar_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsAvatar_descriptor8 = applyDecoratedDescriptor_default()(VsAvatar_class2.prototype, "writing", [VsAvatar_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsAvatar_descriptor9 = applyDecoratedDescriptor_default()(VsAvatar_class2.prototype, "badge", [VsAvatar_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsAvatar_descriptor10 = applyDecoratedDescriptor_default()(VsAvatar_class2.prototype, "badgeColor", [VsAvatar_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsAvatar_descriptor11 = applyDecoratedDescriptor_default()(VsAvatar_class2.prototype, "size", [VsAvatar_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), applyDecoratedDescriptor_default()(VsAvatar_class2.prototype, "handleSlotText", [VsAvatar_dec12], Object.getOwnPropertyDescriptor(VsAvatar_class2.prototype, "handleSlotText"), VsAvatar_class2.prototype), applyDecoratedDescriptor_default()(VsAvatar_class2.prototype, "handleBadgeColor", [VsAvatar_dec13], Object.getOwnPropertyDescriptor(VsAvatar_class2.prototype, "handleBadgeColor"), VsAvatar_class2.prototype)), VsAvatar_class2)) || VsAvatar_class);

// CONCATENATED MODULE: ./src/components/vsAvatar/Base/index.ts



VsAvatar_VsAvatar.install = function (vue) {
  vue.component('vs-avatar', VsAvatar_VsAvatar);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsAvatar_VsAvatar.install(window.Vue);
}

/* harmony default export */ var vsAvatar_Base = (VsAvatar_VsAvatar);
// EXTERNAL MODULE: ./src/components/vsAvatar/Group/style.sass
var Group_style = __webpack_require__(21);

// CONCATENATED MODULE: ./src/components/vsAvatar/Group/VsAvatarGroup.ts






var VsAvatarGroup_dec, VsAvatarGroup_dec2, VsAvatarGroup_class, VsAvatarGroup_class2, VsAvatarGroup_descriptor, VsAvatarGroup_descriptor2, VsAvatarGroup_temp;



var VsAvatarGroup_VsAvatarGroup = (VsAvatarGroup_dec = Prop({
  default: null
}), VsAvatarGroup_dec2 = Prop({
  default: false,
  type: Boolean
}), vue_class_component_esm(VsAvatarGroup_class = (VsAvatarGroup_class2 = (VsAvatarGroup_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsAvatarGroup, _VsComponent);

  function VsAvatarGroup() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;

    initializerDefineProperty_default()(_this, "max", VsAvatarGroup_descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "float", VsAvatarGroup_descriptor2, assertThisInitialized_default()(_this));

    _this.avatars = [];
    _this.vsAvatarGroup = true;
    return _this;
  }

  var _proto = VsAvatarGroup.prototype;

  _proto.render = function render(h) {
    return h('div', {
      staticClass: 'vs-avatar__group',
      class: {
        float: this.float
      }
    }, [this.$slots.default]);
  };

  return VsAvatarGroup;
}(component_VsComponent), VsAvatarGroup_temp), (VsAvatarGroup_descriptor = applyDecoratedDescriptor_default()(VsAvatarGroup_class2.prototype, "max", [VsAvatarGroup_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsAvatarGroup_descriptor2 = applyDecoratedDescriptor_default()(VsAvatarGroup_class2.prototype, "float", [VsAvatarGroup_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), VsAvatarGroup_class2)) || VsAvatarGroup_class);

// CONCATENATED MODULE: ./src/components/vsAvatar/Group/index.ts



VsAvatarGroup_VsAvatarGroup.install = function (vue) {
  vue.component('vs-avatar-group', VsAvatarGroup_VsAvatarGroup);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsAvatarGroup_VsAvatarGroup.install(window.Vue);
}

/* harmony default export */ var Group = (VsAvatarGroup_VsAvatarGroup);
// EXTERNAL MODULE: ./src/components/vsRadio/Base/style.sass
var vsRadio_Base_style = __webpack_require__(22);

// CONCATENATED MODULE: ./src/components/vsRadio/Base/VsRadio.ts







var VsRadio_dec, VsRadio_dec2, VsRadio_dec3, VsRadio_dec4, VsRadio_dec5, VsRadio_dec6, VsRadio_class, VsRadio_class2, VsRadio_descriptor, VsRadio_descriptor2, VsRadio_descriptor3, VsRadio_descriptor4, VsRadio_descriptor5, VsRadio_descriptor6, VsRadio_temp;



var VsRadio_VsRadio = (VsRadio_dec = Prop({}), VsRadio_dec2 = Prop({}), VsRadio_dec3 = Prop({
  type: String,
  default: null
}), VsRadio_dec4 = Prop({
  type: Boolean,
  default: false
}), VsRadio_dec5 = Prop({
  type: Boolean,
  default: false
}), VsRadio_dec6 = Prop({
  type: Boolean,
  default: false
}), vue_class_component_esm(VsRadio_class = (VsRadio_class2 = (VsRadio_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsRadio, _VsComponent);

  function VsRadio() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;
    _this._uid = void 0;
    _this.model = void 0;

    initializerDefineProperty_default()(_this, "value", VsRadio_descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "val", VsRadio_descriptor2, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "name", VsRadio_descriptor3, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "disabled", VsRadio_descriptor4, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "loading", VsRadio_descriptor5, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "labelBefore", VsRadio_descriptor6, assertThisInitialized_default()(_this));

    return _this;
  }

  var _proto = VsRadio.prototype;

  _proto.render = function render(h) {
    var _this2 = this,
        _style,
        _ref,
        _ref2,
        _ref3,
        _ref4,
        _ref5;

    var radioInput = h('input', {
      attrs: {
        type: 'radio',
        id: this._uid,
        value: this.val,
        name: this.name || this.value,
        checked: this.isChecked
      },
      on: {
        input: function input() {
          _this2.$emit('input', _this2.val);
        }
      }
    });
    var radioEffect = h('span', {
      staticClass: 'vs-radio__effect'
    }, [h('span', {
      staticClass: 'vs-radio__effect__icon'
    }, [this.$slots.icon]), h('span', {
      staticClass: 'vs-radio__effect__loading'
    })]);
    var label = h('label', {
      staticClass: 'vs-radio__label',
      attrs: {
        for: this._uid
      }
    }, [this.$slots.default]);
    var radio = h('div', {
      staticClass: 'vs-radio'
    }, [radioInput, radioEffect]);
    return h('div', {
      staticClass: 'vs-radio-content',
      style: (_style = {}, _style['--vs-color'] = this.color ? this.getColor : '', _style),
      class: [{
        disabled: this.disabled,
        loading: this.loading,
        active: this.isChecked
      }, (_ref = {}, _ref["vs-component--primary"] = !this.danger && !this.success && !this.warn && !this.dark && !this.color, _ref), (_ref2 = {}, _ref2["vs-component--danger"] = !!this.danger, _ref2), (_ref3 = {}, _ref3["vs-component--warn"] = !!this.warn, _ref3), (_ref4 = {}, _ref4["vs-component--success"] = !!this.success, _ref4), (_ref5 = {}, _ref5["vs-component--dark"] = !!this.dark, _ref5)]
    }, [this.labelBefore && label, radio, !this.labelBefore && label]);
  };

  createClass_default()(VsRadio, [{
    key: "isChecked",
    get: function get() {
      return this.value == this.val;
    }
  }]);

  return VsRadio;
}(component_VsComponent), VsRadio_temp), (VsRadio_descriptor = applyDecoratedDescriptor_default()(VsRadio_class2.prototype, "value", [VsRadio_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsRadio_descriptor2 = applyDecoratedDescriptor_default()(VsRadio_class2.prototype, "val", [VsRadio_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsRadio_descriptor3 = applyDecoratedDescriptor_default()(VsRadio_class2.prototype, "name", [VsRadio_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsRadio_descriptor4 = applyDecoratedDescriptor_default()(VsRadio_class2.prototype, "disabled", [VsRadio_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsRadio_descriptor5 = applyDecoratedDescriptor_default()(VsRadio_class2.prototype, "loading", [VsRadio_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsRadio_descriptor6 = applyDecoratedDescriptor_default()(VsRadio_class2.prototype, "labelBefore", [VsRadio_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), VsRadio_class2)) || VsRadio_class);

// CONCATENATED MODULE: ./src/components/vsRadio/Base/index.ts



VsRadio_VsRadio.install = function (vue) {
  vue.component('vs-radio', VsRadio_VsRadio);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsRadio_VsRadio.install(window.Vue);
}

/* harmony default export */ var vsRadio_Base = (VsRadio_VsRadio);
// EXTERNAL MODULE: ./src/components/vsTooltip/Base/style.sass
var vsTooltip_Base_style = __webpack_require__(23);

// CONCATENATED MODULE: ./src/components/vsTooltip/Base/VsTooltip.ts






var VsTooltip_dec, VsTooltip_dec2, VsTooltip_dec3, VsTooltip_dec4, VsTooltip_dec5, VsTooltip_dec6, VsTooltip_dec7, VsTooltip_dec8, VsTooltip_dec9, VsTooltip_dec10, VsTooltip_dec11, VsTooltip_dec12, VsTooltip_dec13, VsTooltip_dec14, VsTooltip_dec15, VsTooltip_class, VsTooltip_class2, VsTooltip_descriptor, VsTooltip_descriptor2, VsTooltip_descriptor3, VsTooltip_descriptor4, VsTooltip_descriptor5, VsTooltip_descriptor6, VsTooltip_descriptor7, VsTooltip_descriptor8, VsTooltip_descriptor9, VsTooltip_descriptor10, VsTooltip_descriptor11, VsTooltip_descriptor12, VsTooltip_descriptor13, VsTooltip_descriptor14, VsTooltip_temp;




var VsTooltip_VsTooltip = (VsTooltip_dec = Prop({}), VsTooltip_dec2 = Prop({
  default: false,
  type: Boolean
}), VsTooltip_dec3 = Prop({
  default: false,
  type: Boolean
}), VsTooltip_dec4 = Prop({
  default: false,
  type: Boolean
}), VsTooltip_dec5 = Prop({
  default: false,
  type: Boolean
}), VsTooltip_dec6 = Prop({
  default: false,
  type: Boolean
}), VsTooltip_dec7 = Prop({
  default: false,
  type: Boolean
}), VsTooltip_dec8 = Prop({
  default: false,
  type: Boolean
}), VsTooltip_dec9 = Prop({
  default: false,
  type: Boolean
}), VsTooltip_dec10 = Prop({
  default: false,
  type: Boolean
}), VsTooltip_dec11 = Prop({
  default: false,
  type: Boolean
}), VsTooltip_dec12 = Prop({
  default: false,
  type: Boolean
}), VsTooltip_dec13 = Prop({
  default: false,
  type: Boolean
}), VsTooltip_dec14 = Prop({
  default: null,
  type: String
}), VsTooltip_dec15 = Watch('value'), vue_class_component_esm(VsTooltip_class = (VsTooltip_class2 = (VsTooltip_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsTooltip, _VsComponent);

  function VsTooltip() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;
    _this.activeTooltip = false;
    _this.isHoverTooltip = false;

    initializerDefineProperty_default()(_this, "value", VsTooltip_descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "loading", VsTooltip_descriptor2, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "bottom", VsTooltip_descriptor3, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "left", VsTooltip_descriptor4, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "right", VsTooltip_descriptor5, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "notHover", VsTooltip_descriptor6, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "shadow", VsTooltip_descriptor7, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "interactivity", VsTooltip_descriptor8, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "notArrow", VsTooltip_descriptor9, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "square", VsTooltip_descriptor10, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "circle", VsTooltip_descriptor11, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "border", VsTooltip_descriptor12, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "borderThick", VsTooltip_descriptor13, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "delay", VsTooltip_descriptor14, assertThisInitialized_default()(_this));

    return _this;
  }

  var _proto = VsTooltip.prototype;

  _proto.insertTooltip = function insertTooltip() {
    var tooltip = this.$refs.tooltip;
    insertBody(tooltip, document.body);
    var position = 'top';

    if (this.bottom) {
      position = 'bottom';
    } else if (this.left) {
      position = 'left';
    } else if (this.right) {
      position = 'right';
    }

    setCordsPosition(tooltip, this.$refs.content, position);
  };

  _proto.handlerMouseEnter = function handlerMouseEnter() {
    var _this2 = this;

    if (this.delay) {
      setTimeout(function () {
        _this2.activeTooltip = true;

        _this2.$nextTick(function () {
          _this2.insertTooltip();
        });
      }, Number(this.delay));
    } else {
      this.activeTooltip = true;
      this.$nextTick(function () {
        _this2.insertTooltip();
      });
    }
  };

  _proto.removeTooltip = function removeTooltip() {
    this.activeTooltip = false;
    this.$emit('input', false);
  };

  _proto.handleResize = function handleResize() {
    var _this3 = this;

    var position = 'top';

    if (this.bottom) {
      position = 'bottom';
    } else if (this.left) {
      position = 'left';
    } else if (this.right) {
      position = 'right';
    }

    var tooltip = this.$refs.tooltip;

    if (!tooltip) {
      return;
    }

    this.$nextTick(function () {
      setCordsPosition(tooltip, _this3.$refs.content, position);
    });

    for (var index = 0; index < 300; index++) {
      setTimeout(function () {
        setCordsPosition(tooltip, _this3.$refs.content, position);
      }, index);
    }
  };

  _proto.handleMouseDownNotHover = function handleMouseDownNotHover(evt) {
    if (!evt.target.closest('.vs-tooltip') && !evt.target.closest('.vs-tooltip-content')) {
      this.removeTooltip();
    }
  };

  _proto.handleWatchValue = function handleWatchValue(val) {
    var _this4 = this;

    this.activeTooltip = val;

    if (val) {
      this.$nextTick(function () {
        _this4.insertTooltip();
      });
    }
  };

  _proto.mounted = function mounted() {
    window.addEventListener('popstate', function (event) {
      var tooltips = document.querySelectorAll('.vs-tooltip');
      tooltips.forEach(function (tooltip) {
        tooltip.remove();
      });
    });
    window.addEventListener('resize', this.handleResize);

    if (this.notHover) {
      window.addEventListener('mousedown', this.handleMouseDownNotHover);
    }

    window.addEventListener('touchstart', this.handleMouseDownNotHover);
  };

  _proto.beforeDestroy = function beforeDestroy() {
    this.activeTooltip = false;
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('mousedown', this.handleMouseDownNotHover);
  };

  _proto.render = function render(h) {
    var _style,
        _ref,
        _ref2,
        _ref3,
        _ref4,
        _ref5,
        _this5 = this;

    var loading = h('div', {
      staticClass: 'vs-tooltip__loading'
    });
    var tooltip = h('div', {
      staticClass: 'vs-tooltip',
      ref: 'tooltip',
      style: (_style = {}, _style['--vs-color'] = this.color ? this.getColor : '', _style),
      class: [{
        top: !this.bottom && !this.left && !this.right,
        bottom: this.bottom,
        left: this.left,
        right: this.right,
        shadow: this.shadow,
        notArrow: this.notArrow,
        square: this.square,
        circle: this.circle,
        border: this.border,
        borderThick: this.borderThick,
        loading: this.loading
      }, (_ref = {}, _ref["vs-component--primary"] = !!this.primary, _ref), (_ref2 = {}, _ref2["vs-component--danger"] = !!this.danger, _ref2), (_ref3 = {}, _ref3["vs-component--warn"] = !!this.warn, _ref3), (_ref4 = {}, _ref4["vs-component--success"] = !!this.success, _ref4), (_ref5 = {}, _ref5["vs-component--dark"] = !!this.dark, _ref5)],
      on: {
        mouseenter: function mouseenter() {
          if (_this5.interactivity) {
            _this5.isHoverTooltip = true;

            _this5.handlerMouseEnter();
          }
        },
        mouseleave: function mouseleave() {
          _this5.isHoverTooltip = false;

          _this5.removeTooltip();
        }
      }
    }, [this.$slots.tooltip, this.loading && loading]);
    return h('div', {
      staticClass: 'vs-tooltip-content',
      ref: 'content',
      on: {
        mouseenter: function mouseenter() {
          if (!_this5.notHover) {
            _this5.handlerMouseEnter();
          }
        },
        mouseleave: function mouseleave() {
          if (!_this5.notHover) {
            if (_this5.interactivity) {
              setTimeout(function () {
                if (!_this5.isHoverTooltip) {
                  _this5.removeTooltip();
                }
              }, 250);
            } else {
              _this5.removeTooltip();
            }
          }
        }
      }
    }, [h('transition', {
      props: {
        name: 'vs-tooltip'
      }
    }, [this.activeTooltip && tooltip]), this.$slots.default]);
  };

  return VsTooltip;
}(component_VsComponent), VsTooltip_temp), (VsTooltip_descriptor = applyDecoratedDescriptor_default()(VsTooltip_class2.prototype, "value", [VsTooltip_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsTooltip_descriptor2 = applyDecoratedDescriptor_default()(VsTooltip_class2.prototype, "loading", [VsTooltip_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsTooltip_descriptor3 = applyDecoratedDescriptor_default()(VsTooltip_class2.prototype, "bottom", [VsTooltip_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsTooltip_descriptor4 = applyDecoratedDescriptor_default()(VsTooltip_class2.prototype, "left", [VsTooltip_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsTooltip_descriptor5 = applyDecoratedDescriptor_default()(VsTooltip_class2.prototype, "right", [VsTooltip_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsTooltip_descriptor6 = applyDecoratedDescriptor_default()(VsTooltip_class2.prototype, "notHover", [VsTooltip_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsTooltip_descriptor7 = applyDecoratedDescriptor_default()(VsTooltip_class2.prototype, "shadow", [VsTooltip_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsTooltip_descriptor8 = applyDecoratedDescriptor_default()(VsTooltip_class2.prototype, "interactivity", [VsTooltip_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsTooltip_descriptor9 = applyDecoratedDescriptor_default()(VsTooltip_class2.prototype, "notArrow", [VsTooltip_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsTooltip_descriptor10 = applyDecoratedDescriptor_default()(VsTooltip_class2.prototype, "square", [VsTooltip_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsTooltip_descriptor11 = applyDecoratedDescriptor_default()(VsTooltip_class2.prototype, "circle", [VsTooltip_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsTooltip_descriptor12 = applyDecoratedDescriptor_default()(VsTooltip_class2.prototype, "border", [VsTooltip_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsTooltip_descriptor13 = applyDecoratedDescriptor_default()(VsTooltip_class2.prototype, "borderThick", [VsTooltip_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsTooltip_descriptor14 = applyDecoratedDescriptor_default()(VsTooltip_class2.prototype, "delay", [VsTooltip_dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), applyDecoratedDescriptor_default()(VsTooltip_class2.prototype, "handleWatchValue", [VsTooltip_dec15], Object.getOwnPropertyDescriptor(VsTooltip_class2.prototype, "handleWatchValue"), VsTooltip_class2.prototype)), VsTooltip_class2)) || VsTooltip_class);

// CONCATENATED MODULE: ./src/components/vsTooltip/Base/index.ts



VsTooltip_VsTooltip.install = function (vue) {
  vue.component('vs-tooltip', VsTooltip_VsTooltip);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsTooltip_VsTooltip.install(window.Vue);
}

/* harmony default export */ var vsTooltip_Base = (VsTooltip_VsTooltip);
// EXTERNAL MODULE: ./src/components/vsDialog/Base/style.sass
var vsDialog_Base_style = __webpack_require__(24);

// CONCATENATED MODULE: ./src/components/vsDialog/Base/VsDialog.ts






var VsDialog_dec, VsDialog_dec2, VsDialog_dec3, VsDialog_dec4, VsDialog_dec5, VsDialog_dec6, VsDialog_dec7, VsDialog_dec8, VsDialog_dec9, VsDialog_dec10, VsDialog_dec11, VsDialog_dec12, VsDialog_dec13, VsDialog_dec14, VsDialog_dec15, VsDialog_class, VsDialog_class2, VsDialog_descriptor, VsDialog_descriptor2, VsDialog_descriptor3, VsDialog_descriptor4, VsDialog_descriptor5, VsDialog_descriptor6, VsDialog_descriptor7, VsDialog_descriptor8, VsDialog_descriptor9, VsDialog_descriptor10, VsDialog_descriptor11, VsDialog_descriptor12, VsDialog_descriptor13, VsDialog_descriptor14, VsDialog_temp;





var VsDialog_VsDialog = (VsDialog_dec = Prop({
  default: false,
  type: Boolean
}), VsDialog_dec2 = Prop({
  default: false,
  type: Boolean
}), VsDialog_dec3 = Prop({
  default: false,
  type: Boolean
}), VsDialog_dec4 = Prop({
  default: false,
  type: Boolean
}), VsDialog_dec5 = Prop({
  default: false,
  type: Boolean
}), VsDialog_dec6 = Prop({
  default: false,
  type: Boolean
}), VsDialog_dec7 = Prop({
  default: false,
  type: Boolean
}), VsDialog_dec8 = Prop({
  default: false,
  type: Boolean
}), VsDialog_dec9 = Prop({
  default: false,
  type: Boolean
}), VsDialog_dec10 = Prop({
  default: false,
  type: Boolean
}), VsDialog_dec11 = Prop({
  default: false,
  type: Boolean
}), VsDialog_dec12 = Prop({
  default: false,
  type: Boolean
}), VsDialog_dec13 = Prop({
  default: null,
  type: String
}), VsDialog_dec14 = Prop({
  default: false,
  type: Boolean
}), VsDialog_dec15 = Watch('value'), vue_class_component_esm(VsDialog_class = (VsDialog_class2 = (VsDialog_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsDialog, _VsComponent);

  function VsDialog() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;
    _this.rebound = false;

    initializerDefineProperty_default()(_this, "value", VsDialog_descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "loading", VsDialog_descriptor2, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "fullScreen", VsDialog_descriptor3, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "notClose", VsDialog_descriptor4, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "preventClose", VsDialog_descriptor5, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "notPadding", VsDialog_descriptor6, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "overflowHidden", VsDialog_descriptor7, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "blur", VsDialog_descriptor8, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "square", VsDialog_descriptor9, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "autoWidth", VsDialog_descriptor10, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "scroll", VsDialog_descriptor11, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "notCenter", VsDialog_descriptor12, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "width", VsDialog_descriptor13, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "routerClose", VsDialog_descriptor14, assertThisInitialized_default()(_this));

    return _this;
  }

  var _proto = VsDialog.prototype;

  _proto.esc = function esc(evt) {
    if (evt.which == 27 && !this.preventClose) {
      this.$emit('input', false);
      this.$emit('close');
    }
  };

  _proto.addEsc = function addEsc() {
    window.addEventListener('keydown', this.esc);
  };

  _proto.insertDialog = function insertDialog() {
    var _this2 = this;

    this.addEsc();
    this.$nextTick(function () {
      var dialog = _this2.$refs['dialog-content'];
      insertBody(dialog, document.querySelector('#app'));
    });
  };

  _proto.handleWatchValue = function handleWatchValue(val) {
    if (val) {
      this.insertDialog();

      if (this.overflowHidden) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      if (this.overflowHidden) {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', this.esc);
      }
    }
  };

  _proto.beforeDestroy = function beforeDestroy() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  };

  _proto.render = function render(h) {
    var _this3 = this;

    var header = h('header', {
      staticClass: 'vs-dialog__header'
    }, [this.$slots.header]);
    var content = h('div', {
      staticClass: 'vs-dialog__content',
      class: {
        notFooter: !this.$slots.footer
      }
    }, [this.$slots.default]);
    var footer = h('footer', {
      staticClass: 'vs-dialog__footer'
    }, [this.$slots.footer]);
    var close = h('button', {
      staticClass: 'vs-dialog__close',
      on: {
        click: function click(evt) {
          _this3.$emit('input', !_this3.value);

          _this3.$emit('close');
        }
      }
    }, [h(close_VsIconClose, {
      props: {
        hover: 'x'
      }
    })]);
    var loading = h('div', {
      staticClass: 'vs-dialog__loading'
    }, [h('div', {
      staticClass: 'vs-dialog__loading__load'
    })]);
    var dialog = h('div', {
      staticClass: 'vs-dialog',
      style: {
        width: this.width
      },
      class: {
        'vs-dialog--fullScreen': this.fullScreen,
        'vs-dialog--rebound': this.rebound,
        'vs-dialog--notPadding': this.notPadding,
        'vs-dialog--square': this.square,
        'vs-dialog--autoWidth': this.autoWidth,
        'vs-dialog--scroll': this.scroll,
        'vs-dialog--loading': this.loading,
        'vs-dialog--notCenter': this.notCenter
      }
    }, [this.loading && loading, !this.notClose && close, this.$slots.header && header, content, this.$slots.footer && footer]);
    var dialogContent = h('div', {
      staticClass: 'vs-dialog-content',
      ref: 'dialog-content',
      class: {
        blur: this.blur,
        fullScreen: this.fullScreen
      },
      on: {
        click: function click(evt) {
          if (!evt.target.closest('.vs-dialog') && !_this3.preventClose) {
            _this3.$emit('input', !_this3.value);

            _this3.$emit('close');
          }

          if (_this3.preventClose && !evt.target.closest('.vs-dialog')) {
            _this3.rebound = true;
            setTimeout(function () {
              _this3.rebound = false;
            }, 300);
          }
        }
      }
    }, [dialog]);
    return h('transition', {
      props: {
        name: 'vs-dialog'
      }
    }, [this.value && dialogContent]);
  };

  return VsDialog;
}(component_VsComponent), VsDialog_temp), (VsDialog_descriptor = applyDecoratedDescriptor_default()(VsDialog_class2.prototype, "value", [VsDialog_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsDialog_descriptor2 = applyDecoratedDescriptor_default()(VsDialog_class2.prototype, "loading", [VsDialog_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsDialog_descriptor3 = applyDecoratedDescriptor_default()(VsDialog_class2.prototype, "fullScreen", [VsDialog_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsDialog_descriptor4 = applyDecoratedDescriptor_default()(VsDialog_class2.prototype, "notClose", [VsDialog_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsDialog_descriptor5 = applyDecoratedDescriptor_default()(VsDialog_class2.prototype, "preventClose", [VsDialog_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsDialog_descriptor6 = applyDecoratedDescriptor_default()(VsDialog_class2.prototype, "notPadding", [VsDialog_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsDialog_descriptor7 = applyDecoratedDescriptor_default()(VsDialog_class2.prototype, "overflowHidden", [VsDialog_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsDialog_descriptor8 = applyDecoratedDescriptor_default()(VsDialog_class2.prototype, "blur", [VsDialog_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsDialog_descriptor9 = applyDecoratedDescriptor_default()(VsDialog_class2.prototype, "square", [VsDialog_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsDialog_descriptor10 = applyDecoratedDescriptor_default()(VsDialog_class2.prototype, "autoWidth", [VsDialog_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsDialog_descriptor11 = applyDecoratedDescriptor_default()(VsDialog_class2.prototype, "scroll", [VsDialog_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsDialog_descriptor12 = applyDecoratedDescriptor_default()(VsDialog_class2.prototype, "notCenter", [VsDialog_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsDialog_descriptor13 = applyDecoratedDescriptor_default()(VsDialog_class2.prototype, "width", [VsDialog_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsDialog_descriptor14 = applyDecoratedDescriptor_default()(VsDialog_class2.prototype, "routerClose", [VsDialog_dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), applyDecoratedDescriptor_default()(VsDialog_class2.prototype, "handleWatchValue", [VsDialog_dec15], Object.getOwnPropertyDescriptor(VsDialog_class2.prototype, "handleWatchValue"), VsDialog_class2.prototype)), VsDialog_class2)) || VsDialog_class);

// CONCATENATED MODULE: ./src/components/vsDialog/Base/index.ts



VsDialog_VsDialog.install = function (vue) {
  vue.component('vs-dialog', VsDialog_VsDialog);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsDialog_VsDialog.install(window.Vue);
}

/* harmony default export */ var vsDialog_Base = (VsDialog_VsDialog);
// EXTERNAL MODULE: ./src/components/vsPagination/Base/style.sass
var vsPagination_Base_style = __webpack_require__(25);

// CONCATENATED MODULE: ./src/components/vsPagination/Base/VsPagination.ts







var VsPagination_dec, VsPagination_dec2, VsPagination_dec3, VsPagination_dec4, VsPagination_dec5, VsPagination_dec6, VsPagination_dec7, VsPagination_dec8, VsPagination_dec9, VsPagination_dec10, VsPagination_dec11, VsPagination_dec12, VsPagination_dec13, VsPagination_dec14, VsPagination_dec15, VsPagination_dec16, VsPagination_dec17, VsPagination_class, VsPagination_class2, VsPagination_descriptor, VsPagination_descriptor2, VsPagination_descriptor3, VsPagination_descriptor4, VsPagination_descriptor5, VsPagination_descriptor6, VsPagination_descriptor7, VsPagination_descriptor8, VsPagination_descriptor9, VsPagination_descriptor10, VsPagination_descriptor11, VsPagination_descriptor12, VsPagination_descriptor13, VsPagination_descriptor14, VsPagination_descriptor15, VsPagination_temp;




var VsPagination_VsPagination = (VsPagination_dec = Prop({}), VsPagination_dec2 = Prop({
  default: false,
  type: Boolean
}), VsPagination_dec3 = Prop({
  default: false,
  type: Boolean
}), VsPagination_dec4 = Prop({
  default: false,
  type: Boolean
}), VsPagination_dec5 = Prop({
  default: false,
  type: Boolean
}), VsPagination_dec6 = Prop({
  default: false,
  type: Boolean
}), VsPagination_dec7 = Prop({
  default: false,
  type: Boolean
}), VsPagination_dec8 = Prop({
  default: false,
  type: Boolean
}), VsPagination_dec9 = Prop({
  default: false,
  type: Boolean
}), VsPagination_dec10 = Prop({
  default: false,
  type: Boolean
}), VsPagination_dec11 = Prop({
  default: function _default() {
    return [];
  },
  type: Array
}), VsPagination_dec12 = Prop({
  default: function _default() {
    return [];
  },
  type: Array
}), VsPagination_dec13 = Prop({
  default: 0,
  type: Number
}), VsPagination_dec14 = Prop({
  default: 9,
  type: Number
}), VsPagination_dec15 = Prop({
  default: 5,
  type: Number
}), VsPagination_dec16 = Watch('length'), VsPagination_dec17 = Watch('value'), vue_class_component_esm(VsPagination_class = (VsPagination_class2 = (VsPagination_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsPagination, _VsComponent);

  function VsPagination() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;
    _this.val = 0;
    _this.leftActive = 42;
    _this.activeClassMove = false;

    initializerDefineProperty_default()(_this, "value", VsPagination_descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "infinite", VsPagination_descriptor2, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "progress", VsPagination_descriptor3, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "notMargin", VsPagination_descriptor4, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "buttonsDotted", VsPagination_descriptor5, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "notArrows", VsPagination_descriptor6, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "onlyArrows", VsPagination_descriptor7, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "circle", VsPagination_descriptor8, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "square", VsPagination_descriptor9, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "disabled", VsPagination_descriptor10, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "disabledItems", VsPagination_descriptor11, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "loadingItems", VsPagination_descriptor12, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "length", VsPagination_descriptor13, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "max", VsPagination_descriptor14, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "dottedNumber", VsPagination_descriptor15, assertThisInitialized_default()(_this));

    return _this;
  }

  var _proto = VsPagination.prototype;

  _proto.handleLength = function handleLength() {
    var _this2 = this;

    this.$nextTick(function () {
      var offsetLeftPagination = _this2.$refs.pagination.offsetLeft;
      _this2.leftActive = _this2.$refs["btn" + _this2.value].offsetLeft + offsetLeftPagination;
      setTimeout(function () {
        _this2.activeClassMove = false;
      }, 300);
    });
  };

  _proto.handleValue = function handleValue(val, prevValue) {
    var _this3 = this;

    if (this.isDisabledItem(val) || this.isLoadingItem(val)) {
      var newVal = val;

      if (val > prevValue) {
        newVal += 1;
      } else {
        newVal -= 1;
      }

      if (newVal > this.length) {
        newVal = this.infinite ? 1 : prevValue;
      } else if (newVal <= 0) {
        newVal = this.infinite ? this.length : prevValue;
      }

      this.val = newVal;
      this.setValuePage(newVal);
    } else {
      this.val = val;

      if (this.$refs.pagination) {
        this.activeClassMove = true;
        this.$nextTick(function () {
          var offsetLeftPagination = _this3.$refs.pagination.offsetLeft;
          _this3.leftActive = _this3.$refs["btn" + val].offsetLeft + offsetLeftPagination;
          setTimeout(function () {
            _this3.activeClassMove = false;
          }, 300);
        });
      }
    }
  };

  _proto.setValuePage = function setValuePage(NumberPage) {
    this.$emit('input', NumberPage);
  };

  _proto.renderDotted = function renderDotted(text) {
    var _this4 = this;

    if (text === void 0) {
      text = '...';
    }

    var h = this.$createElement;
    var dotted = h('div', {
      staticClass: 'vs-pagination__dotted',
      class: {
        next: this.value == this.length ? false : text == '...>'
      },
      on: {
        click: function click(evt) {
          var newVal = (_this4.value == _this4.length ? false : text == '...>') ? _this4.val += _this4.dottedNumber : _this4.val -= _this4.dottedNumber;

          if (newVal > _this4.length) {
            newVal = _this4.length;
          } else if (newVal < 1) {
            newVal = 1;
          }

          _this4.setValuePage(newVal);
        }
      }
    }, [h('span', {
      staticClass: 'dotted'
    }, ["..."]), h('span', {
      staticClass: 'con-arrows'
    }, [h(arrow_VsIconClose), h(arrow_VsIconClose)])]);
    return dotted;
  };

  _proto.isDisabledItem = function isDisabledItem(item) {
    return this.disabledItems.indexOf(item) !== -1;
  };

  _proto.isLoadingItem = function isLoadingItem(item) {
    return this.loadingItems.indexOf(item) !== -1;
  };

  _proto.renderButton = function renderButton(NumberPage) {
    var _this5 = this;

    if (NumberPage === void 0) {
      NumberPage = 1;
    }

    var h = this.$createElement;
    var button = h('button', {
      ref: "btn" + NumberPage,
      staticClass: 'vs-pagination__button',
      class: {
        active: NumberPage == this.value,
        prevActive: NumberPage == this.value - 1,
        nextActive: NumberPage == this.value + 1,
        disabled: this.isDisabledItem(NumberPage),
        loading: this.isLoadingItem(NumberPage)
      },
      on: {
        click: function click(evt) {
          _this5.setValuePage(NumberPage);
        }
      }
    }, this.buttonsDotted ? '' : "" + NumberPage);
    return button;
  };

  _proto.renderButtons = function renderButtons(array) {
    var _this6 = this;

    var buttons = [];
    array.forEach(function (item) {
      if (item === '...>' || item === '<...') {
        buttons.push(_this6.renderDotted(item));
      } else {
        buttons.push(_this6.renderButton(item));
      }
    });
    return buttons;
  };

  _proto.getButtons = function getButtons(start, end) {
    if (start === void 0) {
      start = 1;
    }

    if (end === void 0) {
      end = 6;
    }

    var buttons = [];

    for (start > 0 ? start : 1; start <= end; start++) {
      buttons.push(start);
    }

    return buttons;
  };

  _proto.mounted = function mounted() {
    this.val = this.value;
    this.handleValue(this.value, this.val += 1);
  };

  _proto.render = function render(h) {
    var _this7 = this,
        _style,
        _ref,
        _ref2,
        _ref3,
        _ref4,
        _ref5;

    var active = h('div', {
      staticClass: 'vs-pagination__active',
      style: {
        left: this.leftActive + "px"
      },
      class: {
        move: this.activeClassMove
      }
    }, this.buttonsDotted ? '' : this.value);
    var pagination = h('div', {
      staticClass: 'vs-pagination',
      ref: 'pagination'
    }, [this.getPages]);
    var prev = h('button', {
      staticClass: 'vs-pagination__arrow',
      attrs: {
        disabled: this.infinite ? false : this.val <= 1
      },
      class: ['prev'],
      on: {
        click: function click() {
          var newVal = _this7.val -= 1;

          if (newVal > 0) {
            _this7.setValuePage(newVal);
          } else if (_this7.infinite) {
            _this7.setValuePage(_this7.length);
          }
        }
      }
    }, [this.$slots.arrowPrev ? this.$slots.arrowPrev : h(arrow_VsIconClose)]);
    var next = h('button', {
      staticClass: 'vs-pagination__arrow',
      attrs: {
        disabled: this.infinite ? false : this.val >= this.length
      },
      class: ['next'],
      on: {
        click: function click() {
          var newVal = _this7.val += 1;

          if (newVal <= _this7.length) {
            _this7.setValuePage(newVal);
          } else if (_this7.infinite) {
            _this7.setValuePage(1);
          }
        }
      }
    }, [this.$slots.arrowNext ? this.$slots.arrowNext : h(arrow_VsIconClose)]);
    var slot = h('div', {
      staticClass: 'vs-pagination__slot'
    }, [this.$slots.default]);
    var progress = h('div', {
      staticClass: 'vs-pagination__progress'
    }, [h('div', {
      staticClass: 'progress',
      style: {
        width: this.getProgress + "%"
      }
    })]);
    return h('div', {
      staticClass: 'vs-pagination-content',
      style: (_style = {}, _style['--vs-color'] = this.color ? this.getColor : '', _style),
      class: [{
        buttonsDotted: this.buttonsDotted,
        circle: this.circle,
        square: this.square,
        disabled: this.disabled,
        notMargin: this.notMargin
      }, (_ref = {}, _ref["vs-component--primary"] = !this.danger && !this.success && !this.warn && !this.dark && !this.color, _ref), (_ref2 = {}, _ref2["vs-component--danger"] = !!this.danger, _ref2), (_ref3 = {}, _ref3["vs-component--warn"] = !!this.warn, _ref3), (_ref4 = {}, _ref4["vs-component--success"] = !!this.success, _ref4), (_ref5 = {}, _ref5["vs-component--dark"] = !!this.dark, _ref5)]
    }, [!this.onlyArrows && !this.$slots.default && active, !this.notArrows && prev, this.$slots.default && slot, !this.onlyArrows && !this.$slots.default && pagination, !this.notArrows && next, this.progress && progress]);
  };

  createClass_default()(VsPagination, [{
    key: "isMobile",
    get: function get() {
      var isMobile = false;

      if (!this.$isServer) {
        if (window.innerWidth < 600) {
          isMobile = true;
        }
      }

      return isMobile;
    }
  }, {
    key: "getPages",
    get: function get() {
      var length = Number(this.length);
      var max = this.isMobile ? 5 : this.max;
      var even = max % 2 === 0 ? 1 : 0;
      var prevRange = Math.floor(max / 2);
      var nextRange = length - prevRange + 1 + even;

      if (this.value >= prevRange && this.value <= nextRange && !this.buttonsDotted) {
        var start = this.value - prevRange + 2;
        var end = this.value + prevRange - 2 - even;
        return this.renderButtons([1, '<...'].concat(this.getButtons(start, end), ['...>', this.length]));
      } else if (!this.buttonsDotted && this.length > 6) {
        return this.renderButtons([].concat(this.getButtons(1, prevRange), ['...>'], this.getButtons(nextRange, length)));
      } else if (this.buttonsDotted || this.length <= 6) {
        return this.renderButtons([].concat(this.getButtons(1, this.length == 0 ? 1 : this.length)));
      }

      return [];
    }
  }, {
    key: "getProgress",
    get: function get() {
      var percent = 0;
      percent = this.value * 100 / this.length;
      return percent;
    }
  }]);

  return VsPagination;
}(component_VsComponent), VsPagination_temp), (VsPagination_descriptor = applyDecoratedDescriptor_default()(VsPagination_class2.prototype, "value", [VsPagination_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsPagination_descriptor2 = applyDecoratedDescriptor_default()(VsPagination_class2.prototype, "infinite", [VsPagination_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsPagination_descriptor3 = applyDecoratedDescriptor_default()(VsPagination_class2.prototype, "progress", [VsPagination_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsPagination_descriptor4 = applyDecoratedDescriptor_default()(VsPagination_class2.prototype, "notMargin", [VsPagination_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsPagination_descriptor5 = applyDecoratedDescriptor_default()(VsPagination_class2.prototype, "buttonsDotted", [VsPagination_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsPagination_descriptor6 = applyDecoratedDescriptor_default()(VsPagination_class2.prototype, "notArrows", [VsPagination_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsPagination_descriptor7 = applyDecoratedDescriptor_default()(VsPagination_class2.prototype, "onlyArrows", [VsPagination_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsPagination_descriptor8 = applyDecoratedDescriptor_default()(VsPagination_class2.prototype, "circle", [VsPagination_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsPagination_descriptor9 = applyDecoratedDescriptor_default()(VsPagination_class2.prototype, "square", [VsPagination_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsPagination_descriptor10 = applyDecoratedDescriptor_default()(VsPagination_class2.prototype, "disabled", [VsPagination_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsPagination_descriptor11 = applyDecoratedDescriptor_default()(VsPagination_class2.prototype, "disabledItems", [VsPagination_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsPagination_descriptor12 = applyDecoratedDescriptor_default()(VsPagination_class2.prototype, "loadingItems", [VsPagination_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsPagination_descriptor13 = applyDecoratedDescriptor_default()(VsPagination_class2.prototype, "length", [VsPagination_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsPagination_descriptor14 = applyDecoratedDescriptor_default()(VsPagination_class2.prototype, "max", [VsPagination_dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsPagination_descriptor15 = applyDecoratedDescriptor_default()(VsPagination_class2.prototype, "dottedNumber", [VsPagination_dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), applyDecoratedDescriptor_default()(VsPagination_class2.prototype, "handleLength", [VsPagination_dec16], Object.getOwnPropertyDescriptor(VsPagination_class2.prototype, "handleLength"), VsPagination_class2.prototype), applyDecoratedDescriptor_default()(VsPagination_class2.prototype, "handleValue", [VsPagination_dec17], Object.getOwnPropertyDescriptor(VsPagination_class2.prototype, "handleValue"), VsPagination_class2.prototype)), VsPagination_class2)) || VsPagination_class);

// CONCATENATED MODULE: ./src/components/vsPagination/Base/index.ts



VsPagination_VsPagination.install = function (vue) {
  vue.component('vs-pagination', VsPagination_VsPagination);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsPagination_VsPagination.install(window.Vue);
}

/* harmony default export */ var vsPagination_Base = (VsPagination_VsPagination);
// EXTERNAL MODULE: ./src/components/vsTable/Base/style.sass
var vsTable_Base_style = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/vsTable/Base/VsTable.ts







var VsTable_dec, VsTable_dec2, VsTable_dec3, VsTable_class, VsTable_class2, VsTable_descriptor, VsTable_descriptor2, VsTable_descriptor3, VsTable_temp;




var VsTable_VsTable = (VsTable_dec = Prop({}), VsTable_dec2 = Prop({
  default: false,
  type: Boolean
}), VsTable_dec3 = Prop({
  default: false,
  type: Boolean
}), vue_class_component_esm(VsTable_class = (VsTable_class2 = (VsTable_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsTable, _VsComponent);

  function VsTable() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;
    _this.colspan = 0;

    initializerDefineProperty_default()(_this, "value", VsTable_descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "striped", VsTable_descriptor2, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "loading", VsTable_descriptor3, assertThisInitialized_default()(_this));

    return _this;
  }

  var _proto = VsTable.prototype;

  // @Prop({ default: false, type: Boolean }) multiple: boolean
  _proto.mounted = function mounted() {
    var tds = this.$refs.thead.querySelectorAll('th');
    this.colspan = tds.length;
  };

  _proto.selected = function selected(val) {
    if (this.isMultipleSelected) {
      this.selectedMultiple(val);
    } else {
      this.$emit('input', val);
    }
  };

  _proto.selectedMultiple = function selectedMultiple(val) {
    var newVal = this.value;

    if (this.value.includes(val)) {
      newVal.splice(this.value.indexOf(val), 1);
    } else {
      newVal.push(val);
    }

    this.$emit('input', newVal);
  };

  _proto.render = function render(h) {
    var footer = h('footer', {
      staticClass: 'vs-table__footer'
    }, [this.$slots.footer]);
    var header = h('header', {
      staticClass: 'vs-table__header'
    }, [this.$slots.header]);
    var thead = h('thead', {
      ref: 'thead',
      staticClass: 'vs-table__thead'
    }, [this.$slots.thead]);
    var notFound = h('tbody', {
      staticClass: 'vs-table_not-found'
    }, [h('tr', [h('td', {
      attrs: {
        colspan: this.colspan
      }
    }, [this.$slots.notFound || 'No matching records found'])])]);
    var tbody = h('tbody', {
      staticClass: 'vs-table__tbody'
    }, [this.$slots.tbody]);
    var table = h('div', {
      staticClass: 'vs-table',
      class: {
        isSelectedValue: this.value,
        striped: this.striped,
        isMultipleSelected: this.isMultipleSelected
      }
    }, [h('table', {}, [thead, tbody, notFound])]);
    return h('div', {
      staticClass: 'vs-table-content'
    }, [this.$slots.header && header, table, this.$slots.footer && footer]);
  };

  createClass_default()(VsTable, [{
    key: "isMultipleSelected",
    get: function get() {
      return lodash["isArray"](this.value);
    }
  }]);

  return VsTable;
}(component_VsComponent), VsTable_temp), (VsTable_descriptor = applyDecoratedDescriptor_default()(VsTable_class2.prototype, "value", [VsTable_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsTable_descriptor2 = applyDecoratedDescriptor_default()(VsTable_class2.prototype, "striped", [VsTable_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsTable_descriptor3 = applyDecoratedDescriptor_default()(VsTable_class2.prototype, "loading", [VsTable_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), VsTable_class2)) || VsTable_class);

// CONCATENATED MODULE: ./src/components/vsTable/Base/index.ts



VsTable_VsTable.install = function (vue) {
  vue.component('vs-table', VsTable_VsTable);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsTable_VsTable.install(window.Vue);
}

/* harmony default export */ var vsTable_Base = (VsTable_VsTable);
// EXTERNAL MODULE: ./src/components/vsTable/Tr/style.sass
var Tr_style = __webpack_require__(29);

// CONCATENATED MODULE: ./src/components/vsTable/Tr/vsTableExpand.ts






var vsTableExpand_dec, vsTableExpand_dec2, vsTableExpand_class, vsTableExpand_class2, vsTableExpand_descriptor, vsTableExpand_temp;



var vsTableExpand_VsTableTr = (vsTableExpand_dec = Prop({}), vsTableExpand_dec2 = Watch('hidden'), vue_class_component_esm(vsTableExpand_class = (vsTableExpand_class2 = (vsTableExpand_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsTableTr, _VsComponent);

  function VsTableTr() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;

    initializerDefineProperty_default()(_this, "colspan", vsTableExpand_descriptor, assertThisInitialized_default()(_this));

    _this.hidden = true;
    return _this;
  }

  var _proto = VsTableTr.prototype;

  _proto.handleChangeHidden = function handleChangeHidden(val) {
    var _this2 = this;

    if (val) {
      setTimeout(function () {
        _this2.$el.parentNode.removeChild(_this2.$el);

        _this2.$destroy();
      }, 300);
    } else {
      this.$nextTick(function () {
        var content = _this2.$refs.content;
        content.style.height = content.scrollHeight + "px";
      });
    }
  };

  _proto.render = function render(h) {
    var subContent = h('div', {
      staticClass: 'vs-table__expand__td__content__sub'
    }, [this.$slots.default]);
    var content = h('div', {
      staticClass: 'vs-table__expand__td__content',
      ref: 'content'
    }, [subContent]);
    var td = h('td', {
      staticClass: 'vs-table__expand__td',
      attrs: {
        colspan: this.colspan
      }
    }, [content]);
    var expand = h('tr', {
      staticClass: 'vs-table__tr__expand'
    }, [td]);
    return h('transition', {
      props: {
        name: 'fade-expand'
      }
    }, [!this.hidden && expand]);
  };

  return VsTableTr;
}(component_VsComponent), vsTableExpand_temp), (vsTableExpand_descriptor = applyDecoratedDescriptor_default()(vsTableExpand_class2.prototype, "colspan", [vsTableExpand_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), applyDecoratedDescriptor_default()(vsTableExpand_class2.prototype, "handleChangeHidden", [vsTableExpand_dec2], Object.getOwnPropertyDescriptor(vsTableExpand_class2.prototype, "handleChangeHidden"), vsTableExpand_class2.prototype)), vsTableExpand_class2)) || vsTableExpand_class);

// CONCATENATED MODULE: ./src/components/vsTable/Tr/VsTableTr.ts






var VsTableTr_dec, VsTableTr_dec2, VsTableTr_dec3, VsTableTr_dec4, VsTableTr_dec5, VsTableTr_class, VsTableTr_class2, VsTableTr_descriptor, VsTableTr_descriptor2, VsTableTr_descriptor3, VsTableTr_descriptor4, VsTableTr_temp;





var VsTableTr_VsTableTr = (VsTableTr_dec = Prop({}), VsTableTr_dec2 = Prop({
  type: Boolean,
  default: false
}), VsTableTr_dec3 = Prop({
  type: Boolean,
  default: false
}), VsTableTr_dec4 = Prop({
  type: Boolean,
  default: false
}), VsTableTr_dec5 = Watch('data'), vue_class_component_esm(VsTableTr_class = (VsTableTr_class2 = (VsTableTr_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsTableTr, _VsComponent);

  function VsTableTr() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;

    initializerDefineProperty_default()(_this, "data", VsTableTr_descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "isSelected", VsTableTr_descriptor2, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "notClickSelected", VsTableTr_descriptor3, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "openExpandOnlyTd", VsTableTr_descriptor4, assertThisInitialized_default()(_this));

    _this.expand = false;
    _this.instanceExpand = null;
    return _this;
  }

  var _proto = VsTableTr.prototype;

  _proto.insertAfter = function insertAfter(element) {
    if (this.$el.nextSibling) {
      this.$el.parentNode.insertBefore(element, this.$el.nextSibling);
    } else {
      this.$el.parentNode.appendChild(element);
    }
  };

  _proto.handleChangeData = function handleChangeData() {
    this.$el.style.removeProperty("--vs-color");

    if (this.instanceExpand) {
      this.instanceExpand.$data.hidden = true;
      this.instanceExpand = null; // this.expand = false
    }
  };

  _proto.handleClickHasExpand = function handleClickHasExpand(h) {
    if (this.instanceExpand) {
      this.instanceExpand.$data.hidden = !this.instanceExpand.$data.hidden;
      this.instanceExpand = null; // this.expand = false
    } else {
      var colspan = this.$parent.$el.querySelectorAll('thead th').length;
      var trExpand = external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend(vsTableExpand_VsTableTr);
      this.instanceExpand = new trExpand();
      this.instanceExpand.$props.colspan = colspan;
      this.instanceExpand.$slots.default = this.$slots.expand;
      this.instanceExpand.vm = this.instanceExpand.$mount();
      this.instanceExpand.$data.hidden = false;
      this.insertAfter(this.instanceExpand.vm.$el); // this.expand = true
    }
  };

  _proto.render = function render(h) {
    var _this2 = this;

    return h('tr', {
      staticClass: 'vs-table__tr',
      on: {
        click: function click(evt) {
          if (_this2.$slots.expand) {
            if ((_this2.openExpandOnlyTd ? evt.target.nodeName == 'TD' : true) && !evt.target.className.includes('isEdit')) {
              _this2.handleClickHasExpand(h);
            }
          }

          if (evt.target.nodeName == 'TD' && !_this2.notClickSelected) {
            _this2.$parent.selected(_this2.data);

            _this2.$emit('selected', _this2.data);
          }

          _this2.$emit('click', evt);
        }
      },
      class: {
        selected: this.isSelected,
        isExpand: !!this.instanceExpand,
        expand: this.$slots.expand
      }
    }, this.$slots.default);
  };

  return VsTableTr;
}(component_VsComponent), VsTableTr_temp), (VsTableTr_descriptor = applyDecoratedDescriptor_default()(VsTableTr_class2.prototype, "data", [VsTableTr_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsTableTr_descriptor2 = applyDecoratedDescriptor_default()(VsTableTr_class2.prototype, "isSelected", [VsTableTr_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsTableTr_descriptor3 = applyDecoratedDescriptor_default()(VsTableTr_class2.prototype, "notClickSelected", [VsTableTr_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsTableTr_descriptor4 = applyDecoratedDescriptor_default()(VsTableTr_class2.prototype, "openExpandOnlyTd", [VsTableTr_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), applyDecoratedDescriptor_default()(VsTableTr_class2.prototype, "handleChangeData", [VsTableTr_dec5], Object.getOwnPropertyDescriptor(VsTableTr_class2.prototype, "handleChangeData"), VsTableTr_class2.prototype)), VsTableTr_class2)) || VsTableTr_class);

// CONCATENATED MODULE: ./src/components/vsTable/Tr/index.ts



VsTableTr_VsTableTr.install = function (vue) {
  vue.component('vs-tr', VsTableTr_VsTableTr);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsTableTr_VsTableTr.install(window.Vue);
}

/* harmony default export */ var Tr = (VsTableTr_VsTableTr);
// EXTERNAL MODULE: ./src/components/vsTable/Th/style.sass
var Th_style = __webpack_require__(30);

// CONCATENATED MODULE: ./src/components/vsTable/Th/VsTableTh.ts







var VsTableTh_dec, VsTableTh_class, VsTableTh_class2, VsTableTh_descriptor, VsTableTh_temp;

function VsTableTh_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function VsTableTh_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { VsTableTh_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { VsTableTh_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var VsTableTh_VsTableTh = (VsTableTh_dec = Prop({
  default: false,
  type: Boolean
}), vue_class_component_esm(VsTableTh_class = (VsTableTh_class2 = (VsTableTh_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsTableTh, _VsComponent);

  function VsTableTh() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;

    initializerDefineProperty_default()(_this, "sort", VsTableTh_descriptor, assertThisInitialized_default()(_this));

    return _this;
  }

  var _proto = VsTableTh.prototype;

  _proto.mounted = function mounted() {
    this.$el.style.width = this.$el.scrollWidth + "px";
  };

  _proto.render = function render(h) {
    var icon2 = h(arrow_VsIconClose, {
      staticClass: 'icon-sort-2'
    });
    var icon = h(arrow_VsIconClose, {
      staticClass: 'icon-sort-1'
    });
    var icons = h('div', {
      staticClass: 'vs-table__th__content__icons'
    }, [icon, icon2]);
    var content = h('div', {
      staticClass: 'vs-table__th__content'
    }, [this.$slots.default, this.sort && icons]);
    return h('th', {
      staticClass: 'vs-table__th',
      class: {
        sort: this.sort
      },
      on: VsTableTh_objectSpread({}, this.$listeners)
    }, [content]);
  };

  return VsTableTh;
}(component_VsComponent), VsTableTh_temp), (VsTableTh_descriptor = applyDecoratedDescriptor_default()(VsTableTh_class2.prototype, "sort", [VsTableTh_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), VsTableTh_class2)) || VsTableTh_class);

// CONCATENATED MODULE: ./src/components/vsTable/Th/index.ts



VsTableTh_VsTableTh.install = function (vue) {
  vue.component('vs-th', VsTableTh_VsTableTh);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsTableTh_VsTableTh.install(window.Vue);
}

/* harmony default export */ var Th = (VsTableTh_VsTableTh);
// EXTERNAL MODULE: ./src/components/vsTable/Td/style.sass
var Td_style = __webpack_require__(31);

// CONCATENATED MODULE: ./src/components/vsTable/Td/VsTableTd.ts






var VsTableTd_dec, VsTableTd_dec2, VsTableTd_class, VsTableTd_class2, VsTableTd_descriptor, VsTableTd_descriptor2, VsTableTd_temp;



var VsTableTd_VsTableTd = (VsTableTd_dec = Prop({
  type: Boolean
}), VsTableTd_dec2 = Prop({
  type: Boolean
}), vue_class_component_esm(VsTableTd_class = (VsTableTd_class2 = (VsTableTd_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsTableTd, _VsComponent);

  function VsTableTd() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;

    initializerDefineProperty_default()(_this, "checkbox", VsTableTd_descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "edit", VsTableTd_descriptor2, assertThisInitialized_default()(_this));

    return _this;
  }

  var _proto = VsTableTd.prototype;

  _proto.render = function render(h) {
    var _this2 = this;

    return h('td', {
      staticClass: 'vs-table__td',
      on: {
        click: function click(evt) {
          _this2.$emit('click', evt);
        }
      },
      class: {
        isCheckbox: this.checkbox,
        isEdit: this.edit
      }
    }, this.$slots.default);
  };

  return VsTableTd;
}(component_VsComponent), VsTableTd_temp), (VsTableTd_descriptor = applyDecoratedDescriptor_default()(VsTableTd_class2.prototype, "checkbox", [VsTableTd_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsTableTd_descriptor2 = applyDecoratedDescriptor_default()(VsTableTd_class2.prototype, "edit", [VsTableTd_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), VsTableTd_class2)) || VsTableTd_class);

// CONCATENATED MODULE: ./src/components/vsTable/Td/index.ts



VsTableTd_VsTableTd.install = function (vue) {
  vue.component('vs-td', VsTableTd_VsTableTd);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsTableTd_VsTableTd.install(window.Vue);
}

/* harmony default export */ var Td = (VsTableTd_VsTableTd);
// EXTERNAL MODULE: ./src/components/vsNavbar/Base/style.sass
var vsNavbar_Base_style = __webpack_require__(32);

// CONCATENATED MODULE: ./src/components/vsNavbar/Base/VsNavbar.ts






var VsNavbar_dec, VsNavbar_dec2, VsNavbar_dec3, VsNavbar_dec4, VsNavbar_dec5, VsNavbar_dec6, VsNavbar_dec7, VsNavbar_dec8, VsNavbar_dec9, VsNavbar_dec10, VsNavbar_dec11, VsNavbar_dec12, VsNavbar_dec13, VsNavbar_dec14, VsNavbar_dec15, VsNavbar_class, VsNavbar_class2, VsNavbar_descriptor, VsNavbar_descriptor2, VsNavbar_descriptor3, VsNavbar_descriptor4, VsNavbar_descriptor5, VsNavbar_descriptor6, VsNavbar_descriptor7, VsNavbar_descriptor8, VsNavbar_descriptor9, VsNavbar_descriptor10, VsNavbar_descriptor11, VsNavbar_descriptor12, VsNavbar_temp;



var VsNavbar_VsNavbar = (VsNavbar_dec = Prop({
  default: false,
  type: Boolean
}), VsNavbar_dec2 = Prop({
  default: false,
  type: Boolean
}), VsNavbar_dec3 = Prop({
  default: false,
  type: Boolean
}), VsNavbar_dec4 = Prop({
  default: false,
  type: Boolean
}), VsNavbar_dec5 = Prop({
  default: false,
  type: Boolean
}), VsNavbar_dec6 = Prop({
  default: false,
  type: Boolean
}), VsNavbar_dec7 = Prop({
  default: false,
  type: Boolean
}), VsNavbar_dec8 = Prop({
  default: false,
  type: Boolean
}), VsNavbar_dec9 = Prop({
  default: false,
  type: Boolean
}), VsNavbar_dec10 = Prop({
  default: false,
  type: Boolean
}), VsNavbar_dec11 = Prop({
  default: false,
  type: Boolean
}), VsNavbar_dec12 = Prop({
  default: null
}), VsNavbar_dec13 = Watch('hideScroll'), VsNavbar_dec14 = Watch('paddingScroll'), VsNavbar_dec15 = Watch('shadowScroll'), vue_class_component_esm(VsNavbar_class = (VsNavbar_class2 = (VsNavbar_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsNavbar, _VsComponent);

  function VsNavbar() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;

    initializerDefineProperty_default()(_this, "fixed", VsNavbar_descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "shadow", VsNavbar_descriptor2, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "shadowScroll", VsNavbar_descriptor3, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "hideScroll", VsNavbar_descriptor4, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "textWhite", VsNavbar_descriptor5, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "square", VsNavbar_descriptor6, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "paddingScroll", VsNavbar_descriptor7, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "notLine", VsNavbar_descriptor8, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "leftCollapsed", VsNavbar_descriptor9, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "centerCollapsed", VsNavbar_descriptor10, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "rightCollapsed", VsNavbar_descriptor11, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "targetScroll", VsNavbar_descriptor12, assertThisInitialized_default()(_this));

    _this.leftLine = 0;
    _this.widthLine = 0;
    _this.scrollTop = 0;
    _this.collapsedWidth = 0;
    _this.hidden = false;
    _this.shadowActive = false;
    _this.paddingScrollActive = false;
    _this.lineNotTransition = false;
    _this.collapsedForced = false;
    return _this;
  }

  var _proto = VsNavbar.prototype;

  _proto.handleShadowScroll = function handleShadowScroll() {
    this.handleScroll();
  };

  _proto.setModel = function setModel(id) {
    this.$emit('input', id);
  };

  _proto.setLeftLine = function setLeftLine(left, transition) {
    var _this2 = this;

    if (transition === void 0) {
      transition = true;
    }

    if (!transition) {
      this.lineNotTransition = true;
    } else {
      this.lineNotTransition = false;
    }

    this.$nextTick(function () {
      _this2.leftLine = left;
    });
  };

  _proto.setWidthLine = function setWidthLine(width) {
    var _this3 = this;

    this.$nextTick(function () {
      _this3.widthLine = width;
    });
  };

  _proto.scroll = function scroll(evt) {
    var scrollTop = this.targetScroll ? document.querySelector(this.targetScroll).scrollTop : window.pageYOffset;

    if (this.hideScroll) {
      if (Math.sign(scrollTop - this.scrollTop) === 1) {
        this.hidden = true;
      } else {
        this.hidden = false;
      }
    }

    if (this.shadowScroll) {
      if (scrollTop > 0) {
        this.shadowActive = true;
      } else {
        this.shadowActive = false;
      }
    }

    if (this.paddingScroll) {
      if (scrollTop > 0) {
        this.paddingScrollActive = true;
      } else {
        this.paddingScrollActive = false;
      }
    }

    this.scrollTop = scrollTop;
  };

  _proto.handleScroll = function handleScroll() {
    if (this.hideScroll || this.shadowScroll || this.paddingScroll) {
      if (this.targetScroll) {
        var scrollElement = document.querySelector(this.targetScroll);
        scrollElement.addEventListener('scroll', this.scroll);
      } else {
        window.addEventListener('scroll', this.scroll);
      }
    }
  };

  _proto.handleResize = function handleResize() {
    var active = this.$el.querySelector('.vs-navbar__item.active');

    if (active) {
      this.setLeftLine(active.offsetLeft, false);
    } else {
      this.widthLine = 0;
    }

    var navbar = this.$el;

    if (this.leftCollapsed || this.centerCollapsed || this.rightCollapsed) {
      if (navbar.offsetWidth < this.collapsedWidth) {
        this.collapsedForced = true;
      }
    }

    if (this.collapsedForced) {
      this.$emit('collapsed', true);
    } else {
      this.$emit('collapsed', false);
    }

    if (navbar.offsetWidth < this.collapsedWidth) {
      this.$emit('collapsed', true);
    } else {
      this.$emit('collapsed', false);
      this.collapsedForced = false;
    }
  };

  _proto.mounted = function mounted() {
    var _this4 = this;

    setTimeout(function () {
      var left = _this4.$refs.left;
      var center = _this4.$refs.center;
      var right = _this4.$refs.right;
      _this4.collapsedWidth = left.offsetWidth + center.offsetWidth + right.offsetWidth + 150;
      var navbar = _this4.$el;

      if (navbar.offsetWidth < _this4.collapsedWidth) {
        _this4.collapsedForced = true;

        _this4.$emit('collapsed', true);

        _this4.widthLine = 0;

        _this4.handleResize();
      }
    }, 150);
    this.handleScroll();
    window.addEventListener('resize', this.handleResize);
  };

  _proto.render = function render(h) {
    var _style, _ref, _ref2, _ref3, _ref4, _ref5, _ref6;

    var left = h('div', {
      staticClass: 'vs-navbar__left',
      ref: 'left'
    }, [this.$slots.left]);
    var center = h('div', {
      staticClass: 'vs-navbar__center',
      ref: 'center'
    }, [this.$slots.default]);
    var right = h('div', {
      staticClass: 'vs-navbar__right',
      ref: 'right'
    }, [this.$slots.right]);
    var line = h('div', {
      staticClass: 'vs-navbar__line',
      class: {
        notTransition: this.lineNotTransition
      },
      style: {
        left: this.leftLine + "px",
        width: this.widthLine + "px"
      }
    });
    var navbar = h('div', {
      staticClass: 'vs-navbar'
    }, [(this.leftCollapsed ? !this.collapsedForced : true) && left, (this.centerCollapsed ? !this.collapsedForced : true) && center, (this.rightCollapsed ? !this.collapsedForced : true) && right]);
    return h('div', {
      staticClass: 'vs-navbar-content',
      style: (_style = {}, _style['--vs-color'] = this.color ? this.getColor : '', _style),
      class: [{
        fixed: this.fixed,
        shadow: this.shadow,
        hidden: this.hidden,
        shadowActive: this.shadowActive,
        textWhite: this.textWhite,
        paddingScroll: this.paddingScroll,
        paddingScrollActive: this.paddingScrollActive,
        vsNavbarSquare: this.square
      }, (_ref = {}, _ref["vs-component--primary"] = !!this.primary, _ref), (_ref2 = {}, _ref2["vs-component--danger"] = !!this.danger, _ref2), (_ref3 = {}, _ref3["vs-component--warn"] = !!this.warn, _ref3), (_ref4 = {}, _ref4["vs-component--success"] = !!this.success, _ref4), (_ref5 = {}, _ref5["vs-component--dark"] = !!this.dark, _ref5), (_ref6 = {}, _ref6["vs-component--is-color"] = !!this.isColor, _ref6)]
    }, [navbar, !this.notLine && line]);
  };

  return VsNavbar;
}(component_VsComponent), VsNavbar_temp), (VsNavbar_descriptor = applyDecoratedDescriptor_default()(VsNavbar_class2.prototype, "fixed", [VsNavbar_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsNavbar_descriptor2 = applyDecoratedDescriptor_default()(VsNavbar_class2.prototype, "shadow", [VsNavbar_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsNavbar_descriptor3 = applyDecoratedDescriptor_default()(VsNavbar_class2.prototype, "shadowScroll", [VsNavbar_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsNavbar_descriptor4 = applyDecoratedDescriptor_default()(VsNavbar_class2.prototype, "hideScroll", [VsNavbar_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsNavbar_descriptor5 = applyDecoratedDescriptor_default()(VsNavbar_class2.prototype, "textWhite", [VsNavbar_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsNavbar_descriptor6 = applyDecoratedDescriptor_default()(VsNavbar_class2.prototype, "square", [VsNavbar_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsNavbar_descriptor7 = applyDecoratedDescriptor_default()(VsNavbar_class2.prototype, "paddingScroll", [VsNavbar_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsNavbar_descriptor8 = applyDecoratedDescriptor_default()(VsNavbar_class2.prototype, "notLine", [VsNavbar_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsNavbar_descriptor9 = applyDecoratedDescriptor_default()(VsNavbar_class2.prototype, "leftCollapsed", [VsNavbar_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsNavbar_descriptor10 = applyDecoratedDescriptor_default()(VsNavbar_class2.prototype, "centerCollapsed", [VsNavbar_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsNavbar_descriptor11 = applyDecoratedDescriptor_default()(VsNavbar_class2.prototype, "rightCollapsed", [VsNavbar_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsNavbar_descriptor12 = applyDecoratedDescriptor_default()(VsNavbar_class2.prototype, "targetScroll", [VsNavbar_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), applyDecoratedDescriptor_default()(VsNavbar_class2.prototype, "handleShadowScroll", [VsNavbar_dec13, VsNavbar_dec14, VsNavbar_dec15], Object.getOwnPropertyDescriptor(VsNavbar_class2.prototype, "handleShadowScroll"), VsNavbar_class2.prototype)), VsNavbar_class2)) || VsNavbar_class);

// CONCATENATED MODULE: ./src/components/vsNavbar/Base/index.ts



VsNavbar_VsNavbar.install = function (vue) {
  vue.component('vs-navbar', VsNavbar_VsNavbar);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsNavbar_VsNavbar.install(window.Vue);
}

/* harmony default export */ var vsNavbar_Base = (VsNavbar_VsNavbar);
// EXTERNAL MODULE: ./src/components/vsNavbar/Item/style.sass
var Item_style = __webpack_require__(33);

// CONCATENATED MODULE: ./src/components/vsNavbar/Item/VsNavbarItem.ts






var VsNavbarItem_dec, VsNavbarItem_dec2, VsNavbarItem_dec3, VsNavbarItem_dec4, VsNavbarItem_dec5, VsNavbarItem_dec6, VsNavbarItem_class, VsNavbarItem_class2, VsNavbarItem_descriptor, VsNavbarItem_descriptor2, VsNavbarItem_descriptor3, VsNavbarItem_descriptor4, VsNavbarItem_descriptor5, VsNavbarItem_temp;



var VsNavbarItem_VsNavbarItem = (VsNavbarItem_dec = Prop({
  default: false,
  type: Boolean
}), VsNavbarItem_dec2 = Prop({}), VsNavbarItem_dec3 = Prop({}), VsNavbarItem_dec4 = Prop({}), VsNavbarItem_dec5 = Prop({
  default: '_blank'
}), VsNavbarItem_dec6 = Watch('active'), vue_class_component_esm(VsNavbarItem_class = (VsNavbarItem_class2 = (VsNavbarItem_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsNavbarItem, _VsComponent);

  function VsNavbarItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;

    initializerDefineProperty_default()(_this, "active", VsNavbarItem_descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "to", VsNavbarItem_descriptor2, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "id", VsNavbarItem_descriptor3, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "href", VsNavbarItem_descriptor4, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "target", VsNavbarItem_descriptor5, assertThisInitialized_default()(_this));

    return _this;
  }

  var _proto = VsNavbarItem.prototype;

  _proto.handleWatchActive = function handleWatchActive() {
    this.handleLine();
  };

  _proto.handleLine = function handleLine() {
    var _this2 = this;

    this.$nextTick(function () {
      if (_this2.active) {
        var parent = _this2.$parent;
        var left = _this2.$el.offsetLeft;
        parent.setLeftLine(left);
        var width = _this2.$el.scrollWidth;
        parent.setWidthLine(width);
      }
    });
  };

  _proto.handleClick = function handleClick() {
    if (this.to) {
      this.$router.push(this.to);
    } else if (this.href) {
      window.open(this.href, this.target);
    }
  };

  _proto.handleActive = function handleActive() {
    var parent = this.$parent;
    parent.setModel(this.id);
    this.handleLine();
  };

  _proto.mounted = function mounted() {
    var _this3 = this;

    setTimeout(function () {
      if (_this3.active) {
        var el = _this3.$el;
        var parent = _this3.$parent;
        var left = el.offsetLeft;
        parent.setLeftLine(left);
        var width = el.scrollWidth;
        parent.setWidthLine(width);
      }
    }, 150);
  };

  _proto.render = function render(h) {
    var _this4 = this;

    return h('button', {
      staticClass: 'vs-navbar__item',
      class: {
        active: this.active
      },
      on: {
        click: function click(evt) {
          _this4.$emit('click', evt);

          _this4.handleLine();

          _this4.handleClick();

          _this4.handleActive();
        }
      }
    }, this.$slots.default);
  };

  return VsNavbarItem;
}(component_VsComponent), VsNavbarItem_temp), (VsNavbarItem_descriptor = applyDecoratedDescriptor_default()(VsNavbarItem_class2.prototype, "active", [VsNavbarItem_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsNavbarItem_descriptor2 = applyDecoratedDescriptor_default()(VsNavbarItem_class2.prototype, "to", [VsNavbarItem_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsNavbarItem_descriptor3 = applyDecoratedDescriptor_default()(VsNavbarItem_class2.prototype, "id", [VsNavbarItem_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsNavbarItem_descriptor4 = applyDecoratedDescriptor_default()(VsNavbarItem_class2.prototype, "href", [VsNavbarItem_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsNavbarItem_descriptor5 = applyDecoratedDescriptor_default()(VsNavbarItem_class2.prototype, "target", [VsNavbarItem_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), applyDecoratedDescriptor_default()(VsNavbarItem_class2.prototype, "handleWatchActive", [VsNavbarItem_dec6], Object.getOwnPropertyDescriptor(VsNavbarItem_class2.prototype, "handleWatchActive"), VsNavbarItem_class2.prototype)), VsNavbarItem_class2)) || VsNavbarItem_class);

// CONCATENATED MODULE: ./src/components/vsNavbar/Item/index.ts



VsNavbarItem_VsNavbarItem.install = function (vue) {
  vue.component('vs-navbar-item', VsNavbarItem_VsNavbarItem);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsNavbarItem_VsNavbarItem.install(window.Vue);
}

/* harmony default export */ var Item = (VsNavbarItem_VsNavbarItem);
// EXTERNAL MODULE: ./src/components/vsNavbar/Group/style.sass
var vsNavbar_Group_style = __webpack_require__(34);

// CONCATENATED MODULE: ./src/components/vsNavbar/Group/VsNavbarGroup.ts


var VsNavbarGroup_class;




var VsNavbarGroup_VsNavbarGroup = vue_class_component_esm(VsNavbarGroup_class =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsNavbarGroup, _VsComponent);

  function VsNavbarGroup() {
    return _VsComponent.apply(this, arguments) || this;
  }

  var _proto = VsNavbarGroup.prototype;

  _proto.setModel = function setModel(id) {
    var parent = this.$parent;
    parent.setModel(id);
  };

  _proto.setLeftLine = function setLeftLine() {
    var parent = this.$parent;
    var left = this.$el.offsetLeft;
    parent.setLeftLine(left);
    var width = this.$refs.item.scrollWidth;
    parent.setWidthLine(width);
  };

  _proto.setWidthLine = function setWidthLine() {};

  _proto.render = function render(h) {
    var item = h('button', {
      staticClass: 'vs-navbar__group__item',
      ref: 'item'
    }, [this.$slots.default]);
    var items = h('div', {
      staticClass: 'vs-navbar__group__items'
    }, [this.$slots.items]);
    return h('div', {
      staticClass: 'vs-navbar__group'
    }, [item, items]);
  };

  return VsNavbarGroup;
}(component_VsComponent)) || VsNavbarGroup_class;


// CONCATENATED MODULE: ./src/components/vsNavbar/Group/index.ts



VsNavbarGroup_VsNavbarGroup.install = function (vue) {
  vue.component('vs-navbar-group', VsNavbarGroup_VsNavbarGroup);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsNavbarGroup_VsNavbarGroup.install(window.Vue);
}

/* harmony default export */ var vsNavbar_Group = (VsNavbarGroup_VsNavbarGroup);
// EXTERNAL MODULE: ./src/components/vsSidebar/Base/style.sass
var vsSidebar_Base_style = __webpack_require__(35);

// CONCATENATED MODULE: ./src/components/vsSidebar/Base/VsSidebar.ts







var VsSidebar_dec, VsSidebar_dec2, VsSidebar_dec3, VsSidebar_dec4, VsSidebar_dec5, VsSidebar_dec6, VsSidebar_dec7, VsSidebar_dec8, VsSidebar_dec9, VsSidebar_dec10, VsSidebar_dec11, VsSidebar_dec12, VsSidebar_dec13, VsSidebar_dec14, VsSidebar_dec15, VsSidebar_dec16, VsSidebar_class, VsSidebar_class2, VsSidebar_descriptor, VsSidebar_descriptor2, VsSidebar_descriptor3, VsSidebar_descriptor4, VsSidebar_descriptor5, VsSidebar_descriptor6, VsSidebar_descriptor7, VsSidebar_descriptor8, VsSidebar_descriptor9, VsSidebar_descriptor10, VsSidebar_descriptor11, VsSidebar_descriptor12, VsSidebar_temp;




var VsSidebar_VsSidebar = (VsSidebar_dec = Prop({}), VsSidebar_dec2 = Prop({
  default: false,
  type: Boolean
}), VsSidebar_dec3 = Prop({
  default: false,
  type: Boolean
}), VsSidebar_dec4 = Prop({
  default: false,
  type: Boolean
}), VsSidebar_dec5 = Prop({
  default: false,
  type: Boolean
}), VsSidebar_dec6 = Prop({
  default: false,
  type: Boolean
}), VsSidebar_dec7 = Prop({
  default: false,
  type: Boolean
}), VsSidebar_dec8 = Prop({
  default: false,
  type: Boolean
}), VsSidebar_dec9 = Prop({
  default: false,
  type: Boolean
}), VsSidebar_dec10 = Prop({
  default: false,
  type: Boolean
}), VsSidebar_dec11 = Prop({
  default: false,
  type: Boolean
}), VsSidebar_dec12 = Prop({
  default: 'background',
  type: String
}), VsSidebar_dec13 = Watch('open'), VsSidebar_dec14 = Watch('reduce'), VsSidebar_dec15 = Watch('reduceInternal'), VsSidebar_dec16 = Watch('background'), vue_class_component_esm(VsSidebar_class = (VsSidebar_class2 = (VsSidebar_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsSidebar, _VsComponent);

  function VsSidebar() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;

    initializerDefineProperty_default()(_this, "value", VsSidebar_descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "reduce", VsSidebar_descriptor2, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "hoverExpand", VsSidebar_descriptor3, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "open", VsSidebar_descriptor4, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "notLineActive", VsSidebar_descriptor5, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "square", VsSidebar_descriptor6, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "textWhite", VsSidebar_descriptor7, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "notShadow", VsSidebar_descriptor8, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "relative", VsSidebar_descriptor9, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "absolute", VsSidebar_descriptor10, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "right", VsSidebar_descriptor11, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "background", VsSidebar_descriptor12, assertThisInitialized_default()(_this));

    _this.staticWidth = 260;
    _this.forceExpand = false;
    _this.reduceInternal = false;
    return _this;
  }

  var _proto = VsSidebar.prototype;

  _proto.handleOpen = function handleOpen(val) {
    var _this2 = this;

    if (val) {
      setTimeout(function () {
        window.addEventListener('click', _this2.clickCloseSidebar);
      }, 200);
    } else {
      window.removeEventListener('click', this.clickCloseSidebar);
    }
  };

  _proto.handleReduce = function handleReduce(val) {
    this.reduceInternal = val;
    var el = this.$el;

    if (val) {
      el.style.width = '50px';
    } else {
      el.style.width = this.staticWidth + "px";
    }
  };

  _proto.handleReduceInternal = function handleReduceInternal(val) {
    var el = this.$el;

    if (val) {
      el.style.width = '50px';
    } else {
      el.style.width = this.staticWidth + "px";
    }
  };

  _proto.handleBackground = function handleBackground() {
    util_setColor('background', this.background, this.$el, true);
  };

  _proto.clickCloseSidebar = function clickCloseSidebar(evt) {
    if (!evt.target.closest('.vs-sidebar-content')) {
      this.$emit('update:open', false);
    }
  };

  _proto.handleClickItem = function handleClickItem(id) {
    this.$emit('input', id);
  };

  _proto.mounted = function mounted() {
    this.staticWidth = this.$el.offsetWidth;
    this.reduceInternal = this.reduce;

    if (this.background !== 'background') {
      util_setColor('background', this.background, this.$el, true);
    }

    if (this.textWhite) {
      util_setColor('text', '#fff', this.$el, true);
    }
  };

  _proto.render = function render(h) {
    var _style,
        _ref,
        _ref2,
        _ref3,
        _ref4,
        _ref5,
        _ref6,
        _this3 = this;

    var logo = h('div', {
      staticClass: 'vs-sidebar__logo'
    }, [this.$slots.logo]);
    var header = h('div', {
      staticClass: 'vs-sidebar__header'
    }, [this.$slots.header]);
    var footer = h('div', {
      staticClass: 'vs-sidebar__footer'
    }, [this.$slots.footer]);
    var sidebar = h('div', {
      staticClass: 'vs-sidebar'
    }, [this.$slots.default]);
    return h('div', {
      staticClass: 'vs-sidebar-content',
      style: (_style = {}, _style['--vs-color'] = this.color ? this.getColor : '', _style),
      class: [{
        reduce: this.reduceInternal,
        open: this.open,
        notLineActive: this.notLineActive,
        square: this.square,
        notShadow: this.notShadow,
        textWhite: this.textWhite,
        relative: this.relative,
        absolute: this.absolute,
        right: this.right
      }, (_ref = {}, _ref["vs-component--primary"] = !!this.primary, _ref), (_ref2 = {}, _ref2["vs-component--danger"] = !!this.danger, _ref2), (_ref3 = {}, _ref3["vs-component--warn"] = !!this.warn, _ref3), (_ref4 = {}, _ref4["vs-component--success"] = !!this.success, _ref4), (_ref5 = {}, _ref5["vs-component--dark"] = !!this.dark, _ref5), (_ref6 = {}, _ref6["vs-component--is-color"] = !!this.isColor, _ref6)],
      on: {
        mouseenter: function mouseenter() {
          if (_this3.hoverExpand) {
            _this3.reduceInternal = false;
          }
        },
        mouseleave: function mouseleave() {
          if (_this3.hoverExpand) {
            _this3.reduceInternal = true;
          }
        }
      }
    }, [this.$slots.logo && logo, this.$slots.header && header, sidebar, this.$slots.footer && footer]);
  };

  createClass_default()(VsSidebar, [{
    key: "getValue",
    get: function get() {
      return this.value;
    }
  }]);

  return VsSidebar;
}(component_VsComponent), VsSidebar_temp), (VsSidebar_descriptor = applyDecoratedDescriptor_default()(VsSidebar_class2.prototype, "value", [VsSidebar_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSidebar_descriptor2 = applyDecoratedDescriptor_default()(VsSidebar_class2.prototype, "reduce", [VsSidebar_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSidebar_descriptor3 = applyDecoratedDescriptor_default()(VsSidebar_class2.prototype, "hoverExpand", [VsSidebar_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSidebar_descriptor4 = applyDecoratedDescriptor_default()(VsSidebar_class2.prototype, "open", [VsSidebar_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSidebar_descriptor5 = applyDecoratedDescriptor_default()(VsSidebar_class2.prototype, "notLineActive", [VsSidebar_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSidebar_descriptor6 = applyDecoratedDescriptor_default()(VsSidebar_class2.prototype, "square", [VsSidebar_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSidebar_descriptor7 = applyDecoratedDescriptor_default()(VsSidebar_class2.prototype, "textWhite", [VsSidebar_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSidebar_descriptor8 = applyDecoratedDescriptor_default()(VsSidebar_class2.prototype, "notShadow", [VsSidebar_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSidebar_descriptor9 = applyDecoratedDescriptor_default()(VsSidebar_class2.prototype, "relative", [VsSidebar_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSidebar_descriptor10 = applyDecoratedDescriptor_default()(VsSidebar_class2.prototype, "absolute", [VsSidebar_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSidebar_descriptor11 = applyDecoratedDescriptor_default()(VsSidebar_class2.prototype, "right", [VsSidebar_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSidebar_descriptor12 = applyDecoratedDescriptor_default()(VsSidebar_class2.prototype, "background", [VsSidebar_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), applyDecoratedDescriptor_default()(VsSidebar_class2.prototype, "handleOpen", [VsSidebar_dec13], Object.getOwnPropertyDescriptor(VsSidebar_class2.prototype, "handleOpen"), VsSidebar_class2.prototype), applyDecoratedDescriptor_default()(VsSidebar_class2.prototype, "handleReduce", [VsSidebar_dec14], Object.getOwnPropertyDescriptor(VsSidebar_class2.prototype, "handleReduce"), VsSidebar_class2.prototype), applyDecoratedDescriptor_default()(VsSidebar_class2.prototype, "handleReduceInternal", [VsSidebar_dec15], Object.getOwnPropertyDescriptor(VsSidebar_class2.prototype, "handleReduceInternal"), VsSidebar_class2.prototype), applyDecoratedDescriptor_default()(VsSidebar_class2.prototype, "handleBackground", [VsSidebar_dec16], Object.getOwnPropertyDescriptor(VsSidebar_class2.prototype, "handleBackground"), VsSidebar_class2.prototype)), VsSidebar_class2)) || VsSidebar_class);

// CONCATENATED MODULE: ./src/components/vsSidebar/Base/index.ts



VsSidebar_VsSidebar.install = function (vue) {
  vue.component('vs-sidebar', VsSidebar_VsSidebar);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsSidebar_VsSidebar.install(window.Vue);
}

/* harmony default export */ var vsSidebar_Base = (VsSidebar_VsSidebar);
// EXTERNAL MODULE: ./src/components/vsSidebar/Item/style.sass
var vsSidebar_Item_style = __webpack_require__(36);

// CONCATENATED MODULE: ./src/components/vsSidebar/Item/VsSidebarItem.ts






var VsSidebarItem_dec, VsSidebarItem_dec2, VsSidebarItem_dec3, VsSidebarItem_dec4, VsSidebarItem_dec5, VsSidebarItem_dec6, VsSidebarItem_dec7, VsSidebarItem_class, VsSidebarItem_class2, VsSidebarItem_descriptor, VsSidebarItem_descriptor2, VsSidebarItem_descriptor3, VsSidebarItem_descriptor4, VsSidebarItem_descriptor5, VsSidebarItem_descriptor6, VsSidebarItem_temp;




var VsSidebarItem_VsSidebarItem = (VsSidebarItem_dec = Prop({}), VsSidebarItem_dec2 = Prop({}), VsSidebarItem_dec3 = Prop({
  default: '_blank'
}), VsSidebarItem_dec4 = Prop({
  type: String
}), VsSidebarItem_dec5 = Prop({
  type: String
}), VsSidebarItem_dec6 = Prop({
  type: Boolean
}), VsSidebarItem_dec7 = Watch('$parent.reduce'), vue_class_component_esm(VsSidebarItem_class = (VsSidebarItem_class2 = (VsSidebarItem_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsSidebarItem, _VsComponent);

  function VsSidebarItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;

    initializerDefineProperty_default()(_this, "to", VsSidebarItem_descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "href", VsSidebarItem_descriptor2, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "target", VsSidebarItem_descriptor3, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "value", VsSidebarItem_descriptor4, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "id", VsSidebarItem_descriptor5, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "arrow", VsSidebarItem_descriptor6, assertThisInitialized_default()(_this));

    return _this;
  }

  var _proto = VsSidebarItem.prototype;

  _proto.handleReduce = function handleReduce(val) {
    if (val) {
      console.log('reduce');
    }
  };

  _proto.handleClick = function handleClick() {
    if (this.to) {
      this.$router.push(this.to);
    } else if (this.href) {
      window.open(this.href, this.target);
    }
  };

  _proto.render = function render(h) {
    var _this2 = this;

    var icon = h('div', {
      staticClass: 'vs-sidebar__item__icon'
    }, [this.$slots.icon]);
    var textTooltip = h('div', {
      staticClass: 'vs-sidebar__item__text-tooltip'
    }, [this.$slots.default]);
    var text = h('div', {
      staticClass: 'vs-sidebar__item__text'
    }, [this.$slots.default]);
    var iconArrow = h(arrow_VsIconClose);
    var arrow = h('div', {
      staticClass: 'vs-sidebar__item__arrow'
    }, [this.$slots.arrow || iconArrow]);
    return h('button', {
      staticClass: 'vs-sidebar__item',
      class: {
        active: this.$parent.getValue && this.id == this.$parent.getValue,
        hasIcon: !!this.$slots.icon
      },
      on: {
        click: function click() {
          if (_this2.id) {
            _this2.$parent.handleClickItem(_this2.id);
          }

          _this2.handleClick();
        }
      }
    }, [this.$slots.icon && icon, text, textTooltip, this.$slots.arrow || this.arrow && arrow]);
  };

  return VsSidebarItem;
}(component_VsComponent), VsSidebarItem_temp), (VsSidebarItem_descriptor = applyDecoratedDescriptor_default()(VsSidebarItem_class2.prototype, "to", [VsSidebarItem_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSidebarItem_descriptor2 = applyDecoratedDescriptor_default()(VsSidebarItem_class2.prototype, "href", [VsSidebarItem_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSidebarItem_descriptor3 = applyDecoratedDescriptor_default()(VsSidebarItem_class2.prototype, "target", [VsSidebarItem_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSidebarItem_descriptor4 = applyDecoratedDescriptor_default()(VsSidebarItem_class2.prototype, "value", [VsSidebarItem_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSidebarItem_descriptor5 = applyDecoratedDescriptor_default()(VsSidebarItem_class2.prototype, "id", [VsSidebarItem_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsSidebarItem_descriptor6 = applyDecoratedDescriptor_default()(VsSidebarItem_class2.prototype, "arrow", [VsSidebarItem_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), applyDecoratedDescriptor_default()(VsSidebarItem_class2.prototype, "handleReduce", [VsSidebarItem_dec7], Object.getOwnPropertyDescriptor(VsSidebarItem_class2.prototype, "handleReduce"), VsSidebarItem_class2.prototype)), VsSidebarItem_class2)) || VsSidebarItem_class);

// CONCATENATED MODULE: ./src/components/vsSidebar/Item/index.ts



VsSidebarItem_VsSidebarItem.install = function (vue) {
  vue.component('vs-sidebar-item', VsSidebarItem_VsSidebarItem);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsSidebarItem_VsSidebarItem.install(window.Vue);
}

/* harmony default export */ var vsSidebar_Item = (VsSidebarItem_VsSidebarItem);
// EXTERNAL MODULE: ./src/components/vsSidebar/Group/style.sass
var vsSidebar_Group_style = __webpack_require__(37);

// CONCATENATED MODULE: ./src/components/vsSidebar/Group/vsSidebarGroup.ts







var vsSidebarGroup_dec, vsSidebarGroup_dec2, vsSidebarGroup_class, vsSidebarGroup_class2, vsSidebarGroup_descriptor, vsSidebarGroup_temp;



var vsSidebarGroup_VsSidebarGroup = (vsSidebarGroup_dec = Prop({
  type: Boolean
}), vsSidebarGroup_dec2 = Watch('open'), vue_class_component_esm(vsSidebarGroup_class = (vsSidebarGroup_class2 = (vsSidebarGroup_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsSidebarGroup, _VsComponent);

  function VsSidebarGroup() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;
    _this.group = true;
    _this.openState = false;

    initializerDefineProperty_default()(_this, "open", vsSidebarGroup_descriptor, assertThisInitialized_default()(_this));

    return _this;
  }

  var _proto = VsSidebarGroup.prototype;

  _proto.handleOpen = function handleOpen(val) {
    var _this2 = this;

    this.$nextTick(function () {
      var h = _this2.$refs.content.scrollHeight;
      var parent = _this2.$parent;

      if (parent.group) {
        if (val) {
          parent.$refs.content.style.height = parent.$refs.content.scrollHeight + h - 1 + "px";
        } else {
          parent.$refs.content.style.height = parent.$refs.content.scrollHeight - h + 1 + "px";
        }
      }
    });
  };

  _proto.handleClickItem = function handleClickItem(id) {
    this.$parent.handleClickItem(id);
  };

  _proto.beforeEnter = function beforeEnter(el) {
    el.style.height = 0;
  };

  _proto.enter = function enter(el, done) {
    var h = el.scrollHeight;
    el.style.height = h - 1 + 'px';
    done();
  };

  _proto.leave = function leave(el, done) {
    el.style.minHeight = '0px';
    el.style.height = '0px';
  };

  _proto.mounted = function mounted() {
    if (this.$el.querySelector('.active') || this.open) {
      this.openState = true;
    }
  };

  _proto.render = function render(h) {
    var _this3 = this;

    var header = h('div', {
      staticClass: 'vs-sidebar__group__header',
      on: {
        click: function click() {
          _this3.openState = !_this3.openState;
        }
      }
    }, [this.$slots.header]);
    var content = h('div', {
      staticClass: 'vs-sidebar__group__content',
      ref: 'content',
      directives: [{
        name: 'show',
        value: this.openState
      }]
    }, [this.$slots.default]);
    var transition = h('transition', {
      on: {
        beforeEnter: this.beforeEnter,
        enter: this.enter,
        leave: this.leave
      }
    }, [content]);
    return h('div', {
      staticClass: 'vs-sidebar__group',
      class: {
        open: this.openState
      }
    }, [header, transition]);
  };

  createClass_default()(VsSidebarGroup, [{
    key: "getValue",
    get: function get() {
      return this.$parent.getValue;
    }
  }]);

  return VsSidebarGroup;
}(component_VsComponent), vsSidebarGroup_temp), (vsSidebarGroup_descriptor = applyDecoratedDescriptor_default()(vsSidebarGroup_class2.prototype, "open", [vsSidebarGroup_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), applyDecoratedDescriptor_default()(vsSidebarGroup_class2.prototype, "handleOpen", [vsSidebarGroup_dec2], Object.getOwnPropertyDescriptor(vsSidebarGroup_class2.prototype, "handleOpen"), vsSidebarGroup_class2.prototype)), vsSidebarGroup_class2)) || vsSidebarGroup_class);

// CONCATENATED MODULE: ./src/components/vsSidebar/Group/index.ts



vsSidebarGroup_VsSidebarGroup.install = function (vue) {
  vue.component('vs-sidebar-group', vsSidebarGroup_VsSidebarGroup);
};

if (typeof window !== 'undefined' && window.Vue) {
  vsSidebarGroup_VsSidebarGroup.install(window.Vue);
}

/* harmony default export */ var vsSidebar_Group = (vsSidebarGroup_VsSidebarGroup);
// EXTERNAL MODULE: ./src/components/vsCard/Base/style.sass
var vsCard_Base_style = __webpack_require__(38);

// CONCATENATED MODULE: ./src/components/vsCard/Base/VsCard.ts







var VsCard_dec, VsCard_class, VsCard_class2, VsCard_descriptor, VsCard_temp;

function VsCard_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function VsCard_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { VsCard_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { VsCard_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var VsCard_VsCard = (VsCard_dec = Prop({
  default: '1',
  type: [String, Boolean]
}), vue_class_component_esm(VsCard_class = (VsCard_class2 = (VsCard_temp =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsCard, _VsComponent);

  function VsCard() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _VsComponent.call.apply(_VsComponent, [this].concat(args)) || this;

    initializerDefineProperty_default()(_this, "type", VsCard_descriptor, assertThisInitialized_default()(_this));

    return _this;
  }

  var _proto = VsCard.prototype;

  _proto.render = function render(h) {
    var title = h('div', {
      staticClass: 'vs-card__title'
    }, [this.$slots.title]);
    var text = h('div', {
      staticClass: 'vs-card__text'
    }, [this.$slots.title && title, this.$slots.text]);
    var buttons = h('div', {
      staticClass: 'vs-card__buttons'
    }, [this.$slots.buttons]);
    var interactions = h('div', {
      staticClass: 'vs-card__interactions'
    }, [this.$slots.interactions]);
    var img = h('div', {
      staticClass: 'vs-card__img'
    }, [this.$slots.img, this.$slots.interactions && interactions]);
    var card = h('div', {
      staticClass: 'vs-card',
      on: VsCard_objectSpread({}, this.$listeners)
    }, [this.$slots.img && img, // this.type != 2 ? this.$slots.title : false && title,
    this.$slots.text && text, this.$slots.buttons && buttons]);
    return h('div', {
      staticClass: 'vs-card-content',
      class: ["type-" + this.type]
    }, [card]);
  };

  return VsCard;
}(component_VsComponent), VsCard_temp), (VsCard_descriptor = applyDecoratedDescriptor_default()(VsCard_class2.prototype, "type", [VsCard_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), VsCard_class2)) || VsCard_class);

// CONCATENATED MODULE: ./src/components/vsCard/Base/index.ts



VsCard_VsCard.install = function (vue) {
  vue.component('vs-card', VsCard_VsCard);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsCard_VsCard.install(window.Vue);
}

/* harmony default export */ var vsCard_Base = (VsCard_VsCard);
// EXTERNAL MODULE: ./src/components/vsCard/Group/style.sass
var vsCard_Group_style = __webpack_require__(39);

// CONCATENATED MODULE: ./src/components/vsCard/Group/VsCardGroup.ts


var VsCardGroup_class;





var VsCardGroup_VsCardGroup = vue_class_component_esm(VsCardGroup_class =
/*#__PURE__*/
function (_VsComponent) {
  inheritsLoose_default()(VsCardGroup, _VsComponent);

  function VsCardGroup() {
    return _VsComponent.apply(this, arguments) || this;
  }

  var _proto = VsCardGroup.prototype;

  _proto.render = function render(h) {
    var _this = this;

    var arrowPrev = h('button', {
      staticClass: 'vs-card__group-prev',
      on: {
        click: function click(evt) {
          console.log('paso');
          var cards = _this.$refs.cards;
          console.dir(cards);
          cards.scrollTo(cards.scrollLeft - cards.clientWidth, 0);
        }
      }
    }, [h(arrow_VsIconClose)]);
    var arrowNext = h('button', {
      staticClass: 'vs-card__group-next',
      on: {
        click: function click(evt) {
          console.log('paso');
          var cards = _this.$refs.cards;
          console.dir(cards);
          cards.scrollTo(cards.scrollLeft + cards.clientWidth, 0);
        }
      }
    }, [h(arrow_VsIconClose)]);
    var space = h('div', {
      staticClass: 'vs-card__group-space'
    });
    var cards = h('div', {
      staticClass: 'vs-card__group-cards',
      ref: 'cards'
    }, [this.$slots.default, space]);
    return h('div', {
      staticClass: 'vs-card__group'
    }, [arrowPrev, cards, arrowNext]);
  };

  return VsCardGroup;
}(component_VsComponent)) || VsCardGroup_class;


// CONCATENATED MODULE: ./src/components/vsCard/Group/index.ts



VsCardGroup_VsCardGroup.install = function (vue) {
  vue.component('vs-card-group', VsCardGroup_VsCardGroup);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsCardGroup_VsCardGroup.install(window.Vue);
}

/* harmony default export */ var vsCard_Group = (VsCardGroup_VsCardGroup);
// CONCATENATED MODULE: ./src/components/index.ts


























 // new component slot
// CONCATENATED MODULE: ./src/functions/toggleTheme/index.ts
var setTheme = function setTheme(forceTheme) {
  document.body.classList.add('vs-remove-transition');
  var media = window.matchMedia('(prefers-color-scheme: dark)');
  var isThemeDark = media.matches;

  if (localStorage.vsTheme) {
    isThemeDark = localStorage.vsTheme == 'dark';
  }

  if (isThemeDark) {
    document.body.setAttribute('vs-theme', 'dark');
  } else {
    document.body.removeAttribute('vs-theme');
  }

  if (forceTheme == 'dark') {
    document.body.setAttribute('vs-theme', 'dark');
  } else if (forceTheme == 'light') {
    document.body.removeAttribute('vs-theme');
  }

  localStorage.vsTheme = isThemeDark ? 'dark' : 'light';
  setTimeout(function () {
    document.body.classList.remove('vs-remove-transition');
  }, 100);
  return isThemeDark ? 'dark' : 'light';
};

var toggleTheme = function toggleTheme(forceTheme) {
  document.body.classList.add('vs-remove-transition');
  var media = window.matchMedia('(prefers-color-scheme: dark)');
  var isThemeDark = media.matches;

  if (localStorage.vsTheme) {
    isThemeDark = localStorage.vsTheme == 'dark';
  }

  if (!isThemeDark) {
    document.body.setAttribute('vs-theme', 'dark');
  } else {
    document.body.removeAttribute('vs-theme');
  }

  if (forceTheme == 'dark') {
    document.body.removeAttribute('vs-theme');
  } else if (forceTheme == 'light') {
    document.body.setAttribute('vs-theme', 'dark');
  }

  localStorage.vsTheme = !isThemeDark ? 'dark' : 'light';
  setTimeout(function () {
    document.body.classList.remove('vs-remove-transition');
  }, 100);
  return !isThemeDark ? 'dark' : 'light';
};


// EXTERNAL MODULE: ./src/functions/vsLoading/Base/style.sass
var vsLoading_Base_style = __webpack_require__(40);

// CONCATENATED MODULE: ./src/functions/vsLoading/Base/VsLoading.ts



var VsLoading_dec, VsLoading_class, VsLoading_class2, VsLoading_temp;




var VsLoading_VsLoading = (VsLoading_dec = Watch('isVisible'), vue_class_component_esm(VsLoading_class = (VsLoading_class2 = (VsLoading_temp =
/*#__PURE__*/
function (_Vue) {
  inheritsLoose_default()(VsLoading, _Vue);

  function VsLoading() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Vue.call.apply(_Vue, [this].concat(args)) || this;
    _this.text = null;
    _this.type = 'default';
    _this.color = null;
    _this.background = null;
    _this.opacity = null;
    _this.percent = null;
    _this.progress = null;
    _this.scale = null;
    _this.target = null;
    _this.isVisible = false;
    return _this;
  }

  var _proto = VsLoading.prototype;

  _proto.handleIsVisible = function handleIsVisible() {
    var _this2 = this;

    this.$nextTick(function () {
      util_setColor('color', _this2.color, _this2.$el);
      util_setColor('background', _this2.background, _this2.$el);

      if (_this2.opacity) {
        setVar('opacity', _this2.opacity, _this2.$el);
      }
    });
  };

  _proto.render = function render(h) {
    var animation = h('div', {
      class: ['vs-loading__load__animation']
    }, [h('div', {
      staticClass: 'vs-loading__load__percent'
    }, [this.percent]), h('div', {
      staticClass: 'vs-loading__load__animation__1'
    }), h('div', {
      staticClass: 'vs-loading__load__animation__2'
    }), h('div', {
      staticClass: 'vs-loading__load__animation__3'
    })]);
    var text = h('div', {
      class: ['vs-loading__load__text']
    }, this.text);
    var loading = h('div', {
      class: ['vs-loading__load'],
      style: {
        transform: "scale(" + this.scale + ")"
      }
    }, [animation, text]);
    var progress = h('div', {
      class: ['vs-loading__progress']
    }, [h('div', {
      staticClass: 'vs-loading__progress__bar',
      style: {
        width: this.progress + "%"
      }
    })]);
    return h('transition', {
      props: {
        name: 'loading'
      }
    }, [this.isVisible && h('div', {
      staticClass: 'vs-loading',
      class: ["vs-loading--" + (this.type || 'default'), {
        'vs-loading--target': !!this.target
      }, {
        'vs-loading--background': !!this.background
      }]
    }, [loading, this.progress && progress])]);
  };

  return VsLoading;
}(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a), VsLoading_temp), (applyDecoratedDescriptor_default()(VsLoading_class2.prototype, "handleIsVisible", [VsLoading_dec], Object.getOwnPropertyDescriptor(VsLoading_class2.prototype, "handleIsVisible"), VsLoading_class2.prototype)), VsLoading_class2)) || VsLoading_class);

// CONCATENATED MODULE: ./src/functions/vsLoading/Base/index.ts



var loadingConstructor = external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend(VsLoading_VsLoading); // tslint:disable-next-line:only-arrow-functions

loadingConstructor.prototype.close = function () {
  var _this = this;

  this.isVisible = false;
  document.body.style.overflowY = 'auto';
  setTimeout(function () {
    _this.$destroy();

    _this.$el.parentNode.removeChild(_this.$el);
  }, 250);
};

loadingConstructor.prototype.changePercent = function (val) {
  if (val) {
    this.percent = val;
  }
};

loadingConstructor.prototype.changeProgress = function (val) {
  if (val) {
    this.progress = val;
  }
};

loadingConstructor.prototype.changeText = function (val) {
  if (val) {
    this.text = val;
  }
};

var Base_loading = function loading(params) {
  if (params === void 0) {
    params = {};
  }

  var instance = new loadingConstructor();

  if (typeof params.target === 'string') {
    params.target = document.querySelector(params.target);
    instance.$data.target = params.target;
  } else if (params.target) {
    params.target = params.target.$el || params.target;
    instance.$data.target = params.target;
  } else {
    params.target = document.body;
  }

  instance.$data.text = params.text;
  instance.$data.color = params.color;
  instance.$data.background = params.background;
  instance.$data.opacity = params.opacity;
  instance.$data.percent = params.percent;
  instance.$data.type = params.type;
  instance.$data.progress = params.progress;
  instance.$data.scale = params.scale;
  params.target.appendChild(instance.$mount().$el);
  document.body.style.overflowY = params.hidden && 'hidden';
  external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.nextTick(function () {
    instance.$data.isVisible = true;
  });
  return instance;
};

/* harmony default export */ var vsLoading_Base = (Base_loading);
// EXTERNAL MODULE: ./src/functions/vsNotification/Base/style.sass
var vsNotification_Base_style = __webpack_require__(41);

// CONCATENATED MODULE: ./src/functions/vsNotification/Base/VsNotification.ts




var VsNotification_dec, VsNotification_class, VsNotification_class2, VsNotification_temp;





var VsNotification_VsNotification = (VsNotification_dec = Watch('isVisible'), vue_class_component_esm(VsNotification_class = (VsNotification_class2 = (VsNotification_temp =
/*#__PURE__*/
function (_Vue) {
  inheritsLoose_default()(VsNotification, _Vue);

  function VsNotification() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Vue.call.apply(_Vue, [this].concat(args)) || this;
    _this.isVisible = false;
    _this.content = null;
    _this.title = null;
    _this.text = null;
    _this.color = null;
    _this.colorName = null;
    _this.border = null;
    _this.icon = null;
    _this.onClick = null;
    _this.buttonClose = true;
    _this.flat = true;
    _this.onDestroy = null;
    _this.sticky = false;
    _this.square = false;
    _this.width = null;
    _this.loading = false;
    _this.progressAuto = false;
    _this.progress = 0;
    _this.duration = 4000;
    _this.countProgress = 0;
    _this.intervalProgress = null;
    _this.notPadding = null;
    _this.clickClose = false;
    _this.classNotification = null;
    return _this;
  }

  var _proto = VsNotification.prototype;

  _proto.close = function close() {
    this.isVisible = false;
  };

  _proto.handleClickClose = function handleClickClose() {
    this.isVisible = false;
  };

  _proto.beforeEnter = function beforeEnter(el) {
    el.style.maxHeight = "0px";
    el.style.padding = "0px 20px";
  };

  _proto.enter = function enter(el, done) {
    var h = el.scrollHeight;
    el.style.maxHeight = h + 40 + "px";

    if (window.innerWidth < 600) {
      el.style.padding = "15px";
    } else {
      el.style.padding = "20px";
    }

    done();
  };

  _proto.leave = function leave(el, done) {
    var _this2 = this;

    var parent = this.$el.parentNode;
    setTimeout(function () {
      done();

      if (parent.childNodes.length == 1) {
        document.body.removeChild(parent);
      }

      parent.removeChild(_this2.$el);

      _this2.$destroy();

      if (_this2.onDestroy) {
        _this2.onDestroy();
      }
    }, 250);
  };

  _proto.handleIsVisible = function handleIsVisible() {
    var _this3 = this;

    this.$nextTick(function () {
      util_setColor('color', _this3.color, _this3.$el);
      util_setColor('border', _this3.border, _this3.$el);
    });
  };

  _proto.mounted = function mounted() {
    var _this4 = this;

    if (this.progressAuto) {
      this.intervalProgress = setInterval(function () {
        _this4.progress++;
      }, this.duration / 100);
    }
  };

  _proto.beforeDestroy = function beforeDestroy() {
    clearInterval(this.intervalProgress);
  };

  _proto.render = function render(h) {
    var _this5 = this;

    var title = h('header', {
      staticClass: 'vs-notification__content__header'
    }, [h('h4', {
      domProps: {
        innerHTML: this.title
      }
    })]);
    var text = h('div', {
      staticClass: 'vs-notification__content__text'
    }, [h('p', {
      domProps: {
        innerHTML: this.text
      }
    })]);
    var content = h('div', {
      staticClass: 'vs-notification__content'
    }, [this.title && title, this.text && text, this.content && h(this.content)]);
    var icon = h('div', {
      staticClass: 'vs-notification__icon',
      domProps: {
        innerHTML: this.icon
      }
    });
    var closeBtn = h('button', {
      staticClass: 'vs-notification__close',
      on: {
        click: this.handleClickClose
      }
    }, [h(close_VsIconClose, {
      props: {
        hover: 'less'
      }
    })]);
    var loading = h('div', {
      staticClass: 'vs-notification__loading'
    });
    var progress = h('div', {
      staticClass: 'vs-notification__progress',
      style: {
        width: this.progress + "%"
      }
    });
    return h('transition', {
      props: {
        name: 'notification'
      },
      on: {
        beforeEnter: this.beforeEnter,
        enter: this.enter,
        leave: this.leave
      }
    }, [this.isVisible && h('div', {
      staticClass: 'vs-notification',
      class: [{
        'vs-notification--color': this.color
      }, {
        'vs-notification--border': this.border
      }, {
        'vs-notification--icon': this.icon
      }, {
        'vs-notification--onClick': this.onClick
      }, {
        'vs-notification--flat': this.flat
      }, {
        'vs-notification--sticky': this.sticky
      }, {
        'vs-notification--square': this.square
      }, {
        'vs-notification--width-all': this.width == '100%'
      }, {
        'vs-notification--width-auto': this.width == 'auto'
      }, {
        'vs-notification--loading': this.loading
      }, {
        'vs-notification--notPadding': this.notPadding
      }, "vs-notification--" + this.colorName, this.classNotification],
      on: {
        click: function click() {
          if (_this5.onClick) {
            _this5.onClick();
          }

          if (_this5.clickClose) {
            _this5.close();
          }
        }
      }
    }, [!this.loading && this.icon && icon, !this.loading && content, this.buttonClose && closeBtn, this.loading && loading, progress])]);
  };

  createClass_default()(VsNotification, [{
    key: "getProgress",
    get: function get() {
      var _this6 = this;

      setInterval(function () {
        _this6.progress++;
      }, 1);
      return 20;
    }
  }]);

  return VsNotification;
}(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a), VsNotification_temp), (applyDecoratedDescriptor_default()(VsNotification_class2.prototype, "handleIsVisible", [VsNotification_dec], Object.getOwnPropertyDescriptor(VsNotification_class2.prototype, "handleIsVisible"), VsNotification_class2.prototype)), VsNotification_class2)) || VsNotification_class);

// CONCATENATED MODULE: ./src/functions/vsNotification/Base/index.ts



var notificationConstructor = external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend(VsNotification_VsNotification); // tslint:disable-next-line:only-arrow-functions

notificationConstructor.prototype.close = function () {
  this.isVisible = false;
};

notificationConstructor.prototype.setLoading = function (val) {
  this.loading = val;
};

notificationConstructor.prototype.changeProgress = function (val) {
  if (val) {
    this.progress = val;
  }
};

notificationConstructor.prototype.toggleClass = function (val) {
  if (val) {
    this.classNotification = val;
    this.$el.closest('.vs-notification-parent').classList.toggle(val);
  }
};

var Base_notification = function notification(params) {
  if (params === void 0) {
    params = {};
  }

  var instance = new notificationConstructor();
  instance.$data.title = params.title;
  instance.$data.text = params.text;
  instance.$data.color = params.color;
  instance.$data.colorName = params.color;
  instance.$data.border = params.border;
  instance.$data.icon = params.icon;
  instance.$data.onClick = params.onClick;
  instance.$data.flat = params.flat;
  instance.$data.onDestroy = params.onDestroy;
  instance.$data.sticky = params.sticky;
  instance.$data.square = params.square;
  instance.$data.width = params.width;
  instance.$data.loading = params.loading;
  instance.$data.notPadding = params.notPadding;
  instance.$data.clickClose = params.clickClose;
  instance.$data.classNotification = params.classNotification;

  if (params.duration !== 'none') {
    instance.$data.duration = params.duration || 4000;
  }

  if (params.progress == 'auto' && params.duration !== 'none') {
    instance.$data.progressAuto = true;
  } else {
    instance.$data.progress = params.progress;
  }

  if (typeof params.buttonClose == 'boolean') {
    instance.$data.buttonClose = params.buttonClose;
  }

  if (params.width == '100%' || window.innerWidth < 600) {
    if (params.position === 'top-left' || params.position === 'top-right') {
      params.position = 'top-center';
    } else if (params.position === 'bottom-left' || params.position === 'bottom-right' || !params.position) {
      params.position = 'bottom-center';
    }
  }

  if (typeof params.position !== 'string') {
    params.position = 'bottom-right';
  }

  var parent = document.querySelector(".vs-notification-parent--" + (params.position || 'bottom-right')) || document.createElement('div');

  if (!document.querySelector(".vs-notification-parent--" + (params.position || 'bottom-right'))) {
    parent.className = 'vs-notification-parent';
    parent.classList.add("vs-notification-parent--" + (params.position || 'bottom-right'));
  }

  if (params.classNotification) {
    parent.classList.add(params.classNotification);
  }

  parent.appendChild(instance.$mount().$el);
  document.body.appendChild(parent);
  external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.nextTick(function () {
    instance.$data.isVisible = true;
    instance.$data.content = params.content;
  });

  if (params.duration !== 'none') {
    setTimeout(function () {
      instance.close();
    }, Number(params.duration) || 4000);
  }

  return instance;
};

/* harmony default export */ var vsNotification_Base = (Base_notification);
// CONCATENATED MODULE: ./src/functions/vsTable/index.ts
var getPage = function getPage(data, page, maxItems) {
  if (maxItems === void 0) {
    maxItems = 5;
  }

  // console.log(data)
  var max = Math.ceil(page * maxItems);
  var min = max - maxItems;
  var items = [];
  data.forEach(function (item, index) {
    if (index >= min && index < max) {
      items.push(item);
    }
  });
  return items;
};

var getLength = function getLength(data, maxItems) {
  if (maxItems === void 0) {
    maxItems = 5;
  }

  var length = Math.ceil(data.length / maxItems);
  return length;
};

var checkAll = function checkAll(selected, data) {
  if (selected.length !== data.length) {
    selected = [];
    data.forEach(function (item) {
      selected.push(item);
    });
    return selected;
  } else {
    return [];
  }
};

var getSearch = function getSearch(data, search) {
  if (search === void 0) {
    search = '';
  }

  function flattenDeep(val) {
    return Object.values(val || []).reduce(function (acc, val) {
      return typeof val === 'object' ? acc.concat(flattenDeep(val)) : acc.concat(val);
    }, []);
  }

  function getValues(obj) {
    return flattenDeep(obj).filter(function (item) {
      return typeof item === 'string' || typeof item === 'number';
    });
  }

  function normalize(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  var searchNormalize = normalize(search);
  return data.filter(function (item) {
    return normalize(getValues(item).toString()).indexOf(searchNormalize) != -1;
  });
};

var sortData = function sortData(evt, data, sortKey, type) {
  data = [].concat(data).sort(returnOriginalIndex);
  var sortType = type || 'desc';
  var el = evt.target;

  if (el.dataset["sortType" + sortKey] == 'desc') {
    sortType = 'asc';
  } else if (el.dataset["sortType" + sortKey] == 'asc') {
    sortType = null;
  }

  if (sortType == 'desc') {
    data.map(function (item, i) {
      item["vsOriginalIndex" + sortKey] = i;
    });
  }

  el.dataset["sortType" + sortKey] = sortType;
  el.dataset["sortType"] = sortType;
  el.dataset["sortKey"] = "sortType" + sortKey;
  var parent = el.closest('.vs-table__tr');
  var ths = parent.querySelectorAll('th.sort');
  ths.forEach(function (th) {
    if (th != el) {
      th.dataset.sortType = null;
      th.dataset[th.dataset["sortKey"]] = null;
    }
  });

  function compare(a, b) {
    if (a[sortKey] < b[sortKey]) {
      return sortType !== 'desc' ? 1 : -1;
    }

    if (a[sortKey] > b[sortKey]) {
      return sortType !== 'desc' ? -1 : 1;
    }

    return 0;
  }

  function returnOriginalIndex(a, b) {
    return a["vsOriginalIndex" + sortKey] - b["vsOriginalIndex" + sortKey];
  }

  return sortType !== null ? [].concat(data).sort(compare) : [].concat(data).sort(returnOriginalIndex);
};


// CONCATENATED MODULE: ./src/functions/defineVuesaxFunctions.ts





/* harmony default export */ var defineVuesaxFunctions = (function (Vue) {
  var vsFunctions = {
    setColor: function setColor(color, val) {
      util_setColor(color, val, document.body);
    },
    loading: vsLoading_Base,
    toggleTheme: toggleTheme,
    setTheme: setTheme,
    notification: vsNotification_Base,
    getPage: getPage,
    getLength: getLength,
    checkAll: checkAll,
    getSearch: getSearch,
    sortData: sortData
  };
  Vue.prototype.$vs = vsFunctions;
});
// EXTERNAL MODULE: ./src/layout/grid/style.sass
var grid_style = __webpack_require__(42);

// CONCATENATED MODULE: ./src/layout/grid/VsCol.ts






var VsCol_dec, VsCol_dec2, VsCol_dec3, VsCol_dec4, VsCol_dec5, VsCol_dec6, VsCol_dec7, VsCol_dec8, VsCol_class, VsCol_class2, VsCol_descriptor, VsCol_descriptor2, VsCol_descriptor3, VsCol_descriptor4, VsCol_descriptor5, VsCol_descriptor6, VsCol_descriptor7, VsCol_descriptor8, VsCol_class3, VsCol_temp;



var VsCol_VsCol = (VsCol_dec = Prop({
  type: [String, Number],
  default: '12'
}), VsCol_dec2 = Prop({
  type: [String, Number],
  default: '0'
}), VsCol_dec3 = Prop({
  type: [String, Number],
  default: '0'
}), VsCol_dec4 = Prop({
  type: [String, Number],
  default: '0'
}), VsCol_dec5 = Prop({
  type: [String, Number],
  default: '0'
}), VsCol_dec6 = Prop({
  type: [String, Number],
  default: '0'
}), VsCol_dec7 = Prop({
  type: String,
  default: 'block'
}), VsCol_dec8 = Prop({
  type: String,
  default: 'flex-start'
}), vue_class_component_esm(VsCol_class = (VsCol_class2 = (VsCol_temp = VsCol_class3 =
/*#__PURE__*/
function (_Vue) {
  inheritsLoose_default()(VsCol, _Vue);

  function VsCol() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Vue.call.apply(_Vue, [this].concat(args)) || this;

    initializerDefineProperty_default()(_this, "w", VsCol_descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "offset", VsCol_descriptor2, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "order", VsCol_descriptor3, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "lg", VsCol_descriptor4, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "sm", VsCol_descriptor5, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "xs", VsCol_descriptor6, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "type", VsCol_descriptor7, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "justify", VsCol_descriptor8, assertThisInitialized_default()(_this));

    return _this;
  }

  var _proto = VsCol.prototype;

  _proto.render = function render(h) {
    var vsCol = h('div', {
      staticClass: 'vs-col',
      style: {
        order: this.order,
        display: this.type,
        justifyContent: this.justify
      },
      class: ["vs-col--w-" + this.w, "vs-col--offset-" + this.offset, "vs-col--lg-" + this.lg, "vs-col--sm-" + this.sm, "vs-col--xs-" + this.xs]
    }, this.$slots.default);
    return vsCol;
  };

  return VsCol;
}(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a), VsCol_class3.install = void 0, VsCol_class3.use = void 0, VsCol_temp), (VsCol_descriptor = applyDecoratedDescriptor_default()(VsCol_class2.prototype, "w", [VsCol_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsCol_descriptor2 = applyDecoratedDescriptor_default()(VsCol_class2.prototype, "offset", [VsCol_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsCol_descriptor3 = applyDecoratedDescriptor_default()(VsCol_class2.prototype, "order", [VsCol_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsCol_descriptor4 = applyDecoratedDescriptor_default()(VsCol_class2.prototype, "lg", [VsCol_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsCol_descriptor5 = applyDecoratedDescriptor_default()(VsCol_class2.prototype, "sm", [VsCol_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsCol_descriptor6 = applyDecoratedDescriptor_default()(VsCol_class2.prototype, "xs", [VsCol_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsCol_descriptor7 = applyDecoratedDescriptor_default()(VsCol_class2.prototype, "type", [VsCol_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsCol_descriptor8 = applyDecoratedDescriptor_default()(VsCol_class2.prototype, "justify", [VsCol_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), VsCol_class2)) || VsCol_class);

// CONCATENATED MODULE: ./src/layout/grid/VsRow.ts






var VsRow_dec, VsRow_dec2, VsRow_dec3, VsRow_dec4, VsRow_class, VsRow_class2, VsRow_descriptor, VsRow_descriptor2, VsRow_descriptor3, VsRow_descriptor4, VsRow_class3, VsRow_temp;



var VsRow_VsRow = (VsRow_dec = Prop({
  type: Number,
  default: 12
}), VsRow_dec2 = Prop({
  type: String,
  default: 'flex-start'
}), VsRow_dec3 = Prop({
  type: String,
  default: 'flex-start'
}), VsRow_dec4 = Prop({
  type: String,
  default: 'row'
}), vue_class_component_esm(VsRow_class = (VsRow_class2 = (VsRow_temp = VsRow_class3 =
/*#__PURE__*/
function (_Vue) {
  inheritsLoose_default()(VsRow, _Vue);

  function VsRow() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Vue.call.apply(_Vue, [this].concat(args)) || this;

    initializerDefineProperty_default()(_this, "w", VsRow_descriptor, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "justify", VsRow_descriptor2, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "align", VsRow_descriptor3, assertThisInitialized_default()(_this));

    initializerDefineProperty_default()(_this, "direction", VsRow_descriptor4, assertThisInitialized_default()(_this));

    return _this;
  }

  var _proto = VsRow.prototype;

  _proto.render = function render(h) {
    var vsRow = h('div', {
      staticClass: 'vs-row',
      style: {
        justifyContent: this.justify,
        alignItems: this.align,
        flexDirection: this.direction
      }
    }, this.$slots.default);
    return vsRow;
  };

  return VsRow;
}(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a), VsRow_class3.install = void 0, VsRow_class3.use = void 0, VsRow_temp), (VsRow_descriptor = applyDecoratedDescriptor_default()(VsRow_class2.prototype, "w", [VsRow_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsRow_descriptor2 = applyDecoratedDescriptor_default()(VsRow_class2.prototype, "justify", [VsRow_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsRow_descriptor3 = applyDecoratedDescriptor_default()(VsRow_class2.prototype, "align", [VsRow_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), VsRow_descriptor4 = applyDecoratedDescriptor_default()(VsRow_class2.prototype, "direction", [VsRow_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), VsRow_class2)) || VsRow_class);

// CONCATENATED MODULE: ./src/layout/grid/index.ts




VsCol_VsCol.install = function (vue) {
  vue.component('vs-col', VsCol_VsCol);
};

VsRow_VsRow.install = function (vue) {
  vue.component('vs-row', VsRow_VsRow);
};

if (typeof window !== 'undefined' && window.Vue) {
  VsCol_VsCol.install(window.Vue);
  VsRow_VsRow.install(window.Vue);
}


// CONCATENATED MODULE: ./src/layout/index.ts

 // new component slot
// EXTERNAL MODULE: ./src/styles/vuesax.sass
var vuesax = __webpack_require__(43);

// CONCATENATED MODULE: ./src/util/defineVuesaxOptions.ts


var defineVuesaxOptions_defineColors = function defineColors(colors) {
  Object.keys(colors).forEach(function (item) {
    if (document.body) {
      util_setColor(item, colors[item], document.body);
    }
  });
};

var defineVuesaxOptions = function defineVuesaxOptions(options) {
  if (!!options.colors) {
    defineVuesaxOptions_defineColors(options.colors);
  }
};
// CONCATENATED MODULE: ./src/index.ts






var src_install = function install(Vue, options) {
  // Components
  Object.values(components_namespaceObject).forEach(function (vsComponent) {
    Vue.use(vsComponent);
  }); // layout

  Object.values(layout_namespaceObject).forEach(function (vsLayout) {
    Vue.use(vsLayout);
  });

  if (options) {
    defineVuesaxOptions(options);
  }

  defineVuesaxFunctions(Vue);
};

if (typeof window !== 'undefined' && window.Vue) {
  src_install(window.Vue);
} // export default install


/* harmony default export */ var src = __webpack_exports__["default"] = (src_install);

/***/ })
/******/ ])["default"];
});