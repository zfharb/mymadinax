import { useState, useEffect} from 'react'
import { NavLink } from "react-router-dom";


function Header() {

  const [navLink, setNaveLink] = useState('');
  
  useEffect(() => {
    const navLinkEls = document.querySelectorAll('.nav-link')
    navLinkEls.forEach(navLinkEl => {
      navLinkEl.addEventListener('load', () => {
        document.querySelector('.active')?.classList.remove('active');
        navLinkEl.classList.add('active')
      }
    );
   
    })
  }, [navLink])
 
  return (
      <>
        <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
          <div class="container-fluid">
            <NavLink class="navbar-brand"  style={{color: 'black'}} onClick={() => setNaveLink('')} to="/"><h3>MadinaX</h3></NavLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
              <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li class="nav-item">
                          <NavLink  style={( { isActive }) => {                                      
                                      return (isActive 
                                              || window.location.pathname == '/home' 
                                              || window.location.pathname == '/') ? 
                                              { color: "black", fontWeight: "bold" } : {color: 'black'};
                                    }}
                                    class="nav-link text-dark home" 
                                    onClick={() => setNaveLink('home')} 
                                    to="/home">HOME</NavLink>
                        </li>
                        &nbsp;
                        &nbsp;
                        <li class="nav-item">
                          <NavLink  style={({ isActive }) => {
                                      return (isActive || window.location.pathname == '/aboutus') ? { color: "black", fontWeight: "bold" } : {color: 'black'};
                                    }}
                                    class="nav-link text-dark aboutus" 
                                    onClick={() => setNaveLink('aboutus')} 
                                    to="/aboutus">ABOUT US</NavLink>
                        </li>
                        &nbsp;
                        &nbsp;
                        <li class="nav-item ">
                          <NavLink  style={({ isActive }) => {
                                      return (isActive || window.location.pathname == '/Signup') ? { color: "black", fontWeight: "bold"  } : {color: 'black'};
                                    }}
                                    class="nav-link text-dark" 
                                    onClick={() => setNaveLink('Signup')} 
                                    to="/Signup">SIGN IN/ SIGN UP</NavLink>
                        </li>
                      </ul>
              </div>
            </div>
        </nav>
      </>
    )
  }
  
export default Header
  