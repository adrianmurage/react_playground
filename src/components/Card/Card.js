import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

function Card({ title, details, children }) {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-details"]}>
        <h3>{title}</h3>
        {details}
      </div>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
  details: PropTypes.element,
  title: PropTypes.string.isRequired,
};

Card.defaultProps = {
  details: null,
}

export default Card;
