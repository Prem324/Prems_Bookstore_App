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
            <p className="header-logo">C</p>
            <p className="header-name">CROSSWORD</p>
          </div>
          <ul className="header-right-container">
            <li className="nav-item">
              <FaBook className="nav-icon" />
              <p className="nav-item">Book List</p>
            </li>
            <li className="nav-item">
              <FaShoppingBag className="nav-icon" />
              <p className="nav-item">Cart</p>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
