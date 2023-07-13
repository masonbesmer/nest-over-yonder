import React from "react";
import Listing from "../components/Listing";
import Map from "../components/Map";
import { useEffect } from "react";
import { useState } from "react";

const sampledescription =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta nam mollitia tempore deleniti officiis vero error pariatur in a voluptatibus corporis incidunt, placeat, rem iure cupiditate, dolorum maiores tempora?";

function HomePage() {
  const [data, setData] = useState();
  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/639b810f-9688-4a6f-a01c-0862abaeb8c7"
      );
      const apiData = await res.json();
      setData(apiData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        marginTop: "4rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="listings">
        {data?.slice(0, 3).map((listing) => {
          //gathers only the first 3 elements
          return (
            <Listing
              id={listing.ListId}
              src={listing.ImgPath}
              title={listing.Title}
              description={listing.Description}
              location={listing.Address}
              price={listing.Price}
              rating={listing.Rating}
            />
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
