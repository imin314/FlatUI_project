/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/styl/style.styl
var style = __webpack_require__(52);

// EXTERNAL MODULE: ./src/assets/favicons/favicons.js
var favicons = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(0);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// CONCATENATED MODULE: ./src/common.blocks/loader/js/loader.js


class loader_Loader {
  constructor(domElement) {
    this.$domElement = jquery_default()(domElement);
    this._initialize();
  }

  _initialize() {
    jquery_default()(window).on('load.loader', () => {
      this.$domElement.fadeOut('slow');
    });
  }
}

jquery_default()('.js-loader').each((i, element) => new loader_Loader(element));

// EXTERNAL MODULE: ./src/common.blocks/pin/js/pin.js
var pin = __webpack_require__(12);

// EXTERNAL MODULE: ./src/common.blocks/scrollbar/js/scrollbar.js
var scrollbar = __webpack_require__(11);

// CONCATENATED MODULE: ./src/pages/speakers/js/speakers.js


class speakers_Speakers {
  constructor(domElement) {
    this.cardsAreExpanded = false;
    this._initialize(domElement);
  }

  _findElements(domElement) {
    const $domElement = jquery_default()(domElement);
    this.$page = $domElement;
    this.$cards = $domElement.find('.js-speakers__cards');
    this.$rightButton = $domElement.find('.js-speakers__right-button .js-arrow-button');
    this.$leftButton = $domElement.find('.js-speakers__left-button .js-arrow-button');
    this.$viewAllLink = $domElement.find('.js-speakers__link');
  }

  _initialize(domElement) {
    jquery_default()(document).ready(() => {
      this._findElements(domElement);
      this._addCustomScrollBar();
      this.$scrollBarContainer = this.$cards.find('.mCSB_container');
      this.windowIsSmall = false;

      const mediaQuery = window.matchMedia('(max-width: 500px)');
      const handleWidthChange = this._updatePageView.bind(this);
      mediaQuery.addListener(handleWidthChange);

      this._updatePageView(mediaQuery);
      this._addEventListeners();
    });
  }

  _addCustomScrollBar() {
    const onTotalScroll = this._handleTotalScroll.bind(this);
    const onTotalScrollBack = this._handleTotalScrollBack.bind(this);
    const onScrollStart = this._handleScrollStart.bind(this);

    const scrollBarSettings = {
      axis: 'x',
      theme: 'dark-thin',
      autoExpandScrollbar: true,
      advanced: {
        autoExpandHorizontalScroll: true,
      },
      callbacks: {
        onTotalScroll,
        onTotalScrollBack,
        onScrollStart,
      },
    };

    this.$cards.mCustomScrollbar(scrollBarSettings);
  }

  _handleTotalScroll() {
    this.$rightButton
      .addClass('arrow-button_disabled')
      .attr('tabindex', '-1');
  }

  _handleTotalScrollBack() {
    this.$leftButton
      .addClass('arrow-button_disabled')
      .attr('tabindex', '-1');
  }

  _handleScrollStart() {
    this.$leftButton
      .removeClass('arrow-button_disabled')
      .attr('tabindex', '0');
    this.$rightButton
      .removeClass('arrow-button_disabled')
      .attr('tabindex', '0');
  }

  _updatePageView(mediaQuery) {
    if (mediaQuery.matches) {
      this.windowIsSmall = true;
      this.$page.addClass('speakers_view_small');
      this._hideCustomScrollBar();
    } else {
      this.windowIsSmall = false;
      this.$page.removeClass('speakers_view_small');
      if (!this.cardsAreExpanded) {
        this._updateCustomScrollBar();
      }
    }
  }

  _addEventListeners() {
    this.$rightButton.on('click.speakers', () => this._handleRightButtonClick());
    this.$leftButton.on('click.speakers', () => this._handleLeftButtonClick());
    this.$viewAllLink.on('click.speakers', () => this._handleViewAllClick());
  }

  _handleRightButtonClick() {
    this.$cards.mCustomScrollbar('scrollTo', '-=500');
  }

  _handleLeftButtonClick() {
    this.$cards.mCustomScrollbar('scrollTo', '+=500');
  }

  _handleViewAllClick() {
    if (this.cardsAreExpanded) {
      this.$page.removeClass('speakers_view_full');
      this.$viewAllLink.text('View all speakers');
      this.cardsAreExpanded = false;
      if (!this.windowIsSmall) {
        this._updateCustomScrollBar();
      }
    } else {
      this.$page.addClass('speakers_view_full');
      this.$viewAllLink.text('Back to compact view');
      this.cardsAreExpanded = true;
      if (!this.windowIsSmall) {
        this._hideCustomScrollBar();
      }
    }
  }

  _updateCustomScrollBar() {
    this.$cards.mCustomScrollbar('update');
    this.$scrollBarContainer.css('position', 'relative');
  }

  _hideCustomScrollBar() {
    this.$cards.mCustomScrollbar('disable', true);
    this.$scrollBarContainer.removeAttr('style');
  }
}

jquery_default()('.js-speakers').each((i, element) => new speakers_Speakers(element));

// CONCATENATED MODULE: ./src/pages/registration/js/registration.js


class registration_Registration {
  constructor(domElement) {
    this._findElements(domElement);
    this._initialize();
  }

  _updateBreadCrumbs(itemNumber) {
    const activeClass = 'bread-crumbs__item_active';
    if (!this.$breadCrumbsItems.eq(itemNumber).hasClass(activeClass)) {
      this.$breadCrumbsItems.removeClass(activeClass);
      this.$breadCrumbsItems.eq(itemNumber).addClass(activeClass);
    }
  }

  _findElements(domElement) {
    const $domElement = jquery_default()(domElement);
    this.$inputs = $domElement.find('input');
    this.$breadCrumbsItems = $domElement.find('.js-bread-crumbs__item');
    this.$formStages = $domElement.find('.js-registration-form__stage');
    this.$header = $domElement.find('.js-registration__header');
    this.$passHeader = $domElement.find('.js-pass-selector__title');
  }

  _initialize() {
    jquery_default()(document).ready(() => {
      this.$inputs.on('change.registration', e => this._handleInputChange(e));
      jquery_default()(window).on('scroll.registration', e => this._handleWindowScroll(e));
    });
  }

  _handleInputChange(event) {
    const $target = jquery_default()(event.target);
    const $currentStage = $target.parents('.js-registration-form__stage');
    let stageNumber = 0;
    this.$formStages.each((i, element) => {
      if (jquery_default()(element).is($currentStage)) {
        stageNumber = i;
      }
    });
    this._updateBreadCrumbs(stageNumber);
  }

  _handleWindowScroll(event) {
    const headerHeight = this.$header.outerHeight();
    const passHeaderOffset = this.$passHeader.offset().top;
    if (jquery_default()(event.target).scrollTop() + headerHeight > passHeaderOffset) {
      this.$header.css({ position: 'absolute', top: passHeaderOffset - headerHeight });
    } else {
      this.$header.removeAttr('style');
    }
  }
}

jquery_default()('.js-registration').each((i, element) => new registration_Registration(element));

// EXTERNAL MODULE: ./src/common.blocks/social-icon/js/social-icon.js
var social_icon = __webpack_require__(8);

// CONCATENATED MODULE: ./src/common.blocks/speaker-card/js/speaker-card.js


class speaker_card_SpeakerCard {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    this.$text = jquery_default()(domElement).find('.js-speaker-card__text');
    jquery_default()(window).on('load.speakercard', () => this._addScrollBar());
  }

  _addScrollBar() {
    this.$text.mCustomScrollbar();
  }
}

jquery_default()('.js-speaker-card').each((i, element) => new speaker_card_SpeakerCard(element));

// CONCATENATED MODULE: ./src/common.blocks/news-card/js/news-card.js


class news_card_NewsCard {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    const $newsCard = jquery_default()(domElement);
    if ($newsCard.hasClass('news-card_with_scrollbar')) {
      const $text = $newsCard.find('.js-news-card__text');
      $text.mCustomScrollbar();
    }
  }
}

jquery_default()('.js-news-card').each((i, element) => new news_card_NewsCard(element));

// CONCATENATED MODULE: ./src/common.blocks/arrow-button/js/arrow-button.js


class arrow_button_ArrowButton {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    jquery_default()(document).ready(() => {
      this.$button = jquery_default()(domElement);

      this.$button
        .on('click.arrowbutton', () => this._handleButtonClick())
        .on('keydown.arrowbutton', e => this._handleEnterDown(e))
        .on('keyup.arrowbutton', e => this._handleEnterUp(e))
        .on('touchstart.arrowbutton', () => this._addActiveClass())
        .on('touchend.arrowbutton', () => this._removeActiveClass());
    });
  }

  _handleButtonClick() {
    this.$button.blur();
  }

  _addActiveClass() {
    this.$button.addClass('arrow-button_active');
  }

  _removeActiveClass() {
    this.$button
      .removeClass('arrow-button_active')
      .trigger('click');
  }

  _handleEnterDown(event) {
    if (event.which === 13) {
      this._addActiveClass();
    }
  }

  _handleEnterUp(event) {
    if (event.which === 13) {
      this._removeActiveClass();
    }
  }
}

jquery_default()('.js-arrow-button').each((i, element) => new arrow_button_ArrowButton(element));

// EXTERNAL MODULE: ./src/common.blocks/button/js/jquery.materialripple.js
var jquery_materialripple = __webpack_require__(7);

// CONCATENATED MODULE: ./src/common.blocks/button/js/button.js



class button_Button {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    jquery_default()(document).ready(() => {
      this.$button = jquery_default()(domElement);
      this.$button
        .on('keypress.ripple', e => this._handleEnterPress(e))
        .addClass('ripple')
        .materialripple();
    });
    return this;
  }

  _handleEnterPress(event) {
    if (event.which === 13) {
      this.$button.click();
    }
  }
}

jquery_default()('.js-button').each((i, element) => new button_Button(element));

// CONCATENATED MODULE: ./src/common.blocks/donut-chart/js/donut-chart.js


class donut_chart_DonutChart {
  constructor(domElement) {
    this.domElement = domElement;
    this.values = this._getValues();
    this.colors = this._getColors();
    this._initialize();
  }

  _getValues() {
    const values = jquery_default()(this.domElement).data('values');
    if (typeof values === 'number') return [values];
    return values.split(',');
  }

  _getColors() {
    return jquery_default()(this.domElement).data('colors').split(',');
  }

  _initialize() {
    jquery_default()(document).ready(() => this._drawDonut());
  }

  _drawDonut() {
    const radius = 15.91549430918954;
    const $donut = jquery_default()(this.domElement);
    const values = this.values;
    const colors = this.colors;

    let backgroundColor = '#e5e5e5';
    if (values[0] === 0 && values.length === 1) {
      backgroundColor = 'transparent';
    }

    const $svg = donut_chart_DonutChart.$s('svg').attr({ width: '100%', height: '100%' });
    const $circle = donut_chart_DonutChart.$s('circle').attr({
      cx: radius, cy: radius, r: radius, fill: 'transparent', stroke: backgroundColor,
    });
    $svg.append($circle);

    let offset = 0;
    const dashoffset0 = 25;

    values.forEach((value, i) => {
      const $segment = donut_chart_DonutChart.$s('circle').attr({
        cx: radius, cy: radius, r: radius, fill: 'transparent', stroke: colors[i],
      });
      const dashoffset = 100 - offset + dashoffset0;

      $segment.attr('stroke-dasharray', `${value} ${100 - value}`);
      if (i === 0) {
        $segment.attr('stroke-dashoffset', dashoffset0);
      } else {
        $segment.attr('stroke-dashoffset', dashoffset);
      }
      $svg.append($segment);
      offset += Number(value);
    });

    $donut.append($svg);

    const strokeWidth = parseFloat($donut.find('circle').css('stroke-width'));
    const viewBoxTop = 0 - (strokeWidth / 2);
    const viewBoxBottom = radius * 2 + strokeWidth;
    const viewBoxValue = `${viewBoxTop} ${viewBoxTop} ${viewBoxBottom} ${viewBoxBottom}`;
    $svg.attr({ viewBox: viewBoxValue });

    const $label = $donut.find('.js-donut-chart__label');
    if ($label.length > 0) {
      $label.text(values[0]);
    }
  }

  // creates svg element, returned as jQuery object
  static $s(elem) {
    return jquery_default()(document.createElementNS('http://www.w3.org/2000/svg', elem));
  }
}

jquery_default()('.donut-chart').each((i, element) => new donut_chart_DonutChart(element));

// EXTERNAL MODULE: ./src/common.blocks/slider/js/asRange.js
var asRange = __webpack_require__(6);

// CONCATENATED MODULE: ./src/common.blocks/slider/js/slider.js



class slider_Slider {
  constructor(domElement) {
    this.$domElement = jquery_default()(domElement);
    this._initialize();
  }

  _initialize() {
    jquery_default()(document).ready(() => {
      const $slider = this.$domElement;
      const settings = {
        tip: false,
        step: 0.1,
      };
      if ($slider.hasClass('js-slider_type_tooltip')) {
        settings.tip = { active: 'onMove' };
      }

      $slider.asRange(settings);
    });
  }
}

jquery_default()('.js-slider').each((i, element) => new slider_Slider(element));

// EXTERNAL MODULE: ./node_modules/jquery-validation/dist/jquery.validate.js
var jquery_validate = __webpack_require__(5);

// CONCATENATED MODULE: ./src/common.blocks/validation-form/js/validation-form.js



class validation_form_ValidationForm {
  constructor(domElement, namespace) {
    this.domElement = domElement;
    this.namespace = namespace;
  }

  initialize() {
    jquery_default()(document).ready(() => {
      const $domElement = jquery_default()(this.domElement);
      this.bubbleErrorClass = `${this.namespace}__bubble_type_error`;
      this.bubbleGoodClass = `${this.namespace}__bubble_type_good`;
      const $inputs = $domElement.find('input[type=text], input[type=email]');

      $domElement.validate({ errorPlacement() {} });

      $inputs
        .rules('add', {
          required: true,
          minlength: 2,
          messages: {
            required: '',
            minlength: '',
            email: '',
          },
        });

      $inputs
        .on('blur.validation', e => this._handleInputBlur(e))
        .on('focus.validation', e => this._handleInputFocus(e));
    });
  }

  _handleInputBlur(event) {
    const $input = jquery_default()(event.target);
    const $bubble = $input.next();
    if ($input.valid()) {
      $bubble.removeClass(this.bubbleErrorClass).addClass(this.bubbleGoodClass);
      $bubble.text('Thanks!');
    } else {
      $bubble.removeClass(this.bubbleGoodClass).addClass(this.bubbleErrorClass);
      $bubble.text('Error');
    }
  }

  _handleInputFocus(event) {
    const $bubble = jquery_default()(event.target).next();
    $bubble.removeClass(this.bubbleGoodClass).removeClass(this.bubbleErrorClass);
  }
}

// CONCATENATED MODULE: ./src/common.blocks/registration-form/js/registration-form.js



class registration_form_RegistrationForm extends validation_form_ValidationForm {
  constructor(domElement) {
    super(domElement, 'registration-form');
    this._initialize();
  }

  _initialize() {
    super.initialize();

    jquery_default()(document).ready(() => {
      const $form = jquery_default()(this.domElement);
      const $button = $form.find('.js-registration-form__button');
      $button.on('click.registration-form', () => $form.submit());
    });
  }
}

jquery_default()('.js-registration-form__form').each((i, element) => new registration_form_RegistrationForm(element));

// CONCATENATED MODULE: ./src/common.blocks/email-form/js/email-form.js



class email_form_EmailForm extends validation_form_ValidationForm {
  constructor(domElement) {
    super(domElement, 'email-form');
    this._initialize();
  }

  _initialize() {
    super.initialize();

    jquery_default()(document).ready(() => {
      const $form = jquery_default()(this.domElement);
      const $button = $form.find('.js-email-form__button');
      $button.on('click.email-form', () => $form.submit());
    });
  }
}

jquery_default()('.js-email-form').each((i, element) => new email_form_EmailForm(element));

// CONCATENATED MODULE: ./src/common.blocks/toggle-switch/js/toggle-switch.js


class toggle_switch_ToggleSwitch {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    jquery_default()(document).ready(() => {
      const $domElement = jquery_default()(domElement);
      this.$toggle = $domElement;
      this.$input = $domElement.find('.js-toggle-switch__checkbox');
      this.$slider = $domElement.find('.js-toggle-switch__slider');
      this.$toggle
        .on('keypress.toggle', e => this._handleEnterPress(e))
        .on('click.toggle', () => this._removeFocus());
    });
  }

  _handleEnterPress(event) {
    if (event.which === 13) {
      this.$input[0].checked = !this.$input[0].checked;
      this.$input.trigger('change');
    }
  }

  _removeFocus() {
    this.$slider.blur();
  }
}

jquery_default()('.js-toggle-switch').each((i, element) => new toggle_switch_ToggleSwitch(element));

// CONCATENATED MODULE: ./src/common.blocks/map/js/map.js


class map_Map {
  constructor(domElement) {
    this.$domElement = jquery_default()(domElement);
    this.mapContainer = this.$domElement.find('.js-map__container')[0];
    this.mapCenter = this._getInitialMapCenter();
    this._initialize();
  }

  _initialize() {
    jquery_default()(window).on('load.map', () => this._initMap());
  }

  _initMap() {
    const initOptions = { center: this.mapCenter, zoom: 14 };
    const $pin = this.$domElement.find('.js-map__pin');
    const $search = this.$domElement.find('.js-map__search');

    this.map = new google.maps.Map(this.mapContainer, initOptions);
    this.infoWindow = new google.maps.InfoWindow();
    this._addMarker(this._getMainPinCenter(), map_Map.images[0], 'Meet us here!');
    this._locateUser();

    $pin
      .on('click.map', e => this._handlePinClick(e))
      .on('keypress.map', e => this._handleEnterPress(e));
    $search
      .on('click.map', e => this._handleSearchClick(e))
      .on('keypress.map', e => this._handleEnterPress(e));
  }

  _addMarker(location, image, title) {
    const marker = new google.maps.Marker({
      position: location,
      map: this.map,
      icon: image,
      title,
    });
    return marker;
  }

  _getInitialMapCenter() {
    const mapCoords = this.mapContainer.dataset;
    const lat = Number(mapCoords.lat);
    const lng = Number(mapCoords.lng);
    return new google.maps.LatLng(lat, lng);
  }

  _getMainPinCenter() {
    const mapCoords = this.mapContainer.dataset;
    const plat = Number(mapCoords.plat);
    const plng = Number(mapCoords.plng);
    return new google.maps.LatLng(plat, plng);
  }

  static get images() {
    return [
      {
        url: './assets/img/pins.png',
        size: new google.maps.Size(78, 78),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(39, 78),
      },
      {
        url: './assets/img/pins.png',
        size: new google.maps.Size(45, 78),
        origin: new google.maps.Point(78, 0),
        anchor: new google.maps.Point(22.5, 78),
      },
    ];
  }

  _locateUser() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.userMarker = this._addMarker(pos, map_Map.images[1], 'You are here');
        },
        () => this._handleLocationError(true),
      );
    } else {
      // Browser doesn't support Geolocation
      this._handleLocationError(false);
    }
  }

  _handleLocationError(browserHasGeolocation) {
    this.infoWindow.setPosition(this.map.getCenter());
    this.infoWindow.setContent(browserHasGeolocation
      ? 'Error: The Geolocation service failed.'
      : 'Error: Your browser doesn\'t support geolocation.');
  }

  _handlePinClick(event) {
    this._backToCenter();
    jquery_default()(event.target).blur();
  }

  _handleSearchClick(event) {
    this._showUserLocation();
    jquery_default()(event.target).blur();
  }

  _handleEnterPress(event) {
    if (event.which === 13) {
      jquery_default()(event.target).trigger('click');
    }
  }

  _backToCenter() {
    this.map.panTo(this.mapCenter);
    if (this.infoWindow) this.infoWindow.close();
  }

  _showUserLocation() {
    if (this.userMarker) this.map.panTo(this.userMarker.getPosition());
    this.infoWindow.open(this.map);
  }
}

jquery_default()('.js-map').each((i, element) => new map_Map(element));

// CONCATENATED MODULE: ./src/common.blocks/tick-box/js/tick-box.js


class tick_box_TickBox {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    jquery_default()(document).ready(() => {
      const $domElement = jquery_default()(domElement);
      this.$tickbox = $domElement;
      this.$input = $domElement.find('.js-tickbox__input');
      this.$checkmark = $domElement.find('.js-tick-box__checkmark');
      this.$tickbox
        .on('keypress.tickbox', e => this._handleEnterPress(e))
        .on('click.tickbox', () => this._removeFocus());
    });
  }

  _handleEnterPress(event) {
    if (event.which === 13) {
      this.$input[0].checked = !this.$input[0].checked;
      this.$input.trigger('change');
    }
  }

  _removeFocus() {
    this.$checkmark.blur();
  }
}

jquery_default()('.js-tick-box').each((i, element) => new tick_box_TickBox(element));

// CONCATENATED MODULE: ./src/common.blocks/search-box/js/search-box.js


class search_box_SearchBox {
  constructor(domElement) {
    this._findElements(domElement);
    this._initialize();
  }

  _findElements(domElement) {
    const $searchbox = jquery_default()(domElement);
    this.$searchbox = $searchbox;
    this.$button = $searchbox.find('.js-search-box__button');
    this.$input = $searchbox.find('.js-search-box__input');
  }

  _initialize() {
    jquery_default()(document).ready(() => {
      this.$searchbox
        .on('click.searchbox', e => this._handleSearchBoxClick(e))
        .on('keypress.searchbox', e => this._handleSearchBoxKeypress(e));
      this.$input.on('focus.searchbox', () => this._handleInputFocus());

      if (this.$searchbox.hasClass('search-box_filled')) {
        this._handleButtonClick();
      }
    });
  }

  _handleSearchBoxClick(event) {
    const $element = jquery_default()(event.target);
    if ($element.hasClass('js-search-box__button')) {
      this._handleButtonClick(event);
    }
  }

  _handleButtonClick(event) {
    const notFoundMessage = "I've not found what I'm looking for...";
    this.$input.val(notFoundMessage);
    this.$searchbox.addClass('search-box_filled');
    jquery_default()(event.target).blur();
  }

  _handleSearchBoxKeypress(event) {
    if (event.which === 13) {
      this._handleButtonClick(event);
    }
  }

  _emptyInput() {
    this.$input.val('');
    this.$searchbox.removeClass('search-box_filled');
  }

  _handleInputFocus() {
    if (this.$searchbox.hasClass('search-box_filled')) {
      this._emptyInput();
    }
  }
}

jquery_default()('.js-search-box').each((i, element) => new search_box_SearchBox(element));

// CONCATENATED MODULE: ./src/common.blocks/drop-down/js/drop-down.js


class drop_down_DropDown {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    jquery_default()(document).ready(() => {
      const $domElement = jquery_default()(domElement);
      this.$dropdown = $domElement;
      this.$label = $domElement.find('.js-drop-down__label');
      this.$dropdown.on('click.drop-down', e => this._handleDropDownClick(e));
    });
  }

  _handleDropDownClick(event) {
    const $targetElement = jquery_default()(event.target);
    const isItemChosen = $targetElement.hasClass('js-drop-down__item');
    this.$dropdown.toggleClass('drop-down_active');

    if (isItemChosen) {
      const chosenOption = $targetElement.text();
      this.$label.text(chosenOption);
    }
  }

  _handleDropDownFocusOut() {
    this.$dropdown.removeClass('drop-down_active');
  }
}

jquery_default()('.js-drop-down').each((i, element) => new drop_down_DropDown(element));

// EXTERNAL MODULE: ./src/common.blocks/calendar/js/dcalendar.picker.js
var dcalendar_picker = __webpack_require__(4);

// CONCATENATED MODULE: ./src/common.blocks/calendar/js/calendar.js



class calendar_Calendar {
  constructor(domElement) {
    this.domElement = domElement;
    this._initialize();
  }

  _initialize() {
    jquery_default()(document).ready(() => {
      jquery_default()(this.domElement).dcalendar();
    });
  }
}

jquery_default()('.js-calendar').each((i, element) => new calendar_Calendar(element));

// CONCATENATED MODULE: ./src/common.blocks/online-help/js/online-help.js


class online_help_OnlineHelp {
  constructor(domElement) {
    this.$domElement = jquery_default()(domElement);
    this._initialize();
  }

  _initialize() {
    jquery_default()(document).ready(() => {
      const $container = this.$domElement;
      const $button = $container.find('.js-online-help__button');
      this.$messenger = $container.find('.js-online-help__messenger');
      $button.click(() => this._handleButtonClick());
    });
  }

  _handleButtonClick() {
    this.$messenger.toggleClass('online-help__messenger_visible');
  }
}

jquery_default()('.js-online-help').each((i, element) => new online_help_OnlineHelp(element));

// CONCATENATED MODULE: ./src/common.blocks/pass-selector/js/pass-selector.js


class pass_selector_PassSelector {
  constructor(domElement) {
    this.$domElement = jquery_default()(domElement);
    this._initialize();
  }

  _initialize() {
    jquery_default()(document).ready(() => {
      this.$tickboxes = this.$domElement.find('.js-pass-selector__tickbox input[type=checkbox]');
      this.$tickboxes.on('change.pass-selector', e => this._handleTickboxChange(e));
    });
  }

  _handleTickboxChange(event) {
    const $currentTickbox = jquery_default()(event.target);
    this.$tickboxes.not($currentTickbox).prop('checked', false);
  }
}

jquery_default()('.js-pass-selector').each((i, element) => new pass_selector_PassSelector(element));

// CONCATENATED MODULE: ./src/common.blocks/event-carousel/js/event-carousel.js


class event_carousel_EventCarousel {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    const $domElement = jquery_default()(domElement);
    this.$cards = $domElement.find('.js-event-carousel__cards');
    this.$calendarOverlay = $domElement.find('.js-event-carousel__calendar-overlay');

    this.$cards
      .on('click.event-carousel', event => this._handleButtonClick(event))
      .mCustomScrollbar({
        axis: 'x',
        theme: 'dark-thin',
        autoExpandScrollbar: true,
        advanced: {
          autoExpandHorizontalScroll: true,
          autoScrollOnFocus: false,
        },
	    });
  }

  _handleButtonClick(event) {
    const $target = jquery_default()(event.target);
    if ($target.hasClass('js-button')) {
      this.$calendarOverlay.addClass('event-carousel__calendar-overlay_visible');
      jquery_default()(document).on('click.event-carousel', e => this._handleDocumentClick(e));
      return false;
    }
  }

  _handleDocumentClick(event) {
    if (jquery_default()(event.target).closest('.js-event-carousel__calendar').length === 0) {
      this.$calendarOverlay.removeClass('event-carousel__calendar-overlay_visible');
      jquery_default()(document).off('click.event-carousel');
      return false;
    }
  }
}

jquery_default()('.js-event-carousel').each((i, element) => new event_carousel_EventCarousel(element));

// CONCATENATED MODULE: ./src/main.js



























/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* -- DO NOT REMOVE --
 * jQuery DCalendar and DCalendar Picker 2.1 plugin
 * 
 * Author: Dionlee Uy
 * Email: dionleeuy@gmail.com
 *
 * Date: Thursday, May 12 2016
 *
 * @requires jQuery
 * -- DO NOT REMOVE --
 */
if (typeof jQuery === 'undefined') { throw new Error('DCalendar.Picker: This plugin requires jQuery'); }
+function ($) {

	Date.prototype.getDays = function() { return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate(); };

	var months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
		short_months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
		daysofweek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
		short_days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
		ex_keys = [9,112,113,114,115,116,117,118,119,120,121,122,123],
		DCAL_DATA = 'dcalendar',

		DCalendar = function(elem, options) {
			this.elem = $(elem);
			this.options = options;
			this.calendar = null;		//calendar container
			this.today = new Date();	//current date

			//current selected date, default is today if no value given
			this.date = this.elem.val() === '' ? new Date() : this.reformatDate(this.elem.val()).date;
			this.viewMode = 'days';
			this.minDate = this.elem.data('mindate');
			this.maxDate = this.elem.data('maxdate');
			this.rangeFromEl = this.elem.data('rangefrom');
			this.rangeToEl = this.elem.data('rangeto');
			
			this.selected = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate());
			var that = this;

			this.create(this.viewMode);
			$('.calendar-selected-day').text(that.selected.getDate());
			this.calendar.find('.calendar-footer .calendar-date-wrapper').click(function () {
				that.selected = new Date(that.today.getFullYear(), that.today.getMonth(), that.today.getDate());
				that.calendar.find('.calendar-curr-month').removeClass('year');
				that.calendar.find('.calendar-head-card').removeClass('hidden');
				//Trigger select event
				that.selectDate();
				$('.calendar-selected-day').text(that.selected.getDate());
				that.selectedView();
			});
			this.calendar.find('.calendar-prev').click(function () { that.getNewMonth('left', true); });
			this.calendar.find('.calendar-next').click(function () { that.getNewMonth('right', true); });
			this.calendar.find('.calendar-curr-month').click(function () { that.getMonths(); 
			that.calendar.find('.calendar-head-card').addClass('hidden');
			});

		    this.calendar.find('.calendar-date-holder').on('click', '.calendar-dates .date:not(.date.month) a', function () {
		    	var span = $(this).parent(),
		    		day = parseInt($(this).text()),
					plus = span.hasClass('pm') ? -1 : span.hasClass('nm') ? 1 : 0,
					selectedDate = new Date(that.date.getFullYear(), that.date.getMonth() + plus, day);
				
				if(that.disabledDate(selectedDate)) return;

				that.selected = selectedDate;
				that.calendar.find('.calendar-dates .date').removeClass('selected');
				span.addClass('selected');

				//Trigger select event
				that.selectDate();
				$('.calendar-selected-day').text(selectedDate.getDate());
			}).on('click', '.calendar-dates .date.month a', function () {
				var selMonth = parseInt($(this).parent().attr('data-month'));
				that.viewMode = 'days';
				that.date.setDate(1);
				that.calendar.find('.calendar-selected-day').text('1');
				that.calendar.find('.calendar-curr-month').removeClass('year');
				that.calendar.find('.calendar-head-card').removeClass('hidden');
				that.date.setMonth(selMonth);
				that.getNewMonth(null, false);
			});

			this.getNewMonth(null, false);
		};

	DCalendar.prototype = {
		constructor : DCalendar,
		/* Parses date string using default or specified format. */
		reformatDate : function (date, dateFormat) {
			var that = this,
				format = typeof dateFormat === 'undefined' ? that.options.format : dateFormat,
				dayLength = (format.match(/d/g) || []).length,
				monthLength = (format.match(/m/g) || []).length,
				yearLength = (format.match(/y/g) || []).length,
				isFullMonth = monthLength == 4,
				isMonthNoPadding = monthLength == 1,
				isDayNoPadding = dayLength == 1,
				lastIndex = date.length,
				firstM = format.indexOf('m'), firstD = format.indexOf('d'), firstY = format.indexOf('y'),
				month = '', day = '', year = '';

			// Get month on given date string using the format (default or specified)
			if(isFullMonth) {
				var monthIdx = -1;
				$.each(months, function (i, m) { if (date.indexOf(m) >= 0) monthIdx = i; });
				month = months[monthIdx];
				format = format.replace('mmmm', month);
				firstD = format.indexOf('d');
				firstY = firstY < firstM ? format.indexOf('y') : format.indexOf('y', format.indexOf(month) + month.length);
			} else if (!isDayNoPadding && !isMonthNoPadding || (isDayNoPadding && !isMonthNoPadding && firstM < firstD)) {
				month = date.substr(firstM, monthLength);
			} else {
				var lastIndexM = format.lastIndexOf('m'),
					before = format.substring(firstM - 1, firstM),
					after = format.substring(lastIndexM + 1, lastIndexM + 2);

				if (lastIndexM == format.length - 1) {
					month = date.substring(date.indexOf(before, firstM - 1) + 1, lastIndex);
				} else if (firstM == 0) {
					month = date.substring(0, date.indexOf(after, firstM));
				} else {
					month = date.substring(date.indexOf(before, firstM - 1) + 1, date.indexOf(after, firstM + 1));
				}
			}

			// Get date on given date string using the format (default or specified)
			if (!isDayNoPadding && !isMonthNoPadding || (!isDayNoPadding && isMonthNoPadding && firstD < firstM)) {
				day = date.substr(firstD, dayLength);
			} else {
				var lastIndexD = format.lastIndexOf('d');
					before = format.substring(firstD - 1, firstD),
					after = format.substring(lastIndexD + 1, lastIndexD + 2);

				if (lastIndexD == format.length - 1) {
					day = date.substring(date.indexOf(before, firstD - 1) + 1, lastIndex);
				} else if (firstD == 0) {
					day = date.substring(0, date.indexOf(after, firstD));
				} else {
					day = date.substring(date.indexOf(before, firstD - 1) + 1, date.indexOf(after, firstD + 1));
				}
			}

			// Get year on given date string using the format (default or specified)
			if (!isMonthNoPadding && !isDayNoPadding || (isMonthNoPadding && isDayNoPadding && firstY < firstM && firstY < firstD)
				|| (!isMonthNoPadding && isDayNoPadding && firstY < firstD) || (isMonthNoPadding && !isDayNoPadding && firstY < firstM)) {
				year = date.substr(firstY, yearLength);
			} else {
				var before = format.substring(firstY - 1, firstY);
				year = date.substr(date.indexOf(before, firstY - 1) + 1, yearLength);
			}

			return { m: month, d: day, y: year, date: isNaN(parseInt(month)) ? new Date(month + " " + day + ", " + year) : new Date(year, month - 1, day) };
		},
		/* Returns formatted string representation of selected date */
		formatDate : function (format) {
			var d = new Date(this.selected), day = d.getDate(), m = d.getMonth(), y = d.getFullYear();
			return format.replace(/(yyyy|yy|mmmm|mmm|mm|m|dd|d)/gi, function (e) {
				switch(e.toLowerCase()){
					case 'd': return day;
					case 'dd': return (day < 10 ? "0"+day: day);
					case 'm': return m+1;
					case 'mm': return (m+1 < 10 ? "0"+(m+1): (m+1));
					case 'mmm': return short_months[m];
					case 'mmmm': return months[m];
					case 'yy': return y.toString().substr(2,2);
					case 'yyyy': return y;
				}
			});
		},
		/* Selects date and trigger event (for other actions - if specified) */
		selectDate : function () {
			var that = this,
				newDate = that.formatDate(that.options.format),
				e = $.Event('dateselected', {date: newDate});

			that.elem.trigger(e);
		},
		/* Determines if date is disabled */
		disabledDate: function (date) {
			var that = this, rangeFrom = null, rangeTo = null, rangeMin = null, rangeMax = null, min = null, max = null,
				now = new Date(), today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

			if (that.minDate) min = that.minDate === "today" ? today : new Date(that.minDate);
			if (that.maxDate) max = that.maxDate === "today" ? today : new Date(that.maxDate);

			if (that.rangeFromEl) {
				var fromEl = $(that.rangeFromEl),
					fromData = fromEl.data(DCAL_DATA);
					fromFormat = fromData.options.format,
					fromVal = fromEl.val();

				rangeFrom = that.reformatDate(fromVal, fromFormat).date;
				rangeMin = fromData.minDate === "today" ? today : new Date(fromData.minDate);
			}

			if (that.rangeToEl) {
				var toEl = $(that.rangeToEl),
					toData = toEl.data(DCAL_DATA);
					toFormat = toData.options.format,
					toVal = toEl.val();

				rangeTo = that.reformatDate(toVal, toFormat).date;
				rangeMax = toData.maxDate === "today" ? today : new Date(toData.maxDate);
			}

			return (min && date < min) || (max && date > max) || (rangeFrom && date < rangeFrom) || (rangeTo && date > rangeTo) ||
				(rangeMin && date < rangeMin) || (rangeMax && date > rangeMax);
		},
		/* Gets list of months (for month view) */
		getMonths : function () {
			var that = this,
				currentYear = that.today.getFullYear(),
				currentMonth = that.today.getMonth();

			if(that.viewMode !== 'days') return;
			var cal = that.calendar;
				curr = cal.find('.calendar-dates'),
				dayLabel = cal.find('.calendar-labels'),
				currMonth = cal.find('.calendar-curr-month'),
				container = cal.find('.calendar-date-holder'),
				cElem = curr.clone(),
				rows = [], cells = [], count = 0;

			that.viewMode = 'months';
			currMonth.text(that.date.getFullYear());
			currMonth.addClass('year');
			dayLabel.addClass('invis');
			for (var i = 1; i < 4; i++) {
				var row = [$("<span class='date month'></span>"), $("<span class='date month'></span>"), $("<span class='date month'></span>"), $("<span class='date month'></span>")];
				for (var a = 0; a < 4; a++) {
					row[a].html("<a href='javascript:void(0);'>" + short_months[count] + "</a>").attr('data-month', count);
					count++;
				}
				rows.push(row);
			}
			$.each(rows, function(i, v){
			    var row = $('<span class="cal-row"></span>'), l = v.length;
				for(var i = 0; i < l; i++) { row.append(v[i]); }
				cells.push(row);
			});
			
			cElem.empty().append(cells).addClass('months load').appendTo(container);
			curr.addClass('hasmonths');
			setTimeout(function () { cElem.removeClass('load'); }, 10);
			setTimeout(function () { curr.remove(); }, 300);
		},
		/* Gets days for month of 'newDate'*/
		getDays : function (newDate, callback) {
		    var that = this,
				ndate = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate()),
				today = new Date(that.today.getFullYear(), that.today.getMonth(), that.today.getDate()),
				days = ndate.getDays(), day = 1,
		        d = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate()),
				nmStartDay = 1, weeks = [], dates = [];
			var disableRow = false;

			for(var i = 1; i <= 6; i++){
				var week = [$('<span class="date"></span>'), $('<span class="date"></span>'), $('<span class="date"></span>'),
							$('<span class="date"></span>'), $('<span class="date"></span>'), $('<span class="date"></span>'),
							$('<span class="date"></span>')];

				while(day <= days) {
					d.setDate(day);
					var dayOfWeek = d.getDay() - 1;
					if (dayOfWeek === -1) {
						dayOfWeek = 6;
					}
					if (d.getTime() == today.getTime()) week[dayOfWeek].addClass('current');

                    if (that.disabledDate(d)) week[dayOfWeek].addClass('disabled');

					if(i === 0 && dayOfWeek === 0){
						break;
					} else if (dayOfWeek < 6) {
					    if (d.getTime() == that.selected.getTime()) week[dayOfWeek].addClass('selected');

						week[dayOfWeek].html('<a href="javascript:void(0);">' + (day++) + '</a>');
						
					} else {
					    if (d.getTime() == that.selected.getTime()) week[dayOfWeek].addClass('selected');

						week[dayOfWeek].html('<a href="javascript:void(0);">' + (day++) + '</a>');
						
						break;
					}
				}
				/* For days of previous and next month */
				if (i === 1 || i > 4) {
					// First week
				    if (i === 1) {
				        var pmDate = new Date(newDate.getFullYear(), newDate.getMonth() - 1, 1);
				        var pMonth = pmDate.getMonth(), pDays = 0;
				        pDays = pmDate.getDays();
						for (var a = 6; a >= 0; a--) {
						    if (week[a].text() !== '') continue;

						    pmDate.setDate(pDays);
						    week[a].html('<a href="javascript:void(0);">' + (pDays--) + '</a>').addClass('pm');

							if (that.disabledDate(pmDate)) week[a].addClass('disabled');

							if (pmDate.getTime() == that.selected.getTime()) week[a].addClass('selected');
							if (pmDate.getTime() == today.getTime()) week[a].addClass('current');
						}
					} 
					// Last week
					else if (i > 4) {
					    var nmDate = new Date(d.getFullYear(), d.getMonth() + 1, 1);
						for (var a = 0; a <= 6; a++) {
						    if (week[a].text() !== '') continue;

						    nmDate.setDate(nmStartDay);
						    week[a].html('<a href="javascript:void(0);">' + (nmStartDay++) + '</a>').addClass('nm');
							if (that.disabledDate(nmDate)) week[a].addClass('disabled');
							if (a === 0) {disableRow = true;}
							if (nmDate.getTime() == that.selected.getTime()) week[a].addClass('selected');
							if (nmDate.getTime() == today.getTime()) week[a].addClass('current');
						}
					}
				}
				weeks.push(week);
			}
			$.each(weeks, function(i, v){
				var row = $('<span class="cal-row"></span>'), l = v.length;
				if (disableRow === true && i == weeks.length - 1) row.addClass('disabled');
				for(var i = 0; i < l; i++) { row.append(v[i]); }
				dates.push(row);
			});
			callback(dates);
		},
		/* Sets current view based on user interaction (on arrows) */
		getNewMonth : function (dir, isTrigger) {
			var that = this,
				cal = that.calendar;
				curr = cal.find('.calendar-dates:not(.left):not(.right)'),
				lblTodayDay = cal.find('.calendar-dayofweek'),
				lblTodayMonth = cal.find('.calendar-month'),
				lblTodayDate = cal.find('.calendar-date'),
				lblTodayYear = cal.find('.calendar-year'),
				lblMonth = cal.find('.calendar-curr-month'),
				container = cal.find('.calendar-date-holder');

			if (that.viewMode === 'days') {
				if (isTrigger) {
					that.date.setDate(1);
					that.date.setMonth(that.date.getMonth() + ( dir === 'right' ? 1 : -1));
				}
				if(isTrigger || that.options.mode === 'calendar' || curr.hasClass('months')) {
					that.getDays(that.date, function (dates) {
						if (isTrigger) {
							var cElem = curr.clone();
							cElem.addClass(dir).empty().append(dates)[dir == 'left' ? 'prependTo' : 'appendTo'](container);
							setTimeout(function() {
								curr.addClass(dir == 'left' ? 'right' : 'left');
								cElem.removeClass(dir);
								setTimeout(function () { cal.find('.calendar-dates.'+(dir == 'left' ? 'right' : 'left')+'').remove(); }, 300);
							}, 10);
						} else {
							if (curr.hasClass('months')) {
								var cElem = curr.clone();
								$('.calendar-labels').removeClass('invis');
								cElem.empty().append(dates).addClass('hasmonths').appendTo(container);
								curr.addClass('load');
								setTimeout(function () { cElem.removeClass('hasmonths'); }, 10);
								container.parent().removeAttr('style');
								setTimeout(function () {
									cElem.removeClass('months');
									setTimeout(function () { cal.find('.calendar-dates.months').remove(); }, 300);
								}, 10);
							} else {
								curr.append(dates);
							}
						}
					});
				}
				
				lblMonth.text(months[that.date.getMonth()] + ' ' + that.date.getFullYear());
				
				if (!isTrigger && !curr.hasClass('months')) {
					lblTodayDay.text(short_days[that.today.getDay()]);
					lblTodayMonth.text(short_months[that.today.getMonth()]);
					lblTodayDate.text(that.today.getDate());
					lblTodayYear.text(that.today.getFullYear());
				}
			} else {
				that.date.setYear(that.date.getFullYear() + ( dir === 'right' ? 1 : -1))
				lblMonth.text(that.date.getFullYear());
			}
		},
		/* Sets current view to selected date */
		selectedView : function () {
			var that = this,
				cal = that.calendar;
				curr = cal.find('.calendar-dates:eq(0)'),
				lblMonth = cal.find('.calendar-curr-month'),
				lblDays = cal.find('.calendar-labels');

			that.getDays(that.selected, function (dates) {
				curr.html(dates);
			});

			lblMonth.text(months[that.selected.getMonth()] + ' ' + that.selected.getFullYear());
			lblDays.removeClass('invis');
			that.viewMode = 'days';
		},
		/* Creates components for the calendar */
		create : function(){
			var that = this,
				mode = that.options.mode,
				theme = that.options.theme,
				overlay = $('<div class="calendar-overlay"></div>'),
				wrapper = $('<div class="calendar-wrapper load"></div>'),
				cardhead = $('<section class="calendar-head-card"><div class="calendar-selected-day"></div></section>'),
				container = $('<div class="calendar-container"></div>'),
				calhead = $('<section class="calendar-top-selector"><div class="calendar-prev"></div><div class="calendar-curr-month"></div><div class="calendar-next"></div></section>'),
				datesgrid = $('<section class="calendar-grid">'
							+ '<div class="calendar-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>'
							+ '<div class="calendar-date-holder"><section class="calendar-dates"></section></div></section>'),
				cardfooter = $('<section class="calendar-footer"><span class="calendar-date-wrapper" title="Select current date."><span class="calendar-today">TODAY</span><span class="calendar-date"></span> <span class="calendar-month"></span> <span class="calendar-year"></span></span></section>');

			calhead.appendTo(container);
			datesgrid.appendTo(container);

			overlay.click(function (e) { that.hide(); });
			wrapper.click(function (e) { e.stopPropagation(); });

			wrapper.append(cardhead).append(container).appendTo(mode === 'calendar' ? that.elem : overlay);
			that.calendar = mode === 'calendar' ? that.elem : wrapper;

			wrapper.append(cardfooter);
			switch(theme) {
				case 'orange':
				case 'blue':
				case 'green':
				case 'purple':
				case 'indigo':
				case 'teal':
					wrapper.attr('data-theme', theme);
				break;
				default:
					wrapper.attr('data-theme', $.fn.dcalendar.defaults.theme);
				break;
			}

			if(mode !== 'calendar') { 
				wrapper.addClass('picker');
				overlay.appendTo('body');
			}
		},
		/* Shows the calendar (date picker) */
		show : function () {
			$('body').attr('datepicker-display', 'on');
			this.date = new Date(this.selected.getFullYear(), this.selected.getMonth(), this.selected.getDate());
			this.selectedView();
			this.calendar.parent().fadeIn('fast');
			this.calendar.removeClass('load');
		},
		/* Hides the calendar (date picker) */
		hide : function (callback) {
			var that = this;
			that.calendar.addClass('load');
			that.calendar.parent().fadeOut(function () {
				$('body').removeAttr('datepicker-display');
				if(callback) callback();
				if(that.elem.is('input')) that.elem.focus();
			});
		}
	};

	/* DEFINITION FOR DCALENDAR */
	$.fn.dcalendar = function(opts){
		return $(this).each(function(index, elem){
			var that = this;
 			var $this = $(that),
 				data = $(that).data(DCAL_DATA),
 				options = $.extend({}, $.fn.dcalendar.defaults, $this.data(), typeof opts === 'object' && opts);
 			if(!data){
 				$this.data(DCAL_DATA, (data = new DCalendar(this, options)));
 			}
 			if(typeof opts === 'string') data[opts]();
		});
	};

	$.fn.dcalendar.defaults = {
		mode : 'calendar',
		format: 'mmm/dd/yyyy',
		theme: 'orange',
		readOnly: true
	};

	$.fn.dcalendar.Constructor = DCalendar;

	/* DEFINITION FOR DCALENDAR PICKER */
	$.fn.dcalendarpicker = function(opts){
		return $(this).each(function(){
			var that = $(this);

			if(opts){
				opts.mode = 'datepicker';
				that.dcalendar(opts);
			} else{
				that.dcalendar({mode: 'datepicker'});
			}

			that.on('click', function (e) {
				var cal = that.data(DCAL_DATA);
				cal.show();
				this.blur();
			}).on('dateselected', function (e) {
				var cal = that.data(DCAL_DATA);
				that.val(e.date).trigger('onchange');
				cal.hide(function () {
					that.trigger($.Event('datechanged', {date: e.date}));
				});				
			}).on('keydown', function(e){
				if(ex_keys.indexOf(e.which) < 0 && that.data(DCAL_DATA).options.readOnly) return false; 
			});
			$(document).on('keydown', function (e) {
				if(e.keyCode != 27) return;
				that.data(DCAL_DATA).hide();
			});
		});
	};
}(jQuery);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery Validation Plugin v1.17.0
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2017 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(function( $ ) {

$.extend( $.fn, {

	// https://jqueryvalidation.org/validate/
	validate: function( options ) {

		// If nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// Check if a validator for this form was already created
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.on( "click.validate", ":submit", function( event ) {

				// Track the used submit button to properly handle scripted
				// submits later.
				validator.submitButton = event.currentTarget;

				// Allow suppressing validation by adding a cancel class to the submit button
				if ( $( this ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				}

				// Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				}
			} );

			// Validate the form on submit
			this.on( "submit.validate", function( event ) {
				if ( validator.settings.debug ) {

					// Prevent form submit to be able to see console output
					event.preventDefault();
				}
				function handle() {
					var hidden, result;

					// Insert a hidden input as a replacement for the missing submit button
					// The hidden input is inserted in two cases:
					//   - A user defined a `submitHandler`
					//   - There was a pending request due to `remote` method and `stopRequest()`
					//     was called to submit the form in case it's valid
					if ( validator.submitButton && ( validator.settings.submitHandler || validator.formSubmitted ) ) {
						hidden = $( "<input type='hidden'/>" )
							.attr( "name", validator.submitButton.name )
							.val( $( validator.submitButton ).val() )
							.appendTo( validator.currentForm );
					}

					if ( validator.settings.submitHandler ) {
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( hidden ) {

							// And clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						if ( result !== undefined ) {
							return result;
						}
						return false;
					}
					return true;
				}

				// Prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			} );
		}

		return validator;
	},

	// https://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator, errorList;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		} else {
			errorList = [];
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
				if ( !valid ) {
					errorList = errorList.concat( validator.errorList );
				}
			} );
			validator.errorList = errorList;
		}
		return valid;
	},

	// https://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[ 0 ],
			settings, staticRules, existingRules, data, param, filtered;

		// If nothing is selected, return empty object; can't chain anyway
		if ( element == null ) {
			return;
		}

		if ( !element.form && element.hasAttribute( "contenteditable" ) ) {
			element.form = this.closest( "form" )[ 0 ];
			element.name = this.attr( "name" );
		}

		if ( element.form == null ) {
			return;
		}

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );

				// Remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				}
				filtered = {};
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
				} );
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

		// Make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param }, data );
		}

		// Make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param } );
		}

		return data;
	}
} );

// Custom selectors
$.extend( $.expr.pseudos || $.expr[ ":" ], {		// '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

	// https://jqueryvalidation.org/blank-selector/
	blank: function( a ) {
		return !$.trim( "" + $( a ).val() );
	},

	// https://jqueryvalidation.org/filled-selector/
	filled: function( a ) {
		var val = $( a ).val();
		return val !== null && !!$.trim( "" + val );
	},

	// https://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	}
} );

// Constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// https://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		};
	}
	if ( params === undefined ) {
		return source;
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
			return n;
		} );
	} );
	return source;
};

$.extend( $.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		pendingClass: "pending",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// Hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.hideThese( this.errorsFor( element ) );
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			}
		},
		onkeyup: function( element, event ) {

			// Avoid revalidate the field when pressing one of the following keys
			// Shift       => 16
			// Ctrl        => 17
			// Alt         => 18
			// Caps lock   => 20
			// End         => 35
			// Home        => 36
			// Left arrow  => 37
			// Up arrow    => 38
			// Right arrow => 39
			// Down arrow  => 40
			// Insert      => 45
			// Num lock    => 144
			// AltGr key   => 225
			var excludedKeys = [
				16, 17, 18, 20, 35, 36, 37,
				38, 39, 40, 45, 144, 225
			];

			if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
				return;
			} else if ( element.name in this.submitted || element.name in this.invalid ) {
				this.element( element );
			}
		},
		onclick: function( element ) {

			// Click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element( element );

			// Or option elements, check parent select in that case
			} else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			} else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			} else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			}
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.setDefaults/
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
		step: $.validator.format( "Please enter a multiple of {0}." )
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var groups = ( this.groups = {} ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				}
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				} );
			} );
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			} );

			function delegate( event ) {

				// Set form expando on contenteditable
				if ( !this.form && this.hasAttribute( "contenteditable" ) ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = $( this ).attr( "name" );
				}

				var validator = $.data( this.form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this, event );
				}
			}

			$( this.currentForm )
				.on( "focusin.validate focusout.validate keyup.validate",
					":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
					"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
					"[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate )

				// Support: Chrome, oldIE
				// "select" is provided as event.target when clicking a option
				.on( "click.validate", "select, option, [type='radio'], [type='checkbox']", delegate );

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
			}
		},

		// https://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend( {}, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			}
			return this.valid();
		},

		// https://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				v = this,
				result = true,
				rs, group;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				// If this element is grouped, then validate all group elements already
				// containing a value
				group = this.groups[ checkElement.name ];
				if ( group ) {
					$.each( this.groups, function( name, testgroup ) {
						if ( testgroup === group && name !== checkElement.name ) {
							cleanElement = v.validationTargetFor( v.clean( v.findByName( name ) ) );
							if ( cleanElement && cleanElement.name in v.invalid ) {
								v.currentElements.push( cleanElement );
								result = v.check( cleanElement ) && result;
							}
						}
					} );
				}

				rs = this.check( checkElement ) !== false;
				result = result && rs;
				if ( rs ) {
					this.invalid[ checkElement.name ] = false;
				} else {
					this.invalid[ checkElement.name ] = true;
				}

				if ( !this.numberOfInvalids() ) {

					// Hide error containers on last error
					this.toHide = this.toHide.add( this.containers );
				}
				this.showErrors();

				// Add aria-invalid status for screen readers
				$( element ).attr( "aria-invalid", !rs );
			}

			return result;
		},

		// https://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				var validator = this;

				// Add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = $.map( this.errorMap, function( message, name ) {
					return {
						message: message,
						element: validator.findByName( name )[ 0 ]
					};
				} );

				// Remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				} );
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// https://jqueryvalidation.org/Validator.resetForm/
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.invalid = {};
			this.submitted = {};
			this.prepareForm();
			this.hideErrors();
			var elements = this.elements()
				.removeData( "previousValue" )
				.removeAttr( "aria-invalid" );

			this.resetElements( elements );
		},

		resetElements: function( elements ) {
			var i;

			if ( this.settings.unhighlight ) {
				for ( i = 0; elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ],
						this.settings.errorClass, "" );
					this.findByName( elements[ i ].name ).removeClass( this.settings.validClass );
				}
			} else {
				elements
					.removeClass( this.settings.errorClass )
					.removeClass( this.settings.validClass );
			}
		},

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {

				// This check allows counting elements with empty error
				// message as invalid elements
				if ( obj[ i ] !== undefined && obj[ i ] !== null && obj[ i ] !== false ) {
					count++;
				}
			}
			return count;
		},

		hideErrors: function() {
			this.hideThese( this.toHide );
		},

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [] )
					.filter( ":visible" )
					.focus()

					// Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger( "focusin" );
				} catch ( e ) {

					// Ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			} ).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// Select all valid inputs inside the form (no submit or reset buttons)
			return $( this.currentForm )
			.find( "input, select, textarea, [contenteditable]" )
			.not( ":submit, :reset, :image, :disabled" )
			.not( this.settings.ignore )
			.filter( function() {
				var name = this.name || $( this ).attr( "name" ); // For contenteditable
				if ( !name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				}

				// Set form expando on contenteditable
				if ( this.hasAttribute( "contenteditable" ) ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = name;
				}

				// Select only the first element for each name, and only those with rules specified
				if ( name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				}

				rulesCache[ name ] = true;
				return true;
			} );
		},

		clean: function( selector ) {
			return $( selector )[ 0 ];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		resetInternals: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $( [] );
			this.toHide = $( [] );
		},

		reset: function() {
			this.resetInternals();
			this.currentElements = $( [] );
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		},

		elementValue: function( element ) {
			var $element = $( element ),
				type = element.type,
				val, idx;

			if ( type === "radio" || type === "checkbox" ) {
				return this.findByName( element.name ).filter( ":checked" ).val();
			} else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? "NaN" : $element.val();
			}

			if ( element.hasAttribute( "contenteditable" ) ) {
				val = $element.text();
			} else {
				val = $element.val();
			}

			if ( type === "file" ) {

				// Modern browser (chrome & safari)
				if ( val.substr( 0, 12 ) === "C:\\fakepath\\" ) {
					return val.substr( 12 );
				}

				// Legacy browsers
				// Unix-based path
				idx = val.lastIndexOf( "/" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Windows-based path
				idx = val.lastIndexOf( "\\" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Just the file name
				return val;
			}

			if ( typeof val === "string" ) {
				return val.replace( /\r/g, "" );
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				} ).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule, normalizer;

			// Prioritize the local normalizer defined for this element over the global one
			// if the former exists, otherwise user the global one in case it exists.
			if ( typeof rules.normalizer === "function" ) {
				normalizer = rules.normalizer;
			} else if (	typeof this.settings.normalizer === "function" ) {
				normalizer = this.settings.normalizer;
			}

			// If normalizer is defined, then call it to retreive the changed value instead
			// of using the real one.
			// Note that `this` in the normalizer is `element`.
			if ( normalizer ) {
				val = normalizer.call( element, val );

				if ( typeof val !== "string" ) {
					throw new TypeError( "The normalizer should return a string value." );
				}

				// Delete the normalizer from rules to avoid treating it as a pre-defined method.
				delete rules.normalizer;
			}

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] };
				try {
					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

					// If a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					if ( e instanceof TypeError ) {
						e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
					}

					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			}
			return true;
		},

		// Return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		},

		// Return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ] );
		},

		// Return the first defined argument, allowing empty strings
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++ ) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				}
			}
			return undefined;
		},

		// The second parameter 'rule' used to be a string, and extended to an object literal
		// of the following form:
		// rule = {
		//     method: "method name",
		//     parameters: "the given method parameters"
		// }
		//
		// The old behavior still supported, kept to maintain backward compatibility with
		// old code, and will be removed in the next major release.
		defaultMessage: function( element, rule ) {
			if ( typeof rule === "string" ) {
				rule = { method: rule };
			}

			var message = this.findDefined(
					this.customMessage( element.name, rule.method ),
					this.customDataMessage( element, rule.method ),

					// 'title' is never undefined, so handle empty string as undefined
					!this.settings.ignoreTitle && element.title || undefined,
					$.validator.messages[ rule.method ],
					"<strong>Warning: No message defined for " + element.name + "</strong>"
				),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			} else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
			}

			return message;
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule );

			this.errorList.push( {
				message: message,
				element: element,
				method: rule.method
			} );

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		},

		invalidElements: function() {
			return $( this.errorList ).map( function() {
				return this.element;
			} );
		},

		showLabel: function( element, message ) {
			var place, group, errorID, v,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );

			if ( error.length ) {

				// Refresh error/success class
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

				// Replace message on existing label
				error.html( message );
			} else {

				// Create error element
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass )
					.html( message || "" );

				// Maintain reference to the element to be placed into the DOM
				place = error;
				if ( this.settings.wrapper ) {

					// Make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				}
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				} else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement.call( this, place, $( element ) );
				} else {
					place.insertAfter( element );
				}

				// Link error back to the element
				if ( error.is( "label" ) ) {

					// If the error is a label, then associate using 'for'
					error.attr( "for", elementID );

					// If the element is not a child of an associated label, then it's necessary
					// to explicitly apply aria-describedby
				} else if ( error.parents( "label[for='" + this.escapeCssMeta( elementID ) + "']" ).length === 0 ) {
					errorID = error.attr( "id" );

					// Respect existing non-error aria-describedby
					if ( !describedBy ) {
						describedBy = errorID;
					} else if ( !describedBy.match( new RegExp( "\\b" + this.escapeCssMeta( errorID ) + "\\b" ) ) ) {

						// Add to end of list if not already present
						describedBy += " " + errorID;
					}
					$( element ).attr( "aria-describedby", describedBy );

					// If this element is grouped, then assign to all elements in the same group
					group = this.groups[ element.name ];
					if ( group ) {
						v = this;
						$.each( v.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + v.escapeCssMeta( name ) + "']", v.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							}
						} );
					}
				}
			}
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				} else {
					this.settings.success( error, element );
				}
			}
			this.toShow = this.toShow.add( error );
		},

		errorsFor: function( element ) {
			var name = this.escapeCssMeta( this.idOrName( element ) ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

			// 'aria-describedby' should directly reference the error element
			if ( describer ) {
				selector = selector + ", #" + this.escapeCssMeta( describer )
					.replace( /\s+/g, ", #" );
			}

			return this
				.errors()
				.filter( selector );
		},

		// See https://api.jquery.com/category/selectors/, for CSS
		// meta-characters that should be escaped in order to be used with JQuery
		// as a literal part of a name/id or any selector.
		escapeCssMeta: function( string ) {
			return string.replace( /([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1" );
		},

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		},

		validationTargetFor: function( element ) {

			// If radio/checkbox, validate first element in group instead
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			}

			// Always apply ignore filter
			return $( element ).not( this.settings.ignore )[ 0 ];
		},

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		},

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + this.escapeCssMeta( name ) + "']" );
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[ typeof param ] ? this.dependTypes[ typeof param ]( param, element ) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			},
			"function": function( param, element ) {
				return param( element );
			}
		},

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				$( element ).addClass( this.settings.pendingClass );
				this.pending[ element.name ] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;

			// Sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[ element.name ];
			$( element ).removeClass( this.settings.pendingClass );
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$( this.currentForm ).submit();

				// Remove the hidden input that was used as a replacement for the
				// missing submit button. The hidden input is added by `handle()`
				// to ensure that the value of the used submit button is passed on
				// for scripted submits triggered by this method
				if ( this.submitButton ) {
					$( "input:hidden[name='" + this.submitButton.name + "']", this.currentForm ).remove();
				}

				this.formSubmitted = false;
			} else if ( !valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
				this.formSubmitted = false;
			}
		},

		previousValue: function( element, method ) {
			method = typeof method === "string" && method || "remote";

			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, { method: method } )
			} );
		},

		// Cleans up all forms and elements, removes validator-specific events
		destroy: function() {
			this.resetForm();

			$( this.currentForm )
				.off( ".validate" )
				.removeData( "validator" )
				.find( ".validate-equalTo-blur" )
					.off( ".validate-equalTo" )
					.removeClass( "validate-equalTo-blur" );
		}

	},

	classRuleSettings: {
		required: { required: true },
		email: { email: true },
		url: { url: true },
		date: { date: true },
		dateISO: { dateISO: true },
		number: { number: true },
		digits: { digits: true },
		creditcard: { creditcard: true }
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		} else {
			$.extend( this.classRuleSettings, className );
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ] );
				}
			} );
		}
		return rules;
	},

	normalizeAttributeRule: function( rules, type, method, value ) {

		// Convert the value to a number for number inputs, and for text for backwards compability
		// allows type="date" and others to be compared as strings
		if ( /min|max|step/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
			value = Number( value );

			// Support Opera Mini, which returns NaN for undefined minlength
			if ( isNaN( value ) ) {
				value = undefined;
			}
		}

		if ( value || value === 0 ) {
			rules[ method ] = value;
		} else if ( type === method && type !== "range" ) {

			// Exception: the jquery validate 'range' method
			// does not test for the html5 'range' type
			rules[ method ] = true;
		}
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

			// Support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute( method );

				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}

				// Force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr( method );
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}

		// 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );
			this.normalizeAttributeRule( rules, type, method, value );
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {

		// Handle dependency check
		$.each( rules, function( prop, val ) {

			// Ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[ prop ];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				}
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				} else {
					$.data( element.form, "validator" ).resetElements( $( element ) );
					delete rules[ prop ];
				}
			}
		} );

		// Evaluate parameters
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = $.isFunction( parameter ) && rule !== "normalizer" ? parameter( element ) : parameter;
		} );

		// Clean number parameters
		$.each( [ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			}
		} );
		$.each( [ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( $.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ] ), Number( rules[ this ][ 1 ] ) ];
				} else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace( /[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ] ), Number( parts[ 1 ] ) ];
				}
			}
		} );

		if ( $.validator.autoCreateRanges ) {

			// Auto-create ranges
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			} );
			data = transformed;
		}
		return data;
	},

	// https://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.methods/
	methods: {

		// https://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {

			// Check if dependency is met
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {

				// Could be an array for select-multiple or a string, both are fine this way
				var val = $( element ).val();
				return val && val.length > 0;
			}
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			}
			return value.length > 0;
		},

		// https://jqueryvalidation.org/email-method/
		email: function( value, element ) {

			// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
		},

		// https://jqueryvalidation.org/url-method/
		url: function( value, element ) {

			// Copyright (c) 2010-2013 Diego Perini, MIT licensed
			// https://gist.github.com/dperini/729294
			// see also https://mathiasbynens.be/demo/url-regex
			// modified to allow protocol-relative URLs
			return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
		},

		// https://jqueryvalidation.org/date-method/
		date: function( value, element ) {
			return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
		},

		// https://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		},

		// https://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
		},

		// https://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		},

		// https://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		},

		// https://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		},

		// https://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		},

		// https://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		},

		// https://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/step-method/
		step: function( value, element, param ) {
			var type = $( element ).attr( "type" ),
				errorMessage = "Step attribute on input type " + type + " is not supported.",
				supportedTypes = [ "text", "number", "range" ],
				re = new RegExp( "\\b" + type + "\\b" ),
				notSupported = type && !re.test( supportedTypes.join() ),
				decimalPlaces = function( num ) {
					var match = ( "" + num ).match( /(?:\.(\d+))?$/ );
					if ( !match ) {
						return 0;
					}

					// Number of digits right of decimal point.
					return match[ 1 ] ? match[ 1 ].length : 0;
				},
				toInt = function( num ) {
					return Math.round( num * Math.pow( 10, decimals ) );
				},
				valid = true,
				decimals;

			// Works only for text, number and range input types
			// TODO find a way to support input types date, datetime, datetime-local, month, time and week
			if ( notSupported ) {
				throw new Error( errorMessage );
			}

			decimals = decimalPlaces( param );

			// Value can't have too many decimals
			if ( decimalPlaces( value ) > decimals || toInt( value ) % toInt( param ) !== 0 ) {
				valid = false;
			}

			return this.optional( element ) || valid;
		},

		// https://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {

			// Bind to the blur event of the target in order to revalidate whenever the target field is updated
			var target = $( param );
			if ( this.settings.onfocusout && target.not( ".validate-equalTo-blur" ).length ) {
				target.addClass( "validate-equalTo-blur" ).on( "blur.validate-equalTo", function() {
					$( element ).valid();
				} );
			}
			return value === target.val();
		},

		// https://jqueryvalidation.org/remote-method/
		remote: function( value, element, param, method ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}

			method = typeof method === "string" && method || "remote";

			var previous = this.previousValue( element, method ),
				validator, data, optionDataString;

			if ( !this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {};
			}
			previous.originalMessage = previous.originalMessage || this.settings.messages[ element.name ][ method ];
			this.settings.messages[ element.name ][ method ] = previous.message;

			param = typeof param === "string" && { url: param } || param;
			optionDataString = $.param( $.extend( { data: value }, param.data ) );
			if ( previous.old === optionDataString ) {
				return previous.valid;
			}

			previous.old = optionDataString;
			validator = this;
			this.startRequest( element );
			data = {};
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ][ method ] = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.resetInternals();
						validator.toHide = validator.errorsFor( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						validator.invalid[ element.name ] = false;
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, { method: method, parameters: value } );
						errors[ element.name ] = previous.message = message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					}
					previous.valid = valid;
					validator.stopRequest( element, valid );
				}
			}, param ) );
			return "pending";
		}
	}

} );

// Ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
	ajax;

// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter( function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = xhr;
		}
	} );
} else {

	// Proxy ajax
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = ajax.apply( this, arguments );
			return pendingRequests[ port ];
		}
		return ajax.apply( this, arguments );
	};
}
return $;
}));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
* asRange v0.3.4
* https://github.com/amazingSurge/jquery-asRange
*
* Copyright (c) amazingSurge
* Released under the LGPL-3.0 license
*/
(function(global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function(_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule
      ? obj
      : {
          default: obj
        };
  }

  var _typeof =
    typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
      ? function(obj) {
          return typeof obj;
        }
      : function(obj) {
          return obj &&
          typeof Symbol === 'function' &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
            ? 'symbol'
            : typeof obj;
        };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  var _createClass = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();

  var DEFAULTS = {
    namespace: 'asRange',
    skin: null,
    max: 100,
    min: 0,
    value: null,
    step: 10,
    limit: true,
    range: false,
    direction: 'h', // 'v' or 'h'
    keyboard: true,
    replaceFirst: false, // false, 'inherit', {'inherit': 'default'}
    tip: true,
    format: function format(value) {
      return value;
    }
  };

  function getEventObject(event) {
    var e = event.originalEvent;
    if (e.touches && e.touches.length && e.touches[0]) {
      e = e.touches[0];
    }

    return e;
  }

  var Pointer = (function() {
    function Pointer($element, id, parent) {
      _classCallCheck(this, Pointer);

      this.$element = $element;
      this.uid = id;
      this.parent = parent;
      this.options = _jquery2.default.extend(true, {}, this.parent.options);
      this.direction = this.options.direction;
      this.value = null;
      this.classes = {
        active: this.parent.namespace + '-pointer_active'
      };
    }

    _createClass(Pointer, [
      {
        key: 'mousedown',
        value: function mousedown(event) {
          var axis = this.parent.direction.axis;
          var position = this.parent.direction.position;
          var offset = this.parent.$wrap.offset();

          this.$element.trigger(this.parent.namespace + '::moveStart', this);

          this.data = {};
          this.data.start = event[axis];
          this.data.position = event[axis] - offset[position];

          var value = this.parent.getValueFromPosition(this.data.position);
          this.set(value);

          _jquery2.default.each(this.parent.pointer, function(i, p) {
            p.deactive();
          });

          this.active();

          this.mousemove = function(event) {
            var eventObj = getEventObject(event);
            var value = this.parent.getValueFromPosition(
              this.data.position +
                (eventObj[axis] || this.data.start) -
                this.data.start
            );
            this.set(value);

            event.preventDefault();
            return false;
          };
          this.mouseup = function() {
            (0, _jquery2.default)(document).off(
              '.asRange mousemove.asRange touchend.asRange mouseup.asRange touchcancel.asRange'
            );
            this.$element.trigger(this.parent.namespace + '::moveEnd', this);
            //$(".asRange-pointer__active").removeClass();
            this.deactive();
            return false;
          };

          (0, _jquery2.default)(document)
            .on(
              'touchmove.asRange mousemove.asRange',
              _jquery2.default.proxy(this.mousemove, this)
            )
            .on(
              'touchend.asRange mouseup.asRange',
              _jquery2.default.proxy(this.mouseup, this)
            );
          return false;
        }
      },
      {
        key: 'active',
        value: function active() {
          this.$element.addClass(this.classes.active);
        }
      },
      {
        key: 'deactive',
        value: function deactive() {
          this.$element.removeClass(this.classes.active);
        }
      },
      {
        key: 'set',
        value: function set(value) {
          if (this.value === value) {
            return;
          }

          if (this.parent.step) {
            value = this.matchStep(value);
          }
          if (this.options.limit === true) {
            value = this.matchLimit(value);
          } else {
            if (value <= this.parent.min) {
              value = this.parent.min;
            }
            if (value >= this.parent.max) {
              value = this.parent.max;
            }
          }
          this.value = value;

          this.updatePosition();
          this.$element.focus();

          this.$element.trigger(this.parent.namespace + '::move', this);
        }
      },
      {
        key: 'updatePosition',
        value: function updatePosition() {
          var position = {};

          position[this.parent.direction.position] = this.getPercent() + '%';
          this.$element.css(position);
        }
      },
      {
        key: 'getPercent',
        value: function getPercent() {
          return (this.value - this.parent.min) / this.parent.interval * 100;
        }
      },
      {
        key: 'get',
        value: function get() {
          return this.value;
        }
      },
      {
        key: 'matchStep',
        value: function matchStep(value) {
          var step = this.parent.step;
          var decimal = step.toString().split('.')[1];

          value = Math.round(value / step) * step;

          if (decimal) {
            value = value.toFixed(decimal.length);
          }

          return parseInt(value);
        }
      },
      {
        key: 'matchLimit',
        value: function matchLimit(value) {
          var left = void 0;
          var right = void 0;
          var pointer = this.parent.pointer;

          if (this.uid === 1) {
            left = this.parent.min;
          } else {
            left = pointer[this.uid - 2].value;
          }

          if (pointer[this.uid] && pointer[this.uid].value !== null) {
            right = pointer[this.uid].value;
          } else {
            right = this.parent.max;
          }

          if (value <= left) {
            value = left;
          }
          if (value >= right) {
            value = right;
          }
          return value;
        }
      },
      {
        key: 'destroy',
        value: function destroy() {
          this.$element.off('.asRange');
          this.$element.remove();
        }
      }
    ]);

    return Pointer;
  })();
  
  var selected = {
    defaults: {},
    init: function init(instance) {
      var _this = this;

      this.$arrow = (0, _jquery2.default)('<span></span>').appendTo(
        instance.$wrap
      );
      this.$arrow.addClass(instance.namespace + '-selected');

      if (instance.options.range === false) {
        instance.p1.$element.on(instance.namespace + '::move', function(
          e,
          pointer
        ) {
          _this.$arrow.css({
            left: 0,
            width: pointer.getPercent() + '%'
          });
        });
      }

      if (instance.options.range === true) {
        var onUpdate = function onUpdate() {
          var width = instance.p2.getPercent() - instance.p1.getPercent();
          var left = void 0;
          if (width >= 0) {
            left = instance.p1.getPercent();
          } else {
            width = -width;
            left = instance.p2.getPercent();
          }
          _this.$arrow.css({
            left: left + '%',
            width: width + '%'
          });
        };
        instance.p1.$element.on(instance.namespace + '::move', onUpdate);
        instance.p2.$element.on(instance.namespace + '::move', onUpdate);
      }
    }
  };

  var tip = {
    defaults: {
      active: 'always' // 'always' 'onMove'
    },
    init: function init(instance) {
      var that = this;
      var opts = _jquery2.default.extend(
        {},
        this.defaults,
        instance.options.tip
      );

      this.opts = opts;
      this.classes = {
        tip: instance.namespace + '-tip',
        show: instance.namespace + '-tip-show'
      };
      _jquery2.default.each(instance.pointer, function(i, p) {
        var $tip = (0, _jquery2.default)('<span></span>').appendTo(
          instance.pointer[i].$element
        );

        $tip.addClass(that.classes.tip);
        if (that.opts.active === 'onMove') {
          $tip.css({
            display: 'none'
          });
          p.$element
            .on(instance.namespace + '::moveEnd', function() {
              that.hide($tip);
              return false;
            })
            .on(instance.namespace + '::moveStart', function() {
              that.show($tip);
              return false;
            });
        }
        p.$element.on(instance.namespace + '::move', function() {
          var value = void 0;
          if (instance.options.range) {
            value = instance.get()[i];
          } else {
            value = instance.get();
          }
          if (typeof instance.options.format === 'function') {
            if (instance.options.replaceFirst && typeof value !== 'number') {
              if (typeof instance.options.replaceFirst === 'string') {
                value = instance.options.replaceFirst;
              }
              if (_typeof(instance.options.replaceFirst) === 'object') {
                for (var key in instance.options.replaceFirst) {
                  if (
                    Object.hasOwnProperty(instance.options.replaceFirst, key)
                  ) {
                    value = instance.options.replaceFirst[key];
                  }
                }
              }
            } else {
              value = instance.options.format(value);
            }
          }
          $tip.text(value);
          return false;
        });
      });
    },
    show: function show($tip) {
      $tip.addClass(this.classes.show);
      $tip.css({
        display: 'block'
      });
    },
    hide: function hide($tip) {
      $tip.removeClass(this.classes.show);
      $tip.css({
        display: 'none'
      });
    }
  };

  var keyboard = function keyboard() {
    var $doc = (0, _jquery2.default)(document);

    $doc.on('asRange::ready', function(event, instance) {
      var step = void 0;

      var keyboard = {
        keys: {
          UP: 38,
          DOWN: 40,
          LEFT: 37,
          RIGHT: 39,
          RETURN: 13,
          ESCAPE: 27,
          BACKSPACE: 8,
          SPACE: 32
        },
        map: {},
        bound: false,
        press: function press(e) {
          /* eslint consistent-return: "off"*/
          var key = e.keyCode || e.which;
          if (key in keyboard.map && typeof keyboard.map[key] === 'function') {
            keyboard.map[key](e);
            return false;
          }
        },
        attach: function attach(map) {
          var key = void 0;
          var up = void 0;
          for (key in map) {
            if (map.hasOwnProperty(key)) {
              up = key.toUpperCase();
              if (up in keyboard.keys) {
                keyboard.map[keyboard.keys[up]] = map[key];
              } else {
                keyboard.map[up] = map[key];
              }
            }
          }
          if (!keyboard.bound) {
            keyboard.bound = true;
            $doc.bind('keydown', keyboard.press);
          }
        },
        detach: function detach() {
          keyboard.bound = false;
          keyboard.map = {};
          $doc.unbind('keydown', keyboard.press);
        }
      };

      if (instance.options.keyboard === true) {
        _jquery2.default.each(instance.pointer, function(i, p) {
          if (instance.options.step) {
            step = instance.options.step;
          } else {
            step = 1;
          }
          var left = function left() {
            var value = p.value;
            p.set(value - step);
          };
          var right = function right() {
            var value = p.value;
            p.set(value + step);
          };
          p.$element
            .attr('tabindex', '0')
            .on('focus', function() {
              keyboard.attach({
                left: left,
                right: right
              });
              return false;
            })
            .on('blur', function() {
              keyboard.detach();
              return false;
            });
        });
      }
    });
  };

  var components = {};

  /**
   * Plugin constructor
   **/

  var asRange = (function() {
    function asRange(element, options) {
      var _this2 = this;

      _classCallCheck(this, asRange);

      var metas = {};
      this.element = element;
      this.$element = (0, _jquery2.default)(element);

      if (this.$element.is('input')) {
        var value = this.$element.val();

        if (typeof value === 'string') {
          metas.value = value.split(',');
        }

        _jquery2.default.each(['min', 'max', 'step'], function(index, key) {
          var val = parseFloat(_this2.$element.attr(key));
          if (!isNaN(val)) {
            metas[key] = val;
          }
        });

        this.$element.css({
          display: 'none'
        });
        this.$wrap = (0, _jquery2.default)('<div></div>');
        this.$element.after(this.$wrap);
      } else {
        this.$wrap = this.$element;
      }

      this.options = _jquery2.default.extend(
        {},
        DEFAULTS,
        options,
        this.$element.data(),
        metas
      );
      this.namespace = this.options.namespace;
      this.components = _jquery2.default.extend(true, {}, components);
      if (this.options.range) {
        this.options.replaceFirst = false;
      }

      // public properties
      this.value = this.options.value;
      if (this.value === null) {
        this.value = this.options.min;
      }

      if (!this.options.range) {
        if (_jquery2.default.isArray(this.value)) {
          this.value = this.value[0];
        }
      } else if (!_jquery2.default.isArray(this.value)) {
        this.value = [this.value, this.value];
      } else if (this.value.length === 1) {
        this.value[1] = this.value[0];
      }

      this.min = this.options.min;
      this.max = this.options.max;
      this.step = this.options.step;
      this.interval = this.max - this.min;

      // flag
      this.initialized = false;
      this.updating = false;
      this.disabled = false;

      if (this.options.direction === 'v') {
        this.direction = {
          axis: 'pageY',
          position: 'top'
        };
      } else {
        this.direction = {
          axis: 'pageX',
          position: 'left'
        };
      }

      this.$wrap.addClass(this.namespace);

      if (this.options.skin) {
        this.$wrap.addClass(this.namespace + '_' + this.options.skin);
      }

      if (this.max < this.min || this.step >= this.interval) {
        throw new Error('error options about max min step');
      }

      this.init();
    }

    _createClass(
      asRange,
      [
        {
          key: 'init',
          value: function init() {
            this.$wrap.append('<div class="' + this.namespace + '-bar" />');

            // build pointers
            this.buildPointers();

            // initial components
            this.components.selected.init(this);

            if (this.options.tip !== false) {
              this.components.tip.init(this);
            }

            // initial pointer value
            this.set(this.value);

            // Bind events
            this.bindEvents();

            this._trigger('ready');
            this.initialized = true;
          }
        },
        {
          key: '_trigger',
          value: function _trigger(eventType) {
            for (
              var _len = arguments.length,
                params = Array(_len > 1 ? _len - 1 : 0),
                _key = 1;
              _key < _len;
              _key++
            ) {
              params[_key - 1] = arguments[_key];
            }

            var data = [this].concat(params);

            // event
            this.$element.trigger(this.namespace + '::' + eventType, data);

            // callback
            eventType = eventType.replace(/\b\w+\b/g, function(word) {
              return word.substring(0, 1).toUpperCase() + word.substring(1);
            });
            var onFunction = 'on' + eventType;

            if (typeof this.options[onFunction] === 'function') {
              this.options[onFunction].apply(this, params);
            }
          }
        },
        {
          key: 'buildPointers',
          value: function buildPointers() {
            this.pointer = [];
            var pointerCount = 1;
            if (this.options.range) {
              pointerCount = 2;
            }
            for (var i = 1; i <= pointerCount; i++) {
              var $pointer = (0, _jquery2.default)(
                '<div class="' +
                  this.namespace +
                  '-pointer ' +
                  this.namespace +
                  '-pointer-' +
                  i +
                  '"></div>'
              ).appendTo(this.$wrap);
              var p = new Pointer($pointer, i, this);
              this.pointer.push(p);
            }

            // alias of pointer
            this.p1 = this.pointer[0];

            if (this.options.range) {
              this.p2 = this.pointer[1];
            }
          }
        },
        {
          key: 'bindEvents',
          value: function bindEvents() {
            var _this3 = this;

            var that = this;
            this.$wrap.on('touchstart.asRange mousedown.asRange', function(
              event
            ) {
              /* eslint consistent-return: "off"*/
              if (that.disabled === true) {
                return;
              }
              event = getEventObject(event);
              var rightclick = event.which
                ? event.which === 3
                : event.button === 2;
              if (rightclick) {
                return false;
              }

              var offset = that.$wrap.offset();
              var start =
                event[that.direction.axis] - offset[that.direction.position];
              var p = that.getAdjacentPointer(start);

              p.mousedown(event);
              return false;
            });

            if (this.$element.is('input')) {
              this.$element.on(this.namespace + '::change', function() {
                var value = _this3.get();
                _this3.$element.val(value);
              });
            }

            _jquery2.default.each(this.pointer, function(i, p) {
              p.$element.on(_this3.namespace + '::move', function() {
                that.value = that.get();
                if (!that.initialized || that.updating) {
                  return false;
                }
                that._trigger('change', that.value);
                return false;
              });
            });
          }
        },
        {
          key: 'getValueFromPosition',
          value: function getValueFromPosition(px) {
            if (px > 0) {
              return this.min + px / this.getLength() * this.interval;
            }
            return 0;
          }
        },
        {
          key: 'getAdjacentPointer',
          value: function getAdjacentPointer(start) {
            var value = this.getValueFromPosition(start);
            if (this.options.range) {
              var p1 = this.p1.value;
              var p2 = this.p2.value;
              var diff = Math.abs(p1 - p2);
              if (p1 <= p2) {
                if (value > p1 + diff / 2) {
                  return this.p2;
                }
                return this.p1;
              }

              if (value > p2 + diff / 2) {
                return this.p1;
              }

              return this.p2;
            }
            return this.p1;
          }
        },
        {
          key: 'getLength',
          value: function getLength() {
            if (this.options.direction === 'v') {
              return this.$wrap.height();
            }
            return this.$wrap.width();
          }
        },
        {
          key: 'update',
          value: function update(options) {
            var _this4 = this;

            this.updating = true;
            _jquery2.default.each(
              ['max', 'min', 'step', 'limit', 'value'],
              function(key, value) {
                if (options[value]) {
                  _this4[value] = options[value];
                }
              }
            );
            if (options.max || options.min) {
              this.setInterval(options.min, options.max);
            }

            if (!options.value) {
              this.value = options.min;
            }

            _jquery2.default.each(this.components, function(key, value) {
              if (typeof value.update === 'function') {
                value.update(_this4);
              }
            });

            this.set(this.value);

            this._trigger('update');

            this.updating = false;
          }
        },
        {
          key: 'get',
          value: function get() {
            var value = [];

            _jquery2.default.each(this.pointer, function(i, p) {
              value[i] = p.get();
            });

            if (this.options.range) {
              return value;
            }

            if (value[0] === this.options.min) {
              if (typeof this.options.replaceFirst === 'string') {
                value[0] = this.options.replaceFirst;
              }
              if (_typeof(this.options.replaceFirst) === 'object') {
                for (var key in this.options.replaceFirst) {
                  if (Object.hasOwnProperty(this.options.replaceFirst, key)) {
                    value[0] = key;
                  }
                }
              }
            }

            return value[0];
          }
        },
        {
          key: 'set',
          value: function set(value) {
            if (this.options.range) {
              if (typeof value === 'number') {
                value = [value];
              }
              if (!_jquery2.default.isArray(value)) {
                return;
              }
              _jquery2.default.each(this.pointer, function(i, p) {
                p.set(value[i]);
              });
            } else {
              this.p1.set(value);
            }

            this.value = value;
          }
        },
        {
          key: 'val',
          value: function val(value) {
            if (value) {
              this.set(value);
              return this;
            }
            return this.get();
          }
        },
        {
          key: 'setInterval',
          value: function setInterval(start, end) {
            this.min = start;
            this.max = end;
            this.interval = end - start;
          }
        },
        {
          key: 'enable',
          value: function enable() {
            this.disabled = false;
            this.$wrap.removeClass(this.namespace + '_disabled');

            this._trigger('enable');
            return this;
          }
        },
        {
          key: 'disable',
          value: function disable() {
            this.disabled = true;
            this.$wrap.addClass(this.namespace + '_disabled');

            this._trigger('disable');
            return this;
          }
        },
        {
          key: 'destroy',
          value: function destroy() {
            _jquery2.default.each(this.pointer, function(i, p) {
              p.destroy();
            });
            this.$wrap.destroy();

            this._trigger('destroy');
          }
        }
      ],
      [
        {
          key: 'registerComponent',
          value: function registerComponent(component, methods) {
            components[component] = methods;
          }
        },
        {
          key: 'setDefaults',
          value: function setDefaults(options) {
            _jquery2.default.extend(
              DEFAULTS,
              _jquery2.default.isPlainObject(options) && options
            );
          }
        }
      ]
    );

    return asRange;
  })();

  asRange.registerComponent('selected', selected);
  asRange.registerComponent('tip', tip);
  keyboard();

  var info = {
    version: '0.3.4'
  };

  var NAMESPACE = 'asRange';
  var OtherAsRange = _jquery2.default.fn.asRange;

  function jQueryAsRange(options) {
    for (
      var _len2 = arguments.length,
        args = Array(_len2 > 1 ? _len2 - 1 : 0),
        _key2 = 1;
      _key2 < _len2;
      _key2++
    ) {
      args[_key2 - 1] = arguments[_key2];
    }

    if (typeof options === 'string') {
      var method = options;

      if (/^_/.test(method)) {
        return false;
      } else if (
        /^(get)$/.test(method) ||
        (method === 'val' && args.length === 0)
      ) {
        var instance = this.first().data(NAMESPACE);
        if (instance && typeof instance[method] === 'function') {
          return instance[method].apply(instance, args);
        }
      } else {
        return this.each(function() {
          var instance = _jquery2.default.data(this, NAMESPACE);
          if (instance && typeof instance[method] === 'function') {
            instance[method].apply(instance, args);
          }
        });
      }
    }

    return this.each(function() {
      if (!(0, _jquery2.default)(this).data(NAMESPACE)) {
        (0, _jquery2.default)(this).data(NAMESPACE, new asRange(this, options));
      }
    });
  }

  _jquery2.default.fn.asRange = jQueryAsRange;

  _jquery2.default.asRange = _jquery2.default.extend(
    {
      setDefaults: asRange.setDefaults,
      noConflict: function noConflict() {
        _jquery2.default.fn.asRange = OtherAsRange;
        return jQueryAsRange;
      }
    },
    info
  );
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/* jQuery MaterialRipple Plugin */
/* 2014 Dominik Biedebach */

$.fn.materialripple = function (options) {
  const defaults = {
    rippleClass: 'ripple-wrapper',
  };
  $.extend(defaults, options);

  $('body').on('animationend webkitAnimationEnd oAnimationEnd', `.${defaults.rippleClass}`, function () {
    removeRippleElement(this);
  });

  const addRippleElement = function (element, e) {
    const $element = $(element);
    const $window = $(window);
    $element.addClass('button_active');
    $element.append(`<span class="added ${defaults.rippleClass}"></span>`);
    newRippleElement = $element.find('.added');
    newRippleElement.removeClass('added');

    // get Mouse Position
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    // for each ripple element, set sizes
    elementWidth = $element.outerWidth();
    elementHeight = $element.outerHeight();
    d = Math.max(elementWidth, elementHeight);
    newRippleElement.css({ width: d, height: d });

    const rippleX = e.clientX - $element.offset().left - d / 2 + $window.scrollLeft();
    const rippleY = e.clientY - $element.offset().top - d / 2 + $window.scrollTop();

    // Position the Ripple Element
    newRippleElement.css('top', `${rippleY}px`).css('left', `${rippleX}px`).addClass('animated');
  };

  var removeRippleElement = function (element) {
    const $element = $(element);
    const $button = $element.parent();
    $element.remove();
    $button.removeAttr('style').removeClass('button_active').blur();
  };

  // add Ripple-Wrapper to all Elements
  $(this).addClass('has-ripple');

  // Let it ripple on click
  $(this).on('click', function (e) {
    addRippleElement(this, e);
  });
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(() => {
    $('.social-icon').removeAttr('style');
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
    if ( true ) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* == jquery mousewheel plugin == Version: 3.1.13, License: MIT License (MIT) */
!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */
!function(e){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(function(e){!function(t){var o="function"=="function"&&__webpack_require__(10),a="undefined"!=typeof module&&module.exports,n="https:"==document.location.protocol?"https:":"http:",i="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";o||(a?__webpack_require__(9)(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//"+i+"%3E%3C/script%3E"))),t()}(function(){var t,o="mCustomScrollbar",a="mCS",n=".mCustomScrollbar",i={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},r=0,l={},s=window.attachEvent&&!window.addEventListener?1:0,c=!1,d=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],u={init:function(t){var t=e.extend(!0,{},i,t),o=f.call(this);if(t.live){var s=t.liveSelector||this.selector||n,c=e(s);if("off"===t.live)return void m(s);l[s]=setTimeout(function(){c.mCustomScrollbar(t),"once"===t.live&&c.length&&m(s)},500)}else m(s);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":p(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=g(t.scrollButtons.scrollType),h(t),e(o).each(function(){var o=e(this);if(!o.data(a)){o.data(a,{idx:++r,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var n=o.data(a),i=n.opt,l=o.data("mcs-axis"),s=o.data("mcs-scrollbar-position"),c=o.data("mcs-theme");l&&(i.axis=l),s&&(i.scrollbarPosition=s),c&&(i.theme=c,h(i)),v.call(this),n&&i.callbacks.onCreate&&"function"==typeof i.callbacks.onCreate&&i.callbacks.onCreate.call(this),e("#mCSB_"+n.idx+"_container img:not(."+d[2]+")").addClass(d[2]),u.update.call(null,o)}})},update:function(t,o){var n=t||f.call(this);return e(n).each(function(){var t=e(this);if(t.data(a)){var n=t.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container"),l=e("#mCSB_"+n.idx),s=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];if(!r.length)return;n.tweenRunning&&Q(t),o&&n&&i.callbacks.onBeforeUpdate&&"function"==typeof i.callbacks.onBeforeUpdate&&i.callbacks.onBeforeUpdate.call(this),t.hasClass(d[3])&&t.removeClass(d[3]),t.hasClass(d[4])&&t.removeClass(d[4]),l.css("max-height","none"),l.height()!==t.height()&&l.css("max-height",t.height()),_.call(this),"y"===i.axis||i.advanced.autoExpandHorizontalScroll||r.css("width",x(r)),n.overflowed=y.call(this),M.call(this),i.autoDraggerLength&&S.call(this),b.call(this),T.call(this);var c=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==i.axis&&(n.overflowed[0]?s[0].height()>s[0].parent().height()?B.call(this):(G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}),n.contentReset.y=null):(B.call(this),"y"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[1]&&G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==i.axis&&(n.overflowed[1]?s[1].width()>s[1].parent().width()?B.call(this):(G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}),n.contentReset.x=null):(B.call(this),"x"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[0]&&G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),o&&n&&(2===o&&i.callbacks.onImageLoad&&"function"==typeof i.callbacks.onImageLoad?i.callbacks.onImageLoad.call(this):3===o&&i.callbacks.onSelectorChange&&"function"==typeof i.callbacks.onSelectorChange?i.callbacks.onSelectorChange.call(this):i.callbacks.onUpdate&&"function"==typeof i.callbacks.onUpdate&&i.callbacks.onUpdate.call(this)),N.call(this)}})},scrollTo:function(t,o){if("undefined"!=typeof t&&null!=t){var n=f.call(this);return e(n).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,o),c=Y.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=X.call(this,c[0],"y"),c[1]=X.call(this,c[1],"x"),s.moveDragger&&(c[0]*=i.scrollRatio.y,c[1]*=i.scrollRatio.x),s.dur=ne()?0:d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",G(n,c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",G(n,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=f.call(this);return e(t).each(function(){var t=e(this);t.data(a)&&Q(t)})},disable:function(t){var o=f.call(this);return e(o).each(function(){var o=e(this);if(o.data(a)){o.data(a);N.call(this,"remove"),k.call(this),t&&B.call(this),M.call(this,!0),o.addClass(d[3])}})},destroy:function(){var t=f.call(this);return e(t).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),c=e(".mCSB_"+i.idx+"_scrollbar");r.live&&m(r.liveSelector||e(t).selector),N.call(this,"remove"),k.call(this),B.call(this),n.removeData(a),$(this,"mcs"),c.remove(),s.find("img."+d[2]).removeClass(d[2]),l.replaceWith(s.contents()),n.removeClass(o+" _"+a+"_"+i.idx+" "+d[6]+" "+d[7]+" "+d[5]+" "+d[3]).addClass(d[4])}})}},f=function(){return"object"!=typeof e(this)||e(this).length<1?n:this},h=function(t){var o=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],a=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"],r=["minimal","minimal-dark"];t.autoDraggerLength=e.inArray(t.theme,o)>-1?!1:t.autoDraggerLength,t.autoExpandScrollbar=e.inArray(t.theme,a)>-1?!1:t.autoExpandScrollbar,t.scrollButtons.enable=e.inArray(t.theme,n)>-1?!1:t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,i)>-1?!0:t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,r)>-1?"outside":t.scrollbarPosition},m=function(e){l[e]&&(clearTimeout(l[e]),$(l,e))},p=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},g=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},v=function(){var t=e(this),n=t.data(a),i=n.opt,r=i.autoExpandScrollbar?" "+d[1]+"_expand":"",l=["<div id='mCSB_"+n.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+n.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===i.axis?"mCSB_vertical_horizontal":"x"===i.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===i.axis?l[0]+l[1]:"x"===i.axis?l[1]:l[0],u="yx"===i.axis?"<div id='mCSB_"+n.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",f=i.autoHideScrollbar?" "+d[6]:"",h="x"!==i.axis&&"rtl"===n.langDir?" "+d[7]:"";i.setWidth&&t.css("width",i.setWidth),i.setHeight&&t.css("height",i.setHeight),i.setLeft="y"!==i.axis&&"rtl"===n.langDir?"989999px":i.setLeft,t.addClass(o+" _"+a+"_"+n.idx+f+h).wrapInner("<div id='mCSB_"+n.idx+"' class='mCustomScrollBox mCS-"+i.theme+" "+s+"'><div id='mCSB_"+n.idx+"_container' class='mCSB_container' style='position:relative; top:"+i.setTop+"; left:"+i.setLeft+";' dir='"+n.langDir+"' /></div>");var m=e("#mCSB_"+n.idx),p=e("#mCSB_"+n.idx+"_container");"y"===i.axis||i.advanced.autoExpandHorizontalScroll||p.css("width",x(p)),"outside"===i.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(u)),w.call(this);var g=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},x=function(t){var o=[t[0].scrollWidth,Math.max.apply(Math,t.children().map(function(){return e(this).outerWidth(!0)}).get())],a=t.parent().width();return o[0]>a?o[0]:o[1]>a?o[1]:"100%"},_=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx+"_container");if(n.advanced.autoExpandHorizontalScroll&&"y"!==n.axis){i.css({width:"auto","min-width":0,"overflow-x":"scroll"});var r=Math.ceil(i[0].scrollWidth);3===n.advanced.autoExpandHorizontalScroll||2!==n.advanced.autoExpandHorizontalScroll&&r>i.parent().width()?i.css({width:r,"min-width":"100%","overflow-x":"inherit"}):i.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right+.4)-Math.floor(i[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},w=function(){var t=e(this),o=t.data(a),n=o.opt,i=e(".mCSB_"+o.idx+"_scrollbar:first"),r=oe(n.scrollButtons.tabindex)?"tabindex='"+n.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+d[13]+"' "+r+" />","<a href='#' class='"+d[14]+"' "+r+" />","<a href='#' class='"+d[15]+"' "+r+" />","<a href='#' class='"+d[16]+"' "+r+" />"],s=["x"===n.axis?l[2]:l[0],"x"===n.axis?l[3]:l[1],l[2],l[3]];n.scrollButtons.enable&&i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},S=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[n.height()/i.outerHeight(!1),n.width()/i.outerWidth(!1)],c=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],d=s&&c[1]<c[0]?c[0]:c[1],u=s&&c[3]<c[2]?c[2]:c[3];r[0].css({height:d,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":c[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},b=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[i.outerHeight(!1)-n.height(),i.outerWidth(!1)-n.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];o.scrollRatio={y:s[0],x:s[1]}},C=function(e,t,o){var a=o?d[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(d[0]+" "+a),n.toggleClass(d[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(d[0]),n.removeClass(d[1])):(e.addClass(d[0]),n.addClass(d[1])))},y=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=null==o.overflowed?i.height():i.outerHeight(!1),l=null==o.overflowed?i.width():i.outerWidth(!1),s=i[0].scrollHeight,c=i[0].scrollWidth;return s>r&&(r=s),c>l&&(l=c),[r>n.height(),l>n.width()]},B=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(Q(t),("x"!==n.axis&&!o.overflowed[0]||"y"===n.axis&&o.overflowed[0])&&(l[0].add(r).css("top",0),G(t,"_resetY")),"y"!==n.axis&&!o.overflowed[1]||"x"===n.axis&&o.overflowed[1]){var s=dx=0;"rtl"===o.langDir&&(s=i.width()-r.outerWidth(!1),dx=Math.abs(s/o.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),G(t,"_resetX")}},T=function(){function t(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),W.call(o[0])):t()},100)}var o=e(this),n=o.data(a),i=n.opt;if(!n.bindEvents){if(I.call(this),i.contentTouchScroll&&D.call(this),E.call(this),i.mouseWheel.enable){var r;t()}P.call(this),U.call(this),i.advanced.autoScrollOnFocus&&H.call(this),i.scrollButtons.enable&&F.call(this),i.keyboard.enable&&q.call(this),n.bindEvents=!0}},k=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=".mCSB_"+o.idx+"_scrollbar",l=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+r+" ."+d[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+r+">a"),s=e("#mCSB_"+o.idx+"_container");n.advanced.releaseDraggableSelectors&&l.add(e(n.advanced.releaseDraggableSelectors)),n.advanced.extraDraggableSelectors&&l.add(e(n.advanced.extraDraggableSelectors)),o.bindEvents&&(e(document).add(e(!A()||top.document)).unbind("."+i),l.each(function(){e(this).unbind("."+i)}),clearTimeout(t[0]._focusTimeout),$(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),$(o.sequential,"step"),clearTimeout(s[0].onCompleteTimeout),$(s[0],"onCompleteTimeout"),o.bindEvents=!1)},M=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+n.idx+"_container"),s=[e("#mCSB_"+n.idx+"_scrollbar_vertical"),e("#mCSB_"+n.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==i.axis&&(n.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(d[8]+" "+d[10])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(d[10])):(s[0].css("display","none"),l.addClass(d[10])),l.addClass(d[8]))),"y"!==i.axis&&(n.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(d[9]+" "+d[11])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(d[11])):(s[1].css("display","none"),l.addClass(d[11])),l.addClass(d[9]))),n.overflowed[0]||n.overflowed[1]?o.removeClass(d[5]):o.addClass(d[5])},O=function(t){var o=t.type,a=t.target.ownerDocument!==document&&null!==frameElement?[e(frameElement).offset().top,e(frameElement).offset().left]:null,n=A()&&t.target.ownerDocument!==top.document&&null!==frameElement?[e(t.view.frameElement).offset().top,e(t.view.frameElement).offset().left]:[0,0];switch(o){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return a?[t.originalEvent.pageY-a[0]+n[0],t.originalEvent.pageX-a[1]+n[1],!1]:[t.originalEvent.pageY,t.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var i=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],r=t.originalEvent.touches.length||t.originalEvent.changedTouches.length;return t.target.ownerDocument!==document?[i.screenY,i.screenX,r>1]:[i.pageY,i.pageX,r>1];default:return a?[t.pageY-a[0]+n[0],t.pageX-a[1]+n[1],!1]:[t.pageY,t.pageX,!1]}},I=function(){function t(e,t,a,n){if(h[0].idleTimer=d.scrollInertia<233?250:0,o.attr("id")===f[1])var i="x",s=(o[0].offsetLeft-t+n)*l.scrollRatio.x;else var i="y",s=(o[0].offsetTop-e+a)*l.scrollRatio.y;G(r,s.toString(),{dir:i,drag:!0})}var o,n,i,r=e(this),l=r.data(a),d=l.opt,u=a+"_"+l.idx,f=["mCSB_"+l.idx+"_dragger_vertical","mCSB_"+l.idx+"_dragger_horizontal"],h=e("#mCSB_"+l.idx+"_container"),m=e("#"+f[0]+",#"+f[1]),p=d.advanced.releaseDraggableSelectors?m.add(e(d.advanced.releaseDraggableSelectors)):m,g=d.advanced.extraDraggableSelectors?e(!A()||top.document).add(e(d.advanced.extraDraggableSelectors)):e(!A()||top.document);m.bind("contextmenu."+u,function(e){e.preventDefault()}).bind("mousedown."+u+" touchstart."+u+" pointerdown."+u+" MSPointerDown."+u,function(t){if(t.stopImmediatePropagation(),t.preventDefault(),ee(t)){c=!0,s&&(document.onselectstart=function(){return!1}),L.call(h,!1),Q(r),o=e(this);var a=o.offset(),l=O(t)[0]-a.top,u=O(t)[1]-a.left,f=o.height()+a.top,m=o.width()+a.left;f>l&&l>0&&m>u&&u>0&&(n=l,i=u),C(o,"active",d.autoExpandScrollbar)}}).bind("touchmove."+u,function(e){e.stopImmediatePropagation(),e.preventDefault();var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;t(n,i,r,l)}),e(document).add(g).bind("mousemove."+u+" pointermove."+u+" MSPointerMove."+u,function(e){if(o){var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;if(n===r&&i===l)return;t(n,i,r,l)}}).add(p).bind("mouseup."+u+" touchend."+u+" pointerup."+u+" MSPointerUp."+u,function(){o&&(C(o,"active",d.autoExpandScrollbar),o=null),c=!1,s&&(document.onselectstart=null),L.call(h,!0)})},D=function(){function o(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,b=0,C=0,d=1,y.removeClass("mCS_touch_action");var o=I.offset();u=O(e)[0]-o.top,f=O(e)[1]-o.left,z=[O(e)[0],O(e)[1]]}function n(e){if(te(e)&&!c&&!O(e)[2]&&(T.documentTouchScroll||e.preventDefault(),e.stopImmediatePropagation(),(!C||b)&&d)){g=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left,n="mcsLinearOut";if(E.push(o),W.push(a),z[2]=Math.abs(O(e)[0]-z[0]),z[3]=Math.abs(O(e)[1]-z[1]),B.overflowed[0])var i=D[0].parent().height()-D[0].height(),r=u-o>0&&o-u>-(i*B.scrollRatio.y)&&(2*z[3]<z[2]||"yx"===T.axis);if(B.overflowed[1])var l=D[1].parent().width()-D[1].width(),h=f-a>0&&a-f>-(l*B.scrollRatio.x)&&(2*z[2]<z[3]||"yx"===T.axis);r||h?(U||e.preventDefault(),b=1):(C=1,y.addClass("mCS_touch_action")),U&&e.preventDefault(),w="yx"===T.axis?[u-o,f-a]:"x"===T.axis?[null,f-a]:[u-o,null],I[0].idleTimer=250,B.overflowed[0]&&s(w[0],R,n,"y","all",!0),B.overflowed[1]&&s(w[1],R,n,"x",L,!0)}}function i(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,e.stopImmediatePropagation(),Q(y),p=K();var o=M.offset();h=O(e)[0]-o.top,m=O(e)[1]-o.left,E=[],W=[]}function r(e){if(te(e)&&!c&&!O(e)[2]){d=0,e.stopImmediatePropagation(),b=0,C=0,v=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left;if(!(v-g>30)){_=1e3/(v-p);var n="mcsEaseOut",i=2.5>_,r=i?[E[E.length-2],W[W.length-2]]:[0,0];x=i?[o-r[0],a-r[1]]:[o-h,a-m];var u=[Math.abs(x[0]),Math.abs(x[1])];_=i?[Math.abs(x[0]/4),Math.abs(x[1]/4)]:[_,_];var f=[Math.abs(I[0].offsetTop)-x[0]*l(u[0]/_[0],_[0]),Math.abs(I[0].offsetLeft)-x[1]*l(u[1]/_[1],_[1])];w="yx"===T.axis?[f[0],f[1]]:"x"===T.axis?[null,f[1]]:[f[0],null],S=[4*u[0]+T.scrollInertia,4*u[1]+T.scrollInertia];var y=parseInt(T.contentTouchScroll)||0;w[0]=u[0]>y?w[0]:0,w[1]=u[1]>y?w[1]:0,B.overflowed[0]&&s(w[0],S[0],n,"y",L,!1),B.overflowed[1]&&s(w[1],S[1],n,"x",L,!1)}}}function l(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function s(e,t,o,a,n,i){e&&G(y,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}var d,u,f,h,m,p,g,v,x,_,w,S,b,C,y=e(this),B=y.data(a),T=B.opt,k=a+"_"+B.idx,M=e("#mCSB_"+B.idx),I=e("#mCSB_"+B.idx+"_container"),D=[e("#mCSB_"+B.idx+"_dragger_vertical"),e("#mCSB_"+B.idx+"_dragger_horizontal")],E=[],W=[],R=0,L="yx"===T.axis?"none":"all",z=[],P=I.find("iframe"),H=["touchstart."+k+" pointerdown."+k+" MSPointerDown."+k,"touchmove."+k+" pointermove."+k+" MSPointerMove."+k,"touchend."+k+" pointerup."+k+" MSPointerUp."+k],U=void 0!==document.body.style.touchAction&&""!==document.body.style.touchAction;I.bind(H[0],function(e){o(e)}).bind(H[1],function(e){n(e)}),M.bind(H[0],function(e){i(e)}).bind(H[2],function(e){r(e)}),P.length&&P.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(H[0],function(e){o(e),i(e)}).bind(H[1],function(e){n(e)}).bind(H[2],function(e){r(e)})})})},E=function(){function o(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function n(e,t,o){d.type=o&&i?"stepped":"stepless",d.scrollAmount=10,j(r,e,t,"mcsLinearOut",o?60:null)}var i,r=e(this),l=r.data(a),s=l.opt,d=l.sequential,u=a+"_"+l.idx,f=e("#mCSB_"+l.idx+"_container"),h=f.parent();f.bind("mousedown."+u,function(){t||i||(i=1,c=!0)}).add(document).bind("mousemove."+u,function(e){if(!t&&i&&o()){var a=f.offset(),r=O(e)[0]-a.top+f[0].offsetTop,c=O(e)[1]-a.left+f[0].offsetLeft;r>0&&r<h.height()&&c>0&&c<h.width()?d.step&&n("off",null,"stepped"):("x"!==s.axis&&l.overflowed[0]&&(0>r?n("on",38):r>h.height()&&n("on",40)),"y"!==s.axis&&l.overflowed[1]&&(0>c?n("on",37):c>h.width()&&n("on",39)))}}).bind("mouseup."+u+" dragend."+u,function(){t||(i&&(i=0,n("off",null)),c=!1)})},W=function(){function t(t,a){if(Q(o),!z(o,t.target)){var r="auto"!==i.mouseWheel.deltaFactor?parseInt(i.mouseWheel.deltaFactor):s&&t.deltaFactor<100?100:t.deltaFactor||100,d=i.scrollInertia;if("x"===i.axis||"x"===i.mouseWheel.axis)var u="x",f=[Math.round(r*n.scrollRatio.x),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.width()?.9*l.width():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetLeft),p=c[1][0].offsetLeft,g=c[1].parent().width()-c[1].width(),v="y"===i.mouseWheel.axis?t.deltaY||a:t.deltaX;else var u="y",f=[Math.round(r*n.scrollRatio.y),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.height()?.9*l.height():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetTop),p=c[0][0].offsetTop,g=c[0].parent().height()-c[0].height(),v=t.deltaY||a;"y"===u&&!n.overflowed[0]||"x"===u&&!n.overflowed[1]||((i.mouseWheel.invert||t.webkitDirectionInvertedFromDevice)&&(v=-v),i.mouseWheel.normalizeDelta&&(v=0>v?-1:1),(v>0&&0!==p||0>v&&p!==g||i.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),t.deltaFactor<5&&!i.mouseWheel.normalizeDelta&&(h=t.deltaFactor,d=17),G(o,(m-v*h).toString(),{dir:u,dur:d}))}}if(e(this).data(a)){var o=e(this),n=o.data(a),i=n.opt,r=a+"_"+n.idx,l=e("#mCSB_"+n.idx),c=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")],d=e("#mCSB_"+n.idx+"_container").find("iframe");d.length&&d.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+r,function(e,o){t(e,o)})})}),l.bind("mousewheel."+r,function(e,o){t(e,o)})}},R=new Object,A=function(t){var o=!1,a=!1,n=null;if(void 0===t?a="#empty":void 0!==e(t).attr("id")&&(a=e(t).attr("id")),a!==!1&&void 0!==R[a])return R[a];if(t){try{var i=t.contentDocument||t.contentWindow.document;n=i.body.innerHTML}catch(r){}o=null!==n}else{try{var i=top.document;n=i.body.innerHTML}catch(r){}o=null!==n}return a!==!1&&(R[a]=o),o},L=function(e){var t=this.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}},z=function(t,o){var n=o.nodeName.toLowerCase(),i=t.data(a).opt.mouseWheel.disableOver,r=["select","textarea"];return e.inArray(n,i)>-1&&!(e.inArray(n,r)>-1&&!e(o).is(":focus"))},P=function(){var t,o=e(this),n=o.data(a),i=a+"_"+n.idx,r=e("#mCSB_"+n.idx+"_container"),l=r.parent(),s=e(".mCSB_"+n.idx+"_scrollbar ."+d[12]);s.bind("mousedown."+i+" touchstart."+i+" pointerdown."+i+" MSPointerDown."+i,function(o){c=!0,e(o.target).hasClass("mCSB_dragger")||(t=1)}).bind("touchend."+i+" pointerup."+i+" MSPointerUp."+i,function(){c=!1}).bind("click."+i,function(a){if(t&&(t=0,e(a.target).hasClass(d[12])||e(a.target).hasClass("mCSB_draggerRail"))){Q(o);var i=e(this),s=i.find(".mCSB_dragger");if(i.parent(".mCSB_scrollTools_horizontal").length>0){if(!n.overflowed[1])return;var c="x",u=a.pageX>s.offset().left?-1:1,f=Math.abs(r[0].offsetLeft)-u*(.9*l.width())}else{if(!n.overflowed[0])return;var c="y",u=a.pageY>s.offset().top?-1:1,f=Math.abs(r[0].offsetTop)-u*(.9*l.height())}G(o,f.toString(),{dir:c,scrollEasing:"mcsEaseInOut"})}})},H=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container"),l=r.parent();r.bind("focusin."+i,function(){var o=e(document.activeElement),a=r.find(".mCustomScrollBox").length,i=0;o.is(n.advanced.autoScrollOnFocus)&&(Q(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=a?(i+17)*a:0,t[0]._focusTimeout=setTimeout(function(){var e=[ae(o)[0],ae(o)[1]],a=[r[0].offsetTop,r[0].offsetLeft],s=[a[0]+e[0]>=0&&a[0]+e[0]<l.height()-o.outerHeight(!1),a[1]+e[1]>=0&&a[0]+e[1]<l.width()-o.outerWidth(!1)],c="yx"!==n.axis||s[0]||s[1]?"all":"none";"x"===n.axis||s[0]||G(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i}),"y"===n.axis||s[1]||G(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i})},t[0]._focusTimer))})},U=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container").parent();i.bind("scroll."+n,function(){0===i.scrollTop()&&0===i.scrollLeft()||e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},F=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e(l+">a");s.bind("contextmenu."+r,function(e){e.preventDefault()}).bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(a){function r(e,o){i.scrollAmount=n.scrollButtons.scrollAmount,j(t,e,o)}if(a.preventDefault(),ee(a)){var l=e(this).attr("class");switch(i.type=n.scrollButtons.scrollType,a.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===i.type)return;c=!0,o.tweenRunning=!1,r("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===i.type)return;c=!1,i.dir&&r("off",l);break;case"click":if("stepped"!==i.type||o.tweenRunning)return;r("on",l)}}})},q=function(){function t(t){function a(e,t){r.type=i.keyboard.scrollType,r.scrollAmount=i.keyboard.scrollAmount,"stepped"===r.type&&n.tweenRunning||j(o,e,t)}switch(t.type){case"blur":n.tweenRunning&&r.dir&&a("off",null);break;case"keydown":case"keyup":var l=t.keyCode?t.keyCode:t.which,s="on";if("x"!==i.axis&&(38===l||40===l)||"y"!==i.axis&&(37===l||39===l)){if((38===l||40===l)&&!n.overflowed[0]||(37===l||39===l)&&!n.overflowed[1])return;"keyup"===t.type&&(s="off"),e(document.activeElement).is(u)||(t.preventDefault(),t.stopImmediatePropagation(),a(s,l))}else if(33===l||34===l){if((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type){Q(o);var f=34===l?-1:1;if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=Math.abs(c[0].offsetLeft)-f*(.9*d.width());else var h="y",m=Math.abs(c[0].offsetTop)-f*(.9*d.height());G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}else if((35===l||36===l)&&!e(document.activeElement).is(u)&&((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type)){if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=35===l?Math.abs(d.width()-c.outerWidth(!1)):0;else var h="y",m=35===l?Math.abs(d.height()-c.outerHeight(!1)):0;G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}}var o=e(this),n=o.data(a),i=n.opt,r=n.sequential,l=a+"_"+n.idx,s=e("#mCSB_"+n.idx),c=e("#mCSB_"+n.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']",f=c.find("iframe"),h=["blur."+l+" keydown."+l+" keyup."+l];f.length&&f.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(h[0],function(e){t(e)})})}),s.attr("tabindex","0").bind(h[0],function(e){t(e)})},j=function(t,o,n,i,r){function l(e){u.snapAmount&&(f.scrollAmount=u.snapAmount instanceof Array?"x"===f.dir[0]?u.snapAmount[1]:u.snapAmount[0]:u.snapAmount);var o="stepped"!==f.type,a=r?r:e?o?p/1.5:g:1e3/60,n=e?o?7.5:40:2.5,s=[Math.abs(h[0].offsetTop),Math.abs(h[0].offsetLeft)],d=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],m="x"===f.dir[0]?s[1]+f.dir[1]*(d[1]*n):s[0]+f.dir[1]*(d[0]*n),v="x"===f.dir[0]?s[1]+f.dir[1]*parseInt(f.scrollAmount):s[0]+f.dir[1]*parseInt(f.scrollAmount),x="auto"!==f.scrollAmount?v:m,_=i?i:e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",w=!!e;return e&&17>a&&(x="x"===f.dir[0]?s[1]:s[0]),G(t,x.toString(),{dir:f.dir[0],scrollEasing:_,dur:a,onComplete:w}),e?void(f.dir=!1):(clearTimeout(f.step),void(f.step=setTimeout(function(){l()},a)))}function s(){clearTimeout(f.step),$(f,"step"),Q(t)}var c=t.data(a),u=c.opt,f=c.sequential,h=e("#mCSB_"+c.idx+"_container"),m="stepped"===f.type,p=u.scrollInertia<26?26:u.scrollInertia,g=u.scrollInertia<1?17:u.scrollInertia;switch(o){case"on":if(f.dir=[n===d[16]||n===d[15]||39===n||37===n?"x":"y",n===d[13]||n===d[15]||38===n||37===n?-1:1],Q(t),oe(n)&&"stepped"===f.type)return;l(m);break;case"off":s(),(m||c.tweenRunning&&f.dir)&&l(!0)}},Y=function(t){var o=e(this).data(a).opt,n=[];return"function"==typeof t&&(t=t()),t instanceof Array?n=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(n[0]=t.y?t.y:t.x||"x"===o.axis?null:t,n[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof n[0]&&(n[0]=n[0]()),"function"==typeof n[1]&&(n[1]=n[1]()),n},X=function(t,o){if(null!=t&&"undefined"!=typeof t){var n=e(this),i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx+"_container"),s=l.parent(),c=typeof t;o||(o="x"===r.axis?"x":"y");var d="x"===o?l.outerWidth(!1)-s.width():l.outerHeight(!1)-s.height(),f="x"===o?l[0].offsetLeft:l[0].offsetTop,h="x"===o?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===o?ae(m)[1]:ae(m)[0];case"string":case"number":if(oe(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(f-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=f+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&oe(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===o?ae(m)[1]:ae(m)[0]}return e(t).length?"x"===o?ae(e(t))[1]:ae(e(t))[0]:(l.css(h,t),void u.update.call(null,n[0]))}}},N=function(t){function o(){return clearTimeout(f[0].autoUpdate),0===l.parents("html").length?void(l=null):void(f[0].autoUpdate=setTimeout(function(){return c.advanced.updateOnSelectorChange&&(s.poll.change.n=i(),s.poll.change.n!==s.poll.change.o)?(s.poll.change.o=s.poll.change.n,void r(3)):c.advanced.updateOnContentResize&&(s.poll.size.n=l[0].scrollHeight+l[0].scrollWidth+f[0].offsetHeight+l[0].offsetHeight+l[0].offsetWidth,s.poll.size.n!==s.poll.size.o)?(s.poll.size.o=s.poll.size.n,void r(1)):!c.advanced.updateOnImageLoad||"auto"===c.advanced.updateOnImageLoad&&"y"===c.axis||(s.poll.img.n=f.find("img").length,s.poll.img.n===s.poll.img.o)?void((c.advanced.updateOnSelectorChange||c.advanced.updateOnContentResize||c.advanced.updateOnImageLoad)&&o()):(s.poll.img.o=s.poll.img.n,void f.find("img").each(function(){n(this)}))},c.advanced.autoUpdateTimeout))}function n(t){function o(e,t){return function(){
return t.apply(e,arguments)}}function a(){this.onload=null,e(t).addClass(d[2]),r(2)}if(e(t).hasClass(d[2]))return void r();var n=new Image;n.onload=o(n,a),n.src=t.src}function i(){c.advanced.updateOnSelectorChange===!0&&(c.advanced.updateOnSelectorChange="*");var e=0,t=f.find(c.advanced.updateOnSelectorChange);return c.advanced.updateOnSelectorChange&&t.length>0&&t.each(function(){e+=this.offsetHeight+this.offsetWidth}),e}function r(e){clearTimeout(f[0].autoUpdate),u.update.call(null,l[0],e)}var l=e(this),s=l.data(a),c=s.opt,f=e("#mCSB_"+s.idx+"_container");return t?(clearTimeout(f[0].autoUpdate),void $(f[0],"autoUpdate")):void o()},V=function(e,t,o){return Math.round(e/t)*t-o},Q=function(t){var o=t.data(a),n=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");n.each(function(){Z.call(this)})},G=function(t,o,n){function i(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function r(){return[c.callbacks.alwaysTriggerOffsets||w>=S[0]+y,c.callbacks.alwaysTriggerOffsets||-B>=w]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],o=[x[0].offsetTop,x[0].offsetLeft],a=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(a[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(a[1])-i[1])),direction:n.dir}}var s=t.data(a),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=e.extend(d,n),u=[n.dur,n.drag?0:n.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?Y.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?Y.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=n.trigger,0===m.scrollTop()&&0===m.scrollLeft()||(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==o||s.contentReset.y||(i("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==o||s.contentReset.x||(i("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){if(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(i("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(i("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount){var v=c.snapAmount instanceof Array?"x"===n.dir?c.snapAmount[1]:c.snapAmount[0]:c.snapAmount;o=V(o,v,c.snapOffset)}switch(n.dir){case"x":var x=e("#mCSB_"+s.idx+"_dragger_horizontal"),_="left",w=h[0].offsetLeft,S=[f.width()-h.outerWidth(!1),x.parent().width()-x.width()],b=[o,0===o?0:o/s.scrollRatio.x],y=p[1],B=g[1],T=y>0?y/s.scrollRatio.x:0,k=B>0?B/s.scrollRatio.x:0;break;case"y":var x=e("#mCSB_"+s.idx+"_dragger_vertical"),_="top",w=h[0].offsetTop,S=[f.height()-h.outerHeight(!1),x.parent().height()-x.height()],b=[o,0===o?0:o/s.scrollRatio.y],y=p[0],B=g[0],T=y>0?y/s.scrollRatio.y:0,k=B>0?B/s.scrollRatio.y:0}b[1]<0||0===b[0]&&0===b[1]?b=[0,0]:b[1]>=S[1]?b=[S[0],S[1]]:b[0]=-b[0],t[0].mcs||(l(),i("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),J(x[0],_,Math.round(b[1]),u[1],n.scrollEasing),!s.tweenRunning&&(0===w&&b[0]>=0||w===S[0]&&b[0]<=S[0])||J(h[0],_,Math.round(b[0]),u[0],n.scrollEasing,n.overwrite,{onStart:function(){n.callbacks&&n.onStart&&!s.tweenRunning&&(i("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,C(x),s.cbOffsets=r())},onUpdate:function(){n.callbacks&&n.onUpdate&&i("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(n.callbacks&&n.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){i("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),i("onTotalScroll")&&b[1]>=S[1]-T&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),i("onTotalScrollBack")&&b[1]<=k&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,C(x,"hide")},e)}}})}},J=function(e,t,o,a,n,i,r){function l(){S.stop||(x||m.call(),x=K()-v,s(),x>=S.time&&(S.time=x>S.time?x+f-(x-S.time):x+f-1,S.time<x+1&&(S.time=x+1)),S.time<a?S.id=h(l):g.call())}function s(){a>0?(S.currVal=u(S.time,_,b,a,n),w[t]=Math.round(S.currVal)+"px"):w[t]=o+"px",p.call()}function c(){f=1e3/60,S.time=x+f,h=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},S.id=h(l)}function d(){null!=S.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(S.id):clearTimeout(S.id),S.id=null)}function u(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=a/2,1>e?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=a/2,1>e?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=a/2,1>e?o/2*e*e*e+t:(e-=2,o/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=a,e--,-o*(e*e*e*e-1)+t;case"easeOutStrong":return o*(-Math.pow(2,-10*e/a)+1)+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var f,h,r=r||{},m=r.onStart||function(){},p=r.onUpdate||function(){},g=r.onComplete||function(){},v=K(),x=0,_=e.offsetTop,w=e.style,S=e._mTween[t];"left"===t&&(_=e.offsetLeft);var b=o-_;S.stop=0,"none"!==i&&d(),c()},K=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},Z=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},$=function(e,t){try{delete e[t]}catch(o){e[t]=null}},ee=function(e){return!(e.which&&1!==e.which)},te=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},oe=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},ae=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},ne=function(){function e(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}var t=e();return t?document[t]:!1};e.fn[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o].defaults=i,window[o]=!0,e(window).bind("load",function(){e(n)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),a=[i[0].offsetTop,i[0].offsetLeft],a[0]+ae(n)[0]>=0&&a[0]+ae(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+ae(n)[1]>=0&&a[1]+ae(n)[1]<o.width()-n.outerWidth(!1)},mcsInSight:e.expr[":"].mcsInSight||function(t,o,a){var n,i,r,l,s=e(t),c=s.parents(".mCSB_container"),d="exact"===a[3]?[[1,0],[1,0]]:[[.9,.1],[.6,.4]];if(c.length)return n=[s.outerHeight(!1),s.outerWidth(!1)],r=[c[0].offsetTop+ae(s)[0],c[0].offsetLeft+ae(s)[1]],i=[c.parent()[0].offsetHeight,c.parent()[0].offsetWidth],l=[n[0]<i[0]?d[0]:d[1],n[1]<i[1]?d[0]:d[1]],r[0]-i[0]*l[0][0]<0&&r[0]+n[0]-i[0]*l[0][1]>=0&&r[1]-i[1]*l[1][0]<0&&r[1]+n[1]-i[1]*l[1][1]>=0},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflowed[0]||o.overflowed[1]}})})})});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(() => {
    $('.pin').removeAttr('style');
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/favicons/safari-pinned-tab.svg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/favicons/mstile-150x150.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/favicons/favicon.ico";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/favicons/favicon-32x32.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/favicons/favicon-16x16.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/favicons/browserconfig.xml";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/favicons/apple-touch-icon.png";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/favicons/android-chrome-256x256.png";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/favicons/android-chrome-192x192.png";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./android-chrome-192x192.png": 21,
	"./android-chrome-256x256.png": 20,
	"./apple-touch-icon.png": 19,
	"./browserconfig.xml": 18,
	"./favicon-16x16.png": 17,
	"./favicon-32x32.png": 16,
	"./favicon.ico": 15,
	"./mstile-150x150.png": 14,
	"./safari-pinned-tab.svg": 13
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 22;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

const faviconsContext = __webpack_require__(22);
faviconsContext.keys().forEach(faviconsContext);

/***/ }),
/* 24 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(24);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "././/assets/img/bubble-icon_white.svg";

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "././/assets/img/banner-bg.jpg";

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "././/assets/img/camera-icon.svg";

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "././/assets/img/bubble-icon.svg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/fonts/sourcesanspro-regular.svg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/fonts/sourcesanspro-regular.ttf";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/fonts/sourcesanspro-regular.woff";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/fonts/sourcesanspro-regular.eot";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/fonts/lato-light.svg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/fonts/lato-light.ttf";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/fonts/lato-light.woff";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/fonts/lato-light.eot";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/fonts/lato-black.svg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/fonts/lato-black.ttf";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/fonts/lato-black.woff";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/fonts/lato-black.eot";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/fonts/lato-regular.svg";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/fonts/lato-regular.ttf";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/fonts/lato-regular.woff";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/fonts/lato-regular.eot";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/*!Don't remove this!\n * jQuery DCalendar and DCalendar Picker plugin styles\n * \n * Author: Dionlee Uy\n * Email: dionleeuy@gmail.com\n *\n * Date: Thursday, May 12 2016\n */\n\n.calendar-overlay {\n\tposition: fixed;\n\ttop: 0; bottom: 0;\n\tleft: 0; right: 0;\n\tbackground-color: rgba(10,10,10,.3);\n\tz-index: 100001;\n\toverflow: hidden;\n\tdisplay: none;\n}\n.calendar-wrapper {\n\tfont-size: inherit;\n\tposition: relative;\n\twidth: 100%;\n}\n\t.calendar-wrapper.picker {\n\t\tposition: absolute;\n\t\tright: 5%;\n\t\tbottom: 10%;\n\t\tmin-width: 280px;\n\t\topacity: 1;\n\t\toverflow: hidden;\n\t\tborder-radius: 2px;\n\t\t-webkit-transform: scale(1);\n\t\t        transform: scale(1);\n\t  -webkit-box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n\t          box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n\t\t-webkit-transition: opacity .25s ease, -webkit-transform .25s ease;\n\t\ttransition: opacity .25s ease, -webkit-transform .25s ease;\n\t\ttransition: transform .25s ease, opacity .25s ease;\n\t\ttransition: transform .25s ease, opacity .25s ease, -webkit-transform .25s ease;\n\t\twidth: 330px;\n\t\tfont-size: 0.8rem;\n\t}\n\n\t@media screen and (max-width:375px) {\n\t\t.calendar-wrapper.picker {\n\t\t\twidth: 220px;\n\t\t\tfont-size:0.7rem;\n\t\t}\n\t}\n\n\t\t.calendar-wrapper.picker.load {\n\t\t\t/*bottom: -32px;*/\n\t\t\topacity: 0;\n\t\t\t-webkit-transform: scale(1.05);\n\t\t\t        transform: scale(1.05);\n\t\t}\n.calendar-head-card {\n\tfont-size: inherit;\n\tpadding: 1.1em 1.1em 0.989010989010989em;\n}\n.calendar-head-card.hidden{\n\t\tdisplay: none;\n\t}\n\t.calendar-selected-day{\n\t\tfont-size: 5.714285714285714em;\n\t\tline-height: 1em;\n\t\ttext-align: center;\n\t\tcolor: white;\n\t\tfont-weight: lighter;\n\t}\n\n\t.calendar-footer .calendar-date-wrapper {\n\t\tcursor: pointer;\n\t}\n.calendar-footer .calendar-date-wrapper:hover, .calendar-footer .calendar-date-wrapper:hover span{ color: #b2b1b1; }\n.calendar-container {\n\tbackground-color: #fff;\n\tpadding: 0;\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t    -ms-user-select: none;\n\t        user-select: none;\n}\n.calendar-top-selector {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\twidth: 100%;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n\t-ms-flex-wrap: 0;\n\t    flex-wrap: 0;\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\t-webkit-transition: all .25s ease;\n\ttransition: all .25s ease;\n\tpadding: 0.6em 1.4em 0.8em 1.2em;\n}\n\t.calendar-top-selector .calendar-curr-month { \n\t\tfont-size: 1.7em;\n\t\tline-height: 1em;\n\t\tfont-weight: lighter;\n\t\t-webkit-box-flex: 1;\n\t\t    -ms-flex-positive: 1;\n\t\t        flex-grow: 1;\n\t\t-ms-flex-negative: 1;\n\t\t    flex-shrink: 1;\n\t\ttext-align: center;\n\t\tcolor: white;\n\t\tcursor: pointer;\n\t}\n\t.calendar-top-selector .calendar-curr-month.year {\n\t\tfont-size: 2.5em;\n\t\tpadding: 1.45em;\n\t}\n\n\t.calendar-top-selector .calendar-curr-month:hover, .calendar-next:hover, .calendar-prev:hover{\n\t\topacity: 0.7;\n\t}\n\n.calendar-next, .calendar-prev {\n\t-webkit-box-sizing: content-box;\n\t        box-sizing: content-box;\n\twidth: 0.5494505494505495em;\n\theight: 0.5494505494505495em;\n\tborder: 3px white solid;\n\tborder-right-color: transparent;\n\tborder-bottom-color: transparent;\n\t-webkit-box-flex: 0;\n\t    -ms-flex-positive: 0;\n\t        flex-grow: 0;\n\t-ms-flex-negative: 0;\n\t    flex-shrink: 0;\n\tcursor: pointer;\n\tmargin-top: 0.3em;\n}\n.calendar-prev{\n\t-webkit-transform: rotate(-45deg);\n\t        transform: rotate(-45deg);\n}\n.calendar-next{\n\t-webkit-transform: rotate(135deg);\n\t        transform: rotate(135deg);\n}\n\n.calendar-grid {\n\tposition: relative;\n\toverflow: hidden;\n\t-webkit-transition: all .25s ease;\n\ttransition: all .25s ease;\n}\n\t.calendar-grid .calendar-labels {\n\t\tdisplay: table;\n\t\twidth: calc(100% + 1px);\n\t\tvisibility: visible;\n\t\topacity: 1;\n\t\t-webkit-transition: opacity .25s ease;\n\t\ttransition: opacity .25s ease;\n\t}\n\t\t.calendar-grid .calendar-labels.invis span { visibility: hidden; opacity: 0; }\n\t\t.calendar-grid .calendar-labels span {\n\t\t\tdisplay: table-cell;\n\t\t\twidth: 14.28571428571429%;\n\t\t\ttext-align: center;\n\t\t\tcolor: white;\n\t\t\tfont-size: 0.6428571428571429rem;\n\t\t\ttext-transform: uppercase;\n\t\t\tpadding: 1em 0;\n\t\t\tvertical-align: middle;\n\t\t\tfont-weight: bold;\n\t\t}\n\t.calendar-grid .calendar-date-holder { \n\t\tposition: relative;\n\t\twidth: 100%;\n\t\toverflow: hidden;\n\t}\n.calendar-date-holder .calendar-dates {\n\tdisplay: table;\n\twidth: 100.1%;\n\t-webkit-transition: margin-left .3s cubic-bezier(0.4, 0.0, 0.2, 1), opacity .3s ease, -webkit-transform .3s ease;\n\ttransition: margin-left .3s cubic-bezier(0.4, 0.0, 0.2, 1), opacity .3s ease, -webkit-transform .3s ease;\n\ttransition: margin-left .3s cubic-bezier(0.4, 0.0, 0.2, 1), transform .3s ease, opacity .3s ease;\n\ttransition: margin-left .3s cubic-bezier(0.4, 0.0, 0.2, 1), transform .3s ease, opacity .3s ease, -webkit-transform .3s ease;\n}\n\t.calendar-date-holder .calendar-dates.hasmonths {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\topacity: 0;\n\t\t-webkit-transform: scale(.5);\n\t\t        transform: scale(.5);\n\t}\n\t.calendar-date-holder .calendar-dates.left { \n\t\tmargin-left: -260px;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t}\n\t.calendar-date-holder .calendar-dates.right { \n\t\tmargin-left: 260px;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t}\n\t.calendar-date-holder .calendar-dates.months {\n\t\tposition: relative;\n\t\topacity: 1;\n\t}\n\t\t.calendar-date-holder .calendar-dates.months.load {\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\topacity: 0;\n\t\t\t-webkit-transform: scale(1.5);\n\t\t\t        transform: scale(1.5);\n\t\t}\n\t.calendar-date-holder .calendar-dates .cal-row { display: table-row; }\n\t.calendar-date-holder .calendar-dates .date {\n\t\tdisplay: table-cell;\n\t\twidth: 14.28571428571429%;\n\t\ttext-align: center;\n\t\tcolor: #868686;\n\t\tvertical-align: middle;\n\t\tborder-right: 2px white solid;\n\t\tborder-bottom: 2px white solid;\n\t\tbackground-color: #f2f2f2;\n\t\tfont-size: 1.428571428571429em;\n\t\tfont-family: 'SourceSansPro', sans-serif\n\t}\n\t.calendar-date-holder .calendar-dates .date:last-child{\n\t\tborder-right: none;\n\t}\n\n\t.calendar-date-holder .calendar-dates .cal-row:first-child .date{\n\t\tborder-top: 2px white solid;\n\t}\n\t\t.calendar-date-holder .calendar-dates .cal-row.disabled {\n\t\t\tdisplay: none;\n\t\t}\n\t\t.calendar-date-holder .calendar-dates .date a {\n\t\t\ttext-decoration: none;\n\t\t\tdisplay: block;\n\t\t\tcolor: inherit;\n\t\t\tpadding: 0.27em;\n\t\t\toutline: none;\n\t\t\tborder: 2px solid transparent;\n\t\t\t-webkit-transition: all .3s;\n\t\t\ttransition: all .3s;\n\t\t}\n\t\t.calendar-date-holder .calendar-dates .date.disabled a { cursor: not-allowed; color: rgb(200,200,200); \n\t\tpointer-events: none;\n\t\tcolor: white;}\n\t\t\n\t\t.calendar-date-holder .calendar-dates .date.current a {\n\t\t\tcolor: #fff;\n\t\t}\n\t\t.calendar-date-holder .calendar-dates .date.pm, .calendar-dates .date.nm { \n\t\t\tpointer-events: none;\n\t\tcolor: white; \n\t\t}\n\n\t\t.calendar-date-holder .calendar-dates .date.month a {\n\t\t\tdisplay: block;\n\t\t\tpadding: 0.8846153846153846em 0;\n\t\t}\n\n.calendar-footer{\n\t\tpadding: 1.05em 1.3em;\n\t\ttext-align: left;\n\t\tbackground-color: #e5e5e5;\n\t}\n.calendar-footer span{\n\tfont-size: 1em;\n\tline-height: 1em;\n\tfont-weight: bold;\n\tcolor: #868686;\n}\n\n.calendar-footer span:not(:first-child) {\n\tdisplay: none;\n}\n\n\n/* Color theme */\n.calendar-wrapper[data-theme='blue'] .calendar-head-card { background-color: #4eb7a8; }\n.calendar-wrapper[data-theme='blue'] .calendar-labels { background-color: #4eb7a8; }\n.calendar-wrapper[data-theme='blue'] .calendar-top-selector { background-color: #4eb7a8; }\n.calendar-wrapper[data-theme='blue'] .calendar-date-holder .calendar-dates .date.current a { color: #4eb7a8; }\n.calendar-wrapper[data-theme='blue'] .calendar-date-holder .calendar-dates .date.selected a { border-color: #4eb7a8; }\n.calendar-wrapper[data-theme='blue'] .calendar-date-holder .calendar-dates .date.selected a:hover {\n\tcolor: white;\n\tbackground-color: #4eb7a8;\n}\n.calendar-wrapper[data-theme='blue'] .calendar-date-holder .calendar-dates .date.selected.current a {\n\tcolor: white;\n\tbackground-color: #4eb7a8;\n}\n.calendar-wrapper[data-theme='blue'] .calendar-date-holder .calendar-dates .date:not(.disabled):not(.selected) a:hover { color: white; background-color: #4eb7a8; }\n.calendar-wrapper[data-theme='blue'] .calendar-date-holder .calendar-dates .date:not(.disabled):not(.selected) a:active { color: white; background-color: #4eb7a8; }\n.calendar-wrapper[data-theme='blue'] .calendar-date-holder .calendar-dates .date.selected a {\n\tcolor: white;\n\tbackground-color: #4eb7a8;\n}\n\n.calendar-wrapper[data-theme='orange'] .calendar-head-card { background-color: #e75735; }\n.calendar-wrapper[data-theme='orange'] .calendar-labels { background-color: #e75735; }\n.calendar-wrapper[data-theme='orange'] .calendar-top-selector { background-color: #d54c2c; }\n.calendar-wrapper[data-theme='orange'] .calendar-date-holder .calendar-dates .date.current a { color: #e75735; }\n.calendar-wrapper[data-theme='orange'] .calendar-date-holder .calendar-dates .date.selected a { border-color: #e75735; }\n.calendar-wrapper[data-theme='orange'] .calendar-date-holder .calendar-dates .date.selected a:hover {\n\tcolor: white;\n\tbackground-color: #e75735;\n}\n.calendar-wrapper[data-theme='orange'] .calendar-date-holder .calendar-dates .date.selected.current a {\n\tcolor: white;\n\tbackground-color: #e75735;\n}\n.calendar-wrapper[data-theme='orange'] .calendar-date-holder .calendar-dates .date:not(.disabled):not(.selected) a:hover { color: white; background-color: #e75735; }\n.calendar-wrapper[data-theme='orange'] .calendar-date-holder .calendar-dates .date:not(.disabled):not(.selected) a:active { color: white; background-color: #e75735; }\n.calendar-wrapper[data-theme='orange'] .calendar-date-holder .calendar-dates .date.selected a {\n\tcolor: white;\n\tbackground-color: #e75735;\n}\n\n\n.calendar-wrapper[data-theme='purple'] .calendar-head-card { background-color: #6a1b9a; }\n.calendar-wrapper[data-theme='purple'] .calendar-date-holder .calendar-dates .date.current a { color: #7b1fa2; }\n.calendar-wrapper[data-theme='purple'] .calendar-date-holder .calendar-dates .date.selected a { border-color: #7b1fa2; }\n.calendar-wrapper[data-theme='purple'] .calendar-date-holder .calendar-dates .date.selected a:hover { border-color: #4a148c; }\n.calendar-wrapper[data-theme='purple'] .calendar-date-holder .calendar-dates .date.selected.current a { color: #7b1fa2; }\n\n.calendar-wrapper[data-theme='indigo'] .calendar-head-card { background-color: #283593; }\n.calendar-wrapper[data-theme='indigo'] .calendar-date-holder .calendar-dates .date.current a { color: #303f9f; }\n.calendar-wrapper[data-theme='indigo'] .calendar-date-holder .calendar-dates .date.selected a { border-color: #303f9f; }\n.calendar-wrapper[data-theme='indigo'] .calendar-date-holder .calendar-dates .date.selected a:hover { border-color: #1a237e; }\n.calendar-wrapper[data-theme='indigo'] .calendar-date-holder .calendar-dates .date.selected.current a { color: #303f9f; }\n\n.calendar-wrapper[data-theme='teal'] .calendar-head-card { background-color: #00695c; }\n.calendar-wrapper[data-theme='teal'] .calendar-date-holder .calendar-dates .date.current a { color: #00796b; }\n.calendar-wrapper[data-theme='teal'] .calendar-date-holder .calendar-dates .date.selected a { border-color: #00796b; }\n.calendar-wrapper[data-theme='teal'] .calendar-date-holder .calendar-dates .date.selected a:hover { border-color: #004d40; }\n.calendar-wrapper[data-theme='teal'] .calendar-date-holder .calendar-dates .date.selected.current a { color: #00796b; }\n\n.calendar-wrapper[data-theme='green'] .calendar-head-card { background-color: #2e7d32; }\n.calendar-wrapper[data-theme='green'] .calendar-date-holder .calendar-dates .date.current a { color: #388e3c; }\n.calendar-wrapper[data-theme='green'] .calendar-date-holder .calendar-dates .date.selected a { border-color: #388e3c; }\n.calendar-wrapper[data-theme='green'] .calendar-date-holder .calendar-dates .date.selected a:hover { border-color: #1b5e20; }\n.calendar-wrapper[data-theme='green'] .calendar-date-holder .calendar-dates .date.selected.current a { color: #388e3c; }\n/* End color theme */", ""]);

// exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/**\n* asRange v0.3.4\n* https://github.com/amazingSurge/jquery-asRange\n*\n* Copyright (c) amazingSurge\n* Released under the LGPL-3.0 license\n*/\n.asRange {\n  position: relative;\n  height: 0.3846153846153846rem;\n  background-color: #e5e5e5;\n  border-radius: 10px;\n}\n.asRange .asRange-pointer {\n  position: absolute;\n  z-index: 2;\n  width: 1.4rem;\n  height: 1.4rem;\n  background-color: #e75735;\n  border-radius: 50%;\n  outline: none;\n  top: 40%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  cursor: pointer;\n}\n\n.slider_type_scale .asRange-pointer_active {\n  width: 1.6rem;\n  height: 1.6rem;\n}\n\n/*.asRange .asRange-pointer:before {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  bottom: -4px;\n  left: -4px;\n  content: \"\";\n  background: #6ba1ad;\n  border-radius: inherit;\n}\n.asRange .asRange-pointer:after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: \"\";\n  background: #fff;\n  border-radius: inherit;\n}\n.asRange .asRange-pointer.start {\n  left: 0;\n  margin-left: 4px;\n}\n.asRange .asRange-pointer.stop {\n  left: 100%;\n  margin-left: -12px;\n}*/\n.asRange .asRange-pointer .asRange-tip {\n  position: absolute;\n  width: 2.472527472527473rem;\n  height: 1.758241758241758rem;\n  font-size: 0.92rem;\n  font-weight: bold;\n  letter-spacing: 0.08rem;\n  color: #fff;\n  text-align: center;\n  padding-top: 0.2747252747252747rem;\n  background-color: #e75735;\n  border-radius: 7px; \n  -webkit-transition: opacity .3s ease-in-out 0s; \n  transition: opacity .3s ease-in-out 0s;\n  left: -40%;\n  -webkit-transform: translateY(-135%);\n          transform: translateY(-135%);\n}\n.asRange .asRange-pointer .asRange-tip:before {\n  position: absolute;\n  border-radius: 30%;\n  display: block;\n  width: 0.5494505494505495rem;\n  height: 0.5494505494505495rem;\n  content: \"\";\n  background-color: #e75735;\n  top: 100%;\n  left: 50%;\n  -webkit-transform: translate(-50%,-80%) scaleY(1.3) rotate(-45deg);\n          transform: translate(-50%,-80%) scaleY(1.3) rotate(-45deg);\n}\n.asRange .asRange-selected {\n  position: absolute;\n  left: 30%;\n  z-index: 1;\n  width: 40%;\n  height: 0.3846153846153846rem;\n  background-color: #e5e5e5;\n  border-radius: 10px;\n}\n\n.asRange .asRange-tooltip{\n  font-weight: bold;\n}\n\n", ""]);

// exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/* MATERIAL DESIGN RIPPLE */\n.ripple-wrapper {\n\tdisplay: block;\n\tposition: absolute;\n\tbackground: rgba(255,255,255,0.4);\n\tborder-radius: 100%;\n\t-webkit-transform: scale(0);\n\ttransform: scale(0);\n}\n.ripple-wrapper.animated {\n\tanimation: ripple 0.65s linear;\n\t-webkit-animation: ripple 0.65s linear;\n\t-moz-animation: ripple 0.65s linear;\n\t-o-animation: ripple 0.65s linear;\n}\n.has-ripple {\n\toverflow: hidden;\n\tposition: relative;\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t    -ms-user-select: none;\n\t        user-select: none;\n\toutline: none;\n}\n@keyframes ripple {\n\t100% {\n\t\t-webkit-transform: scale(2.5);\n\t\ttransform: scale(2.5);\n\t\topacity: 0;\n\t}\n}\n@-webkit-keyframes ripple {\n\t100% {\n\t\t-webkit-transform: scale(2.5);\n\t\ttransform: scale(2.5);\n\t\topacity: 0;\n\t}\n}\n", ""]);

// exports


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "././/assets/img/mCSB_buttons.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(2);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".mCustomScrollbar{-ms-touch-action:pinch-zoom;touch-action:pinch-zoom}.mCustomScrollbar.mCS_no_scrollbar,.mCustomScrollbar.mCS_touch_action{-ms-touch-action:auto;touch-action:auto}.mCustomScrollBox{position:relative;overflow:hidden;height:100%;max-width:100%;outline:0;direction:ltr}.mCSB_container{overflow:hidden;width:auto;height:auto}.mCSB_inside>.mCSB_container{margin-right:20px}.mCSB_container.mCS_no_scrollbar_y.mCS_y_hidden{margin-right:0}.mCS-dir-rtl>.mCSB_inside>.mCSB_container{margin-right:0;margin-left:30px}.mCS-dir-rtl>.mCSB_inside>.mCSB_container.mCS_no_scrollbar_y.mCS_y_hidden{margin-left:0}.mCSB_scrollTools{position:absolute;width:16px;height:auto;left:auto;top:0;right:0;bottom:0;opacity:.75;filter:\"alpha(opacity=75)\";-ms-filter:\"alpha(opacity=75)\"}.mCSB_outside+.mCSB_scrollTools{right:-26px}.mCS-dir-rtl>.mCSB_inside>.mCSB_scrollTools,.mCS-dir-rtl>.mCSB_outside+.mCSB_scrollTools{right:auto;left:0}.mCS-dir-rtl>.mCSB_outside+.mCSB_scrollTools{left:-26px}.mCSB_scrollTools .mCSB_draggerContainer{position:absolute;top:0;left:0;bottom:0;right:0;height:auto}.mCSB_scrollTools a+.mCSB_draggerContainer{margin:20px 0}.mCSB_scrollTools .mCSB_draggerRail{width:2px;height:100%;margin:0 auto;border-radius:16px}.mCSB_scrollTools .mCSB_dragger{cursor:pointer;width:100%;height:30px;z-index:1}.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{position:relative;width:4px;height:100%;margin:0 auto;border-radius:16px;text-align:center}.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar,.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar{width:12px}.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded+.mCSB_draggerRail,.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail{width:8px}.mCSB_scrollTools .mCSB_buttonDown,.mCSB_scrollTools .mCSB_buttonUp{display:block;position:absolute;height:20px;width:100%;overflow:hidden;margin:0 auto;cursor:pointer}.mCSB_scrollTools .mCSB_buttonDown{bottom:0}.mCSB_horizontal.mCSB_inside>.mCSB_container{margin-right:0;margin-bottom:20px}.mCSB_horizontal.mCSB_outside>.mCSB_container{min-height:100%}.mCSB_horizontal>.mCSB_container.mCS_no_scrollbar_x.mCS_x_hidden{margin-bottom:0;}.mCSB_scrollTools.mCSB_scrollTools_horizontal{width:auto;height:16px;top:auto;right:0;bottom:0;left:0}.mCustomScrollBox+.mCSB_scrollTools+.mCSB_scrollTools.mCSB_scrollTools_horizontal,.mCustomScrollBox+.mCSB_scrollTools.mCSB_scrollTools_horizontal{bottom:-26px}.mCSB_scrollTools.mCSB_scrollTools_horizontal a+.mCSB_draggerContainer{margin:0 20px}.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_draggerRail{width:100%;height:2px;margin:7px 0}.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_dragger{width:30px;height:100%;left:0}.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{width:100%;height:4px;margin:6px auto}.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar,.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar{height:12px;margin:2px auto}.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded+.mCSB_draggerRail,.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail{height:8px;margin:4px 0}.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonLeft,.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonRight{display:block;position:absolute;width:20px;height:100%;overflow:hidden;margin:0 auto;cursor:pointer}.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonLeft{left:0}.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonRight{right:0}.mCSB_container_wrapper{position:absolute;height:auto;width:auto;overflow:hidden;top:0;left:0;right:0;bottom:0;margin-right:20px;margin-bottom:20px}.mCSB_container_wrapper>.mCSB_container{padding-right:30px;padding-bottom:30px;-webkit-box-sizing:border-box;box-sizing:border-box}.mCSB_vertical_horizontal>.mCSB_scrollTools.mCSB_scrollTools_vertical{bottom:20px}.mCSB_vertical_horizontal>.mCSB_scrollTools.mCSB_scrollTools_horizontal{right:20px}.mCSB_container_wrapper.mCS_no_scrollbar_x.mCS_x_hidden+.mCSB_scrollTools.mCSB_scrollTools_vertical{bottom:0}.mCS-dir-rtl>.mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside>.mCSB_scrollTools.mCSB_scrollTools_horizontal,.mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden+.mCSB_scrollTools~.mCSB_scrollTools.mCSB_scrollTools_horizontal{right:0}.mCS-dir-rtl>.mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside>.mCSB_scrollTools.mCSB_scrollTools_horizontal{left:20px}.mCS-dir-rtl>.mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside>.mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden+.mCSB_scrollTools~.mCSB_scrollTools.mCSB_scrollTools_horizontal{left:0}.mCS-dir-rtl>.mCSB_inside>.mCSB_container_wrapper{margin-right:0;margin-left:30px}.mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden>.mCSB_container{padding-right:0}.mCSB_container_wrapper.mCS_no_scrollbar_x.mCS_x_hidden>.mCSB_container{padding-bottom:0}.mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside>.mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden{margin-right:0;margin-left:0}.mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside>.mCSB_container_wrapper.mCS_no_scrollbar_x.mCS_x_hidden{margin-bottom:0}.mCSB_scrollTools,.mCSB_scrollTools .mCSB_buttonDown,.mCSB_scrollTools .mCSB_buttonLeft,.mCSB_scrollTools .mCSB_buttonRight,.mCSB_scrollTools .mCSB_buttonUp,.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{-webkit-transition:opacity .2s ease-in-out,background-color .2s ease-in-out;transition:opacity .2s ease-in-out,background-color .2s ease-in-out}.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerRail,.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger_bar,.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerRail,.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger_bar{-webkit-transition:width .2s ease-out .2s,height .2s ease-out .2s,margin-left .2s ease-out .2s,margin-right .2s ease-out .2s,margin-top .2s ease-out .2s,margin-bottom .2s ease-out .2s,opacity .2s ease-in-out,background-color .2s ease-in-out;transition:width .2s ease-out .2s,height .2s ease-out .2s,margin-left .2s ease-out .2s,margin-right .2s ease-out .2s,margin-top .2s ease-out .2s,margin-bottom .2s ease-out .2s,opacity .2s ease-in-out,background-color .2s ease-in-out}.mCS-autoHide>.mCustomScrollBox>.mCSB_scrollTools,.mCS-autoHide>.mCustomScrollBox~.mCSB_scrollTools{opacity:0;filter:\"alpha(opacity=0)\";-ms-filter:\"alpha(opacity=0)\"}.mCS-autoHide:hover>.mCustomScrollBox>.mCSB_scrollTools,.mCS-autoHide:hover>.mCustomScrollBox~.mCSB_scrollTools,.mCustomScrollBox:hover>.mCSB_scrollTools,.mCustomScrollBox:hover~.mCSB_scrollTools,.mCustomScrollbar>.mCustomScrollBox>.mCSB_scrollTools.mCSB_scrollTools_onDrag,.mCustomScrollbar>.mCustomScrollBox~.mCSB_scrollTools.mCSB_scrollTools_onDrag{opacity:1;filter:\"alpha(opacity=100)\";-ms-filter:\"alpha(opacity=100)\"}.mCSB_scrollTools .mCSB_draggerRail{background-color:#000;background-color:rgba(0,0,0,.4);filter:\"alpha(opacity=40)\";-ms-filter:\"alpha(opacity=40)\"}.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{background-color:#fff;background-color:rgba(255,255,255,.75);filter:\"alpha(opacity=75)\";-ms-filter:\"alpha(opacity=75)\"}.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{background-color:#fff;background-color:rgba(255,255,255,.85);filter:\"alpha(opacity=85)\";-ms-filter:\"alpha(opacity=85)\"}.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar{background-color:#fff;background-color:rgba(255,255,255,.9);filter:\"alpha(opacity=90)\";-ms-filter:\"alpha(opacity=90)\"}.mCSB_scrollTools .mCSB_buttonDown,.mCSB_scrollTools .mCSB_buttonLeft,.mCSB_scrollTools .mCSB_buttonRight,.mCSB_scrollTools .mCSB_buttonUp{background-image:url(" + escape(__webpack_require__(49)) + ");background-repeat:no-repeat;opacity:.4;filter:\"alpha(opacity=40)\";-ms-filter:\"alpha(opacity=40)\"}.mCSB_scrollTools .mCSB_buttonUp{background-position:0 0}.mCSB_scrollTools .mCSB_buttonDown{background-position:0 -20px}.mCSB_scrollTools .mCSB_buttonLeft{background-position:0 -40px}.mCSB_scrollTools .mCSB_buttonRight{background-position:0 -56px}.mCSB_scrollTools .mCSB_buttonDown:hover,.mCSB_scrollTools .mCSB_buttonLeft:hover,.mCSB_scrollTools .mCSB_buttonRight:hover,.mCSB_scrollTools .mCSB_buttonUp:hover{opacity:.75;filter:\"alpha(opacity=75)\";-ms-filter:\"alpha(opacity=75)\"}.mCSB_scrollTools .mCSB_buttonDown:active,.mCSB_scrollTools .mCSB_buttonLeft:active,.mCSB_scrollTools .mCSB_buttonRight:active,.mCSB_scrollTools .mCSB_buttonUp:active{opacity:.9;filter:\"alpha(opacity=90)\";-ms-filter:\"alpha(opacity=90)\"}.mCS-dark.mCSB_scrollTools .mCSB_draggerRail{background-color:#000;background-color:rgba(0,0,0,.15)}.mCS-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{background-color:#000;background-color:rgba(0,0,0,.75)}.mCS-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{background-color:rgba(0,0,0,.85)}.mCS-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,.mCS-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar{background-color:rgba(0,0,0,.9)}.mCS-dark.mCSB_scrollTools .mCSB_buttonUp{background-position:-80px 0}.mCS-dark.mCSB_scrollTools .mCSB_buttonDown{background-position:-80px -20px}.mCS-dark.mCSB_scrollTools .mCSB_buttonLeft{background-position:-80px -40px}.mCS-dark.mCSB_scrollTools .mCSB_buttonRight{background-position:-80px -56px}.mCS-dark-2.mCSB_scrollTools .mCSB_draggerRail,.mCS-light-2.mCSB_scrollTools .mCSB_draggerRail{width:4px;background-color:#fff;background-color:rgba(255,255,255,.1);border-radius:1px}.mCS-dark-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-light-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{width:4px;background-color:#fff;background-color:rgba(255,255,255,.75);border-radius:1px}.mCS-dark-2.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,.mCS-dark-2.mCSB_scrollTools_horizontal .mCSB_draggerRail,.mCS-light-2.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,.mCS-light-2.mCSB_scrollTools_horizontal .mCSB_draggerRail{width:100%;height:4px;margin:6px auto}.mCS-light-2.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{background-color:#fff;background-color:rgba(255,255,255,.85)}.mCS-light-2.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,.mCS-light-2.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar{background-color:#fff;background-color:rgba(255,255,255,.9)}.mCS-light-2.mCSB_scrollTools .mCSB_buttonUp{background-position:-32px 0}.mCS-light-2.mCSB_scrollTools .mCSB_buttonDown{background-position:-32px -20px}.mCS-light-2.mCSB_scrollTools .mCSB_buttonLeft{background-position:-40px -40px}.mCS-light-2.mCSB_scrollTools .mCSB_buttonRight{background-position:-40px -56px}.mCS-dark-2.mCSB_scrollTools .mCSB_draggerRail{background-color:#000;background-color:rgba(0,0,0,.1);border-radius:1px}.mCS-dark-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{background-color:#000;background-color:rgba(0,0,0,.75);border-radius:1px}.mCS-dark-2.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{background-color:#000;background-color:rgba(0,0,0,.85)}.mCS-dark-2.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,.mCS-dark-2.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar{background-color:#000;background-color:rgba(0,0,0,.9)}.mCS-dark-2.mCSB_scrollTools .mCSB_buttonUp{background-position:-112px 0}.mCS-dark-2.mCSB_scrollTools .mCSB_buttonDown{background-position:-112px -20px}.mCS-dark-2.mCSB_scrollTools .mCSB_buttonLeft{background-position:-120px -40px}.mCS-dark-2.mCSB_scrollTools .mCSB_buttonRight{background-position:-120px -56px}.mCS-dark-thick.mCSB_scrollTools .mCSB_draggerRail,.mCS-light-thick.mCSB_scrollTools .mCSB_draggerRail{width:4px;background-color:#fff;background-color:rgba(255,255,255,.1);border-radius:2px}.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-light-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{width:6px;background-color:#fff;background-color:rgba(255,255,255,.75);border-radius:2px}.mCS-dark-thick.mCSB_scrollTools_horizontal .mCSB_draggerRail,.mCS-light-thick.mCSB_scrollTools_horizontal .mCSB_draggerRail{width:100%;height:4px;margin:6px 0}.mCS-dark-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,.mCS-light-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{width:100%;height:6px;margin:5px auto}.mCS-light-thick.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{background-color:#fff;background-color:rgba(255,255,255,.85)}.mCS-light-thick.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,.mCS-light-thick.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar{background-color:#fff;background-color:rgba(255,255,255,.9)}.mCS-light-thick.mCSB_scrollTools .mCSB_buttonUp{background-position:-16px 0}.mCS-light-thick.mCSB_scrollTools .mCSB_buttonDown{background-position:-16px -20px}.mCS-light-thick.mCSB_scrollTools .mCSB_buttonLeft{background-position:-20px -40px}.mCS-light-thick.mCSB_scrollTools .mCSB_buttonRight{background-position:-20px -56px}.mCS-dark-thick.mCSB_scrollTools .mCSB_draggerRail{background-color:#000;background-color:rgba(0,0,0,.1);border-radius:2px}.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{background-color:#000;background-color:rgba(0,0,0,.75);border-radius:2px}.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{background-color:#000;background-color:rgba(0,0,0,.85)}.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar{background-color:#000;background-color:rgba(0,0,0,.9)}.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonUp{background-position:-96px 0}.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonDown{background-position:-96px -20px}.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonLeft{background-position:-100px -40px}.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonRight{background-position:-100px -56px}.mCS-light-thin.mCSB_scrollTools .mCSB_draggerRail{background-color:#fff;background-color:rgba(255,255,255,.1)}.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-light-thin.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{width:2px}.mCS-dark-thin.mCSB_scrollTools_horizontal .mCSB_draggerRail,.mCS-light-thin.mCSB_scrollTools_horizontal .mCSB_draggerRail{width:100%}.mCS-dark-thin.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,.mCS-light-thin.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{width:100%;height:2px;margin:7px auto}.mCS-dark-thin.mCSB_scrollTools .mCSB_draggerRail{background-color:#28a290;background-color:rgba(0,0,0,.15)}.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{background-color:#28a290;background-color:#28a290;}.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{background-color:#28a290;background-color:#28a290;}.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar{background-color:#28a290;background-color:#28a290;}.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonUp{background-position:-80px 0}.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonDown{background-position:-80px -20px}.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonLeft{background-position:-80px -40px}.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonRight{background-position:-80px -56px}.mCS-rounded.mCSB_scrollTools .mCSB_draggerRail{background-color:#fff;background-color:rgba(255,255,255,.15)}.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger,.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger,.mCS-rounded-dots.mCSB_scrollTools .mCSB_dragger,.mCS-rounded.mCSB_scrollTools .mCSB_dragger{height:14px}.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-rounded-dots.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-rounded.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{width:14px;margin:0 1px}.mCS-rounded-dark.mCSB_scrollTools_horizontal .mCSB_dragger,.mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_dragger,.mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_dragger,.mCS-rounded.mCSB_scrollTools_horizontal .mCSB_dragger{width:14px}.mCS-rounded-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,.mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,.mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,.mCS-rounded.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{height:14px;margin:1px 0}.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar,.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar,.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar,.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar{width:16px;height:16px;margin:-1px 0}.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded+.mCSB_draggerRail,.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail,.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded+.mCSB_draggerRail,.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail{width:4px}.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar,.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar,.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar,.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar{height:16px;width:16px;margin:0 -1px}.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded+.mCSB_draggerRail,.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail,.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded+.mCSB_draggerRail,.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail{height:4px;margin:6px 0}.mCS-rounded.mCSB_scrollTools .mCSB_buttonUp{background-position:0 -72px}.mCS-rounded.mCSB_scrollTools .mCSB_buttonDown{background-position:0 -92px}.mCS-rounded.mCSB_scrollTools .mCSB_buttonLeft{background-position:0 -112px}.mCS-rounded.mCSB_scrollTools .mCSB_buttonRight{background-position:0 -128px}.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{background-color:#000;background-color:rgba(0,0,0,.75)}.mCS-rounded-dark.mCSB_scrollTools .mCSB_draggerRail{background-color:#000;background-color:rgba(0,0,0,.15)}.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar,.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{background-color:#000;background-color:rgba(0,0,0,.85)}.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar{background-color:#000;background-color:rgba(0,0,0,.9)}.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonUp{background-position:-80px -72px}.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonDown{background-position:-80px -92px}.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonLeft{background-position:-80px -112px}.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonRight{background-position:-80px -128px}.mCS-rounded-dots-dark.mCSB_scrollTools_vertical .mCSB_draggerRail,.mCS-rounded-dots.mCSB_scrollTools_vertical .mCSB_draggerRail{width:4px}.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_draggerRail,.mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail,.mCS-rounded-dots.mCSB_scrollTools .mCSB_draggerRail,.mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_draggerRail{background-color:transparent;background-position:center}.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_draggerRail,.mCS-rounded-dots.mCSB_scrollTools .mCSB_draggerRail{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANElEQVQYV2NkIAAYiVbw//9/Y6DiM1ANJoyMjGdBbLgJQAX/kU0DKgDLkaQAvxW4HEvQFwCRcxIJK1XznAAAAABJRU5ErkJggg==);background-repeat:repeat-y;opacity:.3;filter:\"alpha(opacity=30)\";-ms-filter:\"alpha(opacity=30)\"}.mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail,.mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_draggerRail{height:4px;margin:6px 0;background-repeat:repeat-x}.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonUp{background-position:-16px -72px}.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonDown{background-position:-16px -92px}.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonLeft{background-position:-20px -112px}.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonRight{background-position:-20px -128px}.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_draggerRail{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALElEQVQYV2NkIAAYSVFgDFR8BqrBBEifBbGRTfiPZhpYjiQFBK3A6l6CvgAAE9kGCd1mvgEAAAAASUVORK5CYII=)}.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonUp{background-position:-96px -72px}.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonDown{background-position:-96px -92px}.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonLeft{background-position:-100px -112px}.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonRight{background-position:-100px -128px}.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{background-repeat:repeat-y;background-image:-webkit-gradient(linear,left top, right top,color-stop(0, rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background-image:linear-gradient(to right,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,.mCS-3d-thick-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,.mCS-3d-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,.mCS-3d.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{background-repeat:repeat-x;background-image:-webkit-gradient(linear,left top, left bottom,color-stop(0, rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background-image:linear-gradient(to bottom,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}.mCS-3d-dark.mCSB_scrollTools_vertical .mCSB_dragger,.mCS-3d.mCSB_scrollTools_vertical .mCSB_dragger{height:70px}.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_dragger,.mCS-3d.mCSB_scrollTools_horizontal .mCSB_dragger{width:70px}.mCS-3d-dark.mCSB_scrollTools,.mCS-3d.mCSB_scrollTools{opacity:1;filter:\"alpha(opacity=30)\";-ms-filter:\"alpha(opacity=30)\"}.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-3d-dark.mCSB_scrollTools .mCSB_draggerRail,.mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-3d.mCSB_scrollTools .mCSB_draggerRail{border-radius:16px}.mCS-3d-dark.mCSB_scrollTools .mCSB_draggerRail,.mCS-3d.mCSB_scrollTools .mCSB_draggerRail{width:8px;background-color:#000;background-color:rgba(0,0,0,.2);-webkit-box-shadow:inset 1px 0 1px rgba(0,0,0,.5),inset -1px 0 1px rgba(255,255,255,.2);box-shadow:inset 1px 0 1px rgba(0,0,0,.5),inset -1px 0 1px rgba(255,255,255,.2)}.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar,.mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-3d.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,.mCS-3d.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,.mCS-3d.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{background-color:#555}.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{width:8px}.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail,.mCS-3d.mCSB_scrollTools_horizontal .mCSB_draggerRail{width:100%;height:8px;margin:4px 0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.5),inset 0 -1px 1px rgba(255,255,255,.2);box-shadow:inset 0 1px 1px rgba(0,0,0,.5),inset 0 -1px 1px rgba(255,255,255,.2)}.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,.mCS-3d.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{width:100%;height:8px;margin:4px auto}.mCS-3d.mCSB_scrollTools .mCSB_buttonUp{background-position:-32px -72px}.mCS-3d.mCSB_scrollTools .mCSB_buttonDown{background-position:-32px -92px}.mCS-3d.mCSB_scrollTools .mCSB_buttonLeft{background-position:-40px -112px}.mCS-3d.mCSB_scrollTools .mCSB_buttonRight{background-position:-40px -128px}.mCS-3d-dark.mCSB_scrollTools .mCSB_draggerRail{background-color:#000;background-color:rgba(0,0,0,.1);-webkit-box-shadow:inset 1px 0 1px rgba(0,0,0,.1);box-shadow:inset 1px 0 1px rgba(0,0,0,.1)}.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail{-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.1);box-shadow:inset 0 1px 1px rgba(0,0,0,.1)}.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonUp{background-position:-112px -72px}.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonDown{background-position:-112px -92px}.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonLeft{background-position:-120px -112px}.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonRight{background-position:-120px -128px}.mCS-3d-thick-dark.mCSB_scrollTools,.mCS-3d-thick.mCSB_scrollTools{opacity:1;filter:\"alpha(opacity=30)\";-ms-filter:\"alpha(opacity=30)\"}.mCS-3d-thick-dark.mCSB_scrollTools,.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_draggerContainer,.mCS-3d-thick.mCSB_scrollTools,.mCS-3d-thick.mCSB_scrollTools .mCSB_draggerContainer{border-radius:7px}.mCSB_inside+.mCS-3d-thick-dark.mCSB_scrollTools_vertical,.mCSB_inside+.mCS-3d-thick.mCSB_scrollTools_vertical{right:1px}.mCS-3d-thick-dark.mCSB_scrollTools_vertical,.mCS-3d-thick.mCSB_scrollTools_vertical{-webkit-box-shadow:inset 1px 0 1px rgba(0,0,0,.1),inset 0 0 14px rgba(0,0,0,.5);box-shadow:inset 1px 0 1px rgba(0,0,0,.1),inset 0 0 14px rgba(0,0,0,.5)}.mCS-3d-thick-dark.mCSB_scrollTools_horizontal,.mCS-3d-thick.mCSB_scrollTools_horizontal{bottom:1px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.1),inset 0 0 14px rgba(0,0,0,.5);box-shadow:inset 0 1px 1px rgba(0,0,0,.1),inset 0 0 14px rgba(0,0,0,.5)}.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{border-radius:5px;-webkit-box-shadow:inset 1px 0 0 rgba(255,255,255,.4);box-shadow:inset 1px 0 0 rgba(255,255,255,.4);width:12px;margin:2px;position:absolute;height:auto;top:0;bottom:0;left:0;right:0}.mCS-3d-thick-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,.mCS-3d-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.4);box-shadow:inset 0 1px 0 rgba(255,255,255,.4);height:12px;width:auto}.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{background-color:#555}.mCS-3d-thick.mCSB_scrollTools .mCSB_draggerContainer{background-color:#000;background-color:rgba(0,0,0,.05);-webkit-box-shadow:inset 1px 1px 16px rgba(0,0,0,.1);box-shadow:inset 1px 1px 16px rgba(0,0,0,.1)}.mCS-3d-thick.mCSB_scrollTools .mCSB_draggerRail{background-color:transparent}.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonUp{background-position:-32px -72px}.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonDown{background-position:-32px -92px}.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonLeft{background-position:-40px -112px}.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonRight{background-position:-40px -128px}.mCS-3d-thick-dark.mCSB_scrollTools{-webkit-box-shadow:inset 0 0 14px rgba(0,0,0,.2);box-shadow:inset 0 0 14px rgba(0,0,0,.2)}.mCS-3d-thick-dark.mCSB_scrollTools_horizontal{-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.1),inset 0 0 14px rgba(0,0,0,.2);box-shadow:inset 0 1px 1px rgba(0,0,0,.1),inset 0 0 14px rgba(0,0,0,.2)}.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{-webkit-box-shadow:inset 1px 0 0 rgba(255,255,255,.4),inset -1px 0 0 rgba(0,0,0,.2);box-shadow:inset 1px 0 0 rgba(255,255,255,.4),inset -1px 0 0 rgba(0,0,0,.2)}.mCS-3d-thick-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.4),inset 0 -1px 0 rgba(0,0,0,.2);box-shadow:inset 0 1px 0 rgba(255,255,255,.4),inset 0 -1px 0 rgba(0,0,0,.2)}.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{background-color:#777}.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_draggerContainer{background-color:#fff;background-color:rgba(0,0,0,.05);-webkit-box-shadow:inset 1px 1px 16px rgba(0,0,0,.1);box-shadow:inset 1px 1px 16px rgba(0,0,0,.1)}.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_draggerRail,.mCS-minimal-dark.mCSB_scrollTools .mCSB_draggerRail,.mCS-minimal.mCSB_scrollTools .mCSB_draggerRail{background-color:transparent}.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonUp{background-position:-112px -72px}.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonDown{background-position:-112px -92px}.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonLeft{background-position:-120px -112px}.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonRight{background-position:-120px -128px}.mCSB_outside+.mCS-minimal-dark.mCSB_scrollTools_vertical,.mCSB_outside+.mCS-minimal.mCSB_scrollTools_vertical{right:0;margin:12px 0}.mCustomScrollBox.mCS-minimal+.mCSB_scrollTools+.mCSB_scrollTools.mCSB_scrollTools_horizontal,.mCustomScrollBox.mCS-minimal+.mCSB_scrollTools.mCSB_scrollTools_horizontal,.mCustomScrollBox.mCS-minimal-dark+.mCSB_scrollTools+.mCSB_scrollTools.mCSB_scrollTools_horizontal,.mCustomScrollBox.mCS-minimal-dark+.mCSB_scrollTools.mCSB_scrollTools_horizontal{bottom:0;margin:0 12px}.mCS-dir-rtl>.mCSB_outside+.mCS-minimal-dark.mCSB_scrollTools_vertical,.mCS-dir-rtl>.mCSB_outside+.mCS-minimal.mCSB_scrollTools_vertical{left:0;right:auto}.mCS-minimal-dark.mCSB_scrollTools_vertical .mCSB_dragger,.mCS-minimal.mCSB_scrollTools_vertical .mCSB_dragger{height:50px}.mCS-minimal-dark.mCSB_scrollTools_horizontal .mCSB_dragger,.mCS-minimal.mCSB_scrollTools_horizontal .mCSB_dragger{width:50px}.mCS-minimal.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{background-color:#fff;background-color:rgba(255,255,255,.2);filter:\"alpha(opacity=20)\";-ms-filter:\"alpha(opacity=20)\"}.mCS-minimal.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,.mCS-minimal.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar{background-color:#fff;background-color:rgba(255,255,255,.5);filter:\"alpha(opacity=50)\";-ms-filter:\"alpha(opacity=50)\"}.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{background-color:#000;background-color:rgba(0,0,0,.2);filter:\"alpha(opacity=20)\";-ms-filter:\"alpha(opacity=20)\"}.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar{background-color:#000;background-color:rgba(0,0,0,.5);filter:\"alpha(opacity=50)\";-ms-filter:\"alpha(opacity=50)\"}.mCS-dark-3.mCSB_scrollTools .mCSB_draggerRail,.mCS-light-3.mCSB_scrollTools .mCSB_draggerRail{width:6px;background-color:#000;background-color:rgba(0,0,0,.2)}.mCS-dark-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-light-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{width:6px}.mCS-dark-3.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,.mCS-dark-3.mCSB_scrollTools_horizontal .mCSB_draggerRail,.mCS-light-3.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,.mCS-light-3.mCSB_scrollTools_horizontal .mCSB_draggerRail{width:100%;height:6px;margin:5px 0}.mCS-dark-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded+.mCSB_draggerRail,.mCS-dark-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail,.mCS-light-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded+.mCSB_draggerRail,.mCS-light-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail{width:12px}.mCS-dark-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded+.mCSB_draggerRail,.mCS-dark-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail,.mCS-light-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded+.mCSB_draggerRail,.mCS-light-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail{height:12px;margin:2px 0}.mCS-light-3.mCSB_scrollTools .mCSB_buttonUp{background-position:-32px -72px}.mCS-light-3.mCSB_scrollTools .mCSB_buttonDown{background-position:-32px -92px}.mCS-light-3.mCSB_scrollTools .mCSB_buttonLeft{background-position:-40px -112px}.mCS-light-3.mCSB_scrollTools .mCSB_buttonRight{background-position:-40px -128px}.mCS-dark-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{background-color:#000;background-color:rgba(0,0,0,.75)}.mCS-dark-3.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{background-color:#000;background-color:rgba(0,0,0,.85)}.mCS-dark-3.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,.mCS-dark-3.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar{background-color:#000;background-color:rgba(0,0,0,.9)}.mCS-dark-3.mCSB_scrollTools .mCSB_draggerRail{background-color:#000;background-color:rgba(0,0,0,.1)}.mCS-dark-3.mCSB_scrollTools .mCSB_buttonUp{background-position:-112px -72px}.mCS-dark-3.mCSB_scrollTools .mCSB_buttonDown{background-position:-112px -92px}.mCS-dark-3.mCSB_scrollTools .mCSB_buttonLeft{background-position:-120px -112px}.mCS-dark-3.mCSB_scrollTools .mCSB_buttonRight{background-position:-120px -128px}.mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail,.mCS-inset-2.mCSB_scrollTools .mCSB_draggerRail,.mCS-inset-3-dark.mCSB_scrollTools .mCSB_draggerRail,.mCS-inset-3.mCSB_scrollTools .mCSB_draggerRail,.mCS-inset-dark.mCSB_scrollTools .mCSB_draggerRail,.mCS-inset.mCSB_scrollTools .mCSB_draggerRail{width:12px;background-color:#000;background-color:rgba(0,0,0,.2)}.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-inset-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-inset-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-inset.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{width:6px;margin:3px 5px;position:absolute;height:auto;top:0;bottom:0;left:0;right:0}.mCS-inset-2-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,.mCS-inset-2.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,.mCS-inset-3-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,.mCS-inset-3.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,.mCS-inset-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,.mCS-inset.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{height:6px;margin:5px 3px;position:absolute;width:auto;top:0;bottom:0;left:0;right:0}.mCS-inset-2-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail,.mCS-inset-2.mCSB_scrollTools_horizontal .mCSB_draggerRail,.mCS-inset-3-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail,.mCS-inset-3.mCSB_scrollTools_horizontal .mCSB_draggerRail,.mCS-inset-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail,.mCS-inset.mCSB_scrollTools_horizontal .mCSB_draggerRail{width:100%;height:12px;margin:2px 0}.mCS-inset-2.mCSB_scrollTools .mCSB_buttonUp,.mCS-inset-3.mCSB_scrollTools .mCSB_buttonUp,.mCS-inset.mCSB_scrollTools .mCSB_buttonUp{background-position:-32px -72px}.mCS-inset-2.mCSB_scrollTools .mCSB_buttonDown,.mCS-inset-3.mCSB_scrollTools .mCSB_buttonDown,.mCS-inset.mCSB_scrollTools .mCSB_buttonDown{background-position:-32px -92px}.mCS-inset-2.mCSB_scrollTools .mCSB_buttonLeft,.mCS-inset-3.mCSB_scrollTools .mCSB_buttonLeft,.mCS-inset.mCSB_scrollTools .mCSB_buttonLeft{background-position:-40px -112px}.mCS-inset-2.mCSB_scrollTools .mCSB_buttonRight,.mCS-inset-3.mCSB_scrollTools .mCSB_buttonRight,.mCS-inset.mCSB_scrollTools .mCSB_buttonRight{background-position:-40px -128px}.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{background-color:#000;background-color:rgba(0,0,0,.75)}.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar,.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar,.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{background-color:#000;background-color:rgba(0,0,0,.85)}.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar{background-color:#000;background-color:rgba(0,0,0,.9)}.mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail,.mCS-inset-3-dark.mCSB_scrollTools .mCSB_draggerRail,.mCS-inset-dark.mCSB_scrollTools .mCSB_draggerRail{background-color:#000;background-color:rgba(0,0,0,.1)}.mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonUp,.mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonUp,.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonUp{background-position:-112px -72px}.mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonDown,.mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonDown,.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonDown{background-position:-112px -92px}.mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonLeft,.mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonLeft,.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonLeft{background-position:-120px -112px}.mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonRight,.mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonRight,.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonRight{background-position:-120px -128px}.mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail,.mCS-inset-2.mCSB_scrollTools .mCSB_draggerRail{background-color:transparent;border-width:1px;border-style:solid;border-color:#fff;border-color:rgba(255,255,255,.2);-webkit-box-sizing:border-box;box-sizing:border-box}.mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail{border-color:#000;border-color:rgba(0,0,0,.2)}.mCS-inset-3.mCSB_scrollTools .mCSB_draggerRail{background-color:#fff;background-color:rgba(255,255,255,.6)}.mCS-inset-3-dark.mCSB_scrollTools .mCSB_draggerRail{background-color:#000;background-color:rgba(0,0,0,.6)}.mCS-inset-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{background-color:#000;background-color:rgba(0,0,0,.75)}.mCS-inset-3.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{background-color:#000;background-color:rgba(0,0,0,.85)}.mCS-inset-3.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,.mCS-inset-3.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar{background-color:#000;background-color:rgba(0,0,0,.9)}.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{background-color:#fff;background-color:rgba(255,255,255,.75)}.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{background-color:#fff;background-color:rgba(255,255,255,.85)}.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar{background-color:#fff;background-color:rgba(255,255,255,.9)}", ""]);

// exports


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(2);
exports = module.exports = __webpack_require__(1)(false);
// imports
exports.i(__webpack_require__(50), "");
exports.i(__webpack_require__(48), "");
exports.i(__webpack_require__(47), "");
exports.i(__webpack_require__(46), "");

// module
exports.push([module.i, "@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(45)) + ");\n  src: local('\\263A'), url(" + escape(__webpack_require__(44)) + ") format('woff'), url(" + escape(__webpack_require__(43)) + ") format('truetype'), url(" + escape(__webpack_require__(42)) + ") format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(41)) + ");\n  src: local('\\263A'), url(" + escape(__webpack_require__(40)) + ") format('woff'), url(" + escape(__webpack_require__(39)) + ") format('truetype'), url(" + escape(__webpack_require__(38)) + ") format('svg');\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Lato';\n  src: url(" + escape(__webpack_require__(37)) + ");\n  src: local('\\263A'), url(" + escape(__webpack_require__(36)) + ") format('woff'), url(" + escape(__webpack_require__(35)) + ") format('truetype'), url(" + escape(__webpack_require__(34)) + ") format('svg');\n  font-weight: lighter;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'SourceSansPro';\n  src: url(" + escape(__webpack_require__(33)) + ");\n  src: local('\\263A'), url(" + escape(__webpack_require__(32)) + ") format('woff'), url(" + escape(__webpack_require__(31)) + ") format('truetype'), url(" + escape(__webpack_require__(30)) + ") format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n* {\n  margin: 0;\n  padding: 0;\n}\n*,\n*::after,\n*::before {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nhtml {\n  height: 100%;\n  font-size: 18.2px;\n  background-color: #fff;\n}\nbody {\n  height: 100%;\n}\nhtml,\ninput,\ntextarea {\n  font-family: 'Lato', Arial, sans-serif;\n  color: #4f4f4f;\n}\n.index {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 100%;\n  background-color: #e5e5e5;\n}\n.index__main {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n.index__footer {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n}\n.uidemo {\n  width: 87%;\n  margin: 5.769230769230769rem auto 7.802197802197803rem;\n  text-align: center;\n}\n@media screen and (max-width: 425px) {\n  .uidemo {\n    margin: 70px auto 70px;\n  }\n}\n.uidemo__button-section {\n  width: 76.4188002879915%;\n  margin: 0 auto;\n}\n@media screen and (max-width: 915px) {\n  .uidemo__button-section {\n    width: 100%;\n  }\n}\n.uidemo__arrow-section {\n  width: 69.3453245588551%;\n  margin: 2rem auto 0;\n  max-width: 610px;\n}\n@media screen and (max-width: 915px) {\n  .uidemo__arrow-section {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 689px) {\n  .uidemo__arrow-section {\n    max-width: 260px;\n  }\n}\n.uidemo__chart-section {\n  width: 100%;\n  margin: 1.65rem auto 0;\n}\n@media screen and (max-width: 915px) {\n  .uidemo__chart-section {\n    max-width: 640px;\n  }\n}\n.uidemo__slider-section {\n  width: 97.38660334221727%;\n  margin: 0.824175824175824rem auto 0;\n}\n.uidemo__stages-section {\n  width: 98.01816367517588%;\n  margin: 0 auto;\n}\n.uidemo__form-section {\n  width: 97.63922747540072%;\n  margin: 4.1rem auto 0;\n  max-width: 1300px;\n}\n.uidemo__search-section {\n  display: inline-block;\n  width: 47.36702497189556%;\n  margin: 2.032967032967033rem 5.684042996627467% 0 auto;\n  max-width: 600px;\n  vertical-align: top;\n}\n@media screen and (max-width: 915px) {\n  .uidemo__search-section {\n    margin-right: auto;\n    width: 100%;\n  }\n}\n@media screen and (min-width: 1625px) {\n  .uidemo__search-section {\n    margin-right: auto;\n  }\n}\n.uidemo__profile-section {\n  display: inline-block;\n  width: 43.95659917391908%;\n  margin-top: 2.032967032967033rem;\n  vertical-align: top;\n  max-width: 634px;\n}\n@media screen and (max-width: 915px) {\n  .uidemo__profile-section {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: unset;\n    width: 100%;\n  }\n}\n.uidemo__news-section {\n  width: 97.512915408809%;\n  margin: 4.7rem auto 0;\n  max-width: 950px;\n}\n@media screen and (max-width: 900px) {\n  .uidemo__news-section {\n    margin: 2rem auto 0;\n  }\n}\n.uidemo__map-section {\n  width: 97.3%;\n  margin: 3.3rem auto 0;\n}\n.uidemo__calendar-section {\n  display: inline-block;\n  width: 45.85128017279491%;\n  margin: 3.6rem 4.4% 0 auto;\n  vertical-align: top;\n}\n@media screen and (max-width: 850px) {\n  .uidemo__calendar-section {\n    width: 100%;\n    margin-right: 0;\n  }\n}\n.uidemo__message-section {\n  display: inline-block;\n  width: 47.24071290530384%;\n  margin-top: 3.6rem;\n  vertical-align: top;\n}\n@media screen and (max-width: 850px) {\n  .uidemo__message-section {\n    width: 100%;\n  }\n}\n.uidemo__video-section {\n  width: 97.7%;\n  margin: 3.7rem auto 0;\n  max-width: 1000px;\n}\n.contacts {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 100%;\n}\n.contacts__main {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  width: 90%;\n  margin: 100px auto 2rem;\n}\n@media screen and (max-width: 425px) {\n  .contacts__main {\n    margin-top: 60px;\n  }\n}\n.contacts__title {\n  text-transform: uppercase;\n  font-size: 2rem;\n  font-weight: bold;\n  text-align: center;\n  color: inherit;\n  letter-spacing: 0.095rem;\n}\n.contacts__email {\n  margin: 3rem auto 0;\n}\n@media screen and (max-width: 425px) {\n  .contacts__email {\n    margin-top: 1rem;\n  }\n}\n.contacts__text {\n  font-size: 1rem;\n  font-weight: lighter;\n  text-align: center;\n}\n.contacts__form {\n  margin: 2rem auto 0;\n  width: 100%;\n  max-width: 750px;\n}\n.contacts__map {\n  margin: 3rem auto 0;\n}\n.contacts__footer {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n}\n.speakers {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 100%;\n  width: 100%;\n}\n.speakers__main {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  width: 100%;\n  margin: 100px auto 0;\n}\n@media screen and (max-width: 425px) {\n  .speakers__main {\n    margin-top: 60px;\n  }\n}\n.speakers__title {\n  text-transform: uppercase;\n  font-size: 2rem;\n  font-weight: bold;\n  text-align: center;\n  color: inherit;\n  letter-spacing: 0.095rem;\n}\n.speakers__intro {\n  font-size: 1rem;\n  font-weight: lighter;\n  text-align: center;\n  margin: 1rem auto 2rem;\n  width: 100%;\n  max-width: 800px;\n  padding: 0 1rem;\n}\n.speakers__search {\n  width: 100%;\n  max-width: 800px;\n  margin: 1rem auto;\n  padding: 0 1rem;\n}\n.speakers__link {\n  color: #4eb7a8;\n  text-decoration: underline;\n  cursor: pointer;\n  line-height: 1rem;\n  margin: 0 1rem 0.3rem;\n}\n@media (hover: hover) {\n  .speakers__link:hover {\n    text-decoration: none;\n  }\n}\n@media (hover: hover) {\n  .speakers__link:active,\n  .speakers__link:visited {\n    text-decoration: underline;\n  }\n}\n@media (hover: none) {\n  .speakers__link:active,\n  .speakers__link:visited {\n    text-decoration: none;\n  }\n}\n.speakers__card-carousel {\n  width: 100%;\n  border-left: 10px solid #fff;\n  border-right: 10px solid #fff;\n}\n@media screen and (max-width: 425px) {\n  .speakers__card-carousel {\n    border: none;\n  }\n}\n.speakers__controls {\n  font-size: 1rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 3rem;\n}\n.speakers__controls_hidden {\n  display: none;\n}\n.speakers__left-button {\n  font-size: 0.5rem;\n  margin-right: 1em;\n  -webkit-box-flex: 1;\n      -ms-flex: auto 0 0px;\n          flex: auto 0 0;\n}\n.speakers__right-button {\n  font-size: 0.5rem;\n  margin-left: 1em;\n  -webkit-box-flex: 1;\n      -ms-flex: auto 0 0px;\n          flex: auto 0 0;\n}\n.speakers__cards {\n  font-size: 1rem;\n  border-radius: 10px;\n  background-color: #c6c6c6;\n  width: 100%;\n  padding: 10px 10px 0 10px;\n  margin-top: 3rem;\n  margin-bottom: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .speakers__cards {\n    font-size: 0.8rem;\n  }\n}\n.speakers__card-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  overflow-x: auto;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.speakers__card {\n  width: 21rem;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  overflow: hidden;\n  margin-right: 0.8rem;\n}\n.speakers__card:last-child {\n  margin-right: 0;\n}\n@media screen and (max-width: 425px) {\n  .speakers__card {\n    width: 90%;\n  }\n}\n.speakers_view_small .speakers__left-button,\n.speakers_view_small .speakers__right-button {\n  display: none;\n}\n.speakers_view_small .speakers__cards {\n  text-align: center;\n  background-color: #fff;\n}\n.speakers_view_small .speakers__card-wrapper {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.speakers_view_small .speakers__card {\n  margin: 0 0 1rem;\n}\n.speakers_view_small .speakers__card:nth-child(n+4) {\n  display: none;\n}\n.speakers_view_small.speakers_view_full .speakers__card-wrapper {\n  max-height: none;\n}\n.speakers_view_full .speakers__left-button,\n.speakers_view_full .speakers__right-button {\n  display: none;\n}\n.speakers_view_full .speakers__cards {\n  text-align: center;\n  background-color: #fff;\n}\n.speakers_view_full .speakers__card-wrapper {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.speakers_view_full .speakers__card {\n  margin: 0 0.8rem 1rem 0.8rem;\n}\n.speakers_view_full.speakers_view_small .speakers__card {\n  margin: 0 0 1rem;\n  display: block;\n}\n__footer {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n}\n.schedule {\n  width: 100%;\n  margin-top: 100px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 100%;\n}\n@media screen and (max-width: 425px) {\n  .schedule {\n    margin-top: 60px;\n  }\n}\n.schedule__main {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n.schedule__title {\n  margin: 2rem auto;\n  text-transform: uppercase;\n  font-size: 2rem;\n  font-weight: bold;\n  text-align: center;\n  color: inherit;\n  letter-spacing: 0.095rem;\n}\n.schedule__content {\n  width: 100%;\n  max-width: 1600px;\n  margin: 0 auto 2rem;\n}\n.schedule__footer {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n}\n.registration {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 100%;\n}\n.registration__main {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  width: 70%;\n  margin: 0 auto 2rem;\n}\n@media screen and (max-width: 768px) {\n  .registration__main {\n    width: 90%;\n  }\n}\n.registration__header {\n  width: 80%;\n  background: -webkit-gradient(linear, left top, left bottom, from(#fff), color-stop(87%, #fff), color-stop(87%, rgba(255,255,255,0)), to(rgba(255,255,255,0)));\n  background: linear-gradient(top, #fff 0%, #fff 87%, rgba(255,255,255,0) 87%, rgba(255,255,255,0) 100%);\n  z-index: 100;\n  position: fixed;\n  top: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  padding: 6rem 0 0;\n}\n@media screen and (max-width: 768px) {\n  .registration__header {\n    width: 95%;\n  }\n}\n@media screen and (max-width: 425px) {\n  .registration__header {\n    padding-top: 4rem;\n  }\n}\n.registration__title {\n  text-transform: uppercase;\n  font-size: 2rem;\n  font-weight: bold;\n  text-align: center;\n  color: inherit;\n  letter-spacing: 0.095rem;\n}\n.registration__bread-crumbs {\n  width: 100%;\n  margin: 1rem 0;\n}\n.registration__form {\n  margin-top: 240px;\n}\n.registration__footer {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n}\nhtml.js {\n  display: none;\n}\n.loader {\n  background: none repeat scroll 0 0 #fff;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 9999;\n}\n.loader__grid {\n  display: inline-block;\n  position: absolute;\n  width: 64px;\n  height: 64px;\n  top: calc(50% - 32px);\n  left: calc(50% - 32px);\n}\n.loader__cell {\n  position: absolute;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #e75735;\n  -webkit-animation: loader__cell 1.2s linear infinite;\n          animation: loader__cell 1.2s linear infinite;\n}\n.loader__cell:nth-child(1) {\n  top: 6px;\n  left: 6px;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n.loader__cell:nth-child(2) {\n  top: 6px;\n  left: 26px;\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s;\n}\n.loader__cell:nth-child(3) {\n  top: 6px;\n  left: 45px;\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n}\n.loader__cell:nth-child(4) {\n  top: 26px;\n  left: 6px;\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s;\n}\n.loader__cell:nth-child(5) {\n  top: 26px;\n  left: 26px;\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n}\n.loader__cell:nth-child(6) {\n  top: 26px;\n  left: 45px;\n  -webkit-animation-delay: -1.2s;\n          animation-delay: -1.2s;\n}\n.loader__cell:nth-child(7) {\n  top: 45px;\n  left: 6px;\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n}\n.loader__cell:nth-child(8) {\n  top: 45px;\n  left: 26px;\n  -webkit-animation-delay: -1.2s;\n          animation-delay: -1.2s;\n}\n.loader__cell:nth-child(9) {\n  top: 45px;\n  left: 45px;\n  -webkit-animation-delay: -1.6s;\n          animation-delay: -1.6s;\n}\n@-webkit-keyframes loader__cell {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@keyframes loader__cell {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n.navigation-bar {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: #fff;\n  z-index: 200;\n}\n@media screen and (max-width: 425px) {\n  .navigation-bar {\n    height: 60px;\n    background-color: transparent;\n  }\n}\n.navigation-bar__menu {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  width: 100%;\n  margin: 0;\n  padding: 1rem 1rem 0;\n  -webkit-transition: all 1s cubic-bezier(0.325, 1, 0.22, 1);\n  transition: all 1s cubic-bezier(0.325, 1, 0.22, 1);\n}\n@media screen and (max-width: 425px) {\n  .navigation-bar__menu {\n    overflow: hidden;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    height: 0px;\n    padding: 0;\n  }\n}\n.navigation-bar__item {\n  margin: 0 0.5rem 1rem;\n  padding: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: auto 1 1;\n          flex: auto 1 1;\n  text-align: center;\n  list-style: none;\n}\n.navigation-bar__item a {\n  font-size: 1rem;\n  text-decoration: none;\n  font-weight: lighter;\n  color: #4f4f4f;\n  text-transform: uppercase;\n}\n@media (hover: hover) {\n  .navigation-bar__item a:hover {\n    text-decoration: underline;\n  }\n}\n@media (hover: hover) {\n  .navigation-bar__item a:active {\n    text-decoration: none;\n  }\n}\n@media (hover: none) {\n  .navigation-bar__item a:active {\n    text-decoration: underline;\n  }\n}\n.navigation-bar__icon {\n  display: none;\n}\n@media screen and (max-width: 425px) {\n  .navigation-bar__icon {\n    display: block;\n    position: absolute;\n    top: 20px;\n    left: 13px;\n    height: 27px;\n    width: 27px;\n    cursor: pointer;\n    text-indent: -9999px;\n    -webkit-transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);\n    transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);\n    border: none;\n    color: transparent;\n    text-shadow: 0 0 0 #808080;\n    text-align: center;\n  }\n  .navigation-bar__icon:focus {\n    outline: none;\n  }\n}\n.navigation-bar__icon-line {\n  position: absolute;\n  display: block;\n  background: #28a290;\n  width: 27px;\n  height: 0.2rem;\n  border-radius: 0.2rem;\n  left: 0;\n  text-indent: 0;\n  -webkit-transition: all 0.6s cubic-bezier(0.5, 0.1, 0, 1.2);\n  transition: all 0.6s cubic-bezier(0.5, 0.1, 0, 1.2);\n}\n.navigation-bar__icon-line:first-child {\n  top: 0;\n}\n.navigation-bar__icon-line:nth-child(2) {\n  top: 8px;\n}\n.navigation-bar__icon-line:nth-child(3) {\n  top: 16px;\n}\n.navigation-bar input[type='checkbox'] {\n  display: none;\n  visibility: hidden;\n}\n.navigation-bar input[type='checkbox']:checked ~ .navigation-bar__menu {\n  height: auto;\n  padding: 1rem 1rem 0;\n  background-color: #e5e5e5;\n}\n.navigation-bar input[type='checkbox']:checked ~ .navigation-bar__menu .navigation-bar__item {\n  height: auto;\n  max-height: 30rem;\n  -webkit-transition: all 2s cubic-bezier(0.5, 1, 0.22, 1);\n  transition: all 2s cubic-bezier(0.5, 1, 0.22, 1);\n}\n.navigation-bar input[type='checkbox']:checked ~ .navigation-bar__icon .navigation-bar__icon-line:first-child {\n  top: 0px;\n  width: 27px;\n  -webkit-transform: translateX(-8px) rotate(-45deg) translateY(12px);\n          transform: translateX(-8px) rotate(-45deg) translateY(12px);\n}\n.navigation-bar input[type='checkbox']:checked ~ .navigation-bar__icon .navigation-bar__icon-line:nth-child(2) {\n  opacity: 0;\n}\n.navigation-bar input[type='checkbox']:checked ~ .navigation-bar__icon .navigation-bar__icon-line:nth-child(3) {\n  top: 14px;\n  width: 27px;\n  -webkit-transform: translateX(-5px) rotate(45deg) translateY(-8px);\n          transform: translateX(-5px) rotate(45deg) translateY(-8px);\n}\n.button {\n  display: inline-block;\n  width: 8.406593406593407rem;\n  padding: 0.659340659340659rem;\n  overflow: hidden;\n  font-size: 0.857142857142857rem;\n  font-weight: bold;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0.035rem;\n  color: #28a290;\n  cursor: pointer;\n  background-color: #fff;\n  border-radius: 5px;\n  -webkit-box-shadow: inset 0 0 0 1px #28a290, 0 4px 0 0 #28a290;\n          box-shadow: inset 0 0 0 1px #28a290, 0 4px 0 0 #28a290;\n  -webkit-transition: all 0.3s, visibility 0s;\n  transition: all 0.3s, visibility 0s;\n}\n@media (hover: hover) {\n  .button:hover,\n  .button:focus {\n    color: #fff;\n    background-color: #4eb7a8;\n    -webkit-box-shadow: 0 4px 0 0 #4eb7a8;\n            box-shadow: 0 4px 0 0 #4eb7a8;\n  }\n}\n@media (hover: none) {\n  .button:active {\n    color: #fff;\n    background-color: #4eb7a8;\n    -webkit-box-shadow: 0 4px 0 0 #4eb7a8;\n            box-shadow: 0 4px 0 0 #4eb7a8;\n  }\n}\n.button_active {\n  color: #fff;\n  background-color: #4eb7a8;\n  -webkit-box-shadow: 0 4px 0 0 #4eb7a8;\n          box-shadow: 0 4px 0 0 #4eb7a8;\n}\n.button_size_small {\n  width: 5.604395604395605rem;\n  padding: 0.32967032967033rem;\n  font-size: 0.714285714285714rem;\n}\n.button_size_responsive {\n  width: 100%;\n  font-size: inherit;\n}\n.button_color_secondary {\n  color: #bf3e1f;\n  background-color: #fff;\n  border-color: #bf3e1f;\n  -webkit-box-shadow: inset 0 0 0 1px #bf3e1f, 0 4px 0 0 #bf3e1f;\n          box-shadow: inset 0 0 0 1px #bf3e1f, 0 4px 0 0 #bf3e1f;\n}\n@media (hover: hover) {\n  .button_color_secondary:hover,\n  .button_color_secondary:focus {\n    color: #fff;\n    background-color: #e75735;\n    -webkit-box-shadow: 0 4px 0 0 #e75735;\n            box-shadow: 0 4px 0 0 #e75735;\n  }\n}\n@media (hover: none) {\n  .button_color_secondary:active {\n    color: #fff;\n    background-color: #e75735;\n    -webkit-box-shadow: 0 4px 0 0 #e75735;\n            box-shadow: 0 4px 0 0 #e75735;\n  }\n}\n.button_color_secondary.button_active {\n  color: #fff;\n  background-color: #e75735;\n  -webkit-box-shadow: 0 4px 0 0 #e75735;\n          box-shadow: 0 4px 0 0 #e75735;\n}\n.button_color_reverse {\n  color: #fff;\n  background-color: #4eb7a8;\n  -webkit-box-shadow: 0 4px 0 0 #4eb7a8;\n          box-shadow: 0 4px 0 0 #4eb7a8;\n}\n@media (hover: hover) {\n  .button_color_reverse:hover,\n  .button_color_reverse:focus {\n    color: #4eb7a8;\n    background-color: #fff;\n    -webkit-box-shadow: inset 0 0 0 1px #4eb7a8, 0 4px 0 0 #4eb7a8;\n            box-shadow: inset 0 0 0 1px #4eb7a8, 0 4px 0 0 #4eb7a8;\n  }\n}\n@media (hover: none) {\n  .button_color_reverse:active {\n    color: #4eb7a8;\n    background-color: #fff;\n    -webkit-box-shadow: inset 0 0 0 1px #4eb7a8, 0 4px 0 0 #4eb7a8;\n            box-shadow: inset 0 0 0 1px #4eb7a8, 0 4px 0 0 #4eb7a8;\n  }\n}\n.button_color_reverse.button_active {\n  color: #4eb7a8;\n  background-color: #fff;\n  -webkit-box-shadow: inset 0 0 0 1px #4eb7a8, 0 4px 0 0 #4eb7a8;\n          box-shadow: inset 0 0 0 1px #4eb7a8, 0 4px 0 0 #4eb7a8;\n}\n.button-section {\n  width: 100%;\n}\n.button-section__title {\n  margin-bottom: 5rem;\n  text-transform: uppercase;\n  font-size: 1.285714285714286rem;\n  font-weight: bold;\n  text-align: center;\n  color: inherit;\n  letter-spacing: 0.095rem;\n}\n@media screen and (max-width: 689px) {\n  .button-section__title {\n    margin-bottom: 3rem;\n  }\n}\n.button-section__container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.button-section__column {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: normal;\n      -ms-flex-pack: normal;\n          justify-content: normal;\n  -webkit-box-flex: 15.65934065934066rem;\n      -ms-flex: 15.65934065934066rem 1 0px;\n          flex: 15.65934065934066rem 1 0;\n  height: 12rem;\n  margin: 0 auto;\n}\n@media screen and (max-width: 689px) {\n  .button-section__column {\n    max-width: 380px;\n  }\n}\n@media screen and (min-width: 720px) {\n  .button-section__column:first-child {\n    margin-right: 4%;\n  }\n}\n.button-section__button {\n  margin-bottom: 1.3rem;\n}\n@media screen and (min-width: 720px) {\n  .button-section__button:nth-child(-n+3) {\n    margin-right: 8%;\n  }\n}\n.button-section__button_size_small {\n  margin-top: 0.769230769230769rem;\n}\n@media screen and (max-width: 689px) {\n  .button-section__button_size_small:nth-last-child(-n+3) {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1;\n  }\n}\n.arrow-button {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n  -webkit-tap-highlight-color: transparent;\n  user-select: none;\n  position: relative;\n  display: inline-block;\n  width: 3.626373626373626em;\n  height: 3.626373626373626em;\n  font-size: inherit;\n  background-color: #fff;\n  border: 0.21978021978022em #4eb7a8 solid;\n  border-radius: 50%;\n  cursor: pointer;\n  outline: none;\n}\n.arrow-button_disabled {\n  pointer-events: none;\n  background-color: #e5e5e5;\n  border-color: #e5e5e5;\n}\n.arrow-button_disabled .arrow-button__arrow {\n  background-color: #e5e5e5;\n  border-color: #fff;\n}\n@media (hover: hover) {\n  .arrow-button:hover {\n    background-color: #4eb7a8;\n  }\n  .arrow-button:hover .arrow-button__arrow {\n    background-color: #4eb7a8;\n    border-color: #fff;\n  }\n}\n@media (hover: none) {\n  .arrow-button:active {\n    background-color: #4eb7a8;\n  }\n  .arrow-button:active .arrow-button__arrow {\n    background-color: #4eb7a8;\n    border-color: #fff;\n  }\n}\n.arrow-button:focus,\n.arrow-button_active {\n  background-color: #4eb7a8;\n}\n.arrow-button:focus .arrow-button__arrow,\n.arrow-button_active .arrow-button__arrow {\n  background-color: #4eb7a8;\n  border-color: #fff;\n}\n.arrow-button_direction_right .arrow-button__arrow {\n  right: 50%;\n  -webkit-transform: translate(30%, -50%) rotate(-45deg);\n          transform: translate(30%, -50%) rotate(-45deg);\n}\n.arrow-button_direction_right:active,\n.arrow-button_direction_right.arrow-button_active {\n  -webkit-transform: translateX(1px);\n          transform: translateX(1px);\n}\n.arrow-button_direction_left .arrow-button__arrow {\n  left: 50%;\n  -webkit-transform: translate(-30%, -50%) rotate(135deg);\n          transform: translate(-30%, -50%) rotate(135deg);\n}\n.arrow-button_direction_left:active,\n.arrow-button_direction_left.arrow-button_active {\n  -webkit-transform: translateX(-1px);\n          transform: translateX(-1px);\n}\n.arrow-button__arrow {\n  position: absolute;\n  top: 50%;\n  width: 1.263736263736264em;\n  height: 1.263736263736264em;\n  border: solid #4eb7a8;\n  border-width: 0 0.274725274725275em 0.274725274725275em 0;\n}\n.arrow-section__title {\n  margin-bottom: 2.5rem;\n  letter-spacing: 0.06rem;\n  word-spacing: 0.3rem;\n  text-transform: uppercase;\n  font-size: 1.285714285714286rem;\n  font-weight: bold;\n  text-align: center;\n  color: inherit;\n  letter-spacing: 0.095rem;\n}\n.arrow-section__container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 0 auto;\n}\n.arrow-section__button {\n  margin-bottom: 1.3rem;\n  font-size: 1rem;\n}\n@media screen and (max-width: 689px) {\n  .arrow-section__button:nth-child(2n+2) {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n}\n.donut-chart {\n  position: relative;\n}\n.donut-chart circle {\n  stroke-width: 0.384615384615385rem;\n}\n.donut-chart_size_narrow circle {\n  stroke-width: 0.10989010989011rem;\n}\n.donut-chart__label {\n  display: block;\n  position: absolute;\n  top: 46%;\n  left: 50%;\n  font-size: 2.857142857142857rem;\n  font-weight: lighter;\n  color: #686868;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n@media screen and (min-width: 1100px) {\n  .donut-chart__label {\n    font-size: 4rem;\n  }\n}\n.chart-section__title {\n  margin-bottom: 1.7rem;\n  letter-spacing: 0.06rem;\n  text-transform: uppercase;\n  font-size: 1.285714285714286rem;\n  font-weight: bold;\n  text-align: center;\n  color: inherit;\n  letter-spacing: 0.095rem;\n}\n.chart-section__container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n@media screen and (max-width: 915px) {\n  .chart-section__container {\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n}\n.chart-section__chart {\n  -webkit-box-flex: 125px;\n      -ms-flex: 125px 0 0px;\n          flex: 125px 0 0;\n  max-width: 300px;\n  margin: 0 1rem 1.5rem;\n  font-size: 1rem;\n}\n@media screen and (min-width: 915px) {\n  .chart-section__chart {\n    margin-left: 0;\n  }\n}\n@media screen and (min-width: 1000px) {\n  .chart-section__chart {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n  }\n}\n@media screen and (min-width: 915px) {\n  .chart-section__chart:nth-child(1) {\n    margin-right: 2.278481012658228%;\n  }\n}\n@media screen and (min-width: 915px) {\n  .chart-section__chart:nth-child(2) {\n    margin-right: 6.20253164556962%;\n  }\n}\n@media screen and (min-width: 915px) {\n  .chart-section__chart:nth-child(3) {\n    margin-right: 5.569620253164556%;\n  }\n}\n@media screen and (min-width: 915px) {\n  .chart-section__chart:nth-child(4) {\n    margin-right: 5%;\n  }\n}\n@media screen and (min-width: 915px) {\n  .chart-section__chart:nth-child(5) {\n    margin-right: 2%;\n  }\n}\n.slider {\n  width: 98%;\n  margin-left: 0.10989010989011rem;\n}\n.slider_type_scale .asRange-pointer {\n  background-color: #4eb7a8;\n}\n.slider__scale {\n  padding: 0;\n  margin: 0.7rem 0 0 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.slider__scale-item {\n  display: inline-block;\n  color: #cfcfcf;\n  font-size: 0.785714285714286rem;\n  font-weight: bold;\n}\n.slider-section__title {\n  margin-bottom: 3.3rem;\n  text-transform: uppercase;\n  font-size: 1.285714285714286rem;\n  font-weight: bold;\n  text-align: center;\n  color: inherit;\n  letter-spacing: 0.095rem;\n}\n.slider-section__container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.slider-section__slider {\n  -webkit-box-flex: 225px;\n      -ms-flex: 225px 1 1;\n          flex: 225px 1 1;\n  margin-bottom: 2.5rem;\n  max-width: 700px;\n  min-width: 225px;\n}\n.slider-section__slider:first-child {\n  margin-right: 10%;\n}\n@media screen and (max-width: 607px) {\n  .slider-section__slider:first-child {\n    margin-right: 5%;\n  }\n}\n@media screen and (max-width: 607px) {\n  .slider-section__slider {\n    margin-right: 5%;\n    margin-left: 5%;\n  }\n}\n.stages-section__title {\n  margin-bottom: 1.9rem;\n  text-transform: uppercase;\n  font-size: 1.285714285714286rem;\n  font-weight: bold;\n  text-align: center;\n  color: inherit;\n  letter-spacing: 0.095rem;\n}\n.stages-section__bread-crumbs {\n  width: 100%;\n}\n.bread-crumbs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  width: 100%;\n  padding: 0;\n}\n.bread-crumbs__item {\n  -webkit-box-flex: 179px;\n      -ms-flex: 179px 1 1;\n          flex: 179px 1 1;\n  position: relative;\n  z-index: 0;\n  font-size: 1rem;\n  list-style-type: none;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n@media screen and (max-width: 550px) {\n  .bread-crumbs__item {\n    font-size: 0.85rem;\n  }\n}\n.bread-crumbs__item:nth-child(1) {\n  -ms-flex-preferred-size: 170px;\n      flex-basis: 170px;\n}\n.bread-crumbs__item:nth-child(2) {\n  -ms-flex-preferred-size: 185px;\n      flex-basis: 185px;\n}\n.bread-crumbs__item:last-child {\n  -webkit-box-flex: 1;\n      -ms-flex: auto 0 0px;\n          flex: auto 0 0;\n}\n.bread-crumbs__item:last-child::after {\n  display: none;\n}\n.bread-crumbs__item::after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 50%;\n  z-index: -1;\n  width: 100%;\n  height: 0.32967032967033em;\n  font-size: inherit;\n  background: #e75735;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n.bread-crumbs__item_active::after,\n.bread-crumbs__item_active ~ .bread-crumbs__item .bread-crumbs__circle,\n.bread-crumbs__item_active ~ .bread-crumbs__item::after {\n  background-color: #e5e5e5;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n.bread-crumbs__circle {\n  width: 2.032967032967033em;\n  height: 2.032967032967033em;\n  padding-top: 0.32967032967033em;\n  font-size: inherit;\n  font-weight: bold;\n  font-weight: bold;\n  text-align: center;\n  color: #fff;\n  border-radius: 50%;\n  background: #e75735;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n.form-section__title {\n  text-transform: uppercase;\n  font-size: 1.285714285714286rem;\n  font-weight: bold;\n  text-align: center;\n  color: inherit;\n  letter-spacing: 0.095rem;\n  margin-bottom: 3.8rem;\n  line-height: 1rem;\n  letter-spacing: 0.08rem;\n}\n.form-section__container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n@media screen and (max-width: 700px) {\n  .form-section__container {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n}\n.form-section__form {\n  min-width: 350px;\n  -webkit-box-flex: 372px;\n      -ms-flex: 372px 2 1;\n          flex: 372px 2 1;\n  margin: 0 1.8rem 2.5rem 0;\n}\n@media screen and (max-width: 700px) {\n  .form-section__form {\n    margin-right: 0;\n  }\n}\n@media screen and (max-width: 420px) {\n  .form-section__form {\n    min-width: unset;\n  }\n}\n.form-section__checkboxes {\n  -webkit-box-flex: 365px;\n      -ms-flex: 365px 1 2;\n          flex: 365px 1 2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n}\n.form-section__toggles {\n  -webkit-box-flex: 100%;\n      -ms-flex: 100% 0 0px;\n          flex: 100% 0 0;\n  margin-bottom: 2.9rem;\n  text-align: center;\n}\n.form-section__toggles .form-section__title {\n  margin-bottom: 2.5rem;\n}\n@media screen and (max-width: 700px) {\n  .form-section__toggles {\n    -webkit-box-flex: 200px;\n        -ms-flex: 200px 1 1;\n            flex: 200px 1 1;\n  }\n}\n.form-section__toggle {\n  display: inline-block;\n}\n.form-section__toggle:first-of-type {\n  margin-right: 0.7rem;\n}\n.form-section__tickboxes {\n  -webkit-box-flex: 100%;\n      -ms-flex: 100% 0 0px;\n          flex: 100% 0 0;\n  text-align: center;\n}\n.form-section__tickboxes .form-section__title {\n  margin-bottom: 2.5rem;\n  word-spacing: 0.2rem;\n}\n@media screen and (max-width: 700px) {\n  .form-section__tickboxes {\n    -webkit-box-flex: 200px;\n        -ms-flex: 200px 1 1;\n            flex: 200px 1 1;\n  }\n}\n.form-section__tickbox {\n  display: inline-block;\n}\n.form-section__tickbox:first-of-type {\n  margin: 0 0.9rem 0 -0.9rem;\n}\n.toggle-switch {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  width: 77px;\n  height: 31px;\n  cursor: pointer;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n  -webkit-tap-highlight-color: transparent;\n  user-select: none;\n}\n.toggle-switch__checkbox {\n  display: none;\n}\n.toggle-switch__checkbox:checked + .toggle-switch__slider {\n  background-color: #4eb7a8;\n}\n.toggle-switch__checkbox:checked + .toggle-switch__slider::before {\n  -webkit-transform: translateX(45px);\n          transform: translateX(45px);\n}\n.toggle-switch__checkbox:checked ~ .toggle-switch__slider::after {\n  content: 'ON';\n  -webkit-transform: translateX(-27px);\n          transform: translateX(-27px);\n}\n.toggle-switch__slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  border-radius: 50px;\n  outline: none;\n}\n.toggle-switch__slider::before {\n  position: absolute;\n  content: '';\n  height: 25px;\n  width: 25px;\n  left: 4px;\n  top: 3px;\n  background-color: #fff;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n.toggle-switch__slider::after {\n  content: 'OFF';\n  position: absolute;\n  top: 6px;\n  right: 12px;\n  color: #fff;\n  font-weight: bold;\n  font-size: 0.85rem;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.toggle-switch__slider:focus {\n  -webkit-box-shadow: 0 0 7px #4d90fe;\n          box-shadow: 0 0 7px #4d90fe;\n}\n.tick-box {\n  position: relative;\n  display: inline-block;\n  width: 31px;\n  height: 31px;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n  -webkit-tap-highlight-color: transparent;\n  user-select: none;\n}\n.tick-box input[type='checkbox'] {\n  display: none;\n}\n.tick-box input[type='checkbox']:checked + .tick-box__checkmark {\n  background-color: #4eb7a8;\n  border-color: #4eb7a8;\n}\n.tick-box input[type='checkbox']:checked + .tick-box__checkmark::after {\n  border-color: #fff;\n}\n.tick-box__checkmark {\n  width: 31px;\n  height: 31px;\n  background-color: #e5e5e5;\n  border: 1px solid #e5e5e5;\n  border-radius: 50%;\n  cursor: pointer;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  outline: none;\n}\n.tick-box__checkmark::after {\n  content: '';\n  position: absolute;\n  left: 8px;\n  top: 9px;\n  width: 14px;\n  height: 8px;\n  border: 2px solid #c0c0c0;\n  border-top: none;\n  border-right: none;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.tick-box__checkmark:focus {\n  -webkit-box-shadow: 0 0 7px #4d90fe;\n          box-shadow: 0 0 7px #4d90fe;\n}\n.tick-box_color_warm input[type='checkbox']:checked + .tick-box__checkmark {\n  background-color: #e75735;\n  border-color: #e75735;\n}\n.email-form {\n  zoom: 1;\n}\n.email-form:before,\n.email-form:after {\n  content: \"\";\n  display: table;\n}\n.email-form:after {\n  clear: both;\n}\n.email-form__name {\n  margin-bottom: 0.72rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.email-form__input {\n  width: 100%;\n  padding: 0.384615384615385rem 0.989010989010989rem;\n  font-family: 'SourceSansPro', Arial, sans-serif;\n  font-size: 1rem;\n  color: #7e7e7e;\n  background: #e5e5e5;\n  border: none;\n  border-radius: 3px;\n}\n.email-form__email {\n  margin-bottom: 0.8rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.email-form__message {\n  margin-bottom: 0.5rem;\n  padding: 0.7rem 1rem;\n  width: 100%;\n  resize: none;\n  height: 12.6vw;\n  min-height: 6.318681318681319rem;\n  padding: 0.384615384615385rem 0.989010989010989rem;\n  font-family: 'SourceSansPro', Arial, sans-serif;\n  font-size: 1rem;\n  color: #7e7e7e;\n  background: #e5e5e5;\n  border: none;\n  border-radius: 3px;\n}\n.email-form__button {\n  float: right;\n}\n.email-form__bubble {\n  position: relative;\n  visibility: hidden;\n  width: 5.21978021978022rem;\n  min-width: 4.5rem;\n  margin-left: 0.659340659340659rem;\n  padding: 0.55rem;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: bold;\n  color: #fff;\n  letter-spacing: 0.06rem;\n  border-radius: 5px;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  -webkit-transform: translateX(-50px);\n          transform: translateX(-50px);\n}\n.email-form__bubble::before {\n  visibility: hidden;\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 0.32967032967033rem;\n  height: 0.32967032967033rem;\n  border-radius: 1px;\n  -webkit-transform: translate(-50%, -50%) rotate(45deg);\n          transform: translate(-50%, -50%) rotate(45deg);\n}\n.email-form__bubble_type_error {\n  background-color: #e75735;\n  visibility: visible;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.email-form__bubble_type_error::before {\n  background-color: #e75735;\n  visibility: visible;\n}\n.email-form__bubble_type_good {\n  background-color: #4eb7a8;\n  visibility: visible;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.email-form__bubble_type_good::before {\n  background-color: #4eb7a8;\n  visibility: visible;\n}\n.search-box {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  background-color: #e5e5e5;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.search-box_filled {\n  background-color: #e75735;\n}\n.search-box_filled .search-box__input {\n  color: #fff;\n}\n.search-box__label {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.search-box__input {\n  width: 100%;\n  padding: 0.32967032967033rem 0.934065934065934rem 0.384615384615385rem;\n  font-size: 1rem;\n  font-family: 'SourceSansPro', Arial, sans-serif;\n  letter-spacing: 0.010989010989011rem;\n  color: #7e7e7e;\n  background: inherit;\n  border: none;\n  -webkit-appearance: none;\n}\n.search-box__button {\n  -webkit-box-flex: 43px;\n      -ms-flex: 43px 0 0px;\n          flex: 43px 0 0;\n  position: relative;\n  border: none;\n  background-color: #e75735;\n  cursor: pointer;\n  -webkit-appearance: none;\n  outline: none;\n}\n.search-box__button:focus {\n  background-color: #d03c19;\n}\n.search-box__button::before {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0.75rem;\n  height: 0.75rem;\n  border: 0.10989010989011rem #fff solid;\n  border-radius: 50%;\n  -webkit-transform: translate(-65%, -60%);\n          transform: translate(-65%, -60%);\n}\n.search-box__button::after {\n  content: '';\n  position: absolute;\n  top: 62%;\n  left: 50%;\n  display: block;\n  height: 0.164835164835165rem;\n  width: 0.55rem;\n  background-color: #fff;\n  border-radius: 2px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n@media (hover: hover) {\n  .search-box__button:hover {\n    background-color: #d03c19;\n  }\n}\n@media (hover: none) {\n  .search-box__button:active {\n    background-color: #d03c19;\n  }\n}\n@media (hover: hover) {\n  .search-box__button:active::before {\n    -webkit-transform: translate(-65%, -60%) rotate(45deg) scale(0.9);\n            transform: translate(-65%, -60%) rotate(45deg) scale(0.9);\n  }\n}\n@media (hover: hover) {\n  .search-box__button:active::after {\n    -webkit-transform: rotate(45deg) scale(0.9);\n            transform: rotate(45deg) scale(0.9);\n  }\n}\n.search-section__title {\n  margin-bottom: 1.46rem;\n  letter-spacing: 0.05rem;\n  text-transform: uppercase;\n  font-size: 1.285714285714286rem;\n  font-weight: bold;\n  text-align: center;\n  color: inherit;\n  letter-spacing: 0.095rem;\n}\n.search-section__search-box {\n  margin-bottom: 1.19rem;\n}\n.search-section__search-box:nth-child(2) {\n  margin-bottom: 1.25rem;\n}\n.search-section__form {\n  width: 100%;\n  margin: 0 auto;\n}\n.drop-down {\n  text-align: left;\n}\n.drop-down__textarea {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  background-color: #e5e5e5;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.drop-down__label {\n  width: 100%;\n  padding: 0.32967032967033rem 0.934065934065934rem 0.384615384615385rem;\n  font-size: 1rem;\n  font-family: 'SourceSansPro', Arial, sans-serif;\n  letter-spacing: 0.010989010989011rem;\n  color: #7e7e7e;\n  background: inherit;\n  border: none;\n  -webkit-appearance: none;\n  cursor: pointer;\n}\n.drop-down__button {\n  position: relative;\n  -webkit-box-flex: 43px;\n      -ms-flex: 43px 0 0px;\n          flex: 43px 0 0;\n  border: none;\n  background-color: #4eb7a8;\n  cursor: pointer;\n  -webkit-appearance: none;\n  outline: none;\n}\n.drop-down__button::before {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  height: 0.714285714285714rem;\n  width: 0.714285714285714rem;\n  border: 3px solid #fff;\n  border-top: none;\n  border-right: none;\n  -webkit-transform: translate(-55%, -55%) rotate(-45deg);\n          transform: translate(-55%, -55%) rotate(-45deg);\n}\n@media (hover: hover) {\n  .drop-down__button:hover,\n  .drop-down__button:focus {\n    background-color: #44a799;\n  }\n}\n@media (hover: none) {\n  .drop-down__button:active {\n    background-color: #44a799;\n  }\n}\n@media (hover: hover) {\n  .drop-down__button:active::before {\n    -webkit-transform: translate(-55%, -55%) rotate(-45deg) scale(0.9);\n            transform: translate(-55%, -55%) rotate(-45deg) scale(0.9);\n  }\n}\n.drop-down__list {\n  display: none;\n  margin: 0;\n  padding: 0.3rem 0;\n  background-color: #4eb7a8;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.drop-down_active .drop-down__list {\n  display: block;\n}\n.drop-down__item {\n  padding: 0.32967032967033rem 0.989010989010989rem;\n  margin-bottom: 0.21978021978022rem;\n  font-size: 1rem;\n  font-family: 'SourceSansPro', Arial, sans-serif;\n  letter-spacing: 0.010989010989011rem;\n  color: #fff;\n  background-color: inherit;\n  list-style: none;\n  cursor: pointer;\n}\n@media (hover: hover) {\n  .drop-down__item:hover {\n    background-color: #28a290;\n  }\n}\n.drop-down__item:active {\n  background-color: #28a290;\n}\n.social-icon {\n  cursor: pointer;\n  outline: none;\n}\n@media (hover: hover) {\n  .social-icon:hover path {\n    fill: #e75735;\n  }\n}\n.social-icon path {\n  fill: #757575;\n}\n.social-icon:focus path {\n  fill: #e75735;\n}\n@media (hover: hover) {\n  .social-icon:active {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n  }\n}\n@media (hover: none) {\n  .social-icon:active path {\n    fill: #e75735;\n  }\n}\n.social-icon_color_white path {\n  fill: #fff;\n}\n@media (hover: hover) {\n  .social-icon_color_white:hover path {\n    fill: #fff;\n    opacity: 0.5;\n  }\n}\n.social-icon_color_white:focus path {\n  fill: #fff;\n  opacity: 0.5;\n}\n@media (hover: none) {\n  .social-icon_color_white:active path {\n    fill: #fff;\n    opacity: 0.5;\n  }\n}\n.profile-section__title {\n  margin-bottom: 2.032967032967033rem;\n  letter-spacing: 0.05rem;\n  word-spacing: 0.3rem;\n  text-transform: uppercase;\n  font-size: 1.285714285714286rem;\n  font-weight: bold;\n  text-align: center;\n  color: inherit;\n  letter-spacing: 0.095rem;\n}\n.profile-section__container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.profile-section__card {\n  margin-bottom: 2rem;\n  width: 100%;\n  max-width: 370px;\n  min-width: 260px;\n}\n@media screen and (max-width: 900px) {\n  .profile-section__card {\n    margin-right: 0.5rem;\n    margin-left: 0.5rem;\n  }\n}\n.user-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.user-card__photo {\n  display: inline-block;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 6.648351648351648rem;\n          flex: 0 0 6.648351648351648rem;\n  height: 6.648351648351648rem;\n  margin-right: 0.934065934065934rem;\n  border-radius: 50%;\n  border: 0.384615384615385rem solid #e5e5e5;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-color: #e5e5e5;\n}\n@media screen and (max-width: 425px) {\n  .user-card__photo {\n    -ms-flex-preferred-size: 5.5rem;\n        flex-basis: 5.5rem;\n    height: 5.5rem;\n    border: 0.2rem solid #e5e5e5;\n  }\n}\n.user-card__box {\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 11.64835164835165rem;\n          flex: 1 1 11.64835164835165rem;\n  padding: 0.714285714285714rem;\n  border-radius: 0.549450549450549rem;\n  text-align: center;\n  background-color: #e5e5e5;\n  z-index: 1;\n}\n@media screen and (max-width: 425px) {\n  .user-card__box {\n    -ms-flex-preferred-size: 9rem;\n        flex-basis: 9rem;\n    padding: 0.5rem;\n  }\n}\n.user-card__box::before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 1.098901098901099rem;\n  height: 1.098901098901099rem;\n  background-color: inherit;\n  border-radius: 0.274725274725275rem;\n  -webkit-transform: scaleY(0.8) translate(-30%, -50%) rotate(45deg);\n          transform: scaleY(0.8) translate(-30%, -50%) rotate(45deg);\n  z-index: -1;\n}\n.user-card__name {\n  margin-bottom: 0.10989010989011rem;\n  font-size: 1.285714285714286rem;\n  font-weight: normal;\n  color: #e75735;\n  text-transform: capitalize;\n}\n.user-card__position {\n  margin: 0 0 0.714285714285714rem 0;\n  font-size: 0.785714285714286rem;\n  color: #4f4f4f;\n  font-weight: bold;\n  letter-spacing: 0.049450549450549rem;\n  text-transform: uppercase;\n}\n.user-card__icon {\n  display: inline-block;\n  width: 2.362637362637363em;\n  height: 1.648351648351648em;\n  margin-right: 0.549450549450549rem;\n  font-size: 1rem;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n  -webkit-tap-highlight-color: transparent;\n  user-select: none;\n}\n@media screen and (max-width: 425px) {\n  .user-card__icon {\n    font-size: 0.8rem;\n  }\n}\n@media screen and (max-width: 320px) {\n  .user-card__icon {\n    margin-right: 0;\n  }\n}\n.user-card__icon:last-child {\n  margin-right: 0;\n}\n.user-card_colored .user-card__box {\n  background-color: #4eb7a8;\n}\n.user-card_colored .user-card__box::before {\n  background-color: #4eb7a8;\n}\n.user-card_colored .user-card__box * {\n  color: #fff;\n}\n.news-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  width: 100%;\n  height: 100%;\n  text-align: left;\n  background-color: #e75735;\n  border-radius: 0.274725274725275rem;\n  overflow: hidden;\n}\n.news-card__image {\n  -webkit-box-flex: 123px;\n      -ms-flex: 123px 0 2;\n          flex: 123px 0 2;\n  background-repeat: no-repeat;\n  background-position: 0px 0px;\n  background-clip: border-box;\n  background-size: cover;\n  background-color: inherit;\n}\n.news-card__content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-flex: 250px;\n      -ms-flex: 250px 2 1;\n          flex: 250px 2 1;\n  padding: 1.4rem 1.3rem 1.8rem 1.6rem;\n  overflow: hidden;\n}\n@media screen and (max-width: 375px) {\n  .news-card__content {\n    padding: 1.2rem 1rem 1.2rem 1.5rem;\n  }\n}\n.news-card__title {\n  -webkit-box-flex: 1;\n      -ms-flex: auto 0 0px;\n          flex: auto 0 0;\n  margin-bottom: 0.35rem;\n  font-size: 2rem;\n  line-height: 1em;\n  color: #fff;\n  font-weight: lighter;\n}\n@media screen and (max-width: 920px) {\n  .news-card__title {\n    font-size: 1.7rem;\n  }\n}\n.news-card__date {\n  -webkit-box-flex: 1;\n      -ms-flex: auto 0 0px;\n          flex: auto 0 0;\n  margin-bottom: 1rem;\n  color: #fff;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n.news-card__text {\n  -webkit-box-flex: 1;\n      -ms-flex: auto 1 0px;\n          flex: auto 1 0;\n  font-size: 0.8rem;\n  color: #fff;\n  font-weight: normal;\n  letter-spacing: 0.036rem;\n}\n.news-card_type_event {\n  background-color: #4eb7a8;\n}\n.news-card_type_event .news-card__content {\n  position: relative;\n  padding: 1.4rem 1.5rem 1.8rem;\n}\n@media screen and (max-width: 375px) {\n  .news-card_type_event .news-card__content {\n    padding: 1rem 1rem 1rem 1.4rem;\n  }\n}\n.news-card_type_event .news-card__date {\n  margin-bottom: 1.4rem;\n}\n.news-card_type_event .news-card__day {\n  font-size: 5.1rem;\n  letter-spacing: -0.2rem;\n  line-height: 4.1rem;\n  color: #fff;\n  font-weight: lighter;\n}\n@media screen and (max-width: 920px) {\n  .news-card_type_event .news-card__day {\n    font-size: 3.2rem;\n    line-height: 1em;\n  }\n}\n.news-card_type_event .news-card__month {\n  font-size: 2.1rem;\n  color: #fff;\n  text-transform: capitalize;\n  font-weight: lighter;\n  margin-left: 0.95rem;\n}\n.news-card_type_event .news-card__title {\n  font-size: 0.9rem;\n  color: #fff;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 0.03rem;\n}\n.news-card_type_event .news-card__text {\n  min-height: 2.48rem;\n  margin-bottom: 0.8rem;\n  color: #fff;\n  font-weight: normal;\n}\n.news-card_type_event .news-card__button {\n  width: 87%;\n  font-size: 0.714285714285714rem;\n  -webkit-box-flex: 1;\n      -ms-flex: auto 0 0px;\n          flex: auto 0 0;\n  margin: 0 auto;\n}\n.news-card_size_compact .news-card__content {\n  padding: 1.3rem 1.3rem;\n}\n.news-card_size_compact .news-card__title {\n  font-size: 1.2rem;\n}\n.news-card_size_compact.news-card_type_event .news-card__content {\n  padding: 1.1rem 1.2rem 0.6rem;\n}\n.news-card_size_compact.news-card_type_event .news-card__date {\n  margin-bottom: 1rem;\n}\n.news-card_size_compact.news-card_type_event .news-card__title {\n  font-size: 0.8rem;\n  line-height: 0.96rem;\n}\n.news-card_size_compact.news-card_type_event .news-card__text {\n  margin-bottom: 0.7rem;\n}\n.news-card_color_reverted {\n  background-color: #4eb7a8;\n}\n.news-card_color_reverted.news-card_type_event {\n  background-color: #e75735;\n}\n.news-card_with_scrollbar .news-card__text {\n  max-height: 6em;\n}\n.news-section__title {\n  margin-bottom: 2.4rem;\n  text-transform: uppercase;\n  font-size: 1.285714285714286rem;\n  font-weight: bold;\n  text-align: center;\n  color: inherit;\n  letter-spacing: 0.095rem;\n}\n.news-section__container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  width: 100%;\n}\n@media screen and (max-width: 760px) {\n  .news-section__container {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n}\n.news-section__news-card {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 371.484px;\n          flex: 0 1 371.484px;\n}\n.news-section__news-card:first-child {\n  margin-right: 3%;\n}\n@media screen and (max-width: 760px) {\n  .news-section__news-card:first-child {\n    margin: 0 0 1rem 0;\n  }\n}\n.map-section__title {\n  margin-bottom: 2.2rem;\n  text-transform: uppercase;\n  font-size: 1.285714285714286rem;\n  font-weight: bold;\n  text-align: center;\n  color: inherit;\n  letter-spacing: 0.095rem;\n}\n.map-section__container {\n  width: 100%;\n}\n.pin {\n  width: 100%;\n}\n.calendar {\n  overflow: hidden;\n  margin: 0 auto;\n  border-radius: 0.3rem;\n  font-size: inherit;\n}\n.calendar-section__title {\n  margin-bottom: 1.8rem;\n  text-transform: uppercase;\n  font-size: 1.285714285714286rem;\n  font-weight: bold;\n  text-align: center;\n  color: inherit;\n  letter-spacing: 0.095rem;\n}\n.calendar-section__container {\n  max-width: 370px;\n  margin: 0 auto;\n  font-size: 0.991846153846154rem;\n}\n@media screen and (max-width: 425px) {\n  .calendar-section__container {\n    max-width: 290px;\n    font-size: 0.7rem;\n  }\n}\n.messenger {\n  margin: 0 auto;\n  border-radius: 0.3rem;\n  overflow: hidden;\n  font-size: 1rem;\n}\n@media screen and (max-width: 425px) {\n  .messenger {\n    font-size: 0.8rem;\n  }\n}\n.messenger__header {\n  position: relative;\n  width: 100%;\n  padding: 1.2em 1.1em 2.2em;\n  text-align: center;\n  background-color: #4eb7a8;\n  -webkit-box-shadow: inset 0 -2.5em 0 #46ab9d;\n          box-shadow: inset 0 -2.5em 0 #46ab9d;\n}\n.messenger__name {\n  padding-bottom: 0.823529412em;\n  color: #fff;\n  font-size: 2.428571428571429rem;\n  font-weight: lighter;\n  text-transform: capitalize;\n  word-spacing: -0.01em;\n  letter-spacing: -0.045em;\n  word-break: break-word;\n}\n@media screen and (max-width: 425px) {\n  .messenger__name {\n    font-size: 2rem;\n  }\n}\n.messenger__photo {\n  position: absolute;\n  left: 50%;\n  top: 100%;\n  width: 6.5rem;\n  height: 6.5rem;\n  border: 5px solid #e5e5e5;\n  border-radius: 50%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  -webkit-transform: translateX(-54%) translateY(-50%);\n          transform: translateX(-54%) translateY(-50%);\n  z-index: 2;\n}\n@media screen and (max-width: 425px) {\n  .messenger__photo {\n    width: 5.5rem;\n    height: 5.5rem;\n  }\n}\n.messenger__container {\n  padding: 1.5em 1.6em 1.9em;\n  background-color: #f2f2f2;\n  overflow-y: hidden;\n}\n.messenger__icons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0 0.2em 0 0.4em;\n}\n.messenger__bubble-icon {\n  width: 1.55em;\n  height: 1.55em;\n  background-image: url(" + escape(__webpack_require__(29)) + ");\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n@media (hover: hover) {\n  .messenger__bubble-icon:hover {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n  }\n}\n@media (hover: hover) {\n  .messenger__bubble-icon:active {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n  }\n}\n@media (hover: none) {\n  .messenger__bubble-icon:active {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n  }\n}\n.messenger__camera-icon {\n  width: 1.8em;\n  height: 1.41em;\n  background-image: url(" + escape(__webpack_require__(28)) + ");\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n@media (hover: hover) {\n  .messenger__camera-icon:hover {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n  }\n}\n@media (hover: hover) {\n  .messenger__camera-icon:active {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n  }\n}\n@media (hover: none) {\n  .messenger__camera-icon:active {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n  }\n}\n.messenger__message {\n  font-size: 0.892857142857143rem;\n  font-weight: bold;\n  text-align: left;\n  letter-spacing: 0.04em;\n  color: #8e8d8d;\n}\n@media screen and (max-width: 425px) {\n  .messenger__message {\n    font-size: 0.8rem;\n  }\n}\n.messenger__message_type_inbox {\n  position: relative;\n  margin: 1.4rem auto 0;\n  padding: 1.344em 1.5em 1.792em;\n  width: 100%;\n  background-color: #fff;\n  border-radius: 10px;\n  overflow-wrap: break-word;\n}\n@media screen and (max-width: 425px) {\n  .messenger__message_type_inbox {\n    margin-top: 1.1rem;\n  }\n}\n.messenger__message_type_inbox::before {\n  content: '';\n  width: 0.72rem;\n  height: 0.72rem;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  background-color: #fff;\n  border-radius: 4px;\n  -webkit-transform: translate(-90%, -40%) rotate(45deg);\n          transform: translate(-90%, -40%) rotate(45deg);\n}\n.messenger__message_type_outbox {\n  width: 98%;\n  padding: 1.12em 1.3em 1.68em;\n  margin: 1.5rem auto 1.2rem;\n  background-color: #e5e5e5;\n  border: none;\n  border-radius: 5px;\n  -webkit-box-shadow: 0 0 0 4px #fff;\n          box-shadow: 0 0 0 4px #fff;\n  resize: none;\n  outline: none;\n}\n@media screen and (max-width: 425px) {\n  .messenger__message_type_outbox {\n    margin: 1.3rem auto 1rem;\n  }\n}\n.messenger__text {\n  overflow-y: auto;\n}\n.messenger__button {\n  width: 100%;\n  font-size: 0.85rem;\n}\n.message-section__title {\n  margin-bottom: 1.8rem;\n  text-transform: uppercase;\n  font-size: 1.285714285714286rem;\n  font-weight: bold;\n  text-align: center;\n  color: inherit;\n  letter-spacing: 0.095rem;\n}\n.message-section__container {\n  max-width: 370px;\n  margin: 0 auto;\n}\n@media screen and (max-width: 425px) {\n  .message-section__container {\n    max-width: 320px;\n  }\n}\n.video-section__title {\n  margin-bottom: 1.7rem;\n  text-transform: uppercase;\n  font-size: 1.285714285714286rem;\n  font-weight: bold;\n  text-align: center;\n  color: inherit;\n  letter-spacing: 0.095rem;\n}\n.video {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.video__frame {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.banner-section {\n  width: 100%;\n  padding: 7rem 2rem 4rem;\n  text-align: center;\n  color: #fff;\n  background-color: #4eb7a8;\n  background-image: url(" + escape(__webpack_require__(27)) + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n@media screen and (max-width: 425px) {\n  .banner-section {\n    padding-top: 4rem;\n  }\n}\n.banner-section__location {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin: 0 auto;\n  padding: 0.3rem 0.8rem;\n  font-size: 1.6rem;\n  font-weight: lighter;\n  border: 2px solid #80d8cb;\n}\n@media screen and (max-width: 768px) {\n  .banner-section__location {\n    font-size: 1rem;\n    padding: 0.2rem 0.4rem;\n  }\n}\n.banner-section__title {\n  margin: 3rem auto 0;\n  font-size: 6rem;\n  font-weight: 900;\n  letter-spacing: 0.15rem;\n}\n@media screen and (max-width: 768px) {\n  .banner-section__title {\n    font-size: 3rem;\n    padding: 0.2rem 0.4rem;\n  }\n}\n.banner-section__tagline {\n  max-width: 950px;\n  margin: 0.8rem auto 2.5rem;\n  font-size: 1rem;\n  font-weight: lighter;\n}\n.banner-section__register-button {\n  width: 300px;\n  margin: 0 auto;\n  font-size: 1rem;\n}\n@media screen and (max-width: 425px) {\n  .banner-section__register-button {\n    width: 220px;\n    font-size: 0.8rem;\n  }\n}\n.about-section {\n  width: 100%;\n  background-color: #e5e5e5;\n}\n.about-section__block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n@media screen and (max-width: 992px) {\n  .about-section__block:first-child {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n}\n@media screen and (max-width: 768px) {\n  .about-section__block {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n}\n.about-section__title {\n  margin: 2rem 0 1rem;\n  text-transform: uppercase;\n  font-size: 1.285714285714286rem;\n  font-weight: bold;\n  text-align: center;\n  color: inherit;\n  letter-spacing: 0.095rem;\n}\n.about-section__title:first-of-type {\n  margin-top: 0;\n}\n.about-section__subtitle {\n  margin: 1rem 0 0.5rem;\n  font-weight: bold;\n  font-size: 1rem;\n  color: #4eb7a8;\n}\n.about-section__text {\n  -webkit-box-flex: 600px;\n      -ms-flex: 600px 2 2;\n          flex: 600px 2 2;\n  padding: 2rem;\n}\n.about-section__intro {\n  font-size: 1rem;\n  text-align: justify;\n  color: #4f4f4f;\n}\n.about-section__intro:first-of-type {\n  zoom: 1;\n}\n.about-section__intro:first-of-type:before,\n.about-section__intro:first-of-type:after {\n  content: \"\";\n  display: table;\n}\n.about-section__intro:first-of-type:after {\n  clear: both;\n}\n.about-section__intro span {\n  display: block;\n  padding-top: 0.9rem;\n}\n.about-section__intro a {\n  float: right;\n  margin-top: 0.9rem;\n  color: #e75735;\n  text-decoration: underline;\n}\n@media (hover: hover) {\n  .about-section__intro a:hover {\n    text-decoration: none;\n  }\n}\n@media (hover: hover) {\n  .about-section__intro a:active {\n    text-decoration: underline;\n    color: #4f4f4f;\n  }\n}\n@media (hover: none) {\n  .about-section__intro a:active {\n    text-decoration: none;\n  }\n}\n.about-section__right-col {\n  -webkit-box-flex: 400px;\n      -ms-flex: 400px 1 1;\n          flex: 400px 1 1;\n  padding: 1rem;\n  text-align: center;\n  background-color: #fff;\n}\n.about-section__video {\n  position: relative;\n  top: 50%;\n  width: 100%;\n  max-width: 600px;\n  margin: 0 auto;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.about-section__stats {\n  display: table;\n  width: 100%;\n  padding: 0;\n}\n.about-section__stat-item {\n  display: table-row;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.about-section__comment {\n  display: table-cell;\n  vertical-align: middle;\n  font-size: 1rem;\n  font-weight: lighter;\n  color: #4f4f4f;\n  border-left: 1.3rem solid transparent;\n}\n.about-section__comment:first-child {\n  border-left: none;\n  border-right: 0.8rem solid transparent;\n}\n.about-section__topic {\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n.about-section__topic_color_blue {\n  color: #4eb7a8;\n}\n.about-section__topic_color_red {\n  color: #e75735;\n}\n.about-section__topic_color_gray {\n  color: #747474;\n}\n.about-section__chart {\n  display: table-cell;\n  width: 120px;\n  vertical-align: middle;\n  font-size: 0.8rem;\n}\n.about-section__number {\n  display: table-cell;\n  vertical-align: middle;\n  font-weight: bold;\n  font-size: 3rem;\n  text-align: right;\n  color: #28a290;\n}\n.footer-section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  padding: 2rem 3rem;\n  color: #fff;\n  font-size: 0.8rem;\n  background-color: #4f4f4f;\n}\n@media screen and (max-width: 425px) {\n  .footer-section {\n    padding: 2rem 1.5rem;\n    font-size: 0.6rem;\n  }\n}\n.footer-section__header {\n  margin-bottom: 1rem;\n  color: #4eb7a8;\n  font-size: 1.2em;\n  font-weight: bold;\n}\n.footer-section__contacts {\n  width: 50%;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  text-align: left;\n}\n.footer-section__list {\n  margin: 0;\n  padding: 0;\n}\n.footer-section__list-item {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-size: 1em;\n  line-height: 1.5em;\n}\n.footer-section__link {\n  color: inherit;\n}\n@media (hover: hover) {\n  .footer-section__link:hover {\n    text-decoration: none;\n  }\n}\n@media (hover: hover) {\n  .footer-section__link:active {\n    text-decoration: underline;\n  }\n}\n@media (hover: none) {\n  .footer-section__link:active {\n    text-decoration: none;\n  }\n}\n.footer-section__docs {\n  width: 50%;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  text-align: right;\n}\n.footer-section__copyright {\n  width: 100%;\n  margin-top: 2rem;\n  text-align: center;\n  font-size: 1em;\n}\n.online-help {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  z-index: 5000;\n}\n.online-help__messenger {\n  visibility: hidden;\n  position: absolute;\n  bottom: 60px;\n  right: 0;\n  width: 320px;\n  font-size: 0.8rem;\n  border-radius: 8px;\n  -webkit-box-shadow: 0 0 20px 0 rgba(0,0,0,0.3);\n          box-shadow: 0 0 20px 0 rgba(0,0,0,0.3);\n}\n.online-help__messenger_visible {\n  visibility: visible;\n}\n@media screen and (max-width: 375px) {\n  .online-help__messenger {\n    width: 220px;\n    font-size: 0.6rem;\n  }\n}\n.online-help__button {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 50px;\n  height: 50px;\n  background: #e75735 url(" + escape(__webpack_require__(26)) + ") center no-repeat;\n  background-size: 25px;\n  border: none;\n  border-radius: 7px;\n  -webkit-box-shadow: 0 0 10px 0 rgba(0,0,0,0.4);\n          box-shadow: 0 0 10px 0 rgba(0,0,0,0.4);\n  z-index: 10;\n  outline: none;\n  cursor: pointer;\n}\n@media (hover: hover) {\n  .online-help__button:hover {\n    background-color: darker(#e5e5e5, 50%);\n  }\n}\n@media (hover: none) {\n  .online-help__button:active {\n    background-color: darker(#e5e5e5, 50%);\n  }\n}\n.speaker-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding: 1em;\n  background-color: #e75735;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.speaker-card__user-card {\n  width: 100%;\n  margin-bottom: 1rem;\n}\n.speaker-card__text {\n  font-size: 1em;\n  font-weight: lighter;\n  text-align: center;\n  max-height: 8.3em;\n  line-height: 1.2em;\n  color: #fff;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.talks-section {\n  text-align: center;\n}\n.talks-section__header {\n  color: #28a290;\n  margin: 1rem 0;\n}\n.talks-section__day {\n  font-size: 2rem;\n  font-weight: lighter;\n}\n@media screen and (max-width: 992px) {\n  .talks-section__day {\n    font-size: 1.5rem;\n  }\n}\n.talks-section__date {\n  font-size: 3rem;\n  font-weight: bold;\n}\n@media screen and (max-width: 992px) {\n  .talks-section__date {\n    font-size: 2rem;\n  }\n}\n.talks-section__card {\n  max-width: 445.61px;\n  min-width: 260.11px;\n  font-size: 1rem;\n  height: 100%;\n}\n.talks-section__events {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  background-color: #e5e5e5;\n  border-radius: 10px;\n  margin: 0 auto;\n}\n@media screen and (max-width: 992px) {\n  .talks-section__events {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    max-width: 600px;\n  }\n}\n.talks-section__event {\n  text-align: center;\n  margin: 1rem;\n  padding-top: 2rem;\n  position: relative;\n}\n@media screen and (max-width: 992px) {\n  .talks-section__event:last-child {\n    margin-bottom: 1rem;\n  }\n}\n@media screen and (max-width: 992px) {\n  .talks-section__event {\n    margin-bottom: 0;\n  }\n}\n.talks-section__time {\n  color: #4f4f4f;\n  font-size: 1.3rem;\n  font-weight: lighter;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  white-space: nowrap;\n}\n@media screen and (max-width: 992px) {\n  .talks-section__time {\n    font-size: 1.1rem;\n  }\n}\n.registration-form__stage_first {\n  width: 100%;\n  max-width: 800px;\n  padding: 2.5rem 1rem 1rem;\n  margin: 0 auto;\n  background-color: #bfcac8;\n  border-radius: 10px;\n}\n.registration-form__name {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 auto 1rem;\n}\n.registration-form__input {\n  -webkit-box-flex: 271px;\n      -ms-flex: 271px 1 1;\n          flex: 271px 1 1;\n  padding: 0.384615384615385rem 0.989010989010989rem;\n  font-family: 'SourceSansPro', Arial, sans-serif;\n  font-size: 1rem;\n  color: #7e7e7e;\n  background: #e5e5e5;\n  border: none;\n  border-radius: 3px;\n}\n.registration-form__email {\n  margin-bottom: 0.8rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 auto 2rem;\n}\n.registration-form__bubble {\n  position: relative;\n  width: 5.21978021978022rem;\n  min-width: 4.5rem;\n  padding: 0.55rem;\n  margin-left: 0.659340659340659rem;\n  visibility: hidden;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: bold;\n  color: #fff;\n  border-radius: 5px;\n  letter-spacing: 0.06rem;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  -webkit-transform: translateX(-50px);\n          transform: translateX(-50px);\n}\n.registration-form__bubble::before {\n  visibility: hidden;\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 0.32967032967033rem;\n  height: 0.32967032967033rem;\n  border-radius: 1px;\n  -webkit-transform: translate(-50%, -50%) rotate(45deg);\n          transform: translate(-50%, -50%) rotate(45deg);\n}\n.registration-form__bubble_type_error {\n  background-color: #e75735;\n  visibility: visible;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.registration-form__bubble_type_error::before {\n  background-color: #e75735;\n  visibility: visible;\n}\n.registration-form__bubble_type_good {\n  background-color: #4eb7a8;\n  visibility: visible;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.registration-form__bubble_type_good::before {\n  background-color: #4eb7a8;\n  visibility: visible;\n}\n.registration-form__subscribe {\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.registration-form__subscribe-text {\n  margin: 0 0.5rem;\n  text-align: center;\n}\n.registration-form__stage_second {\n  margin-top: 3rem;\n  overflow: hidden;\n}\n.registration-form__stage_third {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 0.5rem 1rem;\n  margin: 2rem auto;\n  width: 100%;\n  max-width: 800px;\n  font-size: 1rem;\n  background-color: #bfcac8;\n  border-radius: 10px;\n}\n@media screen and (max-width: 375px) {\n  .registration-form__stage_third {\n    font-size: 0.8rem;\n  }\n}\n.registration-form__policy-checkbox {\n  -webkit-box-flex: 1;\n      -ms-flex: auto 0 0px;\n          flex: auto 0 0;\n}\n.registration-form__policy-text {\n  -webkit-box-flex: 150px;\n      -ms-flex: 150px 1 1;\n          flex: 150px 1 1;\n  margin: 0.5rem 1rem;\n  font-size: inherit;\n}\n.registration-form__button {\n  -webkit-box-flex: 1;\n      -ms-flex: auto 0 2;\n          flex: auto 0 2;\n  text-align: right;\n  font-size: inherit;\n}\n.pass-selector__title {\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  font-size: 1.285714285714286rem;\n  font-weight: bold;\n  text-align: center;\n  color: inherit;\n  letter-spacing: 0.095rem;\n}\n.pass-selector__options {\n  display: table;\n  width: 100%;\n  text-align: center;\n  border-collapse: collapse;\n}\n.pass-selector__row {\n  display: table-row;\n}\n.pass-selector__column {\n  display: table-column;\n  width: 33.33333333333333%;\n  border-right: 20px solid #fff;\n}\n@media screen and (max-width: 375px) {\n  .pass-selector__column {\n    border-right: 10px solid #fff;\n  }\n}\n.pass-selector__column:nth-child(3) {\n  border-right: none;\n}\n@media (hover: hover) {\n  .pass-selector__column:hover {\n    background-color: #e5e5e5;\n  }\n}\n@media (hover: none) {\n  .pass-selector__column:active {\n    background-color: #e5e5e5;\n  }\n}\n.pass-selector__pass-name {\n  display: table-cell;\n  padding: 1rem 0;\n  text-transform: capitalize;\n  color: #e75735;\n  font-weight: bold;\n  font-size: 2.5rem;\n  border-bottom: 2px solid;\n}\n@media screen and (max-width: 768px) {\n  .pass-selector__pass-name {\n    font-size: 1.5rem;\n  }\n}\n@media screen and (max-width: 375px) {\n  .pass-selector__pass-name {\n    font-size: 1.1rem;\n  }\n}\n.pass-selector__price {\n  display: table-cell;\n  padding: 1rem 0;\n  font-weight: lighter;\n  font-size: 2rem;\n  color: #4f4f4f;\n}\n@media screen and (max-width: 768px) {\n  .pass-selector__price {\n    font-size: 1.3rem;\n  }\n}\n@media screen and (max-width: 375px) {\n  .pass-selector__price {\n    font-size: 1rem;\n  }\n}\n.pass-selector__text {\n  display: table-cell;\n  padding: 1rem 0;\n  font-weight: lighter;\n  font-size: 1rem;\n  color: #4f4f4f;\n}\n@media screen and (max-width: 375px) {\n  .pass-selector__text {\n    font-size: 0.8rem;\n  }\n}\n.pass-selector__tickbox {\n  display: table-cell;\n  padding: 1rem;\n}\n.event-carousel {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: left;\n      -ms-flex-pack: left;\n          justify-content: left;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #c6c6c6;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-transition: opacity 0.25s ease, -webkit-transform 0.25s ease;\n  transition: opacity 0.25s ease, -webkit-transform 0.25s ease;\n  transition: transform 0.25s ease, opacity 0.25s ease;\n  transition: transform 0.25s ease, opacity 0.25s ease, -webkit-transform 0.25s ease;\n}\n.event-carousel__top {\n  width: 100%;\n  padding: 0.5rem 1rem 0;\n  text-align: right;\n}\n.event-carousel__link {\n  text-align: right;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  color: #e75735;\n  text-decoration: underline;\n}\n@media (hover: hover) {\n  .event-carousel__link:hover {\n    text-decoration: none;\n  }\n}\n@media (hover: hover) {\n  .event-carousel__link:active {\n    text-decoration: underline;\n  }\n}\n@media (hover: none) {\n  .event-carousel__link:active {\n    text-decoration: none;\n  }\n}\n.event-carousel__cards {\n  width: 100%;\n  padding: 10px 10px 0 10px;\n  font-size: 1rem;\n}\n@media screen and (max-width: 992px) {\n  .event-carousel__cards {\n    font-size: 0.8rem;\n  }\n}\n@media screen and (max-width: 375px) {\n  .event-carousel__cards {\n    font-size: 0.6rem;\n  }\n}\n.event-carousel__card-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.event-carousel__card {\n  width: 20em;\n  overflow: hidden;\n  margin-right: 0.8em;\n  font-size: 1.2em;\n}\n.event-carousel__card:last-child {\n  margin-right: 0;\n}\n.event-carousel__calendar-overlay {\n  display: none;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(10,10,10,0.3);\n  z-index: 100001;\n  overflow: hidden;\n}\n.event-carousel__calendar-overlay_visible {\n  display: block;\n}\n.event-carousel__calendar {\n  position: fixed;\n  bottom: 10%;\n  right: 5%;\n  width: 300px;\n  font-size: 0.7rem;\n  -webkit-box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12);\n          box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12);\n}\n.map {\n  width: 100%;\n  border-radius: 0.274725274725275rem;\n  overflow: hidden;\n}\n.map__container {\n  width: 100%;\n  height: 28.5vw;\n  min-height: 264px;\n}\n.map__footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0.1em 4.5% 0.5em 4.3%;\n  background-color: #e75735;\n  font-size: 1rem;\n}\n@media screen and (max-width: 670px) {\n  .map__footer {\n    font-size: 0.8rem;\n  }\n}\n@media screen and (max-width: 515px) {\n  .map__footer {\n    font-size: 0.6rem;\n  }\n}\n.map__title {\n  color: #fff;\n  font-size: 2.142857142857143em;\n  word-spacing: -0.1em;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  font-weight: lighter;\n  margin-right: 5%;\n  line-height: 2em;\n}\n@media screen and (max-width: 425px) {\n  .map__title {\n    font-size: 1rem;\n    margin-right: 10px;\n  }\n}\n.map__address {\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  padding-top: 0.2em;\n  text-align: left;\n}\n.map__address div {\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 0.892857142857143em;\n  font-weight: bold;\n}\n.map__address div:first-child {\n  letter-spacing: 0.05em;\n  word-spacing: 0.17em;\n}\n.map__address div:last-child {\n  word-spacing: 0.35em;\n  letter-spacing: 0.01em;\n}\n.map__icons {\n  font-size: 1em;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  padding-top: 0.2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.map__search {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  width: 1.098901098901099em;\n  height: 1.098901098901099em;\n  border-radius: 50%;\n  border: 0.10989010989011em solid #fff;\n  position: relative;\n  margin-right: 1.9em;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  cursor: pointer;\n  outline: none;\n}\n.map__search::before {\n  content: '';\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  height: 0.10989010989011em;\n  width: 0.659340659340659em;\n  position: absolute;\n  border-left: 0.549450549450549em solid #fff;\n  border-right: 0.549450549450549em solid #fff;\n  top: 50%;\n  left: 0;\n  -webkit-transform: translate(-18%, -50%);\n          transform: translate(-18%, -50%);\n}\n.map__search::after {\n  content: '';\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  height: 0.659340659340659em;\n  width: 0.10989010989011em;\n  position: absolute;\n  border-top: 0.549450549450549em solid #fff;\n  border-bottom: 0.549450549450549em solid #fff;\n  top: 0;\n  left: 50%;\n  -webkit-transform: translate(-50%, -18%);\n          transform: translate(-50%, -18%);\n}\n.map__search:focus {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n.map__search:focus::before {\n  -webkit-transform: translate(-18%, -50%) scale(1.1);\n          transform: translate(-18%, -50%) scale(1.1);\n}\n.map__search:focus::after {\n  -webkit-transform: translate(-50%, -18%) scale(1.1);\n          transform: translate(-50%, -18%) scale(1.1);\n}\n@media (hover: hover) {\n  .map__search:hover {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n  }\n}\n@media (hover: hover) {\n  .map__search:hover::before {\n    -webkit-transform: translate(-18%, -50%) scale(1.1);\n            transform: translate(-18%, -50%) scale(1.1);\n  }\n}\n@media (hover: hover) {\n  .map__search:hover::after {\n    -webkit-transform: translate(-50%, -18%) scale(1.1);\n            transform: translate(-50%, -18%) scale(1.1);\n  }\n}\n@media (hover: hover) {\n  .map__search:active {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n  }\n}\n@media (hover: none) {\n  .map__search:active {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n  }\n}\n@media (hover: hover) {\n  .map__search:active::before {\n    -webkit-transform: translate(-18%, -50%) scale(0.9);\n            transform: translate(-18%, -50%) scale(0.9);\n  }\n}\n@media (hover: none) {\n  .map__search:active::before {\n    -webkit-transform: translate(-18%, -50%) scale(1.1);\n            transform: translate(-18%, -50%) scale(1.1);\n  }\n}\n@media (hover: hover) {\n  .map__search:active::after {\n    -webkit-transform: translate(-50%, -18%) scale(0.9);\n            transform: translate(-50%, -18%) scale(0.9);\n  }\n}\n@media (hover: none) {\n  .map__search:active::after {\n    -webkit-transform: translate(-50%, -18%) scale(1.1);\n            transform: translate(-50%, -18%) scale(1.1);\n  }\n}\n@media screen and (max-width: 425px) {\n  .map__search {\n    margin-right: 15px;\n  }\n}\n.map__pin {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  width: 1.208791208791209em;\n  cursor: pointer;\n  height: 3em;\n  outline: none;\n}\n@media (hover: hover) {\n  .map__pin:hover {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n  }\n}\n@media (hover: hover) {\n  .map__pin:active {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n  }\n}\n@media (hover: none) {\n  .map__pin:active {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n  }\n}\n.map__pin:focus {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n", ""]);

// exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(51);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(25)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })
/******/ ]);