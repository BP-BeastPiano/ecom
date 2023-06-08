const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true},
    userName: { type: String, required: true},
    userMobile: { type: Number, required: true },
    userAddress: { type: Object, required: true},
    products: { type: Array, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, default: "pending"},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
