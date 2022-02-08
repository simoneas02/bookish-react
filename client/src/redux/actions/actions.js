import axios from 'axios'

import * as types from '../types'

export const fetchBooks = term => async dispatch => {
  dispatch({ type: types.FETCH_BOOKS_PENDING })

  const url = `http://localhost:8080/books?q=${term || ''}`

  const result = await axios
    .get(url)
    .then(res => {
      dispatch({ type: types.FETCH_BOOKS_SUCCESS, payload: res.data })
    })
    .catch(error => {
      dispatch({
        type: types.FETCH_BOOKS_FAILED,
        payload: { message: error.message },
      })
    })

  return result
}

export const fetchABook = id => async dispatch => {
  dispatch({ type: types.FETCH_BOOK_PENDING })

  const url = `http://localhost:8080/books/${id}`

  const result = await axios
    .get(url)
    .then(res => {
      dispatch({ type: types.FETCH_BOOK_SUCCESS, payload: res.data })
    })
    .catch(error => {
      dispatch({
        type: types.FETCH_BOOK_FAILED,
        payload: { message: error.message },
      })
    })

  return result
}

export const saveReview = (id, review) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  }

  return async dispatch => {
    dispatch({ type: types.SAVE_BOOK_REVIEW_PENDING })
    const url = `http://localhost:8080/books/${id}/reviews`
    try {
      const result = await axios.post(url, review, config)
      dispatch({ type: types.SAVE_BOOK_REVIEW_SUCCESS, payload: result.data })
      dispatch(fetchABook(id))
    } catch (error) {
      dispatch({
        type: types.SAVE_BOOK_REVIEW_FAILED,
        payload: { message: error.message },
      })
    }
  }
}

export const saveBook = book => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  }

  return async dispatch => {
    dispatch({ type: types.SAVE_BOOK_PENDING })
    const url = `http://localhost:8080/books`
    try {
      const res = await axios.post(url, book, config)
      dispatch({ type: types.SAVE_BOOK_SUCCESS, payload: res.data })
    } catch (error) {
      dispatch({
        type: types.SAVE_BOOK_FAILED,
        payload: { message: error.message },
      })
    }
  }
}

export const updateReview = (id, review) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  }

  return async dispatch => {
    dispatch({ type: types.SAVE_BOOK_REVIEW_PENDING })
    const url = `http://localhost:8080/reviews/${id}`
    try {
      const result = await axios.put(url, review, config)
      dispatch({ type: types.SAVE_BOOK_REVIEW_SUCCESS, payload: result.data })
      dispatch(fetchABook(review.bookId))
    } catch (error) {
      dispatch({
        type: types.SAVE_BOOK_REVIEW_FAILED,
        payload: { message: error.message },
      })
    }
  }
}
