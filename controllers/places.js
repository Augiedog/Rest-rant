const router = require('express').Router()
//const places = require('../models/places.js')
const Places = require('../models/places.js')

router.get('/', async (req, res) => {
  try {
    const place = await Places.find()
    res.render('index', {
      place: Places,
      name: 'name',
      city: 'city',
      state: 'state',
      cuisines: 'cuisines',
      pic: 'pic'
    })
  } catch (error) {
    console.log(error)
    res.render('error404')
  }
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
    req.body.pic = "./public/images/IMG_20191125_184836031.jpg"
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
  const { id } = req.params.id
  res.render('show', {
    places: places[id],
    index: id
  })
})

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
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
  const id = Number(req.params.id)
  if (isNaN(id)) {
    console.log("why?", id)
    res.render('error404')
  } else if (!places[id]) {
    console.log(id)
    res.render('error404')
  } else {
    res.render('places/edit', { place: places[id], id })
  }
})

router.put('/id', (req, res) => {
  const id = req.params
    res.render('edit', {
      places: places[id],
      index: id
    })
})

module.exports = router
