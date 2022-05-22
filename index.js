require('dotenv').config()

const express = require('express')
const app = express()
const placesController = require('./controllers/places')
const methodOverride = require('method-override')

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use('/places', placesController)
app.use(methodOverride('_method'))

// Routes
app.get('/', (req, res) => {      
    res.render('home')
})
app.get('*', (req, res) => {
    res.render('error404')
})

// Listener
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log('Time for dinner at port', PORT);
})
