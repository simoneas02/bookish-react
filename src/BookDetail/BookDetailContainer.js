import { useParams } from 'react-router-dom'

import { useRemoteService } from '../hooks/useRemoteService'

import BookDetail from './BookDetail'

const BookDetailContainer = () => {
  const params = useParams()
  const URL = `http://localhost:8080/books/${params.id}`

  const { data } = useRemoteService(URL, {})

  return <BookDetail book={data} />
}

export default BookDetailContainer
