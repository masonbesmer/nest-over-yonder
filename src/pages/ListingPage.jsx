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

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
};
const importAll = (r) => r.keys().map((key) => r(key).default);

function ListingPage() {
  const params = useParams();

  const reserved = [
    { startDate: new Date(2023, 6, 22), endDate: new Date(2023, 6, 29) },
  ];
  const [selectedDates, setSelectedDates] = useState([]);
  const handleChange = (e) => setSelectedDates(e);

  const [data, setData] = useState();
  //database lookip using id
  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/639b810f-9688-4a6f-a01c-0862abaeb8c7"
      );
      const apiData = await res.json();
      setData(apiData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let listing = data?.find((item) => item.ListId === params.id); //params.id is the id given in the browser url itself

  let listingData = {
    photos: listing?.ImgPath,
    hostName: listing?.HostId,
    title: listing?.Title,
    description: listing?.Description,
    price: listing?.Price,
    rating: listing?.Rating,
    location: listing?.Address,
  };

  const images = importAll(
    require.context(listingData.photos, false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        marginTop: "4rem",
        padding: "10px",
        height: "1000vh",
      }}
    >
      {listingData != null ? (
        <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
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
              <h3> {listingData.location}</h3>
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
              {images.map((listing, index) => {
                return (
                  <div>
                    <img
                      className="imgListing"
                      src={listing}
                      alt={listingData.title}
                    />
                  </div>
                );
              })}
              ;
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
                  {listingData.hostName}
                </span>
              </h2>

              <div className="desc">
                <h2>Description:</h2>
                <p>{listingData.description}</p>
              </div>
              <Button>Book Now</Button>
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
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1
            style={{
              color: "red",
              alignSelf: "center",
              marginLeft: "20px",
              marginTop: "20px",
            }}
          >
            ERROR: Not a valid listing
          </h1>
        </>
      )}
    </div>
  );
}

export default ListingPage;
