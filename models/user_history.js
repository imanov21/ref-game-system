var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    userId: Number,
    taskId: Number,
    date: Date,
    finish: Boolean
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("UsersHistory", UserSchema);