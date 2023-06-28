
import { useState, useEffect } from 'react'
import Listing from './components/Listing'
import HomePage from './pages/HomePage'
import ListingPage from './pages/ListingPage'
import Header from './components/Header'

import {BrowserRouter, Route, Routes} from "react-router-dom"

import image from "../public/house1/house1.png"
import Map from './components/Map'
import Filter from './components/Filter'




function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  // infoWindow.setPosition(pos);
  // infoWindow.setContent(
  //   browserHasGeolocation
  //     ? "Error: The Geolocation service failed."
  //     : "Error: Your browser doesn't support geolocation."
  // );
  // infoWindow.open(map);
  Console.log("uh oh stinky")
}

function App(props) {
  const [count, setCount] = useState(0)
  const [pos, setPos] = useState(null)
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPos({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Map location={[33.185755896934694, -96.80554467522724]} zoomLevel={15}/>
    
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/listing/:id' element={<ListingPage />} />
          
        </Routes>
        <Filter/>

      </div>
      
      
    </BrowserRouter>
  )
}

export default App