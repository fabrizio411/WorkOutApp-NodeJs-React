const express = require('express')
const router = express.Router()
const mainController = require('../controlers/mainController')

// App Routes
router.get('/profile', mainController.profile);

router.get('/routines', mainController.routines);
router.get('/routines/item/:id', mainController.routineView);





module.exports = router