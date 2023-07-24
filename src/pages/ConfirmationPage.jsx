// ConfirmationPage.js
import React from "react";
import styles from "../css/ConfirmationPage.module.css"; // Import the CSS module

const ConfirmationPage = () => {
  return (
    <div className={styles["confirmation-page"]}>
      <div className={styles["confirmation-content"]}>
        <i className={styles["confirmation-icon"] + " fas fa-check-circle"}></i>
        <h2 className={styles["confirmation-title"]}>Thank You!</h2>
        <p className={styles["confirmation-text"]}>
          You're stay has successfully been booked.
        </p>
        <a href="/" className={styles["confirmation-link"]}>
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ConfirmationPage;
