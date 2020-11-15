var mongoose = require("mongoose");

var achievementSchema = mongoose.Schema({
	title: String,
	image: String,
    descrtiption: String,
	value: Number
});

module.exports = mongoose.model("Achievement", achievementSchema);