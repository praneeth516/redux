import * as types from "./actionTypes"

const userLoginReq=()=>{
    return{
        type:types.USER_LOGIN_REQUEST
    }
}
const userLoginSuc=(payload)=>{
    return{
        type:types.USER_LOGIN_SUCCESS,
        payload
    }
}
const userLoginFail=()=>{
    return{
        type:types.USER_LOGIN_FAILURE
    }
}
export {userLoginFail,userLoginReq,userLoginSuc}