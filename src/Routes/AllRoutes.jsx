import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomePage from './HomePage'
import Login from './Login'
import TodoPage from "./TodoPage"

const AllRoutes = () => {
  return (
    <div>
      <Routes>
           <Route path='/' element={<Login />} />
           <Route path='/todoPage/:id' element={<TodoPage />} />
           <Route path='/HomePage' element={<HomePage />}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
