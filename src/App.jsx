import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import NotFound from './components/NotFound.jsx'
import Header from './components/Header.jsx'

import {Route, Routes} from "react-router-dom"

import './App.css'

function App() {
  return (
       
      <Routes>
        <Route path="/" element={<><Home/></>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>   

  )
}

export default App
