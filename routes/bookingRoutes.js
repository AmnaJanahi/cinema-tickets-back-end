const express = require('express')
const router = express.Router()
const bookingController = require('../controllers/bookingController')

router.post('/add-booking', bookingController.createBooking);
router.get('/', bookingController.bookingIndex);
router.get('/:id',bookingController.showBooking )
router.delete('/:id',bookingController.deleteBooking)


module.exports = router