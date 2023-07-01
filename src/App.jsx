import { useState, useEffect } from "react";
import Listing from "./components/Listing";
import HomePage from "./pages/HomePage";
import ListingPage from "./pages/ListingPage";
import Header from "./components/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import image from "../public/house1/house1.png";

import Filter from "./components/Filter";
import SearchPage from "./pages/SearchPage";
import ErrorPage from "./pages/ErrorPage";

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
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search/:pattern" element={<SearchPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/listing/:id" element={<ListingPage />} />
        </Routes>
        <Filter />
      </div>
    </BrowserRouter>
  );
}

export default App;
