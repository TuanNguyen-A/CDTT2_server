const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SliderSchema = new Schema({
    name: {
        type: String
    },
    url: {
        type: String
    },
    image: {
        type: String
    },
    content: {
        type: String
    },
    status: {
        type: Number
    }
}, {
    timestamps: true,
})

const Slider = mongoose.model('Slider', SliderSchema)
module.exports = Slider