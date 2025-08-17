const Booking = require("../models/Booking");

async function createBooking(req, res) {
  console.log("You are in the create booking controller");
  try {
    console.log("Req.body is: ", req.body);
    const createdBooking = await Booking.create(req.body);
    res.status(201).json(createdBooking);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
}

async function bookingIndex(req, res) {
  try {
    const allbooking = await Booking.find();
    if (allbooking.length) {
      res.status(200).json(allbooking);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
}

async function showBooking(req, res) {
  try {
    const booking = await Booking.findById(req.params.id);
    if (booking) {
      res.status(200).json(booking);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.status(500).json({ error: err.massage });
  }
}

async function deleteBooking(req, res) {
  try {
    const Booking = await Booking.findByIdAndDelete(req.params.id);
    if (Booking) {
      res.status(200).json(Booking);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.status(500).json({ error: err.massage });
  }
}

module.exports = {
  createBooking,
  bookingIndex,
  showBooking,
  deleteBooking
};
