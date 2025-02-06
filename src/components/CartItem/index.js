import React from "react";
import { FaTrash } from "react-icons/fa";
import "./index.css";

const CartItem = (props) => {
  const { cartItemDetails, handleDelete } = props;
  const { title, subtitle, image, price } = cartItemDetails;
  const onClickDelete = () => {
    handleDelete(cartItemDetails);
  };
  return (
    <div className="cart-item-container">
      <img src={image} alt={title} className="book-image" />
      <div className="product-info-container">
        <h1 className="book-title">{title}</h1>
        <p className="book-subtitle">{subtitle}</p>
        <p className="book-price">{price}</p>
      </div>
      <div className="product-actions-container">
        <button className="delete-button" onClick={onClickDelete}>
          <FaTrash className="delete-icon" />
        </button>
      </div>
      <div className="amount-container">
        <h1 className="book-price">{price}</h1>
      </div>
    </div>
  );
};

export default CartItem;
