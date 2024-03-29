import bcrypt from 'bcryptjs'
import User from '../models/user.model.js'
import Exercise from '../models/exercise.model.js'
import Program from '../models/program.model.js'
import { createAccesToken } from '../libs/jwt.js'
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'

export const register = async (req, res) => {
    const {username, email, password} = req.body

    try {
        const userFoundEmail = await User.findOne({ email: email })
        if (userFoundEmail) return res.status(400).json( ['The email is already in use'] )
        const userFoundUsernmae = await User.findOne({ username: username })
        if (userFoundUsernmae) return res.status(400).json( ['The username is already in use'] )

        // Cifrado de contraceña usando BCrypt
        const passwordHash = await bcrypt.hash(password, 10)

        // Crear nuevo usuario
        const newUser = new User({
            username, 
            email, 
            password: passwordHash,
            workouts: 0,
            weightGoal: 'GAIN'
        })
        const userSaved = await newUser.save()

        // Crear token asociado con usuario y mandarlo como cookie
        const token = await createAccesToken({ id: userSaved._id })
        res.cookie('token', token)

        // Crear un documento de Program
        const newProgram = new Program({
            week: [[], [], [], [], [], [], []],
            user: userSaved._id
        })
        await newProgram.save()

  
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const login = async (req, res) => {
    const {username, password} = req.body

    try {
        const userFound = await User.findOne({username})

        if (!userFound) return res.status(400).json(['User not found'])
        const isMatch = await bcrypt.compare(password, userFound.password)
        if (!isMatch) return res.status(400).json(['Incorrect password'])

        const token = await createAccesToken({id: userFound._id})
        res.cookie('token', token)
  
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const logout = async (req, res) => {
    res.cookie('token', '', {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}

export const verifyToken = async (req, res) => {
    const {token} = req.cookies

    if (!token) return res.status(401).json({ message: 'Unauthorized'})

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if (err) return res.status(401).json({ message: 'Unauthorized'})

        const userFound = await User.findById(user.id)
        if (!userFound) return res.status(401).json({ message: 'Unauthorized'})

        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt
        })
    })
}