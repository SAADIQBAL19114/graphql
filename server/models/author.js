const mongoose = require("mongoose");
const { aggregate } = require("./book");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  age: Number
});

module.exports = mongoose.model("Author", authorSchema);
