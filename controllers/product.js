const Product = require("../models/Product");

const index = async(req, res) => {
    const products = await Product.find({})

    return res.status(200).json({ products })
}

const add = async(req, res) => {
    const { name, category_id, content, image, array_image, price, price_sale, num, status } = req.body

    const foundProduct = await Product.findOne({ name })

    if (foundProduct) return res.status(403).json({ error: { message: 'Product is already in exist.' } })

    const newProduct = new Product({ name, category_id, content, image, array_image, price, price_sale, num, status })
    await newProduct.save()

    return res.status(201).json({ success: true })
}

const deleteProduct = async(req, res, next) => {
    const _id = req.params.id
    const product = await Product.findById({ _id })
    await product.remove()
    return res.status(200).json({ success: true })
}

const updateProduct = async(req, res, next) => {
    const id = req.params.id
    const result = await Product.updateOne({ _id: id }, req.body)
    return res.status(200).json({ success: true })
}
const getProduct = async(req, res, next) => {
    const _id = req.params.id
    const product = await Product.find({ _id })
    return res.status(200).json({ product })
}

module.exports = {
    add,
    index,
    deleteProduct,
    updateProduct,
    getProduct

};