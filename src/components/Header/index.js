import { Component } from "react";
import { FaBook,FaHome } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import books from "../../assets/books.png";

import "./index.css";

class Header extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {(value) => {
          const { cartList } = value;
          const cartCount = cartList.length;
          return (
            <nav className="navbar-container">
              <div className="header-container">
                <Link to="/" className="nav-item">
                  <div className="header-left-container">
                    <img src={books} className="header-logo" alt="logo" />
                    <p className="header-name">Bookstore</p>
                  </div>
                </Link>
                <ul className="header-right-container">
                  <Link to="/" className="nav-item">
                  <li className="icon-container">
                    <FaHome className="icon"/>
                    <p className="icon-name">Home</p>
                  </li>
                  </Link>
                  <hr className="separation-line" />
                  <Link to="/book" className="nav-item">
                    <li className="icon-container">
                      <FaBook className="icon" />
                      <p className="icon-name">Book List</p>
                    </li>
                  </Link>
                  <hr className="separation-line" />
                  <Link to="/cart" className="nav-item">
                    <li className="icon-container">
                      <FaShoppingBag className="icon" />
                      {cartCount !== 0 && (
                        <p className="cart-count">{cartCount}</p>
                      )}
                      <p className="icon-name">Cart</p>
                    </li>
                  </Link>
                </ul>
              </div>
            </nav>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default Header;
