
var app = angular.module('calc', [])

// .config(['$httpProvider', function($httpProvider) {
//   $httpProvider.defaults.withCredentials = true;
// }]);

app.controller('CalcController', ['$http', function($http) {
  //changed to this. instead of $scope when testing will try both though
  this.a = 15;
  this.b = 2;
  this.operation = 'subtract'; // Default for <select> element.

  this.run = function() {
    $http({
      url: 'http://localhost:3000/calculate',
      method: "GET",
      params: {
        operands: {
          a: this.a,
          b: this.b
        },
        operation: this.operation
      }
    })
    .then(function(response) {
      console.log(response);
      this.answer = response.data.answer;
    })
  };


}]);
