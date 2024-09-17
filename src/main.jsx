import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Protected from './config/Protected.jsx'
import Home from './screen/Home.jsx'
import Login from './screen/Login.jsx'
import Register from './screen/Register.jsx'


const router = createBrowserRouter([{
  path : "/",
  element : <App/>,
  children : [
    {
      path : "",
      element :<Protected component={<Home/>}/>
    },
    {
      path : "login",
      element :<Login/>
    },
    {
      path : "Register",
      element :<Register/>
    },
  ]

}])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}>

 </RouterProvider>
)
