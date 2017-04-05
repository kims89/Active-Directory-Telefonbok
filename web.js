var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');


var options = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    "givenName",
    "department"
]
};




app.use(express.static('public'));

app.get('/alle', function (req, res) {
  fs.readFile(__dirname + '/bruker.json', 'utf8', function(err, data) {
      res.end(data);
      console.log(data);
  });
});


app.get('/sok/:navn', function (req, res) {
  fs.readFile(__dirname + '/bruker.json', 'utf8',  function(err, data) {
      jsondata=JSON.parse(data);
      result=[];
      for (var i = 0; i < jsondata.length; i++){
        var navn = jsondata[i].displayName.toLowerCase();
        var sokresult = req.params.navn.toLowerCase();
        if (navn.includes(sokresult)){
          result.push(jsondata[i]);
        }
      }

      res.end(JSON.stringify(result));

  });

});



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

var server = app.listen(80, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
});
