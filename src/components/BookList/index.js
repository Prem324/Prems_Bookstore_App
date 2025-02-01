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
class BookList extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    booksList: [],
  };

  componentDidMount = () => {
    this.getBooksList();
  };

  getBooksList = async (searchQuery) => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });
    let booksListApiUrl = "";
    if (searchQuery === "") {
      booksListApiUrl = "https://api.itbook.store/1.0/new";
    } else {
      booksListApiUrl = `https://api.itbook.store/1.0/search/${searchQuery}`;
    }
    const options = {
      method: "GET",
    };

    const booksListApiResponse = await fetch(booksListApiUrl, options);
    const data = await booksListApiResponse.json();

    if (booksListApiResponse.ok === true) {
      const updatedData = data.books.map((eachBook) => ({
        id: eachBook.isbn13,
        image: eachBook.image,
        title: eachBook.title,
        subtitle: eachBook.subtitle,
        price: eachBook.price,
      }));
      this.setState({
        booksList: updatedData,
        apiStatus: apiStatusConstants.success,
      });
    } else if (booksListApiResponse.status === 404) {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  renderLoadingView() {
    return <Loader />;
  }

  renderSuccessView() {
    const { booksList } = this.state;
    return (
      <div>
        <p className="books-heading">Books</p>
        <PriceRange />
        <ul className="books-list-container">
          {booksList.map((eachBookItem) => (
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
        <SearchInput searchBooks={this.getBooksList} />
        <div>{this.renderResults()}</div>
      </>
    );
  }
}

export default BookList;
