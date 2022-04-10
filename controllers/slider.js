const Slider = require("../models/Slider");

const index = async(req, res) => {
    const sliders = await Slider.find({})

    return res.status(200).json({ sliders })
}

const add = async(req, res) => {
    const { name, status, url, content, image } = req.body

    const foundSlider = await Slider.findOne({ name })

    if (foundSlider) return res.status(403).json({ error: { message: 'Slider name is already in exist.' } })

    const newSlider = new Slider({ name, url, image, content, status })
    await newSlider.save()

    return res.status(201).json({ success: true })
}

const deleteSlider = async(req, res, next) => {
    const { id } = req.body
    const slider = await Slider.findById(id)
    await slider.remove()
    return res.status(200).json({ success: true })
}

const update = async(req, res, next) => {
    const id = req.params.id
    const result = await Slider.updateOne({ _id: id }, req.body)
    return res.status(200).json({ success: true })
}

const getSlider = async(req, res, next) => {
    //console.log("HERE")
    const _id = req.params.id
    const slider = await Slider.find({_id})

    return res.status(200).json({ slider })
}

module.exports = {
    add,
    index,
    update,
    deleteSlider,
    getSlider
};