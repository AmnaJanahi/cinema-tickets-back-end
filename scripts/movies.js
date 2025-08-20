const mongoose = require("mongoose");
const Movie = require("../models/Movies");
const dotenv = require("dotenv").config();

const Movies = [
  {
    name: "Top Gun: Maverick",
    description: "A fighter pilot story.",
    image:
    "https://sarahscoop.com/wp-content/uploads/2022/05/top-gun-maverick-351x520.jpg",
    rating: 4.5,
  },
  {
    name: "Zootopia",
    description: "Animated city of animals.",
    image:
    "https://upload.wikimedia.org/wikipedia/en/9/96/Zootopia_%28movie_poster%29.jpg",
    rating: 4.8,
  },
  {
    name: "Knives Out",
    description: "A whodunit mystery.",
    image:
    "https://cdn.flickeringmyth.com/wp-content/uploads/2019/10/Knives-Out-Poster.jpg",
    rating: 4.6,
  },
  {
    name: "The Incredibles",
    description: "Family of superheroes.",
    image:
    "https://m.media-amazon.com/images/I/813KgYkrr0L.jpg",
    rating: 4.7,
  },
  {
    name: "Shrek",
    description: "An ogre's adventure.",
    image:
    "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/2884405/5949450/MOVCF4359__64891.1679594547.jpg",
    rating: 4.5,
  },
  {
    name: "Spider-Man: Into the Spider-Verse",
    description: "Animated Spider-Man story.",
    image:
    "https://images.squarespace-cdn.com/content/v1/59726394a803bb897c66108b/1545102243499-K40ND0GVFW4OHIVRWA2A/Spider-Man-Into-the-Spider-Verse-poster.jpg",
    rating: 4.9,
  },
  {
    name: "Guardians of the Galaxy",
    description: "Space superhero team.",
    image:
    "https://www.themoviedb.org/t/p/original/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    rating: 4.6,
  },
  {
    name: "Avengers: Endgame",
    description: "Epic superhero finale.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg",
    rating: 4.8,
  },
  {
    name: "Jumanji: Welcome to the Jungle",
    description: "Adventure in a game world.",
    image:
      "https://m.media-amazon.com/images/I/A1hFzTczzJL._UF894,1000_QL80_.jpg",
    rating: 4.4,
  },
  {
    name: "The Lion King",
    description: "Animated African adventure.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_.jpg",
    rating: 4.7,
  },
  {
    name: "Aladdin",
    description: "Magical adventure in Agrabah.",
    image:
      "https://fifthsun.com/cdn/shop/files/18aldn00053a-031-aladdin-live-action-cover-107-132-140-swatch_800x.jpg?v=1713856443",
    rating: 4.5,
  },
  {
    name: "Finding Nemo",
    description: "A fish's journey to find his son.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIN-XjQ4CQ6_l7762qk5NmuIYR0hTBCDXjQ&s",
    rating: 4.8,
  },
  {
    name: "Coco",
    description: "Journey to the land of the dead.",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg",
    rating: 4.9,
  },
  {
    name: "Harry Potter and the Sorcerer's Stone",
    description: "Wizarding world begins.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 4.7,
  },
  {
    name: "Jurassic Park",
    description: "Dinosaurs come to life.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd/f00bf346385235.58520f9022451.jpg",
    rating: 4.6,
  },
  {
    name: "Paddington",
    description: " bear travels to London in search of a home",
    image:
      "https://image.tmdb.org/t/p/original/zmjkio6b35WZUBTFRP7yLSO94bq.jpg",
    rating: 4.7,
  },
  {
    name: "Inception",
    description: "Dream within a dream.",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEit41aAQRl6-3TZW19nzYBeIjsOGIKPTNS_Fw0y7I83xQGViLIGhlu_c3YnBvUYnSHSiv0S_bBBOwO24WcVjrp9mb_uyxwhETTEpD0vfnSrCTHQcVwpkqoOUJNvt1UIdR08hY8iKRPiBP4/s1600/inception_ver4.jpg",
    rating: 4.8,
  },
  {
    name: "Frozen II",
    description: "Bear travels to London after an earthquake destroys his home",
    image: "https://m.media-amazon.com/images/I/71iA+dPp20S.jpg",
    rating: 4.6,
  },
  {
    name: "Moana",
    description: "Ocean adventure story.",
    image: "https://m.media-amazon.com/images/I/A1JOaV3B6fL._AC_SL1500_.jpg",
    rating: 4.7,
  },
  {
    name: "Cinderella",
    description: "Classic fairy tale.",
    image:
      "https://lighthousetheatre.com/wp-content/uploads/2024/04/2024_CINDERELLA_FINAL-scaled.jpg",
    rating: 4.5,
  },
];

mongoose.connect(process.env.DB_URI);
mongoose.connection.on("connected", () => {
  console.log("connected to mongoose");
});
Movie.collection.drop()
Movie.insertMany(Movies);

