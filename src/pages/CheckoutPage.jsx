import React, { useState, useEffect } from "react";
import "../css/CheckoutPage.css"; // Import the CSS file for styling
import InputMask from "react-input-mask";
import { Button } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const params = useParams(); //used to grab the id from the url
  const location = useLocation(); //used to grab the other data from the url
  const [selectedDates, setSelectedDates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Parse the "dates" URL parameter to retrieve the selectedDates data
    const searchParams = new URLSearchParams(location.search);
    const datesParam = searchParams.get("dates");

    // If the dates parameter exists, parse it back to an array
    if (datesParam) {
      const decodedDates = decodeURIComponent(datesParam);
      const parsedDates = JSON.parse(decodedDates);
      setSelectedDates(parsedDates);
    }
  }, [location.search]);

  const [name, setName] = useState("Buster Baxter");
  const [email, setEmail] = useState("baxterbuster@gmail.com");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiration, setCardExpiration] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [chargePerNight, setChargePerNight] = useState("");

  // Set up the pricing variables and state
  const cleaningFee = 50;
  const serviceFee = 20;
  const taxRate = 0.1;

  const [totalNights, setTotalNights] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [listingArray, setListingArray] = useState(null);

  const getCheckoutData = async () => {
    //getting data about the listing that the user wants to book
    try {
      const response = await axios.get("http://localhost:4000/listings");
      const data = response.data;
      for (const listing of data) {
        if (listing.listId == params.id) {
          setListingArray(listing);
          setChargePerNight(listing.price);
          setName("Buster Bax");
          setEmail("baxthegreat@gmail.com");
        }
      }
      // This code block will only execute if no matching listing is found with that id
    } catch (error) {
      console.error("Error fetching listing ", error);
      // handle login error, e.g., show an error message
    }
  };

  useEffect(() => {
    getCheckoutData();
  }, []);

  useEffect(() => {
    // Calculate total price whenever totalNights changes
    const nightsPrice = totalNights * chargePerNight;
    const totalPrice = (nightsPrice + cleaningFee + serviceFee) * (1 + taxRate);
    setTotalPrice(totalPrice);
  }, [chargePerNight, totalNights]);

  const handleSubmit = async (e) => {
    //handles the entire submit function
    e.preventDefault();

    const bookingData = {
      name: name,
      email: email,
      cardNum: cardNumber,
      cardExp: cardExpiration,
      cardCVV: cardCVV,
      zipCode: zipCode,
      country: country,
      startDate: checkInDate ? checkInDate.toISOString() : null,
      endDate: checkOutDate ? checkOutDate.toISOString() : null,
      totalNights: totalNights,
      totalPrice: totalPrice,
      listId: params.id,
      transactionId: null,
      userId: null,
      hostId: null,
    };

    // Perform checkout logic here, e.g., submit the form data to the API
    try {
      const response = await axios.post(
        "http://localhost:4000/newtransaction",
        bookingData
      ); //sends data to db
      console.log("Transaction Completed Successfully");
      navigate("/confirmed");
    } catch (error) {
      console.log(error.response);
      console.log("Error completing transaction in CheckoutPage:", error);
    }

    // Reset form fields
    setCardNumber("");
    setCardExpiration("");
    setCardCVV("");
    setZipCode("");
    setCountry("");
  };

  //Grabs two images for showing
  let img1, img2;
  if (listingArray) {
    img1 = listingArray.imgPath + "/1.png";
    img2 = listingArray.imgPath + "/2.png";
  }
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const calculateTotalNights = () => {
    //calculates the number of total nights
    if (selectedDates.length > 0) {
      let temp_check_in = new Date(selectedDates[0]);
      let temp_check_out = new Date(selectedDates[1]);
      const timeDiff = Math.abs(temp_check_in - temp_check_out);
      const totalNights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) - 1;
      setTotalNights(totalNights);
      setCheckInDate(temp_check_in);
      setCheckOutDate(temp_check_out);
    }
  };

  useEffect(() => {
    calculateTotalNights();
  }, [selectedDates]);

  return (
    <div className="checkout-container">
      <div className="checkout-summary">
        <div className="checkout-listing-details">
          <img src={img2} alt="Listing" className="checkout-listing-image" />
          <h2 className="checkout-listing-title">
            {listingArray?.title} by{" "}
            <span style={{ fontWeight: "lighter" }}>{listingArray?.host}</span>
          </h2>
          <p className="checkout-listing-location">{listingArray?.address}</p>
          <p className="checkout-listing-price">
            ${listingArray?.price} per night
          </p>
        </div>
        <div className="checkout-payment-details">
          {/* Your trip details */}
          <h2>Your Trip</h2>
          <p>
            Check-in Date:{" "}
            {checkInDate ? checkInDate.toLocaleDateString() : "N/A"}
          </p>
          <p>
            Check-out Date:{" "}
            {checkOutDate ? checkOutDate.toLocaleDateString() : "N/A"}
          </p>
          <p>Total Nights: {totalNights}</p>
          {/* Payment Details */}
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
        <img src={img1} alt="Listing" className="checkout-preview-image" />
        <div className="checkout-price-breakdown">
          <h2>Price Breakdown</h2>
          <p>
            <span>
              ${chargePerNight} x {totalNights} nights
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
            <span>{taxRate * 100}%</span>
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
