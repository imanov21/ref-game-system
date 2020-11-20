var mongoose = require("mongoose");

var refLinkSchema = mongoose.Schema({
    serviceName: String,
    link: String
});

module.exports = mongoose.model("RefLinks", refLinkSchema);