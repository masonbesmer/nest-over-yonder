import React from 'react'
import '../styles.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import SearchListing from '../components/SearchListing'
import Listing from '../components/Listing'

var priceLow = 80;
var priceHigh = 100;
var type = ['Home', 'Apartment'];
var amenities = ['Kitchen', 'Washer', 'Dryer', 'Wifi', 'Heating', 'Air'];
var guests = 0;

const sampledescription = "The company itself is a very successful company. Let us accuse loosely, for the softness of the time softened by the duties, but the error is born in the pleasures of the body fall, please, the thing rightly desire, the greater times of pain?";

function SearchPage() {

    const [listingArray, setListingArray] = useState(null);

    const getHomeData = async () => {
        try {
            const response = await axios.get("http://localhost:4000/listings");
            const data = response.data;
            setListingArray(data);
            // This code block will only execute if no matching listing is found with that id
        } catch (error) {
        console.error("Error fetching listing ", error);
        // handle login error, e.g., show an error message
        }
    };

    useEffect(() => {
        getHomeData();
    }, []);

    // const SearchResults = () => {
    //     const location = useLocation();
    //     const queryParams = new URLSearchParams(location.search);
    //     const searchQuery = queryParams.get('q');
    // }

    return (
        <>   
            {/* Spacer */}
            <div className="spacer" style={{ marginTop: "3rem", backgroundColor: "blue"}}>
                &nbsp;
            </div>

            {/* Bar to show filters selected */}
            <div className="filter-bar" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", backgroundColor: "whitesmoke", alignItems: "center", position: "fixed", width: "100%", height: "2.5rem"}}>
                <div className="filter-price">
                    <Badge bg="success" style={{ fontSize: ".75rem" }}>
                        Price
                    </Badge>
                    <Badge bg="light" text="dark" style={{ fontSize: ".75rem", color: "black", borderStyle: "solid", borderWidth: "1px" }}>
                        $ {priceLow} - {priceHigh}
                    </Badge>
                </div>
                <div className="filter-type" style={{ display: "flex", flexDirection: "row" }}>
                    <Badge bg="success" style={{ fontSize: ".75rem" }}>
                        Type
                    </Badge>
                    <Badge bg="light" text="dark" style={{ fontSize: ".75rem", display: "flex", flexDirection: "row", borderStyle: "solid", borderWidth: "1px" }}>
                        {type.map((type, index) => 
                            <div style={{ padding: "0px 10px" }}>{type}</div>)}
                    </Badge>                    
                </div>
                <div className="filter-amenities" style={{ display: "flex", flexDirection: "row" }}>
                    <Badge bg="success" style={{ fontSize: ".75rem" }}>
                        Amenities
                    </Badge>
                    <Badge bg="light" text="dark" style={{ fontSize: ".75rem", display: "flex", flexDirection: "row", borderStyle: "solid", borderWidth: "1px" }}>
                    {amenities.map((amenities, index) => 
                        <div style={{ padding: "0px 10px" }}>{amenities}</div>)}
                    </Badge>
                </div>
                <div className="filter-guests">
                    <Badge bg="success" style={{ fontSize: ".75rem" }}>
                        Guests
                    </Badge>
                    <Badge bg="light" text="dark" style={{ fontSize: ".75rem", borderStyle: "solid", borderWidth: "1px" }}>
                        {guests}
                    </Badge>
                </div>
            </div>

            {/* Div for search results (SearchListing) */}
            <div className="search-results" style={{ backgroundColor: "lightgrey" }}>
            
            {/* <div>
                {listingArray?.slice(0, 3).map((listing) => {
                //gathers only the first 3 elements
                let imagePath = listing.imgPath + "/1.png";
                
                return (
                    <div key={listing.listId} style={{ marginLeft: "1rem" }}>
                        <Listing
                            id={listing.listId}
                            src={imagePath}
                            title={listing.title}
                            description={listing.description}
                            location={listing.city}
                            price={listing.price}
                            rating={listing.rating}
                        />
                    </div>
                );
                })}
            </div> */}
                
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
                    
                    <div style={{
                    backgroundColor: "lightgrey",
                    marginTop: "1rem",
                    display: "flex",
                    padding: "10px",
                    height: "auto",
                    justifyContent: "center",
                    flexWrap: "wrap" 
                }}>
                        {listingArray?.map((listing) => {
                            //gathers all elements
                            let imagePath = listing.imgPath + "/1.png";
                        
                            return (
                                <div key={listing.listId} style={{ marginLeft: "1rem" }}>
                                    <SearchListing
                                        id={listing.listId}
                                        src={imagePath}
                                        title={listing.title}
                                        description={listing.description}
                                        location={listing.city}
                                        price={listing.price}
                                        rating={listing.rating}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    
                    
                    {/* <SearchListing
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
                    /> */}
                </div>
            </div>
        </>
    );
}

export default SearchPage;