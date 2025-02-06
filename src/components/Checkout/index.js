import { Component } from "react";
import Header from "../Header";
import UserDetailsForm from "../UserDetailsForm";
import CartContext from "../../context/CartContext";

import "./index.css";

class Checkout extends Component {
  render() {
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
            <>
              <div className="checkout-page-container">
                <Header />
                <div className="checkout-form">
                  <div className="checkout-content-container">
                    <h1 className="checkout-heading">Checkout</h1>
                    <div className="form-and-summary">
                      <UserDetailsForm />
                      <div className="summary-container">
                        {cartList.map((each, index) => (
                          <div className="summary-item-container" key={index}>
                            <img
                              src={each.image}
                              alt={each.title}
                              className="summary-item-image"
                            />
                            <p className="summary-item-title">{each.title}</p>
                            <p className="summary-item-price">
                              {`${each.price} * ${each.quantity}`}
                            </p>
                          </div>
                        ))}
                        <div className="summary-total-container">
                          <p className="summary-total-title">Total</p>
                          <p className="summary-total-price">{`$${total}`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default Checkout;
