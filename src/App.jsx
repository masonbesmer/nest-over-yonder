import { useState, useEffect } from "react";
import Listing from "./components/Listing";
import HomePage from "./pages/HomePage";
import ListingPage from "./pages/ListingPage";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import image from "../public/house1/house1.png";

import Filter from "./components/Filter";

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  // infoWindow.setPosition(pos);
  // infoWindow.setContent(
  //   browserHasGeolocation
  //     ? "Error: The Geolocation service failed."
  //     : "Error: Your browser doesn't support geolocation."
  // );
  // infoWindow.open(map);
  console.log("uh oh stinky");
}

function App() {
  const [count, setCount] = useState(0);
  // var pos = {{lat: 0.0, lng: 0.0}};
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         pos.lat = {position.coords.latitude},
  //         pos.lng = {position.coords.longitude},
  //       },
  //       () => {
  //         handleLocationError(true, infoWindow, map.getCenter());
  //       }
  //     );
  //   } else {
  //     // Browser doesn't support Geolocation
  //     handleLocationError(false, infoWindow, map.getCenter());
  //   }
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listing/:id" element={<ListingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        <Filter />
      </div>
    </BrowserRouter>
  );
}

export default App;
