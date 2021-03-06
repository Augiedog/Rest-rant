const router = require('express').Router()
//const places = require('../models/places.js')
const Places = require('../models/places.js')
const oldPlaces = require('../models/old_places.js')

// INDEX page
router.get('/', async (req, res) => {
  try {
    const places = await Places.find()
    res.render('places/index', {
      place: places,
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

// Add new Place page
router.get('/new', (req, res) => {
  res.render('places/new')
})

// Seed DB
router.get('/seed', async (req, res) => {
  try {
    await Places.insertMany(oldPlaces)
    res.redirect('./')
  } catch (error) {
    console.log(error)
    res.render('error404')
  }
})

// Show page 
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const places = await Places.findById(id)
    .populate('places')
    .populate('comment')
    .then(foundPlaces => {
      console.log(places.comment)
      res.render('places/show', {
        places: foundPlaces
      })
    })
  } catch (error) {
    console.log(error)
    res.render('error404')
  }
})
//New 
router.post('/', async (req, res) => {
  try {
    if (!req.body.pic) {
    // Default image if one is not provided
      req.body.pic = "/images/IMG_20191125_184836031.jpg"
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    await Places.create(req.body)
    res.redirect('/places')
  } catch (error) {
      console.log(error)
      res.render('error404')
  } 
})

router.get('/places/:id', (req, res) => {
  const { id } = req.params.id
  res.render('show', {
    places: Places[id],
    index: id
  })
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await Places.findByIdAndDelete(id)
    res.status(303).render("home")
  } catch (error) {
    console.log(error)
    res.render('error404')
  }
})

// GET edit page
router.get('/:id/edit', async (req, res) => {
  const { id } = req.params
  const places = await Places.findById(id).populate('places')
  res.render('places/edit', { places })
})

// PUT update from edit page
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await Places.findByIdAndUpdate(id, req.body)
    res.redirect(`/places/${id}`)
  } catch (error) {
    console.log(error)
    res.render('error404')
  }
})

module.exports = router
