import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firbaseconfig'
import { useNavigate } from 'react-router-dom'

const Protected = ({component}) => {
    const [user, setuser]= useState(false)
    const navigate =  useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        if(!user){
           navigate('/login') 
           return
        }
        // console.log(user);
        
        setuser(true)
    })
  },[])
  return (
    user?component:<h1 className='text-center' >Loading.....</h1>
  )
}

export default Protected