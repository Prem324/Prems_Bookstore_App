import { Component } from "react";
import { BsPlusSquare, BsDashSquare } from "react-icons/bs";

import Header from "../Header";
import CartContext from "../../context/CartContext";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import "./index.css";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

class BookDetails extends Component {
  state = {
    bookDetailsData: {},
    apiStatus: apiStatusConstants.initial,
    quantity: 1,
  };
  componentDidMount() {
    this.getBookDetails();
  }

  getBookDetails = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const bookUrl = `https://api.itbook.store/1.0/books/${id}`;
    const response = await fetch(bookUrl);

    if (response.ok) {
      const data = await response.json();
      this.setState({ bookDetailsData: data });
      this.setState({ apiStatus: apiStatusConstants.success });
    } else if (response.status === 400) {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  onDecrementQuantity = () => {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState((prevState) => ({ quantity: prevState.quantity - 1 }));
    }
  };

  onIncrementQuantity = () => {
    this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
  };

  renderSuccessView() {
    const { bookDetailsData } = this.state;
    return (
      <CartContext.Consumer>
        {(value) => {
          const { cartList, addToCart } = value;
          let isAddedToCart = cartList.find(
            (eachCartItem) =>
              eachCartItem.isbn13 === this.state.bookDetailsData.isbn13
          );
          const onClickAddToCart = () => {
            addToCart({ ...this.state.bookDetailsData, quantity });
          };
          const { quantity } = this.state;
          return (
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
                  <div className="quantity-container">
                    <button
                      type="button"
                      className="quantity-controller-button"
                      onClick={this.onDecrementQuantity}
                    >
                      <BsDashSquare className="quantity-controller-icon" />
                    </button>
                    <p className="quantity">{quantity}</p>
                    <button
                      type="button"
                      className="quantity-controller-button"
                      onClick={this.onIncrementQuantity}
                    >
                      <BsPlusSquare className="quantity-controller-icon" />
                    </button>
                  </div>
                  <button
                    className="add-to-cart"
                    onClick={onClickAddToCart}
                    disabled={isAddedToCart}
                  >
                    {isAddedToCart ? "Added to Cart" : "Add to Cart"}
                  </button>
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
          );
        }}
      </CartContext.Consumer>
    );
  }

  renderBookDetails() {
    const { apiStatus } = this.state;

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <Loader />;
      case apiStatusConstants.success:
        return this.renderSuccessView();
      default:
        return <ErrorMessage />;
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.renderBookDetails()}
      </>
    );
  }
}

export default BookDetails;
