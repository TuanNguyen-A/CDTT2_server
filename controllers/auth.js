const User = require("../models/User");

const { JWT_SECRET } = require('../configs')
const JWT = require('jsonwebtoken')

const encodedToken = (userID) => {
    return JWT.sign({
        iss: 'Tuan Phuong My',
        sub: userID,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 3)
    }, JWT_SECRET)
}

//[GET] /auth
const index = function (req, res) {
    res.render('auth');
}

//[POST] /auth/signup
const signUp = async (req, res, next) => {
    const { fullName, email, phoneNumber, password, address, role } = req.body

    // Check if there is a user with the same user
    const foundUser = await User.findOne({ email })

    if (foundUser) return res.status(403).json({ message: 'Email is already in use.' })

    // Create a new user
    const newUser = new User({ fullName, email, phoneNumber, password, address, role })
    await newUser.save()
    console.log("SAVE", newUser)

    // Encode a token
    const token = encodedToken(newUser._id)

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Authorization', token)
    return res.status(201).json({ success: true })
}

const signIn = async (req, res, next) => {
    // Assign a token
    const token = encodedToken(req.user._id)
    role = req.user.role

    res.setHeader('Authorization', token)
    return res.status(200).json({ success: true, role })
};

const secret = async (req, res, next) => {
    console.log(req.user)
    account = req.user
    return res.status(200).json({ resources: true , account})
};

module.exports = {
    index,
    signUp,
    signIn,
    secret
};