import * as types from '../types'

const reducer = (state = [], action) => {
  switch (action.type) {
    case types.PENDING:
      return { ...state, loading: true }

    case types.FAILED:
      return { ...state, error: true, loading: false }

    case types.FETCH_A_BOOK_SUCCESS:
      return { ...state, loading: false, book: action.book }

    case types.FETCH_BOOKS_SUCCESS:
      return { ...state, books: action.books, loading: false, error: false }

    case types.SET_SEARCH_TERM:
      return { ...state, term: action.term }

    default:
      return state
  }
}
export default reducer
