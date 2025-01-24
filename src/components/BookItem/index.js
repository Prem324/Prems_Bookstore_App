import "./index.css";

const BookItem = (props) => {
  const { bookItemDetails } = props;
  const { title, subtitle, image, price } = bookItemDetails;
  return (
    <li className="book-item">
      <img className="book-image" src={image} alt="book" />
      <p className="book-title">{title}</p>
      <p className="book-subtitle">{subtitle}</p>
      <p className="book-price">{price}</p>
    </li>
  );
};

export default BookItem;
