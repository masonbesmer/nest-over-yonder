import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles.css";

function AccountPage({ email }) {
  const navigate = useNavigate();
  const [showAccount, setShowAccount] = useState(true);
  const [showReservations, setShowReservations] = useState(false);
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const getUser = async () =>{
      try{
        const loggedInUser = JSON.parse(localStorage.getItem("user"));
        // console.log(JSON.parse(loggedInUser));
        const response = await axios.post('http://localhost:4000/user', { "email" : loggedInUser.email });
        const data = response.data;
        console.log(data);
        
        setUserData(data);

        console.log('Gotcha User', userData.email);
      } catch(error){
        console.log('Error retrieving current User', error)
        // navigate("/")
      }
    }
    getUser();
  }, []);

  function Accountpage() {
    setShowAccount(true);
    setShowReservations(false);
    return <div></div>;
  }
  function Reservations() {
    if (true) {
      
    }
    setShowAccount(false);
    setShowReservations(true);
    return <div></div>;
  }

  return (
    <div
      className="accountPage vh-100 bg-warning-subtle"
      style={{
        marginTop: "4.5rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="row h-100">
          <div className="sidebar col-3">
            <button type="button" className="btn btn-link fs-3 ps-4 w-100" onClick={Accountpage}>
              {" "}
              Account Settings{" "}
            </button>
            <button type="button" className="btn btn-link fs-3 ps-4 w-100" onClick={Reservations}>
              {" "}
              Reservations{" "}
            </button>
            {/* <div></div> */}
          </div>

          {showAccount && (
            <div className="accountContent text-center col-9 bg-white">
              <div className="content row align-items-center">
                <h1 className="border border-rounded bg-primary-subtle p-3">
                  Account Settings
                </h1>
                {/* User profile */}
                <h2>User Profile</h2>
                <p>Name: {userData.fname} {userData.lname}</p>
                <p>Email: {userData.email} </p>
                {/* Add more user profile details here */}

                <h2>Change Password</h2>
                <form>
                  <label>
                    New Password:
                    <input type="password" />
                  </label>
                  <br />
                  <button type="submit">Change Password</button>
                </form>
                {/* Add more account settings options here */}
              </div>
            </div>
          )}
          {showReservations && (
            <div className="accountContent text-center col-9 bg-white">
              <div className="content row align-items-center">
                <h1 className="border border-rounded bg-primary-subtle p-3"> Reservations </h1>
                {/* User's Reservations */}
                <h2> Reservervation for Date1 to Date2 </h2>
                <p>Name: John Doe</p>
                <p>Home Address: 1234 Doe St.</p>

                <form action="">
                  <button type="button"> Cancel Reservation? </button>
                </form>
                {/* Add more user reservation details here */}
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default AccountPage;
