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

//delete token

userSchema.methods.deleteToken=function(token,cb){
    const user=this;

    user.update({$unset : {token :1}},function(err,user){
        if(err) return cb(err);
        cb(null,user);
    })
}


module.exports = model("User", userSchema)