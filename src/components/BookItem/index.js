const BookItem = (props) => {
  const { bookItemDetails } = props;
  const { title, subtitle, image, price } = bookItemDetails;
  return (
    <li>
      <img src={image} alt="book" />
      <p>{title}</p>
      <p>{subtitle}</p>
      <p>{price}</p>
    </li>
  );
};

export default BookItem;
