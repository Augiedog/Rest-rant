const mongoose = require('mongoose')

// Addded places at the bottom
const placeSchema = new mongoose.Schema({
    name: { type: String, require: true},
    pic: { type: String, default: './images/IMG_20190817_184559480_HDR.jpg'},
    cuisines: { type: String, require},
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA'},
    founded: Number,
    places: {type: mongoose.Schema.Types.ObjectId, ref: 'Places'}
})

module.exports = mongoose.model('Place', placeSchema)
