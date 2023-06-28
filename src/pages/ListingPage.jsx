import React from "react";
import { useParams } from "react-router-dom";
import "../styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
};

function ListingPage() {
  const params = useParams();
  let listingData = null;

  //database lookip using id
  if (params.id === "1") {
    listingData = {
      photos: {
        pic1: "../public/house1/house1.png",
        pic2: "../public/house1/house2.png",
        pic3: "../public/house1/house3.png",
        pic4: "../public/house1/house4.png",
      },

      hostName: "Bob Ross",
      title: "Huge House",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem similique itaque perspiciatis quia exercitationem dolor eligendi sint autem ex iusto repudiandae quas, quam dolore pariatur culpa ipsam eaque tenetur consequuntur?",
      price: "500",
      rating: "4.89",
      location: "Lakewood, Texas",
    };
  }

  const imgStyles = {
    width: "500px",
    height: "350px",
  };

  return (
    <div style={{ backgroundColor: "lightgrey" }}>
      {listingData != null ? (
        <div>
          <div
            className="head"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h1>
              {listingData.title} - ${listingData.price}
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
              <h3> Rating: {listingData.rating}</h3>
              <h3> {listingData.location}</h3>
            </div>
          </div>

          <div>
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              renderDotsOutside={false}
              customTransition="all 1"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div>
                <img
                  style={imgStyles}
                  src={listingData.photos.pic1}
                  alt={listingData.title}
                />
              </div>
              <div>
                <img
                  style={imgStyles}
                  src={listingData.photos.pic2}
                  alt={listingData.title}
                />
              </div>
              <div>
                <img
                  style={imgStyles}
                  src={listingData.photos.pic3}
                  alt={listingData.title}
                />
              </div>
              <div>
                <img
                  style={imgStyles}
                  src={listingData.photos.pic4}
                  alt={listingData.title}
                />
              </div>
            </Carousel>
          </div>

          <h2>
            <u>Host Name</u>: {listingData.hostName}
          </h2>
          <div className="desc">
            <h2>Description:</h2>
            <p>{listingData.description}</p>
          </div>
        </div>
      ) : (
        <>
          <h1 style={{ color: "red", alignSelf: "center", marginLeft: "20px" }}>
            ERROR: Not a valid listing
          </h1>
        </>
      )}
    </div>
  );
}

export default ListingPage;
