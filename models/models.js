const mongoose = require("mongoose");

const CollectionSchema = new mongoose.Schema({
  name: String,
  isComplete: Boolean,
});

const collection = mongoose.model("sample", CollectionSchema);

module.exports = collection;
