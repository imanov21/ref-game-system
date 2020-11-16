var mongoose = require("mongoose");

var achievementSchema = mongoose.Schema({
	title: String,
	image: String,
	description: String,
	value: Number
});

module.exports = mongoose.model("Achievement", achievementSchema);