import axios from 'axios'
import { useEffect, useState } from 'react'
import BookList from '../BookList'
import { useRemoteService } from '../hooks/useRemoteService'

const BookListContainer = () => {
  const URL = 'http://localhost:8080/books'
  const { data, loading, error } = useRemoteService([], URL)

  return <BookList books={data} loading={loading} error={error} />
}

export default BookListContainer
