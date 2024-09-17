import React from 'react'
import ResponsiveAppBar from "./components/Nvbar.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
<>
<ResponsiveAppBar/>
<Outlet/>
</>
  )
}

export default App