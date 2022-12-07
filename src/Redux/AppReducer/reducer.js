import * as types from "./actiontypes"

const initialState={
    todos:[],
    isLoading:false,
    isError:false
}
const reducer = (oldState=initialState,action)=>{
   
    switch(action.type){
        case types.GET_ADD:
            return{
                ...oldState,
                todos:action.payload,
                isLoading:false
            }
        case types.GET_REDUCE:
            return{
                ...oldState,
                isError:true,
                isLoading:false
            }    
        case types.ADD:
            return{
                ...oldState,
                isLoading:false,
                todos:action.payload
            }
        case types.REDUCE:
            return{
               ...oldState,
                todos:oldState.todos.filter((el) => el.id !== action.payload)
            }    
        default:
            return oldState
    }
}
export {reducer}