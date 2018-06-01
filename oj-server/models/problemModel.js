var mongoose = require("mongoose");
var ProblemSchema = mongoose.Schema({
    id: Number,
    name: String,
    difficulty: String,
    desc: String
});
var problemModel = mongoose.model("ProblemModel",ProblemSchema);
module.exports = problemModel;