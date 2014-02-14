var express = require("express"),
    path = require("path");
    
var app = express();
var port = Number(process.env.PORT || 5000);

app.configure(function(){
    app.set('view engine', 'jade');
    app.set('views', __dirname + '/views');
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function(req,res){
   res.render('index'); 
});

app.get('/:viewname', function(req,res){
   res.render(req.params.viewname, { layout: '_root'}); 
});

app.listen(port);