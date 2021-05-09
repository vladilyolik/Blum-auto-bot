const mongoose = require("mongoose");

const Schema = mongoose.Schema;
var Pet = new Schema({
  Name: String,
  Race: String,
  Type: String,
  Age: Number,
  Avatar: String,
  Photos: [String],
});
module.exports = mongoose.model("Pet", Pet);
