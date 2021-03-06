import React, { Component } from "react";
import classes from "./Product.module.css";

export default class Product extends Component {
  state = {
    cart: [],
    total: 0,
  };

  currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  add = () => {
      this.setState({
          cart: ['ice cream'],
          total: 5
      })
  }

  remove = () => {
      this.setState({
          cart: []
      })
  }

  getTotal = () => {
    return this.state.total.toLocaleString(undefined, this.currencyOptions);
  };

  render() {
    return (
      <div className={classes.wrapper}>
        <div>Shopping Cart: {this.state.cart.length} total items</div>
        <div>Total: {this.getTotal()}</div>
        <div className={classes.product}>
          <span role="img" aria-label="ice cream">
            🍦
          </span>
        </div>
        <button onClick={this.add}>Add</button> <button onClick={this.remove}>Remove</button>
      </div>
    );
  }
}
