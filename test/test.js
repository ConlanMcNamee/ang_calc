var chai = require('chai');
var expect = require('chai').expect;
var chaiHttp = require('chai-http');

describe('Testing that all requests to /calculate will return proper values', function() {
  it('should fail when true equals false', function() {
    expect(true).to.eql(false);
  })
  it('should pass when true is equal to true', function() {
    expect(true).to.eql(true);
  })
  it('should return the proper value when addition is called', function(done) {
    
  })
})
