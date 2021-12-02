import { createStore,combineReducers } from "redux";
import todoReducer from "./todoReducer";
import weatherReducer from './weatherReducer'

const reducers = combineReducers({todoReducer,weatherReducer})

export const store = createStore(reducers);

