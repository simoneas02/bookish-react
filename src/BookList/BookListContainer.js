import BookList from './BookList'
import { useRemoteService } from '../hooks/useRemoteService'
import { useEffect, useState } from 'react'
import SearchBox from './SearchBox/SearchBox'

const BookListContainer = () => {
  const URL = 'http://localhost:8080/books'
  const { data, loading, error, setUrl } = useRemoteService(URL, [])

  const [term, setTerm] = useState('')

  useEffect(() => {
    setUrl(`http://localhost:8080/books?q=${term}`)
  }, [term])

  const onSearch = event => setTerm(event.target.value)

  return (
    <>
      <SearchBox term={term} onSearch={onSearch} />
      <BookList books={data} loading={loading} error={error} />
    </>
  )
}

export default BookListContainer
