const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderProductSchema = new Schema({
    productId: {
        type: String
    },
    quantity: {
        type: String
    },
    price:{
        type: Number
    }
}, {
    timestamps: true,
})

const OrderProduct = mongoose.model('OrderProduct', OrderProductSchema)
module.exports = OrderProduct

