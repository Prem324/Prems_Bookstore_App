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
      console.log(data);
    }
  };

  render() {
    const { bookDetailsData } = this.state;
    console.log(bookDetailsData);
    return (
      <>
        <Header />
        <div className="book-details-container">
          <div className="book-details">
            <img src={bookDetailsData.image} alt="book" />
            <div className="book-details-content">
              <p className="title">{bookDetailsData.title}</p>
              <p className="subtitle">{bookDetailsData.subtitle}</p>
              <p className="author">{bookDetailsData.authors}</p>
              <p className="year">
                Publication Year: <span>{bookDetailsData.year}</span>
              </p>
              <p className="price">{bookDetailsData.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
          <hr className="hr-line" />
          <div className="product-description-container">
            <p className="product-desc-title">Product Description</p>
            <p className="description">{bookDetailsData.desc}</p>
          </div>
          <hr className="hr-line" />
          <div className="product-details-container">
            <p className="product-det-title">Product Details</p>
            <table>
              <tbody>
                <tr>
                  <th>Title</th>
                  <td>{bookDetailsData.title}</td>
                </tr>
                <tr>
                  <th>Subtitle</th>
                  <td>{bookDetailsData.subtitle}</td>
                </tr>
                <tr>
                  <th>Authors</th>
                  <td>{bookDetailsData.authors}</td>
                </tr>
                <tr>
                  <th>Publisher</th>
                  <td>{bookDetailsData.publisher}</td>
                </tr>
                <tr>
                  <th>ISBN10</th>
                  <td>{bookDetailsData.isbn10}</td>
                </tr>
                <tr>
                  <th>ISBN13</th>
                  <td>{bookDetailsData.isbn13}</td>
                </tr>
                <tr>
                  <th>Pages</th>
                  <td>{bookDetailsData.pages}</td>
                </tr>
                <tr>
                  <th>Year</th>
                  <td>{bookDetailsData.year}</td>
                </tr>
                <tr>
                  <th>Rating</th>
                  <td>{bookDetailsData.rating}</td>
                </tr>
                <tr>
                  <th>Price</th>
                  <td>{bookDetailsData.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="hr-line" />
        </div>
      </>
    );
  }
}

export default BookDetails;
