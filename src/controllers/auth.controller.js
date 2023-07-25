import bcrypt from 'bcryptjs'
import {createAccesToken} from '../libs/jwt.js'
import User from '../models/user.model.js'
import Exercise from '../models/exercise.model.js'
import Record from '../models/record.model.js'
import Program from '../models/program.model.js'

export const register = async (req, res) => {
    const {username, email, password} = req.body

    try {
        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            username, 
            email, 
            password: passwordHash,
            workouts: 0,
            weightGoal: 'GAIN'
        })
        const userSaved = await newUser.save()

        const token = await createAccesToken({ id: userSaved._id })
        res.cookie('token', token)

        const exercises = await Exercise.find({ isCustom: false })
        exercises.forEach(async (item) => {
            const newRecord = new Record({
                exercise: item._id,
                mainData: {
                    total: 0,
                    max: [[0, ''], [0, ''], [0, '']],
                    average: 0,
                    averageCounter: 0
                },
                secondaryData: {
                    total: 0,
                    max: [[0, ''], [0, ''], [0, '']],
                    average: 0,
                    averageCounter: 0
                },
                user: userSaved._id
            })
            await newRecord.save()
        })

        const newProgram = new Program({
            mon: [],
            tue: [],
            wed: [],
            thu: [],
            fri: [],
            sat: [],
            sun: [],
            user: userSaved._id
        })
        await newProgram.save()

  
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            cratedAt: userSaved.createdAt
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const login = async (req, res) => {
    const {username, password} = req.body

    try {
        const userFound = await User.findOne({username})

        if (!userFound) return res.status(400).json({message: 'User not found'})
        const isMatch = await bcrypt.compare(password, userFound.password)
        if (!isMatch) return res.status(400).json({message: 'Incorrect password'})

        const token = await createAccesToken({id: userFound._id})
        res.cookie('token', token)
  
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            cratedAt: userFound.createdAt
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

export const home = async (req, res) => {
    try {
        const userFound = await User.findById(req.user.id)

        if (!userFound) return res.status(400).json({message: 'User not found'})
    
        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            cratedAt: userFound.createdAt
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }


}