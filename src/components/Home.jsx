
function Home() {

  return (
    <>
      <div class="container">
        <div class=" z-n1 w-75 h-75 position-absolute top-50 start-50 translate-middle"
              style={{  
                      backgroundImage: "url('src/images/gold-coast.jpeg')",
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat'
                    }}/>
        
        <div class=" z-0 bg-info-subtle opacity-50 w-75 h-75 position-absolute top-50 start-50 translate-middle">
        
          <p class="text-center z-0 position-absolute opacity-100 top-50 start-50 translate-middle">
            <h2>Persian directory list</h2>
            <p>Search for any local persian companies, Events, Jobs and advertise for your services!</p>
            <button type="button" class="btn btn-outline-primary">Learn More</button>

          </p>
        </div>
      </div>
    
     
    </>
  )
}

export default Home
