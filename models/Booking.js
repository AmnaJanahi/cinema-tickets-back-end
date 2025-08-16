const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  movieName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  timing: {
    type: String,
    required: true
  },
  seat: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
