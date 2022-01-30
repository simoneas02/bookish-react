import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as actions from '../redux/actions/actions'
import bookListSelector from '../redux/selectors/selector'

import BookDetail from './BookDetail'

const BookDetailContainer = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchABook(id))
  }, [dispatch, id])

  const { book } = useSelector(bookListSelector)

  return <BookDetail book={book} />
}

export default BookDetailContainer
