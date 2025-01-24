import { Component } from "react";
import { FaSearch } from "react-icons/fa";

import "./index.css";

class SearchInput extends Component {
  render() {
    return (
      <div className="search-bar-container">
        <input placeholder="Search here" className="search-input" />
        <FaSearch className="search-icon" />
      </div>
    );
  }
}

export default SearchInput;
