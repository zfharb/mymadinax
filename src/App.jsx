import Home from './components/Home.jsx'
import Signin from './components/Signin.jsx'
import Signup from './components/Signup.jsx'
import NotFound from './components/NotFound.jsx'

import {Route, Routes} from "react-router-dom"

import './App.css'

function App() {
  return (
       
      <Routes>
        <Route path="/" element={<><Home/></>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>   

  )
}

export default App
