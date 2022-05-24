const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } else if (!places[id]) {cd 
    res.render('error404')
  } else {
    res.render('places/show', { place: places[id], id })
  }  
})

router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'images/IMG_20191125_184836031.jpg'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

router.get('/places/:id', (req, res) => {
  const { arrayIndex } = req.params.id
  res.render('show', {
    places: Places[arrayIndex],
    index: arrayIndex
  })
})

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  console.log("hello")
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})

router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } else if (!places[id]) {
    res.render('error404')
  } else {
    res.render('edit', { place: places[id], id })
  }
})

module.exports = router
