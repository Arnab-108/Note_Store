import { GET_USER_SUCCESS, PATCH_USER_SUCCESS, USER_FAILURE, USER_LOADING } from "./actionType"

const initState={
    isLoading:false,
    user:[],
    isError:false,
}

export const reducer = (state=initState , {type,payload})=>{
    switch(type){
        case USER_LOADING:
            return {...state,isLoading:true,isError:false}
        case GET_USER_SUCCESS:
            return {...state,isLoading:false,isError:false,user:payload}
        case PATCH_USER_SUCCESS:
            return {...state,isLoading:false,isError:false}
        case USER_FAILURE:
            return {...state,isLoading:false,isError:true}
        default:
            return state
    }
}