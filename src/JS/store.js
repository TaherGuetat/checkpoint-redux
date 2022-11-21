import { createStore } from "redux";
import { todoReducers } from "./reducer/todoReducers";
const devTools=  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store=createStore(todoReducers,devTools)