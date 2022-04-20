const Discount = require("../models/Discount");

const index = async(req, res) => {
    const discounts = await Discount.find({})

    return res.status(200).json({ discounts })
}

const add = async(req, res) => {
    console.log("Controller")

    const { code, discount, price_limit, purchase_current, purchase_limit, expiration_date, content, status } = req.body
    console.log(code)
    const foundDiscount = await Discount.findOne({ code })

    if (foundDiscount) return res.status(403).json({ message: 'Discount is already in exist.' })

    const newDiscount = new Discount({ code, discount, price_limit, purchase_current, purchase_limit, expiration_date, content, status })
    await newDiscount.save()

    return res.status(201).json({ success: true })
}

const deleteDiscount = async(req, res, next) => {
    const { id } = req.body
    const discount = await Discount.findById(id)
    await discount.remove()
    return res.status(200).json({ success: true })
}

const updateDiscount = async(req, res, next) => {
    const id = req.params.id

    const { code} = req.body
    console.log(code)
    const foundDiscount = await Discount.findOne({ code })

    if (foundDiscount) return res.status(403).json({  message: 'Discount is already in exist.' } )

    const result = await Discount.updateOne({ _id: id }, req.body)
    return res.status(200).json({ success: true })
}

const searchDiscount = async(req, res, next) =>{
    const search = req.params.search
    const discounts = await Discount.find({ code: { $regex: search } })
    console.log(discounts)
    return res.status(200).json({ discounts })
}

const getDiscount = async(req, res, next) => {
    const _id = req.params.id
    const discount = await Discount.find({ _id })
    return res.status(200).json({ discount })
}

module.exports = {
    add,
    index,
    deleteDiscount,
    updateDiscount,
    getDiscount,
    searchDiscount
};