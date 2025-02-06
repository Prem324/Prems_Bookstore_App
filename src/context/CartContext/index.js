import React from "react";

const CartContext = React.createContext({
  cartList: [],
  addToCart: () => {},
  deleteFromCart: () => {},
  resetCart: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
});

export default CartContext;
