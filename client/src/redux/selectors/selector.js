import { createSelector } from 'reselect'

const bookListSelector = createSelector(
  [
    state => state.books,
    state => state.loading,
    state => state.detail,
    state => state.errors['FETCH_BOOKS'],
  ],
  (books, loading, detail, error) => ({ books, loading, detail, error })
)

export default bookListSelector
