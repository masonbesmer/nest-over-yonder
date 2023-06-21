import { useState } from 'react'
import Listing from './components/Listing'
import image from "../public/house1/house1.png"

const sampledescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta nam mollitia tempore deleniti officiis vero error pariatur in a voluptatibus corporis incidunt, placeat, rem iure cupiditate, dolorum maiores tempora?"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
        <h1>Header</h1>
      </div>
      <Listing src="../public/house1/house1.png" title='Huge House' description={sampledescription} location='Lakewood, Texas' price='$500' rating='4.89'/>
      <Listing src="../public/house1/house2.png" title='Enormous House' description={sampledescription} location='Denton, Texas' price='$500' rating='4.59'/>
      <Listing src="../public/house1/house3.png" title='Humongous House' description={sampledescription} location='Plano, Texas' price='$500' rating='3.12'/>
      
    </>
  )
}

export default App
