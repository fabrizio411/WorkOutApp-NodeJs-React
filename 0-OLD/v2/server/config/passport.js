const passport = require('passport')
const localSrategy = require('passport-local').Strategy
const User = require('../models/User')



passport.use(new localSrategy({
    usernameField: 'name'
}, async(name, password, done) => {
    const userReq = await User.findOne({name: name})
    if (!userReq) {
        // done("errores", "Si existe usuario", "mensaje")
        return done(null, false, {message: 'Not user found'})
    } else {
        const match = await userReq.matchPassword(password)
        if (match) {
            return done(null, userReq)
        } else {
            return done(null, false, {message: 'Incorrect Password'})
        }
    }
}))


passport.serializeUser((user, done) => {  // Almacenamos en sesion el id del usuario
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => { // Generamos un usuario con su id
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});