import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <p>Gallons</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.normalBtn}>LogIn</button>
        <button className={styles.roundBtn}>Start for free</button>
      </div>
    </div>
  );
};

export default Header;
