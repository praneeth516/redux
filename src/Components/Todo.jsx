import React from 'react'
import TodoInput from './TodoInput'
import {useSelector,useDispatch,shallowEqual} from "react-redux"
import { add, getAdd, getReduce, reduce } from '../Redux/AppReducer/action'
import axios from "axios"
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'



const Todo = () => {
  

    const {todos,isLoading,isError}= useSelector((state)=>{return {
     todos:state.AppReducer.todos,
     isLoading:state.AppReducer.isLoading,
     isError:state.AppReducer.isError
    }},shallowEqual)
    const dispatch = useDispatch()
 const [isCompleted,setIsCompleted] =useState()

    const getTodo=()=>{
       return axios.get("http://localhost:8080/todos").then((res)=>{
            dispatch(getAdd(res.data))
          //  console.log(res.data)
        }).catch((err)=>{
            dispatch(getReduce())
        })
    }

    useEffect(()=>{
        getTodo()
       
    },[])
    const addTodo =(title)=>{
        if(title){
        const payload = {
            title,status:false
        }
       return axios.post("http://localhost:8080/todos",payload).then((res)=>{
         dispatch(add(res.data))
        console.log(res.data)
        }).catch((err)=> {
            // dispatch(reduce())
            console.log(err)
        })
        }}



    const handleAddTodo =(text)=>{
       addTodo(text).then(()=>getTodo())
    }
      const handleDelete=(id)=>{
      axios.delete(`http://localhost:8080/todos/${id}`).then((res)=>{
          dispatch(reduce(id))
          console.log(res,id)
      }).catch((err)=>{
        console.log(err)
      })
      }
  return (
    <div>
      <h1>todo</h1>
      <TodoInput handleAddTodo={handleAddTodo}/>
      {todos?.length>0 && todos.map(item=>{
        return <div key={item.id}><Link to={`/todoPage/${item.id}`}>{item.title}</Link>
        <input type="checkbox" key={item.id}  onChange={(e)=>setIsCompleted(e.target.value)}/>
        <button onClick={()=>handleDelete(item.id)}>delete</button>
        </div>
      })}
      
      <br></br>
      <Link to="/">login</Link>
      
    </div>
  )
}

export default Todo
