import axios from 'axios'

import * as types from '../types'

export const fetchBooks = () => async (dispatch, getState) => {
  dispatch({ type: types.FETCH_BOOKS_PENDING })

  const state = getState()
  const url = `http://localhost:8080/books?q=${state.term || ''}`

  const result = await axios
    .get(url)
    .then(res => {
      dispatch({ type: types.FETCH_BOOKS_SUCCESS, books: res.data })
    })
    .catch(err => {
      dispatch({ type: types.FETCH_BOOKS_FAILED, err: err.message })
    })

  return result
}

export const setSearchTerm = term => ({
  type: types.SET_SEARCH_TERM,
  term,
})
