// all the middleare goes here
var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.send("false");
}

middlewareObj.isUser = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.send("false");
}

module.exports = middlewareObj;