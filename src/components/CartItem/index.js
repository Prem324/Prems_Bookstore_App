import React from "react";
import { FaTrash } from "react-icons/fa";

const CartItem = (props) => {
  const { cartItemDetails } = props;
  const { title, subtitle, image, price } = cartItemDetails;
  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <p>{price}</p>
      </div>
      <div>
        <button>
          <FaTrash />
        </button>
      </div>
      <div>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default CartItem;
