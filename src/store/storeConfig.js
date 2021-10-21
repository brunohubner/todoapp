import { combineReducers, createStore } from "redux"
import descriptionReducer from "./reducers/descriptionReducer"
import listReducer from "./reducers/listReducer"

const reducers = combineReducers({
    description: descriptionReducer,
    list: listReducer
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()

export default function storeConfig() {
    return createStore(reducers, devTools)
}