const BookList = ({ books }) => {
  return (
    <ul data-test="book-list">
      {books.map(({ name }) => (
        <li className="book-item">
          <h2 className="title">{name}</h2>
        </li>
      ))}
    </ul>
  )
}

export default BookList
