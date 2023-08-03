import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { RoutineProvider } from './context/RoutineContext'

import RegisterPage from './pages/register/RegisterPage'
import LoginPage from './pages/register/LoginPage'
import RoutinesPage from './pages/routines/RoutinesPage'
import RoutineCreatePage from './pages/routines/RoutineCreatePage'
import ProtecterRoute from './ProtecterRoute'
import HomePage from './pages/home/HomePage'

import './css/styles.css'


function App() {
    return (
        <AuthProvider>
            <RoutineProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='/login' element={<LoginPage/>}/>
                        <Route path='/register' element={<RegisterPage/>}/>

                        <Route element={<ProtecterRoute/>}>
                            <Route path='/routines' element={<RoutinesPage/>}/>
                            <Route path='/create-routine' element={<RoutineCreatePage/>}/>
                            <Route path='/routines/:id' element={<h1>view routine</h1>}/>
                            <Route path='/routines/edit-routine/:id' element={<h1>edit routine</h1>}/>

                            <Route path='/program' element={<h1>program</h1>}/>

                            <Route path='/workout' element={<h1>workout</h1>}/>
                            
                            <Route path='/exercises' element={<h1>exercises</h1>}/>
                            <Route path='/measures' element={<h1>measures</h1>}/>
                            <Route path='/history' element={<h1>history</h1>}/>
                        </Route>

                    </Routes>
                </BrowserRouter>
            </RoutineProvider>
        </AuthProvider>
    )
}

export default App
