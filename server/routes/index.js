const express = require('express')
const router = express.Router()
const mainController = require('../controlers/mainController')

// App Routes
router.get('/routines', mainController.routines);
router.get('/profile', mainController.profile);





module.exports = router