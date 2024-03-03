import person from "/src/images/upload-image-2.jpeg"

function AboutUs() {
   
    return (
        <>
            <div class="container text-center pb-5">
                <div class="row justify-content-center pt-5 mt-5">
                        <h2 class="text-info mt-5">About Us</h2>

                        <div class="col-4 mb-5">
                            We're MadinaX, a technology company helping people find any service they need in any city.
                        </div>
                </div>
                <div class="row justify-content-center pb-5">
                    <div class="col-sm-6 col-lg-4">
                        <div class="card text-center clean-card"><img class="card-img-top w-100 d-block" src={person}/>
                            <div class="card-body info">
                                <h4 class="card-title">----</h4>
                                <p class="card-text">CEO</p>
                                <div class="icons"><a class="m-2" href="#"><i class="fa fa-facebook text-info"></i></a><a class="m-2" href="#"><i class="fa fa-instagram text-info"></i></a><a class="m-2" href="#"><i class="fa fa-twitter text-info"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="card text-center clean-card"><img class="card-img-top w-100 d-block" src={person}/>
                            <div class="card-body info">
                                <h4 class="card-title">-----</h4>
                                <p class="card-text">CTO</p>
                                <div class="icons"><a class="m-2" href="#"><i class="fa fa-facebook text-info"></i></a><a class="m-2" href="#"><i class="fa fa-instagram text-info"></i></a><a class="m-2" href="#"><i class="fa fa-twitter text-info"></i></a></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default AboutUs
