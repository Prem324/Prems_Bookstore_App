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

  render() {
    const { cartList } = this.state;
    return (
      <CartContext.Provider
        value={{
          cartList,
          addToCart: this.addToCart,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/book" component={BookList} />
            <Route exact path="/book/:id" component={BookDetails} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </CartContext.Provider>
    );
  }
}

export default App;
