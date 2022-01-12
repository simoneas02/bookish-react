import reducer from './reducer'
import * as types from '../types'

describe('Reducer', () => {
  it('Show loading when request is sent', () => {
    const initState = { loading: false }
    const action = { type: types.PENDING }

    const state = reducer(initState, action)

    expect(state.loading).toBeTruthy()
  })

  it('Add books to state when request successful', () => {
    const books = [
      { id: 1, name: 'Refactoring' },
      { id: 2, name: 'Domain-driven design' },
    ]
    const action = {
      type: types.FETCH_BOOKS_SUCCESS,
      books,
    }
    const state = reducer([], action)
    expect(state.books).toBe(books)
  })

  it('Add reviews to state when request successful', () => {
    const review = {
      name: 'Juntao Qiu',
      content: 'Excellent work!',
    }

    const action = {
      type: types.SAVE_REVIEW_SUCCESS,
      review,
    }

    const state = reducer([], action)
    expect(state.review).toBe(review)
  })
})
