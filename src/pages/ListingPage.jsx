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

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
};

function ListingPage() {
  const params = useParams();
  const [listingData, setListingData] = useState(null);

  const getListingData = async () => {
    // console.log("Form submitted");
    try {
      const response = await axios.get("http://localhost:4000/listings");
      const data = response.data;
      console.log(data);
      for (const listing of data) {
        // Use 'user' to access current user in the loop
        console.log(listing);
        if (listing.listId == params.id) {
          console.log("Listing found successful");
          setListingData(listing);
        }
      }

      // This code block will only execute if no matching listing is found with that id
    } catch (error) {
      console.error("Error fetching listing ", error);
      // handle login error, e.g., show an error message
    }
  };

  useEffect(() => {
    getListingData();
  }, []);

  const reserved = [
    { startDate: new Date(2023, 6, 22), endDate: new Date(2023, 6, 29) },
  ];
  const [selectedDates, setSelectedDates] = useState([]);
  const handleChange = (e) => setSelectedDates(e);

  let imageArray = [];
  if (listingData != null) {
    for (let i = 1; i <= 4; ++i) {
      imageArray.push(listingData?.imgPath + "/" + i + ".png");
    }
  }

  return (
    <div
      style={{
        backgroundColor: "lightgrey",
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
              <Button>Take a VR Tour</Button>
              <div className="amenities">
                <h2>Amenities:</h2>
                <ul>
                  {listingData.amenities &&
                    Object.entries(listingData.amenities).map(
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
              <div className="max-occupancy">
                <h2>Max Occupancy:</h2>
                <p>{listingData.maxGuests} guests</p>
              </div>
              <div className="property-details">
                <h2 className="property-details-heading">Property Details</h2>
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
                onOverbook={(e, err) => alert(err)}
                disabled={(date, state) => !state.isSameMonth}
                reserved={reserved}
                variant="booking"
                dateFnsOptions={{ weekStartsOn: 1 }}
                range={true}
              />
              <Button>Book Now</Button>
            </div>
          </div>
        </div>
      ) : (
        <>
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
