import React from "react";
import styles from "./AnimalCard.module.css";
import PropTypes from "prop-types";

export default function AnimalCard({
  additional,
  diet,
  name,
  scientificName,
  showAdditional,
  size,
}) {
  return (
    <div className={styles.animalWrapper} key={name}>
      <h3>{name}</h3>
      <h4>{scientificName}</h4>
      <h5>{size} kg</h5>
      <div>{diet.join(", ")}.</div>
      <button onClick={() => showAdditional(additional)}>More Info</button>
    </div>
  );
}

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  showAdditional: PropTypes.func.isRequired,
};

AnimalCard.defaultProps = {
  additional: {
    notes: "No Additional Information",
  },
};
