const mongoose = require('mongoose')
const Movie = require('../models/Movies')
const dotenv = require('dotenv').config()

const Movies= [
     { name: "Top Gun: Maverick", description: "A fighter pilot story.", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ubuy.com.bh%2Fen%2Fproduct%2F52YIZZBUQ-top-gun-maverick-movie-poster-quality-glossy-print-photo-wall-art-tom-cruise-jennifer-connelly-sizes-11x17-16x20-22x28-24x36-27x40-1%3Fsrsltid%3DAfmBOoosQyneFek1jYXLXGPSbuOhxc4a-26mgTLrj0vuTjmYy_5mqi9b&psig=AOvVaw2sE7T0KErk7kbRx2soTsUT&ust=1755671656528000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCODG6d-glo8DFQAAAAAdAAAAABAE", rating: 4.5 },
  { name: "Zootopia", description: "Animated city of animals.", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt2948356%2F&psig=AOvVaw0gdkcV2gDCraGhthTHcN3S&ust=1755671693698000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOih9vGglo8DFQAAAAAdAAAAABAE", rating: 4.8 },
  { name: "Knives Out", description: "A whodunit mystery.", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt8946378%2F&psig=AOvVaw1igFhzUNQyqB4M8V2jPsn6&ust=1755671729874000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPDc7_-glo8DFQAAAAAdAAAAABAE", rating: 4.6 },
  { name: "The Incredibles", description: "Family of superheroes.", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0317705%2F&psig=AOvVaw3uoMhLcoGGsZOZfz6hOgPr&ust=1755671763297000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCODg94-hlo8DFQAAAAAdAAAAABAE", rating: 4.7 },
  { name: "Shrek", description: "An ogre's adventure.", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.themoviedb.org%2Fmovie%2F808-shrek%2Fimages%2Fposters&psig=AOvVaw2qYFXXBmrWFGfeIHfUmZ0i&ust=1755671791537000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIiD156hlo8DFQAAAAAdAAAAABAe", rating: 4.5 },
  { name: "Spider-Man: Into the Spider-Verse", description: "Animated Spider-Man story.", image: "shttps://i5.walmartimages.com/seo/Spider-Man-Into-The-Spider-Verse-Marvel-Comics-Movie-Poster-Fall_4660a869-3feb-44ba-a2f2-03fb7323fc26.1aa464250f9ff64fbcae45ca110e76e8.jpeg", rating: 4.9 },
  { name: "Guardians of the Galaxy", description: "Space superhero team.", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt2015381%2F&psig=AOvVaw1hPVWM_WxsSUcRQVr5VIoy&ust=1755671886794000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJi0rcuhlo8DFQAAAAAdAAAAABAE", rating: 4.6 },
  { name: "Avengers: Endgame", description: "Epic superhero finale.", image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg", rating: 4.8 },
  { name: "Jumanji: Welcome to the Jungle", description: "Adventure in a game world.", image: "https://m.media-amazon.com/images/I/A1hFzTczzJL._UF894,1000_QL80_.jpg", rating: 4.4 },
  { name: "The Lion King", description: "Animated African adventure.", image: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_.jpg", rating: 4.7 },
  { name: "Aladdin", description: "Magical adventure in Agrabah.", image: "https://fifthsun.com/cdn/shop/files/18aldn00053a-031-aladdin-live-action-cover-107-132-140-swatch_800x.jpg?v=1713856443", rating: 4.5 },
  { name: "Finding Nemo", description: "A fish's journey to find his son.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIN-XjQ4CQ6_l7762qk5NmuIYR0hTBCDXjQ&s", rating: 4.8 },
  { name: "Coco", description: "Journey to the land of the dead.", image: "https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg", rating: 4.9 },
  { name: "Harry Potter and the Sorcerer's Stone", description: "Wizarding world begins.", image: "https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", rating: 4.7 },
  { name: "Jurassic Park", description: "Dinosaurs come to life.", image: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/f00bf346385235.58520f9022451.jpg", rating: 4.6 },
  { name: "Paddington", description: "Virtual reality action.", image: "https://image.tmdb.org/t/p/original/zmjkio6b35WZUBTFRP7yLSO94bq.jpg", rating: 4.7 },
  { name: "Inception", description: "Dream within a dream.", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEit41aAQRl6-3TZW19nzYBeIjsOGIKPTNS_Fw0y7I83xQGViLIGhlu_c3YnBvUYnSHSiv0S_bBBOwO24WcVjrp9mb_uyxwhETTEpD0vfnSrCTHQcVwpkqoOUJNvt1UIdR08hY8iKRPiBP4/s1600/inception_ver4.jpg", rating: 4.8 },
  { name: "Frozen II", description: "Bear travels to London after an earthquake destroys his home", image: "https://m.media-amazon.com/images/I/71iA+dPp20S.jpg", rating: 4.6 },
  { name: "Moana", description: "Ocean adventure story.", image: "https://m.media-amazon.com/images/I/A1JOaV3B6fL._AC_SL1500_.jpg", rating: 4.7 },
  { name: "Cinderella", description: "Classic fairy tale.", image: "https://lighthousetheatre.com/wp-content/uploads/2024/04/2024_CINDERELLA_FINAL-scaled.jpg", rating: 4.5 },
]


mongoose.connect(process.env.DB_URI)
mongoose.connection.on('connected', ()=> {
    console.log('connected to mongoose')
})


Movie.insertMany(Movies)
