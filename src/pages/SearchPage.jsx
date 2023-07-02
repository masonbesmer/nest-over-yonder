import React from 'react'
import '../styles.css'

import SearchListing from '../components/SearchListing'

const sampledescription = "The company itself is a very successful company. Let us accuse loosely, for the softness of the time softened by the duties, but the error is born in the pleasures of the body fall, please, the thing rightly desire, the greater times of pain?";

function SearchPage() {
    return (
        <>   
            {/* Spacer */}
            <div className="spacer" style={{ marginTop: "2.5rem", backgroundColor: "blue"}}>
                &nbsp;
            </div>

            {/* Bar to show filters selected */}
            <div className="filter-bar" style={{ display: "flex", justifyContent: "space-evenly", backgroundColor: "whitesmoke", alignItems: "center", position: "fixed", width: "100%", height: "2.5rem"}}>
                <div className="filter-price">
                    <h7>Price: </h7>
                </div>
                <div className="filter-type">
                    <h7>Type: </h7>
                </div>
                <div className="filter-amenities">
                    <h7>Amenities: </h7>
                </div>
                <div className="filter-guests">
                    <h7>Guest: </h7>
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