const mongoose = require("mongoose");

require("./../database/connection");

// Schema and Model
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
