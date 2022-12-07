import {legacy_createStore,combineReducers,applyMiddleware,compose} from "redux"

import { reducer as AppReducer } from "./AppReducer/reducer"
import {reducer as AuthReducer} from "./AuthReducer/reducer"

const rootReducer = combineReducers({AppReducer,AuthReducer})

const logger1 = (state)=>(next)=>(action)=>{
    // state => reduxStore
    //action
    // console.log("inside logger1-a")
   next(action)
    // console.log("inside logger1-b")
    
    
}
const logger2 = (state)=>(next)=>(action)=>{
    // console.log("inside logger2-c")
   next(action)
    // console.log("inside logger2-d")
    
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(logger1,logger2)))



export {store}