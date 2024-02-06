import "./Header.css"


function Header() {

  
  return (
      <>

        <nav class="navbar  navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Bizyaab</a>
            <button class="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
  