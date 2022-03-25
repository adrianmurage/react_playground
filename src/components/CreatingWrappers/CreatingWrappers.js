import React from "react";
import PropTypes from "prop-types";
import AnimalDetails from "../AnimalDetails/AnimalDetails";
import Card from "../Card/Card";

function CreatingWrappers({ name, size, ...props }) {
  return (
    <Card title="Animal" details={<AnimalDetails {...props} />}>
      <h4>{name}</h4>
      <div>{size} kg</div>
      
    </Card>
  );
}

CreatingWrappers.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default CreatingWrappers;
