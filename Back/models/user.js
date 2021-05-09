const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var User = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  FullName: String,
  Age: Number,
  Ville: String,
  photo: String,
  Pets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pet",
    },
  ],
});
module.exports = mongoose.model("User", User);
