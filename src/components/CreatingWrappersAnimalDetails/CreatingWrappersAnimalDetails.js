import React from "react";
import PropTypes from "prop-types";
import styles from "./CreatingWrappersAnimalDetails.module.css";

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

function CreatingWrappersAnimalDetails({ diet, scientificName }) {
  return (
    <div className={styles.details}>
      <h4>Detials:</h4>
      <div>Scientific Name: {scientificName}.</div>
      <div>Diet : {diet.map((food) => convertFood(food)).join(", ")}</div>
    </div>
  );
}

CreatingWrappersAnimalDetails.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  scientificName: PropTypes.string.isRequired,
};

export default CreatingWrappersAnimalDetails;
