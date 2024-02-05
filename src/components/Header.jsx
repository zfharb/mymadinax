import "./Header.css"


function Header() {

  
  return (
      <>
      <nav class={`navbar fixed-top navbar-expand-lg navbar-dark p-md-3 header-bg`}>
      <div class="container-fluid">
        <br/>       
        <br/>       
        <br/>    
              
          
        <a class="navbar-brand text-dark fs-1" href="/">myMadinaX</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse"  id="navbarSupportedContent">
          <ul class="navbar-nav position-absolute top-25 end-0">
            <li class="nav-item">
              <a class="nav-link text-dark fw-bolder" href="/Home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark fw-bolder" href="/Register">Register</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark fw-bolder" href="/Login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    </>
    )
  }
  
export default Header
  