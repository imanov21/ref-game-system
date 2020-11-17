var mongoose = require("mongoose");

var confSchema = new mongoose.Schema({
    // Main info
    image: String,
    name: String
});

module.exports = mongoose.model("Conf", confSchema);