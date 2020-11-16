var mongoose = require("mongoose");

var tasksSchema = new mongoose.Schema({
	title: String,
	startDate: Date,
	endDate: Date,
	valuePoint: Number,
	type: String,
	userId: Number
});

module.exports = mongoose.model("Tasks", tasksSchema);