const Order = require("../models/Order");
const OrderProduct = require("../models/OrderProduct");
const orderid = require('order-id')('key');

const index = async (req, res) => {
    const orders = await Order.find({})

    return res.status(200).json({ orders })
}

const add = async (req, res) => {
    console.log("Controller")

    const order = req.body
    order.id = orderid.generate()

    console.log(order.orderProducts)

    tempArr = []

    order.orderProducts.forEach(async (element) => {
        orderProduct = new OrderProduct(element)
        tempArr.push(orderProduct._id)
        await orderProduct.save()
    });

    order.orderProducts = tempArr
    const newOrder = new Order(order)
    await newOrder.save()

    return res.status(201).json({ success: true })
}

const deleteOrder = async (req, res, next) => {
    const { id } = req.body
    const order = await Order.findById(id)
    await order.remove()
    return res.status(200).json({ success: true })
}

const confirmOrder = async (req, res, next) => {
    const _id = req.params.id
    orderList = await Order.find({ _id });
    order = orderList[0]
    statusTemp = 0
    if(order.status === 1){
        statusTemp=0
    }else{
        statusTemp=1
    }
    console.log("CONFIRM HERE", order);

    Order.updateOne({ _id: _id}, {$set: {status: statusTemp}}, function (err,res) {
        if (err) throw err;
        console.log('update success: record');
    });

    return res.status(200).json({ success: true })
}

const updateOrder = async(req, res, next) => {
    const id = req.params.id

    const result = await Product.updateOne({ _id: id }, req.body)
    return res.status(200).json({ success: true })
}

const getOrder = async (req, res, next) => {
    const _id = req.params.id
    order = await Order.find({ _id }).populate('orderProducts')

    temp = []

    console.log("HEREEE", order)

    // order.orderProducts.forEach(async (orderProductId) => {
    //     orderProduct = await OrderProduct.find({ orderProductId })
    //     temp.push(orderProduct)
    // });

    //order.orderProducts = temp

    return res.status(200).json({ order })
}

const searchOrder = async(req, res, next) =>{
    const search = req.params.search
    const oders = await Order.find({ id: { $regex: search } })
    console.log(oders)
    return res.status(200).json({ oders })
}

module.exports = {
    add,
    index,
    deleteOrder,
    confirmOrder,
    getOrder,
    searchOrder
};
