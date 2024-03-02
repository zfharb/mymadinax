import { useState, useEffect} from 'react'
import { NavLink } from "react-router-dom";


function Header() {

  const [navLink, setNaveLink] = useState('');
  
  useEffect(() => {
    const navLinkEls = document.querySelectorAll('.nav-link')
    navLinkEls.forEach(navLinkEl => {
      navLinkEl.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        navLinkEl.classList.add('active')
      }
    );
   
    })
  }, [navLink])
 
  return (
      <>

        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-body">
          <div class="container-fluid">
          <a class="navbar-brand" href="#">MadinaX</a>
            <div class="collapse navbar-collapse">
           
              <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
                <li class="nav-item">
                  <NavLink  style={({ isActive }) => {
                              return isActive ? { color: "black", fontWeight: "bold"  } : {color: 'black'};
                            }}
                            class="text-dark " 
                            onClick={() => setNaveLink('home')} 
                            to="/home">HOME</NavLink>
                </li>
                &nbsp;
                &nbsp;
                <li class="nav-item">
                  <NavLink  style={({ isActive }) => {
                              return isActive ? { color: "black", fontWeight: "bold" } : {color: 'black'};
                            }}
                            class="nav-link text-dark  active" 
                            onClick={() => setNaveLink('aboutus')} 
                            to="/aboutus">ABOUT US</NavLink>
                </li>
                &nbsp;
                &nbsp;
                <li class="nav-item ">
                  <NavLink  style={({ isActive }) => {
                              return isActive ? { color: "black", fontWeight: "bold"  } : {color: 'black'};
                            }}
                            class="nav-link text-dark active " 
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
  