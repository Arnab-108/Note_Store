import axios from "axios"
import { GET_USER_SUCCESS, PATCH_USER_SUCCESS, USER_FAILURE, USER_LOADING } from "./actionType"
import { defineStyle } from "@chakra-ui/react"
const token = localStorage.getItem("token")
export const getUser=(dispatch)=>{
    dispatch({type:USER_LOADING})
    axios.get(`http://localhost:8080/user`,{
        headers:{
            Authorization: `Barer ${token}`
        }
    }).then((res)=>{
        console.log(res,"res")
        dispatch({type:GET_USER_SUCCESS , payload:res.data})
    }).catch((res)=>{
        dispatch({type:USER_FAILURE})
    })
}

export const editUser= (obj,id)=>(dispatch)=>{
    dispatch({type:USER_LOADING})
    return axios.patch(`http://localhost:8080/user/${id}`,obj,{
        headers:{
            Authorization: `Barer ${token}`
        }
    }).then((res)=>{
        console.log(res)
        dispatch({type:PATCH_USER_SUCCESS})
        dispatch(getUser)
    }).catch(()=>{
        dispatch({type:USER_FAILURE})
    })
}