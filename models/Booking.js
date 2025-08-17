const { Schema, model } = require('mongoose');

const bookingSchema = new Schema({
//   movieId: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: "Movie",
//   required: true
// },
    name: {
        type: String,
        required: true }
//     },
//   date: {
//     type: Date,
//     required: true
//   },
//   timing: {
//     type: String,
//     required: true
//   },
//   seat: {
//     type: String,
//     required: true
//   },
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true
//   }
}, { timestamps: true });

const Booking = model("Booking", bookingSchema)

module.exports = Booking
