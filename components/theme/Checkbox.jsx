import React from "react";
import styles from "../../styles/checkbox.module.css";

const Checkbox = () => {
  return (
    <>
      <label className={`agreeBox ${styles.checkbox_btn}`}>
        <label htmlFor="checkbox"></label>
        <input id="checkbox" type="checkbox" />
        <span className={`checkmark ${styles.checkmark}`}></span>
      </label>
    </>
  );
};

export default Checkbox;
