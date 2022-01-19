const bcrypt = require('bcrypt')
const User = require('../models/User')
const {token} = require('../services/token')

exports.createAccount = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const salt = await bcrypt.genSalt(11)
        const hashedPassword = await bcrypt.hash(password, salt)

        const createUser = new User({
            username: username,
            email: email,
            password: hashedPassword
        })
        
        await createUser.save()
        const newToken = token(email, username)
        
        res.status(200).json({ message: "User created", newToken })
    } catch (err) {
        console.log(err)
        res.status(500).json({ Error: err })
    }
}



exports.loginAccount = async (req, res) => {
    const { email, password } = req.body
    try {
        // Check if email exist
        const user = await User.findOne({ email: email })
        if (!user) {
            res.status(400).json({ message: "Email doesn't exist" })
        }
        // Check if password is a match
        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            res.status(400).json({ message: "Incorrect Password" })
        }

        const token = token(user.email, user.username)

        res.status(200).json({ message: "User loggedIn", token, userId: user._id })
    } catch (err) {
        console.log(err)
        res.status(500).json({ Error: err })
    }
}

exports.logoutAccount = (req,res) => {
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200);
    });
}

exports.getSignupPage =  (req,res) => {
    res.status(200).json("Register")
}

exports.getLoginPage =  (req,res) => {
    res.status(200).json("Register")
}