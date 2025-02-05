import { Link } from "react-router-dom";
import "./index.css";

const BookItem = (props) => {
  const { bookItemDetails } = props;
  const { id, title, subtitle, image, price } = bookItemDetails;
  return (
    <Link className="link-item" to={`/book/${id}`}>
      <li className="book-item">
        <img className="book-image" src={image} alt="book" />
        <p className="book-title">{title}</p>
        <p className="book-subtitle">{subtitle}</p>
        <p className="book-price">{price}</p>
      </li>
    </Link>
  );
};

export default BookItem;
