const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    id: {
        type: String
    },
    orderProducts: [{
        type: Schema.Types.ObjectId,
        ref: 'OrderProduct'
    }],
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    address: {
        type: String
    },
    note: {
        type: String
    },
    status: {
        type: Number
    },
    discount: {
        type: Number
    },
    transportFee: {
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

