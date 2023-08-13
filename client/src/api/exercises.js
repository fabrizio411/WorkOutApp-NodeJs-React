import axios from './axios'

export const getExercisesRequest = () => axios.get('/exercises')

export const createExercisesRequest = (exercise) => axios.post('/exercises', exercise)

export const deleteExerciseRequest = (id) => axios.delete(`/exercises/${id}`)
