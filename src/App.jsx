import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import Error from './pages/Error'
import ProtectedRoute from './componets/ProtectedRoute'
function App() {
  return (
      <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Success" element={<ProtectedRoute element={<Success/>}/>}></Route>
      <Route path="/*" element={<Error/>}></Route>
      </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
