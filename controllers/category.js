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

const deleteCategory = async(req, res, next) => {
    const { id } = req.body
    const category = await Category.findById(id)
    await category.remove()
    return res.status(200).json({ success: true })
}

const updateCategory = async(req, res, next) => {
    const id = req.params.id
    const result = await Category.updateOne({ _id: id }, req.body)
    return res.status(200).json({ success: true })
}

const getCategory = async(req, res, next) => {
    //console.log("HERE")
    const _id = req.params.id
    const category = await Category.find({ _id })

    return res.status(200).json({ category })
}

module.exports = {
    add,
    index,
    deleteCategory,
    updateCategory,
    getCategory
};