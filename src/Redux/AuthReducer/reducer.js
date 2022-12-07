import { getLocalData, saveData } from "../../utils/LocalStorageData"
import * as types from "./action"

const authState={
    isAuth:false,
    token:"",
    isLoading:false,
    isError:false
}
const reducer = (oldState=authState,action)=>{
    const {type,payload} = action
    switch(type){
        case types.userLoginReq:
            return{
                ...oldState,
                isLoading:true
            }
        case types.userLoginSuc:
           
           saveData("token",payload)
            return{
                ...oldState,
              isLoading:false,
              token:payload,
              isAuth:true
            }  
        case types.userLoginFail:
            return{
                ...oldState,
                isLoading:false,
                token:"",
                isError:true,
                isAuth:false
            }      
        default:
            return oldState
    }
}
export {reducer}