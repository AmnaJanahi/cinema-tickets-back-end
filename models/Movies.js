const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String, 
    required: true
  }
}, { timestamps: true });

const Movie = model("Movie", movieSchema)

module.exports = Movie
