import { Component } from "react";
import Header from "../Header";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="home-responsive-container">
        <Header />
        <div className="home-container">
          <h1 className="home-heading">Book Store</h1>
          <p className="home-description">
            Bookstore was founded in 1992 with a simple yet passionate
            mission.To positively impact the world through the power of reading
            and learning. Right from our first store in Mumbai to the 92 stores
            across 32 cities today, we have continued to serve and nurture our
            community of readers for over 3 decades. <br />
            <br />
            As India's leading bookstore retailer, we champion books and nourish
            a love for the written word through a rich, handpicked collection
            covering numerous topics. Our stores are thoughtfully designed
            allowing you explore books whenever and wherever you are.
          </p>
          <button className="explore-button">Explore Books</button>
        </div>
      </div>
    );
  }
}

export default Home;
