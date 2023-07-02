import React from "react";
import "../styles.css";
import star from "../assets/star.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function SearchListing({
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
    <div className="listing rounded" style={{ display: "flex", flexDirection: "column", background: "whitesmoke", maxWidth: "300px" }}>
      <Link to={listingLink}>
        <img
          className="listing-image rounded"
          style={{ cursor: "pointer", maxWidth: "300px", height: "auto" }}
          src={src}
        />
      </Link>

      <div className="listing-info" style={{ display: "flex", flexDirection: "column", textAlign: "center", verticalAlign: "middle", marginLeft: "0" }}>
        <Link style={{ textDecoration: "none" }} to={listingLink}>
          <h2
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            {title}
          </h2>
        </Link>

        <h4>{location}</h4>
        <h5>{description}</h5>
        <h3>{price}</h3>

        <div
          className="rating"
          style={{ justifyContent: "center", display: "flex", alignItems: "center", width: "100%" }}
        >
          <img
            src={star}
            style={{ height: "18px", width: "18px" }}
          />
          <h3 style={{ margin: "0px" }}> {rating}</h3>
        </div>
      </div>
    </div>
  );
}

export default SearchListing;
