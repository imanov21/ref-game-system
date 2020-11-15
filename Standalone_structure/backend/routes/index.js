var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");
var Task = require("../models/task");
var Achivement = require("../models/achivement");
var middleware = require("../middleware");

//ckeck if User exists
router.post("/authenticate", middleware.isLoggedIn, function(req, res){
		res.send("true");
});
//ckeck if User logged in
router.post("/authenticate/right", middleware.isLoggedIn, function(req, res){
		res.send("true");
});

//handle sign up logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            return res.send("false");
        }
        passport.authenticate("local")(req, res, function(){
           res.send("true"); 
        });
    });
});

//handling login logic
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/",
        failureRedirect: "/login"
    }), function(req, res){
});

// logout route / handling logout logic
router.get("/logout", function(req, res){
   req.logout();
   res.send("true");
});

module.exports = router;