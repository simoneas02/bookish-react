import { Typography } from '@material-ui/core'
import axios from 'axios'
import { useEffect, useState } from 'react'
import BookList from './BookList'

const App = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get('http://localhost:8080/books')
      setBooks(response.data)
    }

    fetchBooks()
  }, [])

  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>

      <BookList books={books} />
    </div>
  )
}

export default App
