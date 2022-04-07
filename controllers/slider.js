const Slider = require("../models/Slider");

const index = async(req, res) => {
    const Sliders = await Slider.find({})

    return res.status(200).json({ Sliders })
}

const add = async(req, res) => {
    const { name, status, url, content, image } = req.body

    const foundSlider = await Slider.findOne({ name })

    if (foundSlider) return res.status(403).json({ error: { message: 'Slider name is already in exist.' } })

    const newSlider = new Slider({ name, url, image, content, status })
    await newSlider.save()

    return res.status(201).json({ success: true })
}

module.exports = {
    add,
    index
};