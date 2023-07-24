import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import star from "../assets/star.svg";
import Calendar from "@demark-pro/react-booking-calendar";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import "../css/icons.css";
import area from "../assets/area.png";
import audience from "../assets/audience.png";
import bath from "../assets/bathtub.png";
import bed from "../assets/bed.png";
import { useNavigate } from "react-router-dom";
import VRTour from "../components/VRTour";

const responsive = {
  //for the image carousel
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
};

const VRTourStyles = {
  width: "50vw",
  height: "50px",
};

const popupStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0, 0, 0, 0.5)",
  zIndex: 2,
};

const popupContentStyles = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
  width: "60%",
};

function ListingPage() {
  const params = useParams(); //to grab id from the url
  const [listingData, setListingData] = useState(null); //listingData stores the JSON data for each listing
  const navigateTo = useNavigate(); //used to navigate to other pages
  const [showVRPopup, setShowVRPopup] = useState(false);

  const handleToggleVRPopup = () => {
    setShowVRPopup(!showVRPopup);
  };

  const getListingData = async () => {
    //sends an API get request to grab the data for one relevant listing
    try {
      const response = await axios.get("http://localhost:4000/listings");
      const data = response.data;
      for (const listing of data) {
        if (listing.listId == params.id) {
          setListingData(listing);
        }
      }
    } catch (error) {
      // This code block will only execute if no matching listing is found with that id
      console.error("Error fetching listing ", error);
    }
  };

  useEffect(() => {
    //tells program to grab listing data once
    getListingData();
  }, []);

  const cleanAmenities = (amenities) => {
    //removing the "_id" value from the amenities array
    const { _id, ...cleanedAmenities } = amenities;
    return cleanedAmenities;
  };

  //this following block is all code for grabbing the reserved listings data from the database, parsing it, and then updating the reserved array with it
  let reserved = [];
  function removeIdPropertyFromArray(arrayOfObjects) {
    //removes the "_id" property from the array
    return arrayOfObjects.map(({ _id, ...rest }) => rest);
  }
  function formatDate(arrayOfObjects) {
    //formats date to string
    return arrayOfObjects.map((obj) => ({
      ...obj,
      startDate: formatDateToString(obj.startDate),
      endDate: formatDateToString(obj.endDate),
    }));
  }
  function formatDateToString(dateString) {
    //called on by formatDate
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}, ${month}, ${day}`;
  }
  function convertToDates(inputArray) {
    //final piece, converting it to the required format for the calendar
    return inputArray.map((obj) => ({
      startDate: new Date(obj.startDate),
      endDate: new Date(obj.endDate),
    }));
  }
  if (listingData) {
    //this is where we call the functions for the reserved array
    reserved = convertToDates(
      formatDate(removeIdPropertyFromArray(listingData.reservedDates))
    );
  }

  //code for the calendar, purpose is to allow user to select dates from it
  const [selectedDates, setSelectedDates] = useState([]);
  const handleChange = (e) => setSelectedDates(e);

  //creates an imageArray that has the image paths for the house
  let imageArray = [];
  if (listingData != null) {
    for (let i = 1; i <= 6; ++i) {
      imageArray.push(listingData?.imgPath + "/" + i + ".png");
    }
  }

  //handles the booking process by passing data to the checkout page through url
  const handleBookNow = () => {
    if (selectedDates.length > 0) {
      const selectedDatesString = encodeURIComponent(
        JSON.stringify(selectedDates)
      );
      navigateTo(`/checkout/${params.id}?dates=${selectedDatesString}`);
    } else {
      // Show an alert or some indication to the user that they need to select dates first.
      alert("Please select the dates you want to book.");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#F4F7FF",
        marginTop: "4rem",
        padding: "10px",
      }}
    >
      {listingData != null ? (
        <div
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            alignItems: "center",
          }}
        >
          <div
            className="head"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h1
              style={{
                fontSize: "3.5rem",
                fontFamily:
                  '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;',
              }}
            >
              {listingData.title}
            </h1>

            <div
              style={{
                marginRight: "10px",
                textAlign: "right",
                borderColor: "darkgrey",
                borderWidth: "20px",
              }}
              className="rating_location"
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={star}
                  style={{
                    height: "25px",
                    width: "25px",
                    marginRight: "5px",
                    marginBottom: "5px",
                  }}
                />
                <h3>{listingData.rating}</h3>
              </div>
              <h3> {listingData.city}</h3>
            </div>
          </div>

          <div className="carousel">
            {/* Carousel of images */}
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              renderDotsOutside={false}
              customTransition="transform 500ms ease-in-out"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              autoPlay={true}
            >
              {imageArray.map((srcImg) => {
                return (
                  <div>
                    <img
                      className="imgListing"
                      src={srcImg}
                      alt={listingData.title}
                      key="${srcImg}"
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>

          <div className="below-carousel">
            <div className="listingprops">
              <div>
                <span style={{ fontSize: "4rem" }}>${listingData.price}</span>
                <span style={{ fontSize: "2rem" }}> a night</span>
              </div>

              <h2>
                {"Host: "}
                <span style={{ fontWeight: "lighter" }}>
                  {listingData.host}
                </span>
              </h2>

              <div className="desc">
                <h2>Description:</h2>
                <p>{listingData.description}</p>
              </div>
              <Button onClick={handleToggleVRPopup}>Take a VR Tour</Button>
              <div className="amenities">
                <h2>Amenities:</h2>
                <ul>
                  {listingData.amenities &&
                    Object.entries(cleanAmenities(listingData.amenities)).map(
                      ([key, value]) =>
                        value && (
                          <li key={key}>
                            {key.charAt(0).toUpperCase() +
                              key.slice(1).replace(/([A-Z])/g, " $1")}
                          </li>
                        )
                    )}
                </ul>
              </div>
              {showVRPopup && (
                <div style={popupStyles} className="popup">
                  <div style={popupContentStyles} className="popup-content">
                    <h2>Virtual Reality Tour</h2>
                    <VRTour style={VRTourStyles} />
                    <button onClick={handleToggleVRPopup}>Close</button>
                  </div>
                </div>
              )}
              <div className="property-details">
                <h2 className="property-details-heading">Property Details:</h2>
                <div className="property-details-content">
                  <div className="property-detail">
                    <img className="property-detail-icon" src={bed} />
                    <div className="property-detail-text">
                      <h3>Beds</h3>
                      <p>{listingData.bed}</p>
                    </div>
                  </div>
                  <div className="property-detail">
                    <img className="property-detail-icon" src={bath} />
                    <div className="property-detail-text">
                      <h3>Baths</h3>
                      <p>{listingData.bath}</p>
                    </div>
                  </div>
                  <div className="property-detail">
                    <img className="property-detail-icon" src={area} />
                    <div className="property-detail-text">
                      <h3>Square Footage</h3>
                      <p>{listingData.area} sqft</p>
                    </div>
                  </div>
                  <div className="property-detail">
                    <img className="property-detail-icon" src={audience} />
                    <div className="property-detail-text">
                      <h3>Guests</h3>
                      <p>{listingData.maxGuests}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="calendar">
              <Calendar
                selected={selectedDates}
                onChange={handleChange}
                reserved={reserved}
                variant="booking"
                dateFnsOptions={{ weekStartsOn: 0 }}
                range={true}
              />

              <Button onClick={handleBookNow} style={{ height: "45vh" }}>
                Book Now
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* If listingData has not been rendered yet, then show a loading screen */}
          <h3
            style={{
              color: "blue",
              alignSelf: "center",
              marginLeft: "10px",
              marginTop: "10px",
            }}
          >
            Loading, please wait.
          </h3>
        </>
      )}
    </div>
  );
}

export default ListingPage;
