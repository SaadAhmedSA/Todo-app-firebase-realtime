import React, { useRef } from 'react'
import { TextField,Button ,Box} from '@mui/material'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firbaseconfig";
import {useNavigate} from 'react-router-dom'

const Register = () => {
  const email = useRef()
  const password = useRef()
  const navigate = useNavigate()
const regiter = (event)=>{
event.preventDefault()

createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => { 
    const user = userCredential.user;
    navigate('/login')
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage)
  });
}

  return (
    <Box sx={{height:"100vh"}} className='div d-flex justify-content-center align-items-center' >
     <form onSubmit={regiter} className='d-flex justify-content-center w-50 flex-column'>
      <h2 className='text-center'>Register</h2><br />
     <TextField type='email' id="outlined-basic" label="Email" variant="outlined" required inputRef={email}/><br />
     <TextField type='password' id="outlined-basic" label="Password" variant="outlined" required inputRef={password}/><br /> 
     <Button type="submit" variant="contained">Sign Up</Button>
     </form>
      </Box>
  )
}

export default Register