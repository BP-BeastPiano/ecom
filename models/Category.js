const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    title: { type: String, required: true },
    path: { type: String, required: true }
  }, { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);