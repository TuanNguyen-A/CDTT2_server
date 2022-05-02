const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FeedbackSchema = new Schema({
    email: {
        type: String
    },
    content: {
        type: String
    }
}, {
    timestamps: true,
})

const Feedback = mongoose.model('Feedback', FeedbackSchema)
module.exports = Feedback