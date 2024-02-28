import { useState, useEffect} from 'react'


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
          <a class="navbar-brand" href="#">MadinaX{navLink}</a>
            <div class="collapse navbar-collapse">
              <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
                <li class="nav-item">
                  <a class="nav-link" onClick={() => setNaveLink('home')} href="/home">HOME</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onClick={() => setNaveLink('aboutus')} href="/aboutus">ABOUT US</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" onClick={() => setNaveLink('Signup')} href="/Signup">SIGN IN/ SIGN UP</a>
                </li>
              </ul>
            
            </div>
          </div>
        </nav>
      </>
    )
  }
  
export default Header
  