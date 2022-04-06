import React from "react";
import Alert from "../Alert/Alert";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  item: {},
  wrapper: {
    borderTop: "black solid 1px",
    display: "flex",
    flexWrap: "wrap",
    "& h3": {
      width: "100%",
    },
    "& $item": {
      marginRight: 20,
    },
  },
});

export default function CartSuccess() {
  const classes = useStyles();
  return (
    <Alert title="Added to Cart" type="success">
      <div className={classes.wrapper}>
        <h3>You have added 3 items:</h3>
        <div className={classes.item}>
          <div>Bananas</div>
          <div>Quantity: 2</div>
        </div>
        <div className={classes.item}>
          <div>Lettuce</div>
          <div>Quantity: 1</div>
        </div>
      </div>
    </Alert>
  );
}