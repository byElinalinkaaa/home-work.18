import { combineReducers } from "redux";
import {createStore} from "redux"
import authReducer from "./register/registerReducer";
import todoReducer from "./todo/todoReducer";

const rootReducer = combineReducers({auth: authReducer, todo: todoReducer})

export const store  = createStore(rootReducer)