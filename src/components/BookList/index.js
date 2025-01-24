import { Component } from "react";
import Header from "../Header";
import BookItem from "../BookItem";

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
      <div>
        <Header />
        <h1>BooksList</h1>
        <ul>
          {booksList.map((eachBookItem) => (
            <BookItem
              key={eachBookItem.isbn13}
              bookItemDetails={eachBookItem}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default BookList;
