const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bcrypt = require('bcryptjs')

const UserSchema = new Schema({
    fullName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    phoneNumber: {
      type: String
    },
    password: {
        type: String
    },
    address: {
      type: String
    }
}, {
  timestamps: true,
});

UserSchema.pre('save', async function(next) {
  try {
    if (!this.isModified('password')) return next();
    
    // Generate a salt
    const salt = await bcrypt.genSalt(10)
    
    // Generate a password hash (salt + hash)
    const passwordHashed = await bcrypt.hash(this.password, salt)
    
    // Re-assign password hashed
    this.password = passwordHashed
    console.log('PREEEEE', this.password)

    next()
  } catch (error) {
    next(error)
  }
})


UserSchema.methods.isValidPassword = async function(newPassword) {
  console.log("VALID")
  try {
    return await bcrypt.compare(newPassword, this.password)
  } catch (error) {
    throw new Error(error)
  }
}

const User = mongoose.model('User', UserSchema)
module.exports = User