import { render, screen } from '@testing-library/react'
import BookList from '.'

describe('Booklist', () => {
  it('should return a loading if is fetching data', () => {
    const props = {
      loading: true,
    }

    render(<BookList {...props} />)

    const loading = screen.queryByText('Loading...')

    expect(loading).toBeInTheDocument()
  })

  it('should return an error message if found any error', () => {
    const props = {
      error: true,
    }

    render(<BookList {...props} />)

    const errorMessage = screen.queryByText('An unexpected error ocurred')

    expect(errorMessage).toBeInTheDocument()
  })

  it('should return a book list', () => {
    const props = {
      books: [
        { name: 'One book', id: 'some-id' },
        { name: 'Another book', id: 'another-id' },
      ],
    }

    render(<BookList {...props} />)

    const bookTitles = screen.getAllByRole('heading')

    expect(bookTitles[0]).toHaveTextContent('One book')
    expect(bookTitles[1]).toHaveTextContent('Another book')
  })
})
