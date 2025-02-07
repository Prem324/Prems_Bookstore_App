import { Component } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

import "./index.css";

const paymentOptionsList = [
  {
    id: "CARD",
    displayText: "Card",
    isDisabled: true,
  },
  {
    id: "NET BANKING",
    displayText: "Net Banking",
    isDisabled: true,
  },
  {
    id: "UPI",
    displayText: "UPI",
    isDisabled: true,
  },
  {
    id: "WALLET",
    displayText: "Wallet",
    isDisabled: true,
  },
  {
    id: "CASH ON DELIVERY",
    displayText: "Cash on Delivery",
    isDisabled: false,
  },
];

class Payment extends Component {
  state = {
    paymentMethod: "",
    isOrderPlaced: false,
  };

  onPlaceOrder = () => {
    this.setState({ isOrderPlaced: true });
  };

  onUpdatePaymentMethod = (event) => {
    const { id } = event.target;
    this.setState({ paymentMethod: id });
  };

  renderPaymentMethodsInput = () => (
    <ul className="payment-method-inputs">
      {paymentOptionsList.map((eachMethod) => (
        <li key={eachMethod.id} className="payment-method-input-container">
          <input
            id={eachMethod.id}
            type="radio"
            disabled={eachMethod.isDisabled}
            name="paymentMethod"
            onChange={this.onUpdatePaymentMethod}
            value={eachMethod.id}
            className="payment-method-input"
          />
          <label
            className={`payment-method-label ${
              eachMethod.isDisabled ? "disabled-label" : ""
            }`}
            htmlFor={eachMethod.id}
          >
            {eachMethod.displayText}
          </label>
        </li>
      ))}
    </ul>
  );

  render() {
    const { isOrderPlaced, paymentMethod } = this.state;
    return (
      <CartContext.Consumer>
        {(value) => {
          const { cartList } = value;
          const isCartEmpty = cartList.length === 0;
          let total = 0;
          if (!isCartEmpty) {
            cartList.map((eachCartItem) => {
              return (total +=
                parseFloat(eachCartItem.price.slice(1)) *
                eachCartItem.quantity);
            });
          }
          return (
            <div className="payments-container">
              {isOrderPlaced ? (
                <div className="order-success-container">
                  <p className="success-message">
                    Your order has been placed successfully
                  </p>
                  <Link to="/book">
                    <p className="continue-shopping">Continue Shopping</p>
                  </Link>
                </div>
              ) : (
                <>
                  <h1 className="payments-heading">Payments Details</h1>
                  <p className="payments-sub-heading">Payment Method</p>
                  {this.renderPaymentMethodsInput()}
                  <div className="order-details">
                    <p className="payments-sub-heading">Order details:</p>
                    <p>Quality:{cartList.length}</p>
                    <p>Total Price: Rs{parseFloat(total.toFixed(2))}/-</p>
                  </div>
                  <button
                    disabled={paymentMethod === ""}
                    type="button"
                    onClick={this.onPlaceOrder}
                    className="confirm-order-button"
                  >
                    Confirm Order
                  </button>
                </>
              )}
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default Payment;
