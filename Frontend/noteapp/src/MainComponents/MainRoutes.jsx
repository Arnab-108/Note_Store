
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from '../Pages/Homepage'
import { Login } from '../Component/Login'
import { Signup } from '../Component/Signup'
import { InsidePage } from '../Pages/InsidePage'
import { PrivateRoute } from './PrivateRoute'
import { Heading } from '@chakra-ui/react'
import { UserProfile } from '../Pages/UserProfile'

export const MainRoutes = () => {
  return (
    <>
       <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/inside" element={
        <PrivateRoute>
            <InsidePage />
        </PrivateRoute>
        } />
        <Route path='/userProfile' element={
        <PrivateRoute>
          <UserProfile />
        </PrivateRoute>
        } />
        <Route path='*' element={<h1>404 Page not found</h1>} />
       </Routes>
    </>
  )
}
