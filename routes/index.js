var express = require("express");
var router = express.Router();
var passport = require("passport");
var mongoose = require('mongoose');
var User = require("../models/user");
var Achievement = require("../models/achievement");
var middleware = require("../middleware");

//root route
router.get("/", function (req, res) {
    Achievement.find({}, function (err, allAchivs) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", { achievements: allAchivs });
        }
    });
});

// show register form
router.get("/register", function (req, res) {
    res.render("register");
});

//handle sign up logic
router.post("/register", function (req, res) {
    var newUser = new User({ username: req.body.username });
    User.register(newUser, req.body.password, function (err, user) {
        if (err) {
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function () {
            res.redirect("/");
        });
    });
});

//show login form
router.get("/login", function (req, res) {
    res.render("login");
});

//handling login logic
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/",
        failureRedirect: "/login"
    }), function (req, res) {
    });

// logout route
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

// link route
router.get("/link", function (req, res) {
    res.render("link");
});

module.exports = router;