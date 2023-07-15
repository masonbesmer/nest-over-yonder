import React, {useState} from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";

//Login function allows the user to input their email and password
//in order to access account functionality
const signLink = "/Signup"

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showMessage, setShowMessage] = useState(false);

    const handleLogin = async () =>
    {
      // console.log("Form submitted");
      try {
        const response = await axios.get("http://localhost:4000/users");
        const data = response.data;

        for (const user of data) {
          // Use 'user' to access current user in the loop
          if (user.email === email && user.password === password) {
            console.log("Login successful");
            // redirect to the homepage
            navigate("/");
            console.log("AFter NAVIGATE--------------------------------------------------");
          }
        }
    
        // This code block will only execute if no matching user is found
        console.error("Login failed, user:", email);
        setShowMessage(true);
        // handle login error, e.g., show an error message
    
      } catch (error) {
        console.error("Error logging in:", error);
        // handle login error, e.g., show an error message
      }
    };

  return (
    <div className="container pt-5 mt-5">
        <div className="row justify-content-center align-items-center">
        {showMessage && (
            <div
              class="alert alert-danger show text-center"
              role="alert"
            >
              Email and password do not match, One or both are incorrect! 
              {/*-------------------------------------------------------FIX ME */}
              {/* <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button> */}
            </div>
          )}
            <form name="login"  method="post" className="col-6 border p-3 rounded">
                <h1>Login</h1>
                <br />
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleLogin}>
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
