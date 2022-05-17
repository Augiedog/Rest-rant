const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('places/index')
})

module.exports = router
