import React from "react";
import "../styles.css";
import star from "../assets/star.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Listing({
  src,
  title,
  description = "sample description",
  price,
  rating,
  location,
  id,
}) {
  const [components, setComponents] = useState(["Sample Component"]);
  function addComponent() {
    setComponents([...components, "Sample Component"]);
  }

  const listingLink = "/listing/" + id;

  return (
    <div className="listing" style={{ display: "flex" }}>
      <Link to={listingLink}>
        <img
          className="listing-image"
          style={{ cursor: "pointer" }}
          src={src}
        />
      </Link>

      <div className="listing-info">
        <Link style={{ textDecoration: "none" }} to={listingLink}>
          <h1
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            {title}
          </h1>
        </Link>

        <h3>{location}</h3>
        <h4>{description}</h4>
        <h2>{price}</h2>

        <div
          className="rating"
          style={{ display: "flex", alignItems: "center", width: "5rem" }}
        >
          <img
            src={star}
            style={{ height: "18px", width: "18px", marginRight: "5px" }}
          />
          <h3 style={{ margin: "0px" }}> {rating}</h3>
        </div>
      </div>
    </div>
  );
}

export default Listing;
