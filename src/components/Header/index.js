import { Component } from "react";
import { FaBook } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import "./index.css";

class Header extends Component {
  render() {
    return (
      <nav className="navbar-container">
        <div className="header-container">
          <div className="header-left-container">
            <p className="header-logo">B</p>
            <p className="header-name">Bookstore</p>
          </div>
          <ul className="header-right-container">
            <li className="icon-container">
              <FaBook className="icon" />
              <p className="icon-name">Book List</p>
            </li>
            <li className="icon-container">
              <FaShoppingBag className="icon" />
              <p className="icon-name">Cart</p>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
