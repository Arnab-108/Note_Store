import { DELETE_FILE_SUCCESS, FILE_FAILURE, FILE_LOADING, GET_FILE_SUCCESS, PATCH_FILE_SUCCESS, POST_FILE_SUCCESS } from "./actionType"

const initState={
    isLoading:false,
    file:[],
    isError:false
}

export const reducer = (state=initState , {type,payload})=>{
    switch(type){
        case FILE_LOADING:
            return {...state , isLoading:true , isError:false}
        case GET_FILE_SUCCESS:
            return {...state,isLoading:false , isError:false ,file:payload }
        case POST_FILE_SUCCESS:
            return {...state,isLoading:false,isError:false}
        case PATCH_FILE_SUCCESS:
            return {...state , isLoading:false, isError:false}
        case DELETE_FILE_SUCCESS:
            return {...state , isLoading:false , isError:false}
        case FILE_FAILURE:
            return {...state , isLoading:false , isError:true}
        default:
            return state
    }

}