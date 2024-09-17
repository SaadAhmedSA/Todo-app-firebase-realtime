import React, { useRef } from 'react'
import { TextField,Button ,Box, Typography} from '@mui/material'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Firbaseconfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const email = useRef()
  const password = useRef()
  const navigate = useNavigate()
const login = (event)=>{
event.preventDefault()

    signInWithEmailAndPassword(auth,email.current.value , password.current.value)
      .then((userCredential) => {
      const user = userCredential
      console.log(user);
      
        navigate('/')

      })
      .catch((error) => {
  
        const errorMessage = error.message;
        console.log(errorMessage);
        
      });
email.current.value =""
password.current.value="";
}

  return (
    <Box sx={{height:"90vh"}} className='div d-flex justify-content-center align-items-center' >
     <form onSubmit={login} className='d-flex justify-content-center md-w-50  flex-column'>
      <Typography variant='h5' className='text-center'>Login</Typography><br />
     <TextField type='email' id="outlined-basic" label="Email" variant="outlined" required inputRef={email}/><br />
     <TextField type='password' id="outlined-basic" label="Password" variant="outlined" required inputRef={password}/><br /> 
     <Button type="submit" variant="contained">Sign in</Button>
     </form>
      </Box>
  )
}

export default Login