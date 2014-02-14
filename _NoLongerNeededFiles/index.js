var express = require("express"),
    home = require("./routes/home"),
    customer = require("./routes/customer");
    
var app = express();

app.configure('production', function(){
    app.set('title', 'CRM application');
});

app.configure('development', function(){
    app.set('title', 'CRM application - development');
});

app.get('/', function(req, res) {
    res.send('Value of the title is ' + app.get('title'));
});

//app.get('/', home.index);
//app.get('/index', home.index);
//app.get('/customer', customer.index);
//app.get('/customer/contact', customer.contact);

app.get('/customer/:id', function(req, res) {
    res.send("Customer page for customer with id " + req.params.id);
})



app.listen(process.env.PORT);