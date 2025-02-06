import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";
import CartContext from "./context/CartContext";

class App extends Component {
  state = {
    cartList: [],
  };

  addToCart = (bookItem) => {
    this.setState((prevState) => ({
      cartList: [...prevState.cartList, bookItem],
    }));
  };

  deleteFromCart = (cartItem) => {
    this.setState((prevState) => ({
      cartList: prevState.cartList.filter(
        (eachCartItem) => eachCartItem.isbn13 !== cartItem.isbn13
      ),
    }));
  };
  resetCart = () => {
    this.setState({ cartList: [] });
  };

  incrementCartItemQuantity = (isbn13) => {
    this.setState((prevState) => ({
      cartList: prevState.cartList.map((eachCartItem) => {
        if (isbn13 === eachCartItem.isbn13) {
          const updatedQuantity = eachCartItem.quantity + 1;
          return { ...eachCartItem, quantity: updatedQuantity };
        }
        return eachCartItem;
      }),
    }));
  };

  decrementCartItemQuantity = (isbn13) => {
    const { cartList } = this.state;
    const productObject = cartList.find(
      (eachCartItem) => eachCartItem.isbn13 === isbn13
    );
    if (productObject.quantity > 1) {
      this.setState((prevState) => ({
        cartList: prevState.cartList.map((eachCartItem) => {
          if (isbn13 === eachCartItem.isbn13) {
            const updatedQuantity = eachCartItem.quantity - 1;
            return { ...eachCartItem, quantity: updatedQuantity };
          }
          return eachCartItem;
        }),
      }));
    } else {
      this.deleteFromCart(isbn13);
    }
  };

  render() {
    const { cartList } = this.state;
    return (
      <CartContext.Provider
        value={{
          cartList,
          addToCart: this.addToCart,
          deleteFromCart: this.deleteFromCart,
          resetCart: this.resetCart,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/book" component={BookList} />
            <Route exact path="/book/:id" component={BookDetails} />
            <Route exact path="/cart" component={Cart} />
            {cartList.length !== 0 && (
              <Route exact path="/checkout" component={Checkout} />
            )}
            <Route exact path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </CartContext.Provider>
    );
  }
}

export default App;
