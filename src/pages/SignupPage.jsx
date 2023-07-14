import React from "react";
import { Link } from "react-router-dom";
const loginLink = "/Login"
// function validate(input){
//     //let input = //this.state.input;
//     let errors = {};
//     let isValid = true;
//     if (!input["name"]) {
//       isValid = false;
//       errors["name"] = "Please enter your name.";
//     }
//     if (!input["email"]) {
//       isValid = false;
//       errors["email"] = "Please enter your email Address.";
//     }
//     if (typeof input["email"] !== "undefined") {
//       var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//       if (!pattern.test(input["email"])) {
//         isValid = false;
//         errors["email"] = "Please enter valid email address.";
//       }
//     }
//     if (!input["password"]) {
//       isValid = false;
//       errors["password"] = "Please enter your password.";
//     }
//     if (!input["confirm_password"]) {
//       isValid = false;
//       errors["confirm_password"] = "Please enter your confirm password.";
//     }
//     if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
//       if (input["password"] != input["confirm_password"]) {
//         isValid = false;
//         errors["password"] = "Passwords don't match.";
//       }
//     }
//     // this.setState({
//     //   errors: errors
//     // });
//     return isValid;
// }


//Sign up function allows the user to set up their name(first and last), 
//their number, email, and password for their new account
function SignupPage() {
  return (
    <>
      <div className="container pt-5 mt-5">
        <div className="row justify-content-center align-items-center">
          <form className="col-6 border p-3 rounded">
            <div className="mb-3">
              <label for="fname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fname"
                // onChange={validate(this)}
                required
              />
            </div>
            <div className="mb-3">
              <label for="lname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lname"
                // onChange={validate(this)}
                required
              />
            </div>
            <div className="mb-3">
              <label for="phone" className="form-label">
                Phone Number
              </label>
              <input type="tel" className="form-control" id="phone" />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                // onChange={validate(this)}
                required
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="password1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password1"
                // onChange={validate(this)}
              />
            </div>
            <div className="mb-3">
              <label for="password2" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password2"
                // onChange={validate(this)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
            <div>
                Have an account already?
                <Link to={loginLink} className="ps-3">Login</Link>
            </div>
          </form>
        </div>
      </div>
      <script src="../public/js/signup.js"></script>
    </>
  );
}

export default SignupPage;
