const express = require('express')
const router = express.Router()
const bookingController = require('../controllers/bookingController')

router.post('/add-booking', bookingController.createBooking);
router.get('/', bookingController.bookingIndex);


module.exports = router