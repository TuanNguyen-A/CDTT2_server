const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    id: {
        type: String
    },
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    orderProducts: [{
        type: Schema.Types.ObjectId,
        ref: ''
    }],
    status: {
        type: Number
    },
    discount: {
        type: Number
    },
    totalPrice:{
        type: Number
    }
}, {
    timestamps: true,
})

const Order = mongoose.model('Order', OrderSchema)
module.exports = Order

