const mongoose = require("mongoose");

const tarotSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  arcanNumber: { type: Number, required: true },
  accessories: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Accessory",
    },
  ],
  owner: { type: mongoose.Types.ObjectId, ref: "User" },
});

const Tarot = mongoose.model("Tarot", tarotSchema);

module.exports = Tarot;
