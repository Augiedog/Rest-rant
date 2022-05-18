require('dotenv').config()

const express = require('express')
// const home = require('./views/home')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {      
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log('Time for dinner at port', PORT);
})