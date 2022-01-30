import { createSelector } from 'reselect'

const bookListSelector = createSelector(
  [
    state => state.book,
    state => state.books,
    state => state.loading,
    state => state.error,
  ],
  (book, books, loading, error) => ({ book, books, loading, error })
)

export default bookListSelector
