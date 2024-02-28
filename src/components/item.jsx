

import { useState } from 'react'

function Item({summary, discreption}) {
   

    return (

        <>
        <div class="container">
            <div class="row mb-3">
                <div class="card border-dark mb-5 mt-5 border border-dark" >
                    <div class="card-body text-dark">
                        <div class="row">

                            <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                            <div class="bg-image hover-zoom ripple rounded ripple-surface">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                                class="w-100" />
                            <a href="#!">
                                <div class="hover-overlay">
                                <div class="mask" ></div>
                                </div>
                            </a>
                            </div>
                            </div>

                            <div class="col-md-6 col-lg-6 col-xl-6">
                            <h5>{summary}</h5>
                            <i className="fa fa-star text-warning"></i>
                            <i className="fa fa-star text-warning"></i>
                            <i className="fa fa-star text-warning"></i>
                            <i className="fa fa-star-half-o text-warning"></i>
                            <i className="fa fa-star-o text-warning"></i>
                            <i class="review-count ms-3">12 Reviews</i>

                            
                            {/* <div id="rating1" class="star-rating" role="rating" data-rating="3">
                                <span class="star" data-value="1">&#9733;<span class="star-notification"></span></span>
                                <span class="star" data-value="2">&#9733;<span class="star-notification"></span></span>
                                <span class="star" data-value="3">&#9733;<span class="star-notification"></span></span>
                                <span class="star" data-value="4">&#9733;<span class="star-notification"></span></span>
                                <span class="star" data-value="5">&#9733;<span class="star-notification"></span></span>
                                <h5 class="review-count">12 Reviews</h5>
                            </div> */}
                            
                            <p class="text-truncate mb-4 mb-md-0">
                            {discreption}
                            </p>
                            </div> 

                            <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                            <div class="d-flex flex-column mt-4">
                            <button class="btn btn-primary btn-sm" type="button">Details</button>
                            </div>
                            </div>

                        </div>
                    </div> 
                </div>
            </div>
          </div>
        
       
    
       
        </>

    
    )
}

export default Item



