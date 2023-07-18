import React from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

const loginLink = "/Login";


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
                <i class="bi bi-sliders"></i>
              </button>
            </div>
          </div>
          <div className="col d-flex align-items-center justify-content-end">
            {/* Login */}
            <div className="profile-dropdown-btn">
              {/* Person icon for dropdown menu */}
              <a className="btn btn-grey dropdown-toggle border-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-person-circle  fs-3 text-white"></i>
              </a>
              {/* dropdown menu in which you can go to Login page and eventually the about page */}
              <ul className="dropdown-menu bg-secondary-subtle" color="grey" position="relative">
                <li><a className="dropdown-item " href="/Login">Login/Signup</a></li>
                {/*Account link*/} 
                <li><a className="dropdown-item" href="#">About</a></li>
                {/*Signout redirect/link*/}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
