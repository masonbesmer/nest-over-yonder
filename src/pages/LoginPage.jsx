import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useParams } from "react-router-dom";

//Login function allows the user to input their email and password
//in order to access account functionality

const signLink = "/signup"
console.log("HI");
function LoginPage() {
  return (
    <div className="container pt-5 mt-5">
        <div className="row justify-content-center align-items-center">
            <form name="login" action="test.html" method="post" className="col-6 border p-3 rounded">
                <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                    required
                />
                <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                </div>
                </div>
                <div className="mb-3">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                />
                </div>
                <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">
                    Remember Me!
                </label>
                </div>
                <button type="submit" className="btn btn-primary">
                Login
                </button>
                <br></br>
                <div>
                Don't have an account?
                <Link to={signLink} className="ps-3">SignUp</Link>
                </div>
            </form>
        </div>
       </div>
  );
}
export default LoginPage;
