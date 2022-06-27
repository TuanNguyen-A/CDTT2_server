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

const applyDiscount = async (req, res, next) => {
    const _id = req.params.id

    discountList = await Discount.find({ _id });
    discount = discountList[0]

    console.log("DISCOUNT HERE", discount)
    numTemp = discount.purchase_limit - 1
    Discount.updateOne({ _id: _id}, {$set: {purchase_limit: numTemp}}, function (err,res) {
        if (err) throw err;
        console.log('update success: record');
    });

    return res.status(200).json({ success: true })
}

const updateDiscount = async(req, res, next) => {
    const id = req.params.id

    const { code} = req.body
    console.log(code)
    const foundDiscount = await Discount.findOne({ code })

    if(foundDiscount){
        console.log("Testtt",foundDiscount)
        updatedDiscount = await Discount.findById(id)
        if (updatedDiscount.code != code) return res.status(403).json({ message: 'Discount is already in exist.' })
    }

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
    applyDiscount,
    updateDiscount,
    getDiscount,
    searchDiscount
};