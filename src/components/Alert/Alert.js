import React from "react";
import PropTypes from "prop-types";
import './Alert.css'

export default function Alert({ title, children, type }) {
  return (
    <div className={`alert-wrapper ${type}`}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType(
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ),
  type: PropTypes.string.isRequired,
};
