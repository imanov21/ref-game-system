var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    userId: Number,
    achievementId: Number,
    date: Date
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("UsersAchievement", UserSchema);