import axios from './axios'

export const getRoutinesRequest = () => axios.get('/routines')
export const getOneRoutineRequest = (id) => axios.get(`/routine/${id}`)

export const createRoutinesRequest = (routine) => axios.post('/routines', routine)
export const updateRoutinesRequest = (routine) => axios.put(`/routine/${routine._id}`, routine)
export const deleteRoutinesRequest = (id) => axios.delete(`/routine/${id}`)
