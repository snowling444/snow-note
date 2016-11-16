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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _cat = __webpack_require__(1);

	var Dabai = new _cat.Cat(); // var path = require('path') ;
	//
	// console.log(path);
	//
	//
	// var $ = require('jquery')

	// console.log($);
	// $(document).ready(
	//   function(){
	//     alert('dom准备完毕')
	//   }
	// )


	// var aa = require('./text.js');
	// console.log(aa);
	// console.log(aa.add(5));
	// console.log(aa.xx);

	// var str = 666;
	// aa.teacher(str);

	// 命名导出，名称一致
	// import {sum,snow} from './text.js';
	// sum(5,6);
	// console.log(snow.age)
	// 默认导出，随意起名
	// import aaa from './text.js';
	// console.log(aaa);


	Dabai.sayHello();

	var i = 10;
	console.log(i);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Cat = function () {
	  function Cat() {
	    _classCallCheck(this, Cat);
	  }

	  _createClass(Cat, [{
	    key: 'sayHello',
	    value: function sayHello() {
	      console.log('hello');
	    }
	  }]);

	  return Cat;
	}();

	var i = 1;
	exports.Cat = Cat;

/***/ }
/******/ ]);