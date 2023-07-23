import React, { useState, useEffect, useCallback } from "react";
import GoogleMap from "google-maps-react-markers";
import LocationPin from "./LocationPin";
import "../styles.css";
import axios from "axios";

function Map({zoomLevel}) {
  const [userLatitude, setUserLatitude] = useState(0);
  const [userLongitude, setUserLongitude] = useState(0);
  const [listingCloaded, setListingCloaded] = useState(false);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }, []);

  function success(position) {
    console.log(`Latitude is ${position.coords.latitude} long is ${position.coords.longitude}`);
    setUserLatitude(parseFloat(position.coords.latitude));
    setUserLongitude(parseFloat(position.coords.longitude));
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  const APIKey = "AIzaSyBekbznKP3ti4ZX3B34xIigzTz0MwRnMIQ"

  const [listingCArray, setListingCArray] = useState([]);

  const loadListingsCoordinates = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:4000/listings");
      const data = response.data;
      const updatedListings = await Promise.all(data.map(async (listing) => {
        try {
          const coords = await convertAddressToCoordinates(listing.address);
          console.log(`#${listing.listId}: ${listing.address} coordinates are ${coords.lat}, ${coords.lng}`);
          return { ...listing, coords };
        } catch (error) {
          console.error("Error converting address to coordinates for listing: ", listing.listId, error);
          return { ...listing, coords: null };
        }
      }));
      setListingCArray(updatedListings);
    } catch (error) {
      console.error("Error fetching listing ", error);
    }
  }, []);

  useEffect(() => {
    loadListingsCoordinates().then (() => setListingCloaded(true));
  }, [loadListingsCoordinates]);

  return (
    <div className="map">
      <h2 className="map-h2">You Are Here</h2>

      <div className="google-map">
      {listingCloaded && (userLatitude != 0) && (userLongitude != 0) ? (
        <div style = {{height: "100vh", width: "100%"}}>
          <GoogleMap
            apiKey={APIKey}
            defaultCenter={{ lat: parseFloat(userLatitude), lng: parseFloat(userLongitude) }}
            defaultZoom={zoomLevel}
          >
            {console.log("Listing Coordinates Array:", listingCArray)}
            <LocationPin className="marker-pin" key={-1} lat={parseFloat(userLatitude)} lng={parseFloat(userLongitude)} text="Current Location" />
            {listingCArray.map((listing) => (
              <LocationPin key={listing.listId} lat={parseFloat(listing.coords.lat)} lng={parseFloat(listing.coords.lng)} text={listing.title}/>
            ))}
          </GoogleMap>
        </div>
      ) : (
        <p>Loading...</p> // Placeholder for when data is being fetched
      )}
      </div>
    </div>
  );

  async function convertAddressToCoordinates(addr) {
    const geocodingEndpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(addr)}&key=${APIKey}`;

    try {
      const response = await fetch(geocodingEndpoint);
      const data = await response.json();

      console.log("Geocoding data:", data);

      if (data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        return { lat, lng };
      } else {
        return null; // Return null if no results are found
      }
    } catch (error) {
      console.log("Error fetching geocoding data:", error);
      return null; // Return null if there's an error fetching data
    }
  }
}
export default Map;
