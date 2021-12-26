import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import BookDetail from './BookDetail'

const renderWithRouter = component => ({
  ...render(<MemoryRouter>{component}</MemoryRouter>),
})
describe('BookDetail', () => {
  it('should renders title', () => {
    const props = {
      book: {
        name: 'Refactoring',
      },
    }

    renderWithRouter(<BookDetail {...props} />)
    const title = screen.getByRole('heading', { name: 'Refactoring' })

    expect(title).toBeInTheDocument()
  })

  it('should renders description', () => {
    const props = {
      book: {
        name: 'Refactoring',
        description:
          "Martin Fowler's Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software.",
      },
    }

    renderWithRouter(<BookDetail {...props} />)
    const description = screen.getByText(
      "Martin Fowler's Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software."
    )

    expect(description).toBeInTheDocument()
  })
})
