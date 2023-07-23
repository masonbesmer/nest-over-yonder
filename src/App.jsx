import { useState, useEffect } from "react";
import Listing from "./components/Listing";
import HomePage from "./pages/HomePage";
import ListingPage from "./pages/ListingPage";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AccountPage from "./pages/AccountPage";
import AboutPage from "./pages/AboutPage";
import axios from 'axios';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import image from "../public/house1/house1.png";

import Filter from "./components/Filter";

// const logged = false;

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
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  useEffect(() => {
    
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setAuthenticatedUser(foundUser);
    }

  }, []); // <-- The empty dependency array ensures this effect runs only once

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
        <Header authenticatedUser={authenticatedUser} setAuthenticatedUser={setAuthenticatedUser}/>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listing/:id" element={<ListingPage />} />
          <Route path="/login" element={<LoginPage setAuthenticatedUser={setAuthenticatedUser} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/Account" element={<AccountPage />} />
          <Route path="/About" element={<AboutPage />} />
        </Routes>
        <Filter />
      </div>
    </BrowserRouter>
  );
}

export default App;
