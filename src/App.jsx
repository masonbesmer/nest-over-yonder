import { useState, useEffect } from 'react'
import Listing from './components/Listing'
import Header from './components/Header'
import image from "../public/house1/house1.png"
import Map from './components/Map'

const sampledescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta nam mollitia tempore deleniti officiis vero error pariatur in a voluptatibus corporis incidunt, placeat, rem iure cupiditate, dolorum maiores tempora?"

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

function App() {
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
    <>
      <Header />
      
      <Listing src="../public/house1/house1.png" title='Huge House' description={sampledescription} location='Lakewood, Texas' price='$500' rating='4.89'/>
      <Listing src="../public/house1/house2.png" title='Enormous House' description={sampledescription} location='Denton, Texas' price='$500' rating='4.59'/>
      <Listing src="../public/house1/house3.png" title='Humongous House' description={sampledescription} location='Plano, Texas' price='$500' rating='3.12'/>
      <Map location={[pos.lat, pos.lng]} zoomLevel={17}/>
      
    </>
  )
}

export default App