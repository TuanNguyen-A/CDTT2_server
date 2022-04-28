const User = require("../models/User");

const index = async(req, res) => {
    const users = await User.find({})

    return res.status(200).json({ users })
}

const updateUser = async(req, res, next) => {
    const { email } = req.body
    const foundUser = await User.findOne({ email })

    if(foundUser){
        console.log("Testtt",foundUser)
        updatedUser = await User.findById(id)
        if (updatedUser.email != email) return res.status(403).json({ message: 'Email is already in exist.' })
    }

    const id = req.params.id
    const result = await User.updateOne({ _id: id }, req.body)
    return res.status(200).json({ success: true })
}

const deleteUser = async(req, res, next) => {
    const { id } = req.body
    const user = await User.findById(id)
    await user.remove()
    return res.status(200).json({ success: true })
}

const getUser= async(req, res, next) => {
    const _id = req.params.id
    const user = await User.find({ _id })

    return res.status(200).json({ user })
}

const searchUser = async(req, res, next) =>{
    const search = req.params.search
    const users = await User.find({ fullName: { $regex: search } })
    console.log(users)
    return res.status(200).json({ users })
}

module.exports = {
    index,
    updateUser,
    deleteUser,
    getUser,
    searchUser
};