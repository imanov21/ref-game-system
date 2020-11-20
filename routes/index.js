var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var Service = require("../models/service");
var refLink = require("../models/refLink");
var Achievement = require("../models/achievement");
var middleware = require("../middleware");

function makeString(length) { //generate random string with "length"-n characters 
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

//root route
router.get("/", middleware.isLoggedIn, function (req, res) {
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
    var newUser = new User({ username: req.body.username, refLinks: [] });
    var newrefLink = { serviceName: "", link: "" };
    User.register(newUser, req.body.password, function (err, user) {
        if (err) {
            return res.render("register");
        }
        Service.find({}, function (err, services) {
            if (err) {
                console.log(err);
            } else {
                services.forEach(function (service) {
                    newrefLink.serviceName = service.name;
                    var generatedLink = service.link + req.body.username + makeString(5);
                    refLink.find({}, function (refLink) {
                        if (refLink.link == generatedLink) {
                            generatedLink += makeString(5);
                        }
                    });
                    newrefLink.link = generatedLink;
                    refLink.create(newrefLink, function (err, refferalLink) {
                        if (err) {
                            console.log(err);
                        } else {
                            refferalLink.save();
                            newUser.refLinks.push(refferalLink);
                            newUser.save();
                            console.log(newUser);
                        }
                    });
                });
            }
        })
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
router.get("/link", middleware.isLoggedIn, function (req, res) {
    res.render("link");
});

module.exports = router;