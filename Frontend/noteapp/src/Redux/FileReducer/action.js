import axios from "axios"
import { DELETE_FILE_SUCCESS, FILE_FAILURE, FILE_LOADING, GET_FILE_SUCCESS, PATCH_FILE_SUCCESS, POST_FILE_SUCCESS } from "./actionType"

const token = localStorage.getItem("token")

export const getFile=(dispatch)=>{
    dispatch({type:FILE_LOADING})
    axios.get("http://localhost:8080/pdf",{
        headers:{
            Authorization: `Baerer ${token}`
        }
    }).then((res)=>{
        console.log(res)
        dispatch({type:GET_FILE_SUCCESS , payload:res.data})
    }).catch((err)=>{
        dispatch({type:FILE_FAILURE})
    })
}

export const postFile =(obj)=>(dispatch)=>{
    dispatch({type:FILE_LOADING})
    return axios.post("http://localhost:8080/pdf/upload",obj,{
        headers:{
            Authorization: `Baerer ${token}`,
            'Content-Type':'multipart/form-data'
        }
    }).then((res)=>{
        console.log(res)
        dispatch({type:POST_FILE_SUCCESS})
    }).catch((err)=>{
        dispatch({type:FILE_FAILURE})
    })
}

export const patchFile=(obj,id)=>(dispatch)=>{
    dispatch({type:FILE_LOADING})
    return axios.patch(`http://localhost:8080/pdf/${id}`,obj,{
        headers:{
            Authorization:`Baerer ${token}`
        }
    }).then((res)=>{
        console.log(res)
        dispatch({type:PATCH_FILE_SUCCESS})
        dispatch(getFile)
    }).catch((err)=>{
        dispatch({type:FILE_FAILURE})
    })
}

export const deleteFile=(id)=>(dispatch)=>{
    dispatch({type:FILE_LOADING})
    return axios.delete(`http://localhost:8080/pdf/${id}`,{
        headers:{
            Authorization:`Baerer ${token}`
        }
    }).then((res)=>{
        console.log(res)
        dispatch({type:DELETE_FILE_SUCCESS})
        dispatch(getFile)
    }).catch((err)=>{
        dispatch({type:FILE_FAILURE})
    })
}

