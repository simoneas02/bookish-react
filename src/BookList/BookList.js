import { Link } from 'react-router-dom'

const BookList = ({ books, loading, error }) => {
  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>An unexpected error ocurred</p>
  }

  return (
    <ul data-test="book-list">
      {books.map(({ name, id }) => (
        <li key={id} className="book-item">
          <h2 className="title">{name}</h2>
          <Link to={`/books/${id}`}>View Details</Link>
        </li>
      ))}
    </ul>
  )
}

export default BookList
