import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import Admin from './Admin'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <div>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/admin" element={<PrivateRoute><Admin/></PrivateRoute>}/>
</Routes>
    </div>
  )
}

export default AllRoutes