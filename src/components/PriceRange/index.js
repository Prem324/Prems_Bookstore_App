import { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import "./index.css";

class PriceRange extends Component {
  render() {
    return (
      <div className="price-range-container">
        <p className="price-range-heading">Filter by Price</p>
        <div className="slider-container">
          <Slider range />
        </div>
      </div>
    );
  }
}

export default PriceRange;
