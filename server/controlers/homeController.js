const mongoose = require('mongoose')
const User = require('../models/User')
const Record = require('../models/Record')



// GET Index
exports.homepage = async(req, res) => {
    const locals = {title: 'WorkOutApp',}
    res.render('index', {
        locals,
        layout: '../views/layouts/home'
    })
}





// GET Sign In
exports.signIn = async(req, res) => {
    const locals = {title:'Sign In | WorkOutApp'}

    res.render('sign-in', {
        locals, 
        layout: '../views/layouts/home'
    })
}






// GET Sign up
exports.signUp = async(req, res) => {
    const locals = {title:'Sign In | WorkOutApp'}
    const errors = []

    res.render('sign-up', {
        errors,
        locals, 
        layout: '../views/layouts/home'
    })
}

// POST Sign Up (create user)
exports.signUpUserCreate = async(req, res) => {
    const { name, email, password, confirm_password } = req.body
    const errors = []
    if (password !== confirm_password) {
        errors.push({text: 'Password do not match'})
    }
    if (password.length < 4) {
        errors.push({text: 'Password mus be at least 4 characters'})
    }
    if (errors.length > 0) {
        res.render('sign-up', {
            errors,
            name, 
            email, 
            password, 
            confirm_password,
            layout: '../views/layouts/home'
        })
    } else {
        const emailUser = await User.findOne({ email: email})
        const nameUser = await User.findOne({ name: name})
        if (emailUser) {
            errors.push({text: 'The email is already registered'})
            res.render('sign-up', {
                errors,
                name, 
                email, 
                password, 
                confirm_password,
                layout: '../views/layouts/home'
            })
        } else if (nameUser) {
            errors.push({text: 'The username is not available'})
            res.render('sign-up', {
                errors,
                name, 
                email, 
                password, 
                confirm_password,
                layout: '../views/layouts/home'
            })
        } else {
            const newUser = new User({name, email, password})
            newUser.password = await newUser.encryptPassword(password)
            await newUser.save()

            const newRecord = {
                user: newUser._id,
                workouts: {
                    total: 0,
                    dates: []
                },
                exercises: []
            }
            await Record.create(newRecord)
            res.redirect('/sign-in')
        }
    }
}
