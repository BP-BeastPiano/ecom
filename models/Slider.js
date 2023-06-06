const mongoose = require("mongoose");

const SliderSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String },
    link: { type: String, required: true },
    path: { type: String, required: true }
  }, { timestamps: true }
);

module.exports = mongoose.model("Slider", SliderSchema);