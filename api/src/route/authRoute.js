const { Router } = require('express')
const router = Router()
const { createAccount, loginAccount, logoutAccount, getSignupPage,getLoginPage } = require('../controller/auth')

// POST routes

// @routes /api/signup
// @desc   Signup
router.post('/signup', createAccount)

// @routes /api/login
// @desc   Login
router.post('/login', loginAccount)


// GET routes

// @routes /api/signup
// @desc   Get signup page
router.get('/signup', getSignUpPage)

// @routes /api/login
// @desc   Get login page
router.get('/login', getLoginPage)


// @routes /api/logout
// @desc   Logout
router.get('/logout', logoutAccount)

module.exports = router