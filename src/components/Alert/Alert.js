import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const colors = {
  success: "#6da06f",
  error: "#f56260",
};

const useStyles = createUseStyles({
  wrapper: {
    border: ({ type }) => `${colors[type]} solid 1px`,
    marginBottom: 15,
    padding: 15,
    position: "relative",
    "& > h3": {
      color: ({ type }) => colors[type],
      margin: [0, 0, 10, 0],
    },
  },
});

export default function Alert({ title, children, type }) {
  const classes = useStyles({type})
  return (
    <div className={classes.wrapper}>
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
