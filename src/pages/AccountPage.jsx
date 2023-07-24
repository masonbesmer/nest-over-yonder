import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles.css";

function AccountPage({ setAuthenticatedUser }) {
  const navigate = useNavigate();
  const [showAccount, setShowAccount] = useState(true);
  const [showReservations, setShowReservations] = useState(false);
  const [userData, setUserData] = useState("");
  const [newPassword, setNewPassword] = useState("");
  // const [message, setMessage] = useState("");

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
    // if (true) { // would of been used for actually seeing reservations
      
    // }
    setShowAccount(false);
    setShowReservations(true);
    return <div></div>;
  }

  const handlePassChange = async (event) =>{
    if (newPassword === userData.password) {
      // If the passwords match, display a message or perform any other action as needed
      alert("New password is the same as the current password. No changes made.");
      // window.location.href = "/Account";
    }
    else{
      try {
        const response = await axios.post('http://localhost:4000/changePass', { 'email': userData.email, 'currentPassword': userData.password, 'newPassword': newPassword });
        console.log(response.data);
        alert("You have successfully changed password to:", newPassword);
        setAuthenticatedUser(null);
        localStorage.clear();
        window.location.href = "/";
      } catch (error) {
        console.log('Error changing password:', error)
      }
    }
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
      {/* Modal below for when user is trying to change password */}
      <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Change Password?</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        You will be changing the password to the following: '{newPassword}'
        <br /> <br />
        Is this okay? You will be returned to the Home Screen and You will need to login again!
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">No</button>
        <button type="button" className="btn btn-success" onClick={handlePassChange}>Yes</button>
      </div>
    </div>
  </div>
</div>
{/* Modal Above */}
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
                <p>Phone: {userData.phone} </p>
                {/* Add more user profile details here */}

                <h2>Change Password</h2>
                <form>
                  <label>
                    New Password:
                    <input type="password" onChange={(e) => setNewPassword(e.target.value)} required/>
                  </label>
                  <br />
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">Change Password</button>
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
