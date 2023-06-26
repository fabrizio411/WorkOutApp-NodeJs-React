require('dotenv').config();
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const connectDB = require('./server/config/db')
const session = require('express-session')
const passport = require('passport')
const MongoStore = require('connect-mongo')
const methodsOverride = require('method-override')

const app = express()
const port = 5000 || process.env.PORT

// initialise passport
// app.use(passport.initialize())
// app.use(passport.session())

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Connect to DataBase
connectDB()


//Static Files
app.use(express.static('public'))

// Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

// Method Override
app.use(methodsOverride("_method"));

// Routes 
app.use('/', require('./server/routes/index'))
app.use('/', require('./server/routes/home'))

// Handle 404 
app.get('*', (req, res) => {
    res.status(404).send('404 Page Not Found')
    // res.status(404).render('404')    - Para llevar a ua pagina custom
}) 


app.listen(port, () => {
    console.log('App listening')
})
