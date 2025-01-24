import { Component } from "react";
import Header from "../Header";
import BookItem from "../BookItem";
import { FaSearch } from "react-icons/fa";

import "./index.css";

class BookList extends Component {
  state = {
    booksList: [],
  };

  componentDidMount = () => {
    this.getBooksList();
  };

  getBooksList = async () => {
    const booksListApiUrl = "https://api.itbook.store/1.0/new";
    const options = {
      method: "GET",
    };

    const booksListApiResponse = await fetch(booksListApiUrl, options);
    const data = await booksListApiResponse.json();
    console.log(data);

    if (booksListApiResponse.ok === true) {
      const updatedData = data.books.map((eachBook) => ({
        id: eachBook.isbn13,
        image: eachBook.image,
        title: eachBook.title,
        subtitle: eachBook.subtitle,
        price: eachBook.price,
      }));
      this.setState({ booksList: updatedData });
    }
  };

  render() {
    const { booksList } = this.state;
    return (
      <>
        <Header />
        <div className="books-container">
          <div className="search-bar-container">
            <input placeholder="Search here" className="search-input" />
            <FaSearch className="search-icon" />
          </div>
          <p className="books-heading">Books</p>

          <ul className="books-list-container">
            {booksList.map((eachBookItem) => (
              <BookItem
                key={eachBookItem.isbn13}
                bookItemDetails={eachBookItem}
              />
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default BookList;
