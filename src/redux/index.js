import {createStore,combineReducers,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import PostReducer from './post/reducer'
import NavReducer from './nav/reducer'
import thunkMiddleware from 'redux-thunk'
const mainReducer = combineReducers({
    post:PostReducer,
    nav:NavReducer
})
const store = createStore(mainReducer,composeWithDevTools(applyMiddleware(thunkMiddleware)))
export default store;