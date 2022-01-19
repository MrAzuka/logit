const jwt = require('jsonwebtoken')
require('dotenv').config()
const { JWT_SECRET, JWT_EXPIRES } = process.env

 exports.token = (email, username) => {
     jwt.sign({
    email: email, username: username
}, JWT_SECRET, {
   expiresIn: JWT_EXPIRES,
})
}