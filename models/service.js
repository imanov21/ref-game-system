var mongoose = require("mongoose");

var serviceSchema = mongoose.Schema({
	name: String,
	link: String,
	user_id: String
});

module.exports = mongoose.model("Service", serviceSchema);