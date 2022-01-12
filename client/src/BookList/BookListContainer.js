import BookList from './BookList'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../redux/actions/actions'

import bookListSelector from '../redux/selectors/selector'
import SearchBox from './SearchBox/SearchBox'

const BookListContainer = () => {
  const [term] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchBooks())
  }, [term, dispatch])

  const onSearch = event => {
    dispatch(actions.setSearchTerm(event.target.value))
    dispatch(actions.fetchBooks())
  }

  const { books, loading, error } = useSelector(bookListSelector)

  return (
    <>
      <SearchBox term={term} onSearch={onSearch} />
      <BookList books={books} loading={loading} error={error} />
    </>
  )
}

export default BookListContainer
