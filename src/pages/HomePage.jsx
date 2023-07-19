import React, { useState, useEffect } from "react";
import Listing from "../components/Listing";
import Map from "../components/Map";
import axios from "axios";

const sampledescription =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta nam mollitia tempore deleniti officiis vero error pariatur in a voluptatibus corporis incidunt, placeat, rem iure cupiditate, dolorum maiores tempora?";

function HomePage() {
  const [listingArray, setListingArray] = useState(null);

  const getHomeData = async () => {
    // console.log("Form submitted");
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

  return (
    <div
      style={{
        marginTop: "4rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        {listingArray?.slice(0, 3).map((listing) => {
          //gathers only the first 3 elements
          let imagePath = listing.imgPath + "/1.png";
          return (
            <div style={{ marginLeft: "1rem" }}>
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
      </div>
      <Map
        location={{ lat: 33.185755896934694, lng: -96.80554467522724 }}
        //location={pos}
        zoomLevel={15}
      />
    </div>
  );
}

export default HomePage;
