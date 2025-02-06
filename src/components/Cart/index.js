import { Link } from "react-router-dom";
import Header from "../Header";
import CartContext from "../../context/CartContext";
import CartItem from "../CartItem";
import "./index.css";

const Cart = () => (
  <CartContext.Consumer>
    {(value) => {
      const { cartList } = value;
      const isCartEmpty = cartList.length === 0;
      let total = 0;
      if (!isCartEmpty) {
        cartList.map((eachCartItem) => {
          return (total += parseFloat(eachCartItem.price.slice(1)));
        });
      }
      console.log(total);

      return (
        <>
          <Header />
          <div>
            <div>
              <h1>{isCartEmpty ? "Your cart is empty!" : "Your Cart"}</h1>
              <div>
                {cartList.map((cartItem) => (
                  <CartItem key={cartItem.isbn13} cartItemDetails={cartItem} />
                ))}
                {isCartEmpty ? (
                  <Link to="/book">
                    <button>Continue Shopping</button>
                  </Link>
                ) : (
                  <button>Remove all</button>
                )}
              </div>
            </div>
          </div>
        </>
      );
    }}
  </CartContext.Consumer>
);

export default Cart;
