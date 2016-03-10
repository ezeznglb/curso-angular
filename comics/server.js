var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(__dirname));

app.listen(port);
console.log(__dirname);
console.log("Listen on ", port);
