import React, { useState, useEffect } from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';

const AboutLink = "/About";
const AccountLink = "/Account";
const loginLink = "/Login";

function Header({ authenticatedUser, setAuthenticatedUser }) {

  const handleSignOut = async () => {
    setAuthenticatedUser(null);
    localStorage.clear();
    window.location.href = "/";
  };

  function goHome() {
    window.location.href = "/";
  }

  return (
    <><div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel"> Logout? </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Are your sure you want to logout? You will be returned to the homescreen!
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
            <button type="button" class="btn btn-primary" onClick={handleSignOut}>Yes</button>
          </div>
        </div>
      </div>
    </div><header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col d-flex align-items-center">
              <img
                style={{ cursor: "pointer" }}
                className=" rounded header-img"
                src="../public/logo.png"
                alt="Nest Over Yonder Logo"
                onClick={goHome} />
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
                aria-label="default input example" />
              <button type="button" className="btn btn-primary">
                Search
              </button>
              <div className="popup">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="bi bi-sliders"></i>
                </button>
              </div>
            </div>
            <div className="col d-flex align-items-center justify-content-end">
              {/* Login */}
              <div className="profile-dropdown-btn">
                {/* Person icon for dropdown menu */}
                <a className="btn btn-grey dropdown-toggle border-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-person-circle fs-3 text-white"></i>
                </a>
                {/* dropdown menu in which you can go to Login page, Account Page, Logout, and About page*/}
                <ul className="dropdown-menu bg-secondary-subtle" color="grey" position="relative">
                  <li>
                    <Link className="dropdown-item" to={AboutLink}>
                      About
                    </Link>
                  </li>
                  {/* Render "My Account" link and "Logout" button if the user is logged in */}
                  {authenticatedUser ? (
                    <>
                      <li>
                        <a className="dropdown-item" href="/Account">
                          My Account
                        </a>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                          Logout
                        </button>
                      </li>
                    </>
                  ) : (
                    // Render Login/Signup link if the user is not logged in
                    <li>
                      <a className="dropdown-item" href="/Login">
                        Login/Signup
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header></>
  );
}

export default Header;
