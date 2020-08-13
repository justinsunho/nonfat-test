import React from "react";
import styles from "./styles.module.scss";

const SubmitButton = ({ selected }) => {
  const onClick = () => {
    console.log(selected);
  };

  return (
    <button className={styles.button} onClick={onClick}>
      SUBMIT
    </button>
  );
};

export default SubmitButton;
