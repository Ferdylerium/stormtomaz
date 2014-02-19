var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
var port = Number(process.env.PORT || 5000);

/*var routes = require('./routes')(app);
var user = require('./routes/user');*/

var controllers = require('./controllers');

app.configure(function(){   
    app.set('view engine', 'jade');
    app.set('views', __dirname + '/views');
    app.use(express.favicon());
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', controllers.indexController().indexAction);
app.get('/user', controllers.indexController().userAction);

//app.get('/', routes.index);
//app.get('/user', user.index);

/*app.get('/', function(req,res){
   res.render('home'); 
});

app.get('/:viewname', function(req,res){
   res.render(req.params.viewname, { layout: '_root'}); 
});*/

app.listen(port);