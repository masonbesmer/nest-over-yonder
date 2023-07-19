import React, { useState, useEffect } from "react";
import "../css/CheckoutPage.css"; // Import the CSS file for styling
import InputMask from "react-input-mask";
import { Button } from "react-bootstrap";

const CheckoutPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiration, setCardExpiration] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  // Set up the pricing variables and state
  const chargePerNight = 150; // Made-up charge per night
  const cleaningFee = 50; // Made-up cleaning fee
  const serviceFee = 20; // Made-up service fee
  const taxRate = 0.1; // Made-up tax rate

  const [totalNights, setTotalNights] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate total price whenever totalNights changes
    const nightsPrice = totalNights * chargePerNight;
    const totalPrice = (nightsPrice + cleaningFee + serviceFee) * (1 + taxRate);
    setTotalPrice(totalPrice);
  }, [totalNights]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform checkout logic here, e.g., submit the form data to an API
    console.log("Submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Address:", address);
    console.log("Payment Method:", paymentMethod);
    console.log("Total Nights:", totalNights);
    console.log("Total Price:", totalPrice);
    // Reset form fields
    setName("");
    setEmail("");
    setAddress("");
    setCardNumber("");
    setCardName("");
    setCardExpiration("");
    setCardCVV("");
  };

  return (
    <div className="checkout-container">
      <div className="checkout-summary">
        <div className="checkout-listing-details">
          {/* Display the house listing details here */}
          <img
            src="../public/house1/house2.png"
            alt="Listing"
            className="checkout-listing-image"
          />
          <h2 className="checkout-listing-title">House Title</h2>
          <p className="checkout-listing-location">Location</p>
          <p className="checkout-listing-price">Price</p>
        </div>
        <div className="checkout-payment-details">
          <h2>Your Trip</h2>

          <p>Check-in Date: XX/XX/XXXX</p>
          <p>Check-out Date: XX/XX/XXXX</p>
          <p>Total Nights: {totalNights}</p>
          <p>Total Guests: XX</p>
          {/* Your trip details */}
          <h2>Payment Information</h2>
          <form onSubmit={handleSubmit} className="checkout-payment-form">
            <div className="checkout-form-group">
              <label htmlFor="cardNumber" className="checkout-form-label">
                Card Number:
              </label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="checkout-form-input"
                required
              />
            </div>
            <div className="checkout-payment-row">
              <div>
                <label htmlFor="expiration" className="checkout-form-label">
                  Expiration:
                </label>
                <InputMask
                  type="text"
                  id="expiration"
                  mask="99/9999"
                  placeholder="MM/YYYY"
                  value={cardExpiration}
                  onChange={(e) => setCardExpiration(e.target.value)}
                  className="checkout-form-input"
                  required
                />
              </div>
              <div>
                <label htmlFor="cvv" className="checkout-form-label">
                  CVV:
                </label>
                <input
                  type="text"
                  id="cvv"
                  value={cardCVV}
                  onChange={(e) => setCardCVV(e.target.value)}
                  className="checkout-form-input"
                  required
                  maxLength={3}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="zipCode" className="checkout-form-label">
                Zip Code:
              </label>
              <input
                type="text"
                id="zipCode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="checkout-form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="country" className="checkout-form-label">
                Country/Region:
              </label>
              <input
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="checkout-form-input"
                required
              />
            </div>
            <Button type="submit">Book Now</Button>
          </form>
        </div>
      </div>
      <div className="checkout-listing-preview">
        {/* Display a small window of the house listing */}
        <img
          src="../public/house1/house1.png"
          alt="Listing"
          className="checkout-preview-image"
        />
        <div className="checkout-price-breakdown">
          <h2>Price Breakdown</h2>
          <p>
            <span>
              ${chargePerNight.toFixed(2)} x {totalNights} nights
            </span>
            <span>${(chargePerNight * totalNights).toFixed(2)}</span>
          </p>
          <p>
            <span>Cleaning Fee:</span>
            <span>${cleaningFee}</span>
          </p>
          <p>
            <span>Service Fee:</span>
            <span>${serviceFee}</span>
          </p>
          <p>
            <span>Tax Rate:</span>
            <span>{(taxRate * 100).toFixed(2)}%</span>
          </p>
        </div>
        <div className="checkout-preview-price">
          <p>Total Price:</p>
          <h2>${totalPrice.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
