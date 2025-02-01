import { Component } from "react";
import Header from "../Header";
import "./index.css";

class BookDetails extends Component {
  state = { bookDetailsData: {} };
  componentDidMount() {
    this.getBookDetails();
  }

  getBookDetails = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const bookUrl = `https://api.itbook.store/1.0/books/${id}`;
    const response = await fetch(bookUrl);

    if (response.ok) {
      const data = await response.json();
      this.setState({ bookDetailsData: data });
    }
  };

  render() {
    const { bookDetailsData } = this.state;
    console.log(bookDetailsData);
    return (
      <div>
        <Header />
        <h1>BookDetails</h1>
        <p>{bookDetailsData.title}</p>
      </div>
    );
  }
}

export default BookDetails;
