const express = require('express')
const router = express.Router()
const homeController = require('../controlers/homeController')

// App Routes
router.get('/', homeController.homepage);
router.get('/sign-in', homeController.signIn)
router.get('/sign-up', homeController.signUp)
router.post('/sign-up', homeController.signUpUserCreate)


module.exports = router