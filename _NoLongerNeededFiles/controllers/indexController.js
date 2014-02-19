module.exports = function(){
    var self = 
    {
        indexAction: function(req,res){
            res.render("home");   
        },
        userAction: function(req,res){
            res.render("user");   
        }
    }
    
    return self;
};