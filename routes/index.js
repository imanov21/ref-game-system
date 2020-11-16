var express = require("express");
var router = express.Router();
var passport = require("passport");
var mongoose = require('mongoose');
var User = require("../models/user");
var middleware = require("../middleware");

//ckeck if User exists
router.post("/authenticate", middleware.isLoggedIn, function (req, res) {
    res.send("true");
});
//ckeck if User logged in
router.post("/authenticate/right", middleware.isLoggedIn, function (req, res) {
    res.send("true");
});

//handle sign up logic
router.post("/register", function (req, res) {
    var newUser = new User({ username: req.body.username });
    User.register(newUser, req.body.password, function (err, user) {
        if (err) {
            return res.send("false");
        }
        passport.authenticate("local")(req, res, function () {
            res.send("true");
        });
    });
});

//handling login logic
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/",
        failureRedirect: "/login"
    }), function (req, res) {
    });

// logout route / handling logout logic
router.get("/logout", function (req, res) {
    req.logout();
    res.send("true");
});

// Api data
router.get('/api/get/userbyid', async (req, res) => {
    const User = mongoose.model('Users');
    //let users = await User.find();
    User.find({}, function (err, data) {
        console.log('data');
        console.log(data);
        console.log(err);
    });
    //return res.status(200).send(products);
    var list = ["item1", "item2", "item3"];
    res.json(data);
    //console.log('Sent list of items');
});
router.get('/api/get/usertasks', (req, res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    //console.log('Sent list of items');
});
router.get('/api/get/userachievements', (req, res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    //console.log('Sent list of items');
});
router.get('/api/get/allachievement', (req, res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    //console.log('Sent list of items');
});

module.exports = router;