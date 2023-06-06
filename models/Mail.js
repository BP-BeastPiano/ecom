const mongoose = require("mongoose");

const MailSchema = new mongoose.Schema(
  {
    mail: { type: String, required: true }
  }, { timestamps: false }
);

module.exports = mongoose.model("Mail", MailSchema);