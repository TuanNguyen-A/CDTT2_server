const express = require('express')
const router = express.Router()

const Category = require("../models/Category");
const Product = require("../models/Product");
const Order = require("../models/Order");
const User = require("../models/User");


router.route('/').get(async(req, res, next) => {
    categoryNum = await Category.count()
    productNum = await Product.count()
    orderNum = await Order.count()
    userNum = await User.count()
    return res.status(200).json({ categoryNum, productNum, orderNum, userNum })
})

module.exports = router;