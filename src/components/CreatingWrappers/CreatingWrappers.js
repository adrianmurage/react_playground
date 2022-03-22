import React from "react";
import styles from "./CreatingWrappers.module.css";
import PropTypes from "prop-types";
import CreatingWrappersAnimalDetails from "../CreatingWrappersAnimalDetails/CreatingWrappersAnimalDetails";

function CreatingWrappers({ name, size, ...props }) {
  return (
    <div>
      <h3>{name}</h3>
      <div>{size} kg</div>
      <CreatingWrappersAnimalDetails {...props}/>
    </div>
  );
}

CreatingWrappers.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};


export default CreatingWrappers