var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var mongoose = require('mongoose');
var players = require('./api/players');
var games = require('./api/games');
var dbConfig = require('./db/config');

var app = express();

app.set('port', process.env.PORT || 3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/players', players.insert);
app.get('/api/players', players.findAll);
app.get('/api/games', games.findAll);
app.post('/api/games', games.insert);


app.use(function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});


// development error handler
// will print stacktrace
//if (app.get('env') === 'development') {
 //   app.use(function(err, req, res, next) {
  //      res.status(err.status || 500);
   //     res.render('error', {
    //        message: err.message,
     //       error: err
      //  });
    //});
//}

// production error handler
// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
 //   res.status(err.status || 500);
  //  res.render('error', {
   //     message: err.message,
    //    error: {}
    //});
//});

mongoose.connect(dbConfig.connectionString);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection-error:'));

db.on('open', function () {
    http.createServer(app).listen(app.get('port'), function() {
        console.log("Express server listening on port " + app.get('port'));
    });
});



