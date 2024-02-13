
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from '../Pages/Homepage'
import { Login } from '../Component/Login'
import { Signup } from '../Component/Signup'
import { InsidePage } from '../Pages/InsidePage'

export const MainRoutes = () => {
  return (
    <>
       <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/inside" element={<InsidePage />} />
       </Routes>
    </>
  )
}
