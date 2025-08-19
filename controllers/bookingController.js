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
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (booking) {
      res.status(200).json(booking);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.status(500).json({ error: err.massage });
  }
}

async function updateBooking(req, res) {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (booking) {
      res.status(200).json(booking);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.status(500).json({ error: err.massage });
  }
}

async function getOccupiedSeats(req, res) {
  try {
    const { movieId, date, timing } = req.query;

    if (!movieId || !date || !timing) {
      return res.status(400).json({ message: "movieId, date, and timing are required" });
    }

    const bookings = await Booking.find({ movieId, date, timing });
    const occupiedSeats = bookings.map(b => b.seat);

    res.status(200).json({ occupied: occupiedSeats });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


module.exports = {
  createBooking,
  bookingIndex,
  showBooking,
  deleteBooking,
  updateBooking,
  getOccupiedSeats
};
