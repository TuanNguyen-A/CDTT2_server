const Product = require("../models/Product");

const index = async(req, res) => {
    const products = await Product.find({})

    return res.status(200).json({ products })
}

const add = async(req, res) => {
    const { name, content, image, array_image, price, price_sale, num, status } = req.body

    const foundProduct = await Product.findOne({ name })

    if (foundProduct) return res.status(403).json({ error: { message: 'Product is already in exist.' } })

    const newProduct = new Product({ name, category_id, content, image, array_image, price, price_sale, num, status })
    await newProduct.save()

    return res.status(201).json({ success: true })
}

const deleteProduct = async(req, res, next) => {
    const { id } = req.body
    const product = await Product.findById(id)
    await product.remove()
    return res.status(200).json({ success: true })
}

const update = async(req, res, next) => {
    const id = req.params.id
    const result = await Product.updateOne({ _id: id }, req.body)
    return res.status(200).json({ success: true })
}

module.exports = {
    add,
    index,
    deleteProduct,
    update

};