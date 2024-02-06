import crown from '/src/images/crown.png'

function Header() {
 
  return (
      <>

        <nav class="navbar  navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
          <img class="w-0 h-100 position-absolute"
                src={crown} 
                style={{  
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
                 alt="...."/>
            <div class="collapse navbar-collapse">
              <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Signin">Singin</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="/Signup">Sing up</a>
                </li>
              </ul>
             
            </div>
          </div>
        </nav>
      </>
    )
  }
  
export default Header
  