/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	console.log("boring");

	function f(x, y) {
	  console.log(x + y);
	}
	f(3, 6);

	// var add = (x,y) => x+y;
	// alert(add(5,6));

	function Point(x, y) {
	  this.x = x;
	  this.y = y;
	}
	Point.prototype.toString = function () {
	  return '(' + this.x + ', ' + this.y + ')';
	};
	var point = new Point(6, 3);
	console.log(point.toString()); //(6,3)

	for (var i = 0; i < 3; i++) {
	  console.log("out", i);
	  for (var _i = 0; _i < 2; _i++) {
	    console.log("in", _i);
	  }
	}

	var _hello = 'hello',
	    _hello2 = _slicedToArray(_hello, 5),
	    a = _hello2[0],
	    b = _hello2[1],
	    c = _hello2[2],
	    d = _hello2[3],
	    e = _hello2[4];

	console.log(a + '\n' + b + '\n' + c + '\n' + d + '\n' + e);

	var numbers = [1, 2, 3, 4];
	numbers.forEach(function (item, index, array) {
	  console.log(item + "\t" + index + "\t" + array);
	});
	var array = [1, 2, 3];

	var numbers = [1, 2, 3, 4];
	numbers.forEach(function (item, index, array) {
	  return console.log(item + "\t" + index + "\t" + array);
	});
	var array = [1, 2, 3];

	function add(x, y) {
	  x;
	  y = y || 20;
	  return x + y;
	}
	console.log(add(5));

	function add() {
	  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
	  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

	  return x + y;
	}
	console.log(add(5));

/***/ }
/******/ ]);