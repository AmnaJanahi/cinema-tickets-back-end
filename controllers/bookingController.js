const Booking = require('../models/Booking')

async function createBooking(req, res) {
    console.log('You are in the create booking controller')
    try {
        console.log('Req.body is: ', req.body)
        const createdBooking = await Booking.create(req.body)
        res.status(201).json(createdBooking)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message })
    }
}




module.exports = {
    createBooking
}