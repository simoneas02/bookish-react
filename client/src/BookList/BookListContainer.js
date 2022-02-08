import BookList from './BookList'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import bookListSelector from '../redux/selectors/selector'
import Grid from '@material-ui/core/Grid/Grid'

import * as actions from '../redux/actions/actions'
import SearchBox from './SearchBox/SearchBox'

const BookListContainer = () => {
  const [term, setTerm] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchBooks(term))
  }, [term, dispatch])

  const { books, loading, error } = useSelector(bookListSelector)

  const onSearch = event => setTerm(event.target.value)

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SearchBox term={term} onSearch={onSearch} />
        </Grid>
        <Grid item xs={12}>
          <BookList books={books} loading={loading} error={error} />
        </Grid>
      </Grid>
    </>
  )
}

export default BookListContainer
