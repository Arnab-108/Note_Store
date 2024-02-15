import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({children}) => {
    const auth = localStorage.getItem("auth")
    //const {isAuth} = useContext(authProvider)

    if(!auth){
        return <Navigate to="/" />
    }
    return children
}
