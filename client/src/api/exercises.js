import axios from './axios'

export const getExercisesRequest = () => axios.get('/exercises')
export const getOneExerciseRequest = (id) => axios.get(`/exercises/${id}`)

export const createExercisesRequest = (exercise) => axios.post('/exercises', exercise)

export const deleteExerciseRequest = (id) => axios.delete(`/exercises/${id}`)

export const updateExerciseRequest = (id, data) => axios.put(`/edit-exercise/${id}`, data)
export const getExerciseToUpdateRequest = (id) => axios.get(`/edit-exercise/${id}`)
