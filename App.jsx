import React from 'react'
import Login from './Login'
import Register from './Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register />}></Route>
      <Route path='Login /' element={<Login />}></Route>
    </Routes>
  
    </BrowserRouter>
  )
}

export default App