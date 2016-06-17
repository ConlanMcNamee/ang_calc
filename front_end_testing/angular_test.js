var angular = require('angular');
require(__dirname + '/../app.js');
require('angular-mocks');

describe('it should test something', function() {
  var calcController;
  var scope, $location, createController;
  //like to have this non-test just to start things off
  it('should have a test', function() {
    expect(false).toBe(false);
  })

  //have to mock and inject these things to properly test
  beforeEach(angular.mock.module('calc'));
  beforeEach(inject(function ($rootScope, $controller, _$location_) {
       $location = _$location_;
       scope = $rootScope.$new();
       calcController = $controller('CalcController', {
         '$scope': scope
       })
   }));

  it('should have a calculator controller available to us', function() {
    expect(typeof calcController).toBe('object');
    //i think this is a fair test since it should initiate the value to a number at the start
    expect(typeof calcController.a).toBe('number');
    expect(typeof calcController.operation).toBe('string');
    expect(typeof calcController.run).toBe('function');
  })
  describe('REST tests', function() {
    var $httpBackend;
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
    }));
    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    })

    it('should respond with the proper answer', function() {
      $httpBackend.expectGET('http://localhost:3000/calculate?operands=%7B%22a%22:15,%22b%22:2%7D&operation=subtract')
      .respond(200, {answer: 13})
      console.log(calcController.a);
      calcController.run();
      $httpBackend.flush();
      expect(calcController.answer).toBe(13);
    })
  })
});
