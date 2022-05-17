require('dotenv').config()

const express = require('express')
// const home = require('./views/home')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).send(`
    <body style="margin: 0px; background: #0e0e0e; height: 100%">
        <img style="display: block;-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" src="https://http.cat/404">
    </body>
    `)
})

app.listen(process.env.PORT)