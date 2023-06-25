import React from 'react'
import '../styles.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "react-bootstrap"

// toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

function Header() {
    return (
        <header className="header">
            <div className="container-fluid">
                <div className="row">    
                    <div className="col d-flex align-items-center">
                        <img className=" rounded header-img" src="../public/logo.png"  alt="Nest Over Yonder Logo"/>
                        <div className="container">
                            <h1 className="header-title">Nest Over Yonder</h1>
                        </div>
                    </div>
                    <div className="col d-flex align-items-center">
                        <input className="form-control" type="text" placeholder="Search" aria-label="default input example"/>
                        <button type="button" className="btn btn-primary">Search</button>
                        <div className="dropdown">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
                            Filters
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
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
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex align-items-center justify-content-end">
                        {/* Login */}
                        <button type="button" className="btn btn-secondary">Sign up</button>
                        <button type="button" className="btn btn-primary">Log in</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header