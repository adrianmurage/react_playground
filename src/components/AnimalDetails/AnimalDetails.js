import React from "react";
import PropTypes from "prop-types";
import styles from "./AnimalDetails.module.css";

function convertFood(food) {
  switch (food) {
    case "insects":
      return "🐜";
    case "meat":
      return "🍖";
    case "plants":
    default:
      return "🌱";
  }
}

function AnimalDetails({ diet, scientificName }) {
  return (
    <div className={styles.details}>
      <h4>Details:</h4>
      <div>Scientific Name: {scientificName}.</div>
      <div>Diet : {diet.map((food) => convertFood(food)).join(", ")}</div>
    </div>
  );
}

AnimalDetails.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  scientificName: PropTypes.string.isRequired,
};

export default AnimalDetails;
