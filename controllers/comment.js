const router = require('express').Router()
const Comment = require('../models/comment.js')
const seedComment = require('../models/seed-comment.js')

router.get('/seed', async (req, res) => {
    try {
        await Comment.insertMany(seedComment)
        res.redirect('./')
    } catch (error) {
        console.log(error)
        res.render('error404')
    }
})

module.exports = router