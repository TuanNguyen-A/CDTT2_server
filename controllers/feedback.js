const Feedback = require("../models/Feedback");

const index = async(req, res) => {
    const feedbacks = await Feedback.find({})

    return res.status(200).json({ feedbacks })
}

const add = async(req, res) => {
    const { email, content } = req.body
    console.log(email, content)
    const newFeedback = new Feedback({email, content})
    await newFeedback.save()

    return res.status(201).json({ success: true })
}

const deleteFeedback = async(req, res, next) => {
    const { id } = req.body
    const feedback = await Feedback.findById(id)
    await feedback.remove()
    return res.status(200).json({ success: true })
}

const searchFeedback = async(req, res, next) =>{
    const search = req.params.search
    const feedbacks = await Feedback.find({ email: { $regex: search } })
    console.log(feedbacks)
    return res.status(200).json({ feedbacks })
}

module.exports = {
    add,
    index,
    deleteFeedback,
    searchFeedback
};