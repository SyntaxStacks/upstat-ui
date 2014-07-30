var express = require('express')

var ng = function(req,res) {
  res.sendfile(__dirname + '/app/index.html');
};
var app = express();
app.use(express.static(__dirname + '/app'));
app.get('/', ng);
app.get('*', ng);
app.listen(9000);
