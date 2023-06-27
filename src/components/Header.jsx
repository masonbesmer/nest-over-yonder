import React from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
// toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

function Header() {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex align-items-center">
            <img
              className=" rounded header-img"
              src="../public/logo.png"
              alt="Nest Over Yonder Logo"
            />
            <div className="container">
              <h1 className="header-title">Nest Over Yonder</h1>
            </div>
          </div>
          <div className="col d-flex align-items-center">
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="default input example"
            />
            <button type="button" className="btn btn-primary">
              Search
            </button>
            <div className="popup">
              <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Filters</button>
              <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <form action="test.html" method="post">
                  <div className="modal-dialog modal-md">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Filters</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body bg-secondary-subtle">
                        <div className="container-fluid">
                          <h2 className="fw-bold">Price</h2>
                          <div className="form-check form-switch">
                            {/*--making switch based filter for the pricing <$500, $500-$1500, and >$1500*/}
                            <input
                              className="form-check-input"
                              type="radio"
                              role="switch"
                              name="price"
                              id="price1"
                            />
                            <label className="form-check-label" for="price1">
                              &lt;$500
                            </label>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="radio"
                              role="switch"
                              name="price"
                              id="price2"
                            />
                            <label className="form-check-label" for="price2">
                              $500-$1500
                            </label>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="radio"
                              role="switch"
                              name="price"
                              id="price3"
                            />
                            <label className="form-check-label" for="price3">
                              &gt;$1500
                            </label>
                          </div>
                        </div>

                        <div className="container-fluid">
                          <h2 className="fw-bold">Property Type</h2>
                          <div className="form-check">
                            {/*}making checkboxes for each of the property types*/}
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="home"
                              name="typehouse"
                              id="typehouse1"
                            />
                            <label
                              className="form-check-label"
                              for="typehouse1"
                            >
                              Home
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="apartment"
                              name="typehouse"
                              id="typehouse2"
                            />
                            <label
                              className="form-check-label"
                              for="typehouse2"
                            >
                              Apartment
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="hotel"
                              name="typehouse"
                              id="typehouse3"
                            />
                            <label
                              className="form-check-label"
                              for="typehouse3"
                            >
                              Hotel
                            </label>
                          </div>
                        </div>

                        <h2 className="fw-bold">Amenities</h2>
                        <div className="container-fluid">
                          <div className="row  row-cols-3">
                            <div className="form-check">
                              {/*making checkboxes for each amenities for the user to choose through*/}
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="kitchen"
                                name="amenity"
                                id="amenity1"
                              />
                              <label
                                className="form-check-label"
                                for="amenity1"
                              >
                                Kitchen
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="washer"
                                name="amenity"
                                id="amenity2"
                              />
                              <label
                                className="form-check-label"
                                for="amenity2"
                              >
                                Washer
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="dryer"
                                name="amenity"
                                id="amenity3"
                              />
                              <label
                                className="form-check-label"
                                for="amenity3"
                              >
                                Dryer
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="wifi"
                                name="amenity"
                                id="amenity4"
                              />
                              <label
                                className="form-check-label"
                                for="amenity4"
                              >
                                Wifi
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="heating"
                                name="amenity"
                                id="amenity5"
                              />
                              <label
                                className="form-check-label"
                                for="amenity5"
                              >
                                Heating
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="aircondition"
                                name="amenity"
                                id="amenity6"
                              />
                              <label
                                className="form-check-label"
                                for="amenity6"
                              >
                                AirCondition
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label
                            for="guests"
                            className="form-label fs-3 fw-bold"
                          >
                            Number of Guests
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="guests"
                            name="guests"
                            min="0"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="sumbit" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/* <div className="dropdown-menu dropdown-menu-right">
                                <form className="m-3">
                                    <div className="form-group">
                                        <label for="price" className="form-label">Price</label>
                                        <input type="number" className="form-control" id="priceLow" placeholder="low"/>
                                        <input type="number" className="form-control" id="priceHigh" placeholder="high"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="startDate" className="form-label">Start date</label>
                                        <input type="date" className="form-control" id="startDate"/>
                                        <label for="endDate" className="form-label">End date</label>
                                        <input type="date" className="form-control" id="endDate"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="location" className="form-label">Location</label>
                                        <input type="text" className="form-control" id="location" placeholder="zip/city"/>
                                    </div>
                                </form>
                                <input type="reset" className="form-control" id="filterReset"/>
                                <button className="dropdown-item" type="button">Save</button>
                                <button className="dropdown-item" type="button">Reset</button>
                            </div> */}
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
