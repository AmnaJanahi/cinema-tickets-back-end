const Movies = require("../models/Movies");

async function movieIndexing(req, res) {
  try {
    const allMovies = await Movies.find();
    if (allMovies.length) {
      res.status(200).json(allMovies);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
}

async function showMovies(req, res) {
  try {
    const movie = await Movies.findById(req.params.id);
    if (movie) {
      res.status(200).json(movie);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  movieIndexing,
  showMovies,
};
