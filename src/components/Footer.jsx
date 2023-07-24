import React from 'react';
import "../styles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="text">© 2023 Nest Over Yonder. All rights reserved.</span>
      
      <Link to="/support" style={{ textDecoration: 'none' }}><p style={{ textDecorationLine: "none", color: "#000" }}>Support</p></Link>
      {/* <a href="https://google.com" className="support-link">Support</a> */}
    </footer>
  );
};

export default Footer;
