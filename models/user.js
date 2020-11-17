var mongoose = require("mongoose");
var
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    points: Number
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", UserSchema);