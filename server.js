var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/calculate', function(req, res) {
  var operations = {
    subtract: function(a, b) {
      return a - b;
    },
    add: function(a, b) {
      return a + b;
    },
    multiply: function(a, b) {
      return a * b;
    },
    divide: function(a, b) {
      return a / b;
    }
  };
  console.log(req.query);
  console.log(req.query.operands);
  var operands = JSON.parse(req.query.operands);

  var operation = operations[req.query.operation];
  var answer = operation(Number(operands.a), Number(operands.b));
  res.setHeader('Content-Type', 'application/javascript');
  res.json({answer: answer });
})


app.listen(3000, function() {
  console.log('server is started on port 3000');
})
