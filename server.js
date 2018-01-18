var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/public', express.static('public'));

app.use('/',express.static('public'));

var port = 80;

http.listen(port, function(){
  console.log('listening on ' + port);
});

