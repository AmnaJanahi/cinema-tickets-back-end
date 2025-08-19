const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movie')

router.get('/',movieController.movieIndexing)
router.get('/:id',movieController.showMovies)

module.exports = router