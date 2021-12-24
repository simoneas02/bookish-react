const BookList = ({ books, loading, error }) => {
  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>An unexpected error ocurred</p>
  }

  return (
    <ul data-test="book-list">
      {books.map(({ name }) => (
        <li key={name} className="book-item">
          <h2 className="title">{name}</h2>
        </li>
      ))}
    </ul>
  )
}

export default BookList
