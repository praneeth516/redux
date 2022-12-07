

import * as types from "./actiontypes"

const getAdd = (payload)=>{
    return{
        type:types.GET_ADD,
        payload
    }
}
const getReduce = ()=>{
    return{
        type:types.GET_REDUCE
    }
}
const add = (payload)=>{
     return{
        type:types.ADD
     }
}

const reduce = (payload)=>{
    return {
        type:types.REDUCE
    }
}
export {add,reduce,getAdd,getReduce}