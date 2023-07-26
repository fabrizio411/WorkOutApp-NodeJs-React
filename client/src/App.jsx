import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>}/>
        <Route path='/login' element={<h1>login</h1>}/>
        <Route path='/register' element={<h1>register</h1>}/>

        <Route path='/routines' element={<h1>routines</h1>}/>
        <Route path='/create-routine' element={<h1>create routine</h1>}/>
        <Route path='/routines/:id' element={<h1>view routine</h1>}/>
        <Route path='/routines/edit-routine/:id' element={<h1>edit routine</h1>}/>

        <Route path='/program' element={<h1>program</h1>}/>

        <Route path='/workout' element={<h1>workout</h1>}/>

        <Route path='/exercises' element={<h1>exercises</h1>}/>

        <Route path='/measures' element={<h1>measures</h1>}/>

        <Route path='/history' element={<h1>history</h1>}/>



      </Routes>
    </BrowserRouter>
  )
}

export default App
