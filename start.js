// Simple Mock Server with Express.


var express = require('express');
var app = express();
var port = 1513;
var schema = require('./schema.js');
var profile = require('./profile.js');
var midware = require('./middleware.js');
var morgan = require('morgan');


app.use(express.static('./public'));
app.use(midware.responseTime);
app.use(morgan('dev'));
// setting CORS ---
app.use(midware.cors);


// API PATH

// Root
app.get('/', function (req, res) { res.json({ message: 'Root of Mock API Server' })  });

//  MOCK:: list articles
app.get('/api/v1/articles', function (req, res) {
  res.status(200).json(
    {
      totalPage: 1,
      currentPage: 1,
      articlesPerPage: 10,
      articleSnippets:[
        schema.articleSnippet('React Basic Part 1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '/uploads/sample.png'),
        schema.articleSnippet('React Basic Part 2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '/uploads/sample.png'),
        schema.articleSnippet('React Basic Part 3', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '/uploads/sample.png'),
        schema.articleSnippet('React Basic Part 4', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '/uploads/sample.png'),
        schema.articleSnippet('React Basic Part 5', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '/uploads/sample.png'),
      ]
    }
  );
});

// MOCK:: List Portfolio
app.get('/api/v1/users/admin/profile', function(req,res){
  res.status(200).json(profile.getProfile);
});

app.get('/api/v1/users/admin/profile/details', function(req,res){
  res.status(200).json(profile.getProfile.details);
});

app.get('/api/v1/users/admin/profile/skills', function(req,res){
  res.status(200).json(profile.getProfile.skills);
});


// listening to port
app.listen(port, function () {
  console.log('>> Mock API Server start on port::'+port +  ':: >>');
});
