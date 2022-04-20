const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DiscountSchema = new Schema({
    code: {
        type: String
    },
    discount: {
        type: Number
    },
    price_limit: {
        type: Number
    },
    purchase_current: {
        type: Number
    },
    purchase_limit: {
        type: Number
    },
    expiration_date: {
        type: Date
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

const Discount = mongoose.model('Discount', DiscountSchema)
module.exports = Discount