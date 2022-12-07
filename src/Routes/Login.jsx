import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userLoginFail, userLoginReq, userLoginSuc } from '../Redux/AuthReducer/action'
import { saveData } from '../utils/LocalStorageData'

const Login = () => {
    const [email,setEmail]= useState("eve.holt@reqres.in")
    const [password,setPassword] = useState("cityslicka")
 const dispatch = useDispatch()
const navigate = useNavigate()
    const login =()=>{
        const payload={
       email,
       password
        }
        dispatch(userLoginReq())
        axios.post("https://reqres.in/api/login",payload).then((res)=>{

  dispatch(userLoginSuc(res.data.token))
  saveData("tokens",res.data.token)
  navigate("/HomePage")

        }).catch((err)=>{
            
            dispatch(userLoginFail())
            alert("wrong credentials")
        })
    }
  return (
    <div>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="EMAIL"/><br></br>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="PASSWORD"/><br></br>
      <button onClick={login}>Login</button>

    </div>
  )
}

export default Login
