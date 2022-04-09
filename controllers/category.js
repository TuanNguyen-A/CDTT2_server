const Category = require("../models/Category");

const index = async(req, res) => {
    const categories = await Category.find({})

    return res.status(200).json({ categories })
}

const add = async(req, res) => {
    const { name, active } = req.body

    const foundCategory = await Category.findOne({ name })

    if (foundCategory) return res.status(403).json({ error: { message: 'Category is already in exist.' } })

    const newCategory = new Category({ name, active })
    await newCategory.save()

    return res.status(201).json({ success: true })
}

const deleteCate = async(req, res) => {
    console.log("HERE", req.body)

}

module.exports = {
    add,
    index,
    deleteCate
};