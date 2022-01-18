const validate = require('mongoose-validator')
// ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&-+=()!? "])$
//  a password containing atleast 1 lower case letter, 1 upper case letter, 1 digit and one of the mentioned special characters and which must be between 8 to 128 characters in length.

exports.passwordCheck = [
    validate({
    validator: 'isLength',
    arguments: [8, 128],
    message: 'password should be between {ARGS[0]} and {ARGS[1]} characters',
    }),
    validate({
        validator: 'matches',
        arguments: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&-+=()!? "])$/i
    })

]

exports.emailCheck = [
    validate({
        validator: 'isEmail',
        message: 'must be valid email format'
    })
]