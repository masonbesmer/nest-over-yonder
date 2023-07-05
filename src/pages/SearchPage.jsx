import React from 'react'
import '../styles.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
import Badge from 'react-bootstrap/Badge';


import SearchListing from '../components/SearchListing'

var priceLow = 80;
var priceHigh = 100;
var type = ['Home', 'Apartment'];
var amenities = ['Kitchen', 'Washer', 'Dryer', 'Wifi', 'Heating', 'Air'];
var guests = 0;

const sampledescription = "The company itself is a very successful company. Let us accuse loosely, for the softness of the time softened by the duties, but the error is born in the pleasures of the body fall, please, the thing rightly desire, the greater times of pain?";

function SearchPage() {
    return (
        <>   
            {/* Spacer */}
            <div className="spacer" style={{ marginTop: "2.5rem", backgroundColor: "blue"}}>
                &nbsp;
            </div>

            {/* Bar to show filters selected */}
            <div className="filter-bar" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", backgroundColor: "whitesmoke", alignItems: "center", position: "fixed", width: "100%", height: "2.5rem"}}>
                <div className="filter-price">
                    <Badge bg="info" style={{ fontSize: ".75rem" }}>
                        Price
                    </Badge>
                    <Badge bg="light" text="dark" style={{ fontSize: ".75rem", color: "black" }}>
                        $ {priceLow} - {priceHigh}
                    </Badge>
                </div>
                <div className="filter-type" style={{ display: "flex", flexDirection: "row" }}>
                    <Badge bg="info" style={{ fontSize: ".75rem" }}>
                        Type
                    </Badge>
                    <Badge bg="light" text="dark" style={{ fontSize: ".75rem", display: "flex", flexDirection: "row" }}>
                        {type.map((type, index) => 
                            <div style={{ padding: "0px 10px" }}>{type}</div>)}
                    </Badge>
                    
                </div>
                <div className="filter-amenities" style={{ display: "flex", flexDirection: "row" }}>
                    <Badge bg="info" style={{ fontSize: ".75rem" }}>
                        Amenities
                    </Badge>
                    <Badge bg="light" text="dark" style={{ fontSize: ".75rem", display: "flex", flexDirection: "row" }}>
                    {amenities.map((amenities, index) => 
                        <div style={{ padding: "0px 10px" }}>{amenities}</div>)}
                    </Badge>
                </div>
                <div className="filter-guests">
                    <Badge bg="info" style={{ fontSize: ".75rem" }}>
                        Guests
                    </Badge>
                    <Badge bg="light" text="dark" style={{ fontSize: ".75rem" }}>
                        {guests}
                    </Badge>
                </div>
            </div>

            {/* Div for search results (SearchListing) */}
            <div className="search-results" style={{ backgroundColor: "lightgrey", height: "100vh" }}>
                <div
                style={{
                    backgroundColor: "lightgrey",
                    marginTop: "2.5rem",
                    display: "flex",
                    padding: "10px",
                    height: "auto",
                    justifyContent: "center",
                    flexWrap: "wrap" 
                }}>
                    
                    <SearchListing
                        id="1"
                        src="../public/house1/house1.png"
                        title="Huge House"
                        description=""
                        location="Lakewood, Texas"
                        price="$500"
                        rating="4.89"
                    />
                    <SearchListing
                        id="1"
                        src="../public/house1/house1.png"
                        title="Huge House"
                        description=""
                        location="Lakewood, Texas"
                        price="$500"
                        rating="4.89"
                    />
                    <SearchListing
                        id="1"
                        src="../public/house1/house1.png"
                        title="Huge House"
                        description=""
                        location="Lakewood, Texas"
                        price="$500"
                        rating="4.89"
                    />
                    <SearchListing
                        id="1"
                        src="../public/house1/house1.png"
                        title="Huge House"
                        description=""
                        location="Lakewood, Texas"
                        price="$500"
                        rating="4.89"
                    />
                    <SearchListing
                        id="1"
                        src="../public/house1/house1.png"
                        title="Huge House"
                        description=""
                        location="Lakewood, Texas"
                        price="$500"
                        rating="4.89"
                    />
                    <SearchListing
                        id="1"
                        src="../public/house1/house1.png"
                        title="Huge House"
                        description=""
                        location="Lakewood, Texas"
                        price="$500"
                        rating="4.89"
                    />
                    <SearchListing
                        id="1"
                        src="../public/house1/house1.png"
                        title="Huge House"
                        description=""
                        location="Lakewood, Texas"
                        price="$500"
                        rating="4.89"
                    />
                    <SearchListing
                        id="1"
                        src="../public/house1/house1.png"
                        title="Huge House"
                        description=""
                        location="Lakewood, Texas"
                        price="$500"
                        rating="4.89"
                    />
                    <SearchListing
                        id="1"
                        src="../public/house1/house1.png"
                        title="Huge House"
                        description=""
                        location="Lakewood, Texas"
                        price="$500"
                        rating="4.89"
                    />
                    <SearchListing
                        id="1"
                        src="../public/house1/house1.png"
                        title="Huge House"
                        description=""
                        location="Lakewood, Texas"
                        price="$500"
                        rating="4.89"
                    />
                </div>
            </div>
        </>
    );
}

export default SearchPage;