import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as userReducer } from "./UserRedux/reducer";
import {thunk} from "redux-thunk"

const rootReducers = combineReducers({
    userReducer
})

export const store= legacy_createStore(rootReducers , applyMiddleware(thunk))