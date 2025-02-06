import React from "react";

const CartContext = React.createContext({
  cartList: [],
  addToCart: () => {},
});

export default CartContext;
