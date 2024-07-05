const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const UserModel = mongoose.model("users", UsersSchema);

module.exports = UserModel;
