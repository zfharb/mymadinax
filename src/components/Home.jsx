import nyc from '/src/images/nyc-street.jpeg'
import Item from './item.jsx'
import * as mockIttems from '../mock/mockItems.json'

function Home() {
  return (
    <>    
    <div class="bg-image mb-5" >
      <img src={nyc} class="w-100" />
      
      <div class="mask text-white d-flex justify-content-center flex-column text-center" 
            style={{  
              backgroundColor: '#09a2ffd9',
              opacity: '1'
            }}>
        <h2>Business Directory</h2>
        <div class="text-center mt-3">
          <button type="button" class="btn btn-outline-light btn-lg">Learn More</button>
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
              <div class="col-sm-2"><input class="form-control input-lg h-100" type="text" placeholder="Zip Code" /></div>
              <div class="col-sm-2"><input class="btn btn-primary btn-lg w-100" type="submit" value="Search" /></div>
            </div>
          </div>
    </div>
    <div class="mt-5 mb-5">

      {mockIttems.items.map((item, index) => (
        <Item summary={item.summary} discreption={item.discreption} />
        ))
      }
    </div>
  </>
  )
}

export default Home
