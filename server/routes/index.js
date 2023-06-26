const express = require('express')
const router = express.Router()
const mainController = require('../controlers/mainController')

// App Routes
router.get('/profile', mainController.profile);

// ROUTINES ROUTES
router.get('/routines', mainController.routines); 
router.get('/routines/:id', mainController.routineView);
router.get('/routines/edit-routine/:id', mainController.routineEdit);
router.delete('/routines/routine-delete/:id', mainController.routineDelete);
router.get('/create-routine', mainController.routineCreate);





module.exports = router