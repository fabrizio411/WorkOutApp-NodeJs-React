import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { RoutineProvider } from './context/RoutineContext'

import RegisterPage from './pages/register/RegisterPage'
import LoginPage from './pages/register/LoginPage'
import RoutinesPage from './pages/routines/RoutinesPage'
import RoutineCreatePage from './pages/routines/RoutineCreatePage'
import ProtecterRoute from './ProtecterRoute'
import HomePage from './pages/home/HomePage'
import { NavProvider } from './context/NavContext'
import ProfilePage from './pages/profile/ProfilePage'
import ExercisesPage from './pages/exercises/ExercisesPage'
import MeasuresPage from './pages/measures/MeasuresPage'
import CalendarPage from './pages/calendar/CalendarPage'
import SettingsPage from './pages/settings/SettingsPage'
import { ExerciseProvider } from './context/ExerciseContext'
import ExerciseCreatePage from './pages/exercises/ExerciseCreatePage'
import ExerciseViewPage from './pages/exercises/ExerciseViewPage'
import ExerciseUpdatePage from './pages/exercises/ExerciseUpdatePage'
import RoutineViewPage from './pages/routines/RoutineViewPage'
import RoutineEditPage from './pages/routines/RoutineEditPage'

function App() {
    return (
        <AuthProvider>
            <RoutineProvider>
                <ExerciseProvider>
                    <NavProvider>
                        <BrowserRouter>
                            <Routes>
                                <Route path='/' element={<h1>Landing page</h1>}/>
                                <Route path='/login' element={<LoginPage/>}/>
                                <Route path='/register' element={<RegisterPage/>}/>
                                    
                                <Route element={<ProtecterRoute/>}>
                                    <Route path='/home' element={<HomePage/>}/>
                                    <Route path='/program' element={<h1>program</h1>}/>
                                    <Route path='/workout' element={<h1>workout</h1>}/>

                                    <Route path='/profile' element={<ProfilePage/>}/>
                                    <Route path='/history' element={<h1>history</h1>}/>

                                    <Route path='/routines' element={<RoutinesPage/>}/>
                                    <Route path='/create-routine' element={<RoutineCreatePage/>}/>
                                    <Route path='/routines/:id' element={<RoutineViewPage/>}/>
                                    <Route path='/edit-routine/:id' element={<RoutineEditPage/>}/>

                                    <Route path='/exercises' element={<ExercisesPage/>}/>
                                    <Route path='/create-exercise' element={<ExerciseCreatePage/>}/>
                                    <Route path='/edit-exercise/:id' element={<ExerciseUpdatePage/>}/>
                                    <Route path='/exercises/:id' element={<ExerciseViewPage/>}/>

                                    <Route path='/measures' element={<MeasuresPage/>}/>

                                    <Route path='/calendar' element={<CalendarPage/>}/>

                                    <Route path='/settings' element={<SettingsPage/>}/>
                                </Route>

                            </Routes>
                        </BrowserRouter>
                    </NavProvider>
                </ExerciseProvider>
            </RoutineProvider>
        </AuthProvider>
    )
}

export default App
