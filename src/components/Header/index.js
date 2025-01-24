import { Component } from "react";
import { FaBook } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router";
import "./index.css";

class Header extends Component {
  render() {
    return (
      <nav className="navbar-container">
        <div className="header-container">
          <Link to="/" className="nav-item">
            <div className="header-left-container">
              <p className="header-logo">B</p>
              <p className="header-name">Bookstore</p>
            </div>
          </Link>
          <ul className="header-right-container">
            <Link to="/book" className="nav-item">
              <li className="icon-container">
                <FaBook className="icon" />
                <p className="icon-name">Book List</p>
              </li>
            </Link>
            <Link to="/cart" className="nav-item">
              <li className="icon-container">
                <FaShoppingBag className="icon" />
                <p className="icon-name">Cart</p>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
