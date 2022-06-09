require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const placesController = require('./controllers/places')
const methodOverride = require('method-override')

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(methodOverride('_method'))


app.use('/places', placesController)

// Routes
app.get('/', (req, res) => {      
    res.render('home')
})
app.get('*', (req, res) => {
    res.render('error404')
})

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));


// Listener
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log('Time for dinner at port', PORT);
})
