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

	
	var app = angular.module('calc', [])

	// .config(['$httpProvider', function($httpProvider) {
	//   $httpProvider.defaults.withCredentials = true;
	// }]);

	app.controller('CalcController', ['$http', '$scope', function($http, $scope) {
	  $scope.a = 15;
	  $scope.b = 2;
	  $scope.operation = 'subtract'; // Default for <select> element.
	  $scope.run = function() {
	    $http({
	      url: 'http://localhost:3000/calculate',
	      method: "GET",
	      params: {
	        operands: {
	          a: $scope.a,
	          b: $scope.b
	        },
	        operation: $scope.operation
	      }
	    })
	    .then(function(response) {
	      console.log(response);
	      $scope.answer = response.data.answer;
	    })
	  };


	}]);


/***/ }
/******/ ]);