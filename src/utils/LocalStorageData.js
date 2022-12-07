
const getLocalData=(key)=>{
    try{
         let data=localStorage.getItem(key)
    data=JSON.parse(data)
    console.log(data)
    return data

    }catch(e){
        return null
    }
   
}

const saveData=(key,value)=>{
   localStorage.setItem(key,JSON.stringify(value))
   console.log("value==",value,key)
}
export {getLocalData,saveData}