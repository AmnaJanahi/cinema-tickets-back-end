const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const logger = require('morgan')
const cors = require('cors')

const bookingRoutes = require('./routes/bookingRoutes')


dotenv.config()
const app = express()


mongoose.connect(process.env.DB_URI)
mongoose.connection.on('connected', ()=> {
    console.log('connected to mongoose')
})


app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use('/booking', bookingRoutes)


app.listen(3000, () => {
    console.log('App is listening')
})