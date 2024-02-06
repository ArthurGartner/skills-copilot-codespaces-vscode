// Create web server
// 	- Serve static files
// 	- Serve comments API
// 	- Handle 404

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var comments = require('./comments');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/api/comments', function(req, res) {
  res.send(comments.get());
});

app.post('/api/comments', function(req, res) {
  var comment = req.body;
  comments.add(comment);
  res.send(comments.get());
});

app.all('*', function(req, res) {
  res.status(404).send('Not Found');
});

app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});