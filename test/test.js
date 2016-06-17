var chai = require('chai');
var expect = require('chai').expect;
var chaiHttp = require('chai-http');

//this is so a server is not required to be on to test
require(__dirname + '/../server.js');

chai.use(chaiHttp);

describe('Testing that all requests to /calculate will return proper values', function() {

  it('should return the proper value when add is called', function(done) {
    chai.request('http://localhost:3000')
      .get('/calculate')
      .query( {
        operands: '{"a": 3,"b": 2}',
        operation: 'add'
      })
      .end(function(err, res) {
        expect(res.body.answer).to.eql(5);
        done();
      })
  })

  it('should return the proper value when subtract is called', function(done) {
    chai.request('http://localhost:3000')
      .get('/calculate')
      .query( {
        operands: '{"a": 15,"b": 9}',
        operation: 'subtract'
      })
      .end(function(err, res) {
        expect(res.body.answer).to.eql(6);
        done();
      })
  })

  it('should return the proper value when multiply is called', function(done) {
    chai.request('http://localhost:3000')
      .get('/calculate')
      .query( {
        operands: '{"a": 3,"b": 3}',
        operation: 'multiply'
      })
      .end(function(err, res) {
        expect(res.body.answer).to.eql(9);
        done();
      })
  })

  it('should return the proper value when divide is called', function(done) {
    chai.request('http://localhost:3000')
      .get('/calculate')
      .query( {
        operands: '{"a": 6,"b": 2}',
        operation: 'divide'
      })
      .end(function(err, res) {
        expect(res.body.answer).to.eql(3);
        done();
      })
  })
})
