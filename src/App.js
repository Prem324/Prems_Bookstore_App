import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/book" Component={BookList} />
            <Route exact path="/book/:id" Component={BookDetails} />
            <Route exact path="/cart" Component={Cart} />
            <Route exact path="/checkout" Component={Checkout} />
            <Route exact path="*" Component={NotFound} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
