import React from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function Header() {
  function goHome() {
    window.location.href = "/";
  }
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex align-items-center">
            <img
              style={{ cursor: "pointer" }}
              className=" rounded header-img"
              src="../public/logo.png"
              alt="Nest Over Yonder Logo"
              onClick={goHome}
            />
            <div className="container">
              <h1
                className="header-title"
                style={{ cursor: "pointer" }}
                onClick={goHome}
              >
                Nest Over Yonder
              </h1>
            </div>
          </div>
          <div className="col d-flex align-items-center">
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="default input example"
            />
            <Link to={"/search/1"}>
              <button type="button" className="btn btn-primary">
                Search
              </button>
            </Link>

            <div className="popup">
              <button
                type="button"
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Filters
              </button>
            </div>
          </div>
          <div className="col d-flex align-items-center justify-content-end">
            {/* Login */}
            <button type="button" className="btn btn-secondary">
              Sign up
            </button>
            <button type="button" className="btn btn-primary">
              Log in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
