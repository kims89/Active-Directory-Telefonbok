var express = require('express');
var app = express();
var fs = require('fs');


app.use(express.static('public'));

app.get('/search', function (req, res) {
  fs.readFile(__dirname + '/contacts.json', 'utf8', function (err, data) {
    res.end(data);
  });
});

app.get('/search/:navn', function (req, res) {
  fs.readFile(__dirname + '/contacts.json', 'utf8', function (err, data) {
    jsondata = JSON.parse(data);
    result = [];
    for (var i = 0; i < jsondata.length; i++) {
      var navn = jsondata[i].displayName.toLowerCase();
      var sokresult = req.params.navn.toLowerCase();
      if (navn.includes(sokresult)) {
        result.push(jsondata[i]);
      }
    }
    res.end(JSON.stringify(result));

  });

});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

var server = app.listen(7605, function () {
  var host = server.address().address
  var port = server.address().port
});