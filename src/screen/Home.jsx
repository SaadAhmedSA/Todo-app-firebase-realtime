
import React, { useEffect, useRef, useState } from 'react'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc, serverTimestamp, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from '../config/Firbaseconfig';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
// import BasicCard from '../components/Card';
import Typography from '@mui/material/Typography'


const Home = () => {
  //state 
  const [data, setData] = useState([]);

  //form
  
  
  
  // Getting data wwith useEffect
  useEffect(() => {
    async function getDataFromFirestore() {
      
      const ref = query(collection(db, "todo"),orderBy("Posttime","asc") );
      const unsubscribe = onSnapshot(ref, (querySnapshot) => {
        const newData = [];
        querySnapshot.forEach((doc) => {
          newData.push({ docId: doc.id, ...doc.data() })
        })
        setData(newData)
      })
   
        }
        getDataFromFirestore()
        
        
        console.log(data); 
      }, [])
      
      
      const todo = useRef()
      //add todo function
      const addTodo = async (event) => {
        event.preventDefault();
  
        try {
          const docRef = await addDoc(collection(db, "todo"), {
        todo: todo.current.value,
        Posttime : serverTimestamp()
      });
      console.log("Document written with ID: ", docRef.id);
      todo.current.value = '';
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

  const editTodo = async (index) => {
    const editedValue = prompt("Enter New todo")
    console.log(`todo index is ${index} and value is ${editedValue}`);
    const updatedTodo = doc(db, "todo", data[index].docId);
    updateDoc(updatedTodo, {
      todo: editedValue
    })
      setData([...data]);
    }


  // }

  const deleteTodo = async (index) => {
    console.log('todo deleted', index);
    await deleteDoc(doc(db, "todo", data[index].docId));
   
  }
  console.log(data);
  

  return (
    <Box className='d-flex justify-content-center flex-column align-items-center gap-5'>
     

      <form onSubmit={addTodo} className='d-flex justify-content-center mt-5 w-70 gap-3'>
        <TextField id="filled-basic" label="Todo" variant="filled" inputRef={todo} required min={6} />
        <Button variant="contained" type='submit'>Add Todo</Button>
      </form>
      <Box>
        {data.length > 0 ? data.map((item, index) => {

          return <Box key={index} className="bg-black text-white p-5 gap-5 m-2 rounded ga">
                 <Typography variant="h5">{item.todo}</Typography>
                 <Button variant="contained" onClick={()=>{editTodo(index)}}>Edit</Button>
                 <Button variant="contained" onClick={()=>{deleteTodo(index)}}>Delete</Button>
          </Box>
        }):<h1>No Todo</h1>
         
        }
      </Box>
    </Box>
  )
}

export default Home
