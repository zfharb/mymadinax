
function Header() {
 
  return (
      <>

        <nav class="navbar  navbar-expand-lg navbar-light bg-body">
          <div class="container-fluid">
          <a class="navbar-brand" href="#">MadinX</a>
            <div class="collapse navbar-collapse">
              <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/home">HOME</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">ABOUT US</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="/Signup">SIGN IN/ SIGN UP</a>
                </li>
              </ul>
             
            </div>
          </div>
        </nav>
      </>
    )
  }
  
export default Header
  