var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    username: String,
    password: String,
    points: Number,
    refLinks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "RefLinks"
        }
    ],
    achievements: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Achievement"
        }
    ]
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", UserSchema);