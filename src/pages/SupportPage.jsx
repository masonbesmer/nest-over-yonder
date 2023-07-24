import React from 'react'


function SupportPage() {
    return(
        <>
            {/* Spacer */}
            <div className="spacer" style={{ marginTop: "3.1rem", backgroundColor: "blue"}}>
                &nbsp;
            </div>
            

            <div className="container-fluid" style={{ backgroundImage: 'url(/backdrop.jpg)', height: "40vh", backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="row">
                    <div className="col d-flex align-items-center">

                    </div>
                    <div className="col d-flex align-items-center justify-content-center" style={{ height: "40vh" }}>
                        <div className="card w-75 text-center">
                            <div className="card-body">
                                <h3 className="card-title" style={{ fontWeight: "bold" }}>Nest Over Yonder Support</h3>
                                <p className="card-text">We're here to help!</p>
                                <a href="#" class="btn btn-primary">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex align-items-center">
                        
                    </div>

                    
                </div>
                
                {/* <div>
                    <img src="../public/backdrop.jpg" style={{ width: "100%", height: "40vh", zIndex: "-1" }}/>
                </div> */}
                
            </div>

            

            <div className="container-fluid" style={{ backgroundColor: "lightgrey", height: "30vh", padding: "2rem" }}>
                <div className="row justify-content-evenly">
                    <div className="col d-flex align-items-center justify-content-center">

                    </div>
                    <div className="col d-flex align-items-center justify-content-center">
                        <div className="card">
                            <div className="card-body" style={{ minWidth: "10rem", minHeight: "10rem", backgroundColor: "whitesmoke", alignContent: "center", textAlign: "center" }}>
                                <img src="../public/listingIcon.svg" />
                                <div><h4>Listing</h4></div>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex align-items-center justify-content-center">
                        <div className="card">
                            <div className="card-body" style={{ minWidth: "10rem", minHeight: "10rem", backgroundColor: "whitesmoke", alignContent: "center", textAlign: "center" }}>
                                <img src="../public/rentIcon2.svg" />
                                <div><h4>Renting</h4></div>                                
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex align-items-center justify-content-center">
                        <div className="card">
                            <div className="card-body" style={{ minWidth: "10rem", minHeight: "10rem", backgroundColor: "whitesmoke", alignContent: "center", textAlign: "center" }}>
                                <img src="../public/paymentIcon.webp" />
                                <div><h4>Payments</h4></div> 
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex align-items-center justify-content-center">

                    </div>
                </div>
            </div>
            
            {/* Spacer */}
            <div className="spacer" style={{ backgroundColor: "#292c35"}}>
                &nbsp;
            </div>
             

        </>
    )




}

export default SupportPage;