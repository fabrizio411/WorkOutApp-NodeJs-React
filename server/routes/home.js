const express = require('express')
const router = express.Router()
const homeController = require('../controlers/homeController')
const passport = require('passport')


// App Routes
router.get('/', homeController.homepage);
router.get('/sign-in', homeController.signIn)
router.post('/sign-in', passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/sign-in',
}))

router.get('/sign-up', homeController.signUp)
router.post('/sign-up', homeController.signUpUserCreate)


module.exports = router