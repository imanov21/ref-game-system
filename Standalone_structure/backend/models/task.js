var mongoose = require("mongoose");
		  
var tasksSchema = new mongoose.Schema({
	title: String,
	startDate: Date,
	endDate: Date,
	valuePoint: Int32Array,
	type: String,
	userId: Int32Array
});

module.exports = mongoose.model("Tasks", tasksSchema);
