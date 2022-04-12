import {combineReducers} from "redux";
import {userReducer}from './UserReducres'
import {courReducer}from './courReducre'
import {postReducer}from './postReducer'
import {libraryReducer} from "./libraryReducres"
export const rootReducers=combineReducers({userReducer,courReducer,postReducer,libraryReducer})