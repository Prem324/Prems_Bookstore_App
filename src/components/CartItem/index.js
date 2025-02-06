import React from "react";
import { BsPlusSquare, BsDashSquare } from "react-icons/bs";
import CartContext from "../../context/CartContext";
import { FaTrash } from "react-icons/fa";
import "./index.css";

const CartItem = (props) => (
  <CartContext.Consumer>
    {(value) => {
      const { incrementCartItemQuantity, decrementCartItemQuantity } = value;
      const { cartItemDetails, handleDelete } = props;
      const { isbn13, title, subtitle, image, price, quantity } =
        cartItemDetails;
      const onClickDelete = () => {
        handleDelete(cartItemDetails);
      };
      const onClickDecrement = () => {
        decrementCartItemQuantity(isbn13);
      };
      const onClickIncrement = () => {
        incrementCartItemQuantity(isbn13);
      };
      return (
        <div className="cart-item-container">
          <img src={image} alt={title} className="cart-book-image" />
          <div className="product-info-container">
            <h1 className="book-title">{title}</h1>
            <p className="cart-book-subtitle">{subtitle}</p>
            <h className="price">{price}</h>
          </div>
          <div className="cart-quantity-container">
            <button
              type="button"
              className="quantity-controller-button"
              onClick={onClickDecrement}
            >
              <BsDashSquare color="#52606D" size={12} />.
            </button>
            <p className="cart-quantity">{quantity}</p>
            <button
              type="button"
              className="quantity-controller-button"
              onClick={onClickIncrement}
            >
              <BsPlusSquare color="#52606D" size={12} />.
            </button>
          </div>
          <div className="product-actions-container">
            <button className="delete-button" onClick={onClickDelete}>
              <FaTrash className="delete-icon" />
            </button>
          </div>
        </div>
      );
    }}
  </CartContext.Consumer>
);

export default CartItem;
