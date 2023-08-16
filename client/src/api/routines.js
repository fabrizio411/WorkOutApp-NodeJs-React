import axios from './axios'

export const getRoutinesRequest = () => axios.get('/routines')
export const getOneRoutineRequest = (id) => axios.get(`/routines/${id}`)

export const createRoutinesRequest = (routine) => axios.post('/routines', routine)
export const deleteRoutinesRequest = (id) => axios.delete(`/routines/${id}`)
