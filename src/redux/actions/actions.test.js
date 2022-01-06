import axios from 'axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as types from '../types'
import { setSearchTerm, fetchBooks, fetchABook } from './actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('BookListContainer related actions', () => {
  it('Sets the search keyword', () => {
    const term = ''
    const expected = {
      type: types.SET_SEARCH_TERM,
      term,
    }

    const action = setSearchTerm(term)

    expect(action).toEqual(expected)
  })

  it('Fetches data successfully', () => {
    const books = [
      { id: 1, name: 'Refactoring' },
      { id: 2, name: 'Domain-driven design' },
    ]

    axios.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: books }))

    const expectedActions = [
      { type: types.FETCH_BOOKS_PENDING },
      { type: types.FETCH_BOOKS_SUCCESS, books },
    ]

    const store = mockStore({ books: [] })

    return store.dispatch(fetchBooks('')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('Fetch data with error', () => {
    axios.get = jest
      .fn()
      .mockImplementation(() =>
        Promise.reject({ message: 'Something went wrong' })
      )

    const expectedActions = [
      { type: types.FETCH_BOOKS_PENDING },
      { type: types.FETCH_BOOKS_FAILED, error: 'Something went wrong' },
    ]

    const store = mockStore({ books: [] })

    return store.dispatch(fetchBooks('')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('Search data with term', () => {
    const books = [
      { id: 1, name: 'Refactoring' },
      { id: 2, name: 'Domain-driven design' },
    ]

    axios.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: books }))

    const store = mockStore({ books: [] })

    return store.dispatch(fetchBooks()).then(() => {
      expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/books?q=')
    })
  })

  it('Fetch book by id', () => {
    const book = { id: 1, name: 'Refactoring' }

    axios.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: book }))

    const store = mockStore({ list: { books: [], term: '' } })
    return store.dispatch(fetchABook(1)).then(() => {
      expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/books/1')
    })
  })
})
