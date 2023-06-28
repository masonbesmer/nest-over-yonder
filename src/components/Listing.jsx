import React from 'react'
import '../styles.css'
import star from '../assets/star.svg'

function Listing({src, title, description = "sample description", price, rating, location}) {
  function handleClick() {
    window.location.href = './pages/Listing.jsx';
  }


  return (
    <div className='listing' style={{display: 'flex'}}>
        <img className='listing-image' src={src} onClick={handleClick}/>
        <div className='listing-info'>
            <h1>{title}</h1>
            <h3>{location}</h3>
            <h4>{description}</h4>
            <h2>{price}</h2>

            <div className="rating" style={{display: 'flex', alignItems: 'center', width: '5rem'}}>
                <img src={star} style={{height:'18px', width: '18px', marginRight: '5px'}}/>
                <h3 style={{margin: '0px'}}> {rating}</h3>
            </div>
            
        </div>
    </div>
  )
}

export default Listing