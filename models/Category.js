const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    name: {
        type: String
    },
    active: {
        type: Number
    }
}, {
    timestamps: true,
})

const Category = mongoose.model('Category', CategorySchema)
module.exports = Category