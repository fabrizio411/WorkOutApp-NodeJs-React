const express = require('express')
const router = express.Router()
const mainController = require('../controlers/mainController')
const {isAuthenticated } = require('../helpers/auth')

// App Routes

// HOME ROUTES
router.get('/home', isAuthenticated, mainController.home);

// PROGRAM ROUTES
router.get('/program', isAuthenticated, mainController.program)



// PROFILE ROUTES
router.get('/profile', isAuthenticated, mainController.profile);



// SETTINGS ROUTES
router.get('/settings', isAuthenticated, mainController.settings);



// ROUTINES ROUTES
router.get('/routines', isAuthenticated, mainController.routines); 
router.get('/routines/:id', isAuthenticated, mainController.routineView);
router.get('/routines/edit-routine/:id', isAuthenticated, mainController.routineEdit);
router.put('/routines/edit-routine/:id', isAuthenticated, mainController.routineEditUpdate);
router.delete('/routines/routine-delete/:id', isAuthenticated, mainController.routineDelete);
router.get('/create-routine', isAuthenticated, mainController.routineCreate);
router.post('/create-routine', isAuthenticated, mainController.routineCreateAdd);

// EXERCISES ROUTES
router.get('/exercises', isAuthenticated, mainController.exercises);
router.post('/exercises', isAuthenticated, mainController.exercisesCreate);
router.delete('/exercises/delete/:id', isAuthenticated, mainController.exerciseDelete);
// CREATE REGULAR EXERCISES ROUTE (DEV)
router.post('/exercises-default', isAuthenticated, mainController.exerciseDefaultCreate)

// WORKOUT REGISTER ROUTES
router.get('/workout/:id', isAuthenticated, mainController.workout)
router.put('/workout/:id', isAuthenticated, mainController.workoutRecord)



// MEASURES ROUTES
router.get('/measures', isAuthenticated, mainController.measures)
router.put('/measures', isAuthenticated, mainController.measuresCreate)







module.exports = router