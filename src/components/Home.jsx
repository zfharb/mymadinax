import nyc from '/src/images/nyc-street.jpeg'

function Home() {

  return (
    <>
    
    <div class="bg-image mb-5" >
      <img src={nyc} class="w-100" />
      
      <div class="mask text-light d-flex justify-content-center flex-column text-center" 
            style={{  
              backgroundColor: 'rgba(0, 0, 0, .5)',
            }}>
        <h4>Persian Business Directory</h4>
        <div class="text-center">
        <button  class="btn btn-outline-white" >
          Learn More
        </button>
      </div>
      </div>
    </div>

    <div  class="vh-50 d-flex  justify-content-center align-items-center"
          style={{  
            backgroundColor: 'LightBlue',
            height: '50vh'
          }}>
          <div class="container text-center">
            <div class="row mb-3">
                <h4>Search for a service in your area</h4>
            </div>

            <div class="row justify-content-center" >
              <div class="col-md-2">
                  <select class="form-select h-100">
                      <optgroup label="Category">
                          <option value="12" selected="">Helath</option>
                          <option value="13">Resturants</option>
                          <option value="14">House Services</option>
                      </optgroup>
                  </select></div>
              <div class="col-sm-2"><input class="form-control input-lg h-100" type="text" value="Zipcode" /></div>
              <div class="col-sm-2"><input class="btn btn-primary btn-lg w-100" type="submit" value="Search" /></div>
            </div>
          </div>
    </div>
  </>
  )
}

export default Home
