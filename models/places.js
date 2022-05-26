const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: { type: String, require},
    pic: { type: String, default: './public/images/IMG_20190817_184559480_HDR.jpg'},
    cuisines: { type: String, require},
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA'},
    founded: Number
})

module.exports = mongoose.model('Place', placeSchema)