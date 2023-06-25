const express = require('express')
const router = express.Router()
const homeController = require('../controlers/homeController')

// App Routes
router.get('/', homeController.homepage);


module.exports = router