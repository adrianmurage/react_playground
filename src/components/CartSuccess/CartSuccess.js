import React from "react";
import Alert from "../Alert/Alert";
import './CartSuccess.css'

export default function CartSuccess() {
    return(
        <Alert title="Added to Cart" type="success">
            <div className="cart-success-wrapper">
                <h3>
                    You have added 3 items:
                </h3>
                <div className="item">
                    <div>Bananas</div>
                    <div>Quantity: 2</div>
                </div>
                <div className="item">
                    <div>Lettuce</div>
                    <div>Quantity: 1</div>
                </div>
            </div>
        </Alert>
    )
}