const Product = require("../models/Product");
const Category = require("../models/Category");
const Slider = require("../models/Slider");

const index = async(req, res) => {
    const products = await Product.find({})

    return res.status(200).json({ products })
}

const add = async(req, res) => {
    console.log("Controller")
    const { name, category_id, content, image, price, price_sale, num, status } = req.body
    console.log(name)
    const foundProduct = await Product.findOne({ name })

    if (foundProduct) return res.status(403).json({  message: 'Product is already in exist.' })

    const newProduct = new Product({ name, category_id, content, image, price, price_sale, num, status })
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

    const { name } = req.body
    const foundProduct = await Product.findOne({ name })

    if(foundProduct){
        console.log("Testtt",foundProduct)
        updatedProduct = await Product.findById(id)
        if (updatedProduct.name != name) return res.status(403).json({ message: 'Product is already in exist.' })
    }

    const result = await Product.updateOne({ _id: id }, req.body)
    return res.status(200).json({ success: true })
}
const getProduct = async(req, res, next) => {
    const _id = req.params.id
    const product = await Product.find({ _id })
    return res.status(200).json({ product })
}
const searchProduct = async(req, res, next) =>{
    const search = req.params.search
    const products = await Product.find({ name: { $regex: search } })
    console.log(products)
    return res.status(200).json({ products })
}

const searchProductByCategory = async(req, res, next) =>{
    const search = req.params.search
    const categories = await Category.find({ name: search })
    console.log("HEREEEEEEE",search)
    category = categories[0]

    const products = await Product.find({ category_id: category._id })
    console.log(products)
    return res.status(200).json({ products })
}

const searchProductByCategoryId = async(req, res, next) =>{
    const id = req.params.search

    const products = await Product.find({ category_id: id })
    console.log(products)
    return res.status(200).json({ products })
}

const homePage = async(req, res, next)=>{
    console.log('SUCCESSSS')
    //GOLD PRODUCTS
    const goldCategories = await Category.find({ name: 'Vàng' })
    goldCategory = goldCategories[0]
    const goldProducts = await Product.find({ category_id: goldCategory._id })

    //GOLD BANNER
    const goldSlider = await Slider.find({ name: 'Vàng Banner' })

    //DIAMOND PRODUCT

    //DIAMOND BANNER

    //NEW PRODUCTS
    const newProducts = await Product.find({})

    result = {
        goldProducts,
        goldSlider,
        newProducts
    }
    return res.status(200).json({ result })
}

module.exports = {
    add,
    index,
    deleteProduct,
    updateProduct,
    getProduct,
    searchProduct,
    searchProductByCategory,
    searchProductByCategoryId,
    homePage
};