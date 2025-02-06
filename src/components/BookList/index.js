import { Component } from "react";
import Header from "../Header";
import SearchInput from "../SearchInput";
import PriceRange from "../PriceRange";
import BookItem from "../BookItem";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";

import "./index.css";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_Progress",
  success: "SUCCESS",
  failure: "FAILURE",
};

let priceRangeExtreme = [0, 100];
class BookList extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    booksData: [],
    priceRangeValue: [0, 0],
  };

  componentDidMount = () => {
    this.getBooksList("");
  };

  getBooksList = async (searchQuery) => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });
    let booksListApiUrl = "";
    if (searchQuery === "") {
      booksListApiUrl = "https://api.itbook.store/1.0/new";
    } else {
      booksListApiUrl = `https://api.itbook.store/1.0/search/${searchQuery}`;
    }

    const booksListApiResponse = await fetch(booksListApiUrl);

    if (booksListApiResponse.ok === true) {
      const jsonResponse = await booksListApiResponse.json();
      priceRangeExtreme = this.getPriceRange(jsonResponse.books);
      const updatedData = jsonResponse.books.map((eachBook) => ({
        id: eachBook.isbn13,
        image: eachBook.image,
        title: eachBook.title,
        subtitle: eachBook.subtitle,
        price: eachBook.price,
      }));
      this.setState({
        booksData: updatedData,
        apiStatus: apiStatusConstants.success,
        priceRangeValue: priceRangeExtreme,
      });
    } else if (booksListApiResponse.status === 404) {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  getPriceRange = (booksData) => {
    let [minPrice, maxPrice] = [0, 0];
    booksData.map((eachBook) => {
      const price = parseFloat(eachBook.price.slice(1));
      if (price < minPrice) {
        minPrice = price;
      } else if (price > maxPrice) {
        maxPrice = price;
      }
      return null;
    });
    priceRangeExtreme = [Math.round(minPrice), Math.round(maxPrice)];
    return priceRangeExtreme;
  };

  filterBooksByPriceRange = () => {
    const { booksData, priceRangeValue } = this.state;
    const filteredBooks = booksData.filter((eachBook) => {
      const price = parseFloat(eachBook.price.slice(1));
      const isPriceInRange =
        price >= priceRangeValue[0] && price <= priceRangeValue[1];
      return isPriceInRange;
    });
    return filteredBooks;
  };

  onChangeSliderPosition = (sliderPositions) => {
    this.setState({ priceRangeValue: sliderPositions });
  };

  renderLoadingView() {
    return <Loader />;
  }

  renderSuccessView() {
    const { priceRangeValue } = this.state;
    return (
      <div className="books-container">
        <SearchInput searchBooks={this.getBooksList} />
        <p className="books-heading">Books</p>
        <PriceRange
          sliderExtremes={priceRangeExtreme}
          sliderPositions={priceRangeValue}
          onChangeSliderPosition={this.onChangeSliderPosition}
        />
        <ul className="books-list-container">
          {this.filterBooksByPriceRange().map((eachBookItem) => (
            <BookItem key={eachBookItem.id} bookItemDetails={eachBookItem} />
          ))}
        </ul>
      </div>
    );
  }

  renderFailureView() {
    return <ErrorMessage />;
  }

  renderResults = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      case apiStatusConstants.success:
        return this.renderSuccessView();
      case apiStatusConstants.failure:
        return this.renderFailureView();
      default:
        return null;
    }
  };

  render() {
    return (
      <>
        <Header />
        <div>{this.renderResults()}</div>
      </>
    );
  }
}

export default BookList;
