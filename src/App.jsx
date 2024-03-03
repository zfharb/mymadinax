import Home from './components/Home.jsx'
import Signin from './components/Signin.jsx'
import Signup from './components/Signup.jsx'
import AboutUs from './components/AboutUs.jsx'
import NotFound from './components/NotFound.jsx'

import {Route, Routes} from "react-router-dom"


function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<><Home/></>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/aboutUs" element={<AboutUs/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>  
      </div> 
 

  )
}

export default App
