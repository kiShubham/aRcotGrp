import React from "react";
import styles from "./Footer.module.css";
import socialImg from "../../assets/Frame 56411.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <p>Gallons</p>
        <span>Enhance the visualization</span>
        <div>
          <img
            src={socialImg}
            className={styles.socialImg}
            alt="social media Sample images"
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Copyright 2023 canva AI Private Limited. All rights reserved.</p>
        <div className={styles.links}>
          <p>Privacy Policy</p>
          <p> | </p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
