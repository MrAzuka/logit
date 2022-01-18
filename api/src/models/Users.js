const { Schema, model } = require('mongoose')
const {emailCheck, passwordCheck} = require('../services/schemaValidator')

const userSchema = new Schema({
    username: {
        type: String,
        unique: [true, "Choose a unique username"],
        trim: true,
        required: [true, "Username is required"],
    },
    email: {
        type: String,
        unique: [true, "Choose a unique email"],
        trim: true,
        lowercase: true,
        required: [true, "Email is required"],
        validate: emailCheck
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        validate: passwordCheck
    }
},
{ timestamps: true })


module.exports = model("User", userSchema)